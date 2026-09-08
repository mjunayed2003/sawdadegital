const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// CRC32 table
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c >>> 0;
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcBuf = Buffer.alloc(4);
  const typeAndData = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(typeAndData), 0);

  return Buffer.concat([lenBuf, typeAndData, crcBuf]);
}

function processLogo() {
  const inputPath = path.resolve(__dirname, '../public/sawdaDigitalLogo.png');
  const buffer = fs.readFileSync(inputPath);

  // Check PNG signature
  if (buffer.readUInt32BE(0) !== 0x89504E47 || buffer.readUInt32BE(4) !== 0x0D0A1A0A) {
    throw new Error('Not a valid PNG');
  }

  // Parse chunks
  let pos = 8;
  let ihdr = null;
  const idatParts = [];

  while (pos < buffer.length) {
    const length = buffer.readUInt32BE(pos);
    const type = buffer.slice(pos + 4, pos + 8).toString('ascii');
    const data = buffer.slice(pos + 8, pos + 8 + length);
    
    if (type === 'IHDR') {
      ihdr = {
        width: data.readUInt32BE(0),
        height: data.readUInt32BE(4),
        bitDepth: data[8],
        colorType: data[9],
        compression: data[10],
        filter: data[11],
        interlace: data[12]
      };
    } else if (type === 'IDAT') {
      idatParts.push(data);
    }
    pos += 8 + length + 4;
  }

  console.log('Original image info:', ihdr);

  if (ihdr.interlace !== 0) {
    console.error('Interlaced PNG not supported in simple decoder');
    return;
  }

  const compressedData = Buffer.concat(idatParts);
  const rawData = zlib.inflateSync(compressedData);

  const width = ihdr.width;
  const height = ihdr.height;
  const bytesPerPixel = ihdr.colorType === 6 ? 4 : (ihdr.colorType === 2 ? 3 : 1);
  const stride = 1 + width * bytesPerPixel;

  console.log('Inflated bytes:', rawData.length, 'Expected stride * height:', stride * height);

  // Reconstruct un-filtered scanlines
  // Filter types: 0=None, 1=Sub, 2=Up, 3=Average, 4=Paeth
  const pixels = Buffer.alloc(width * height * 4); // convert to RGBA

  function paethPredictor(a, b, c) {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
  }

  const prevScanline = new Uint8Array(width * bytesPerPixel);
  const currentScanline = new Uint8Array(width * bytesPerPixel);

  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    const filterType = rawData[y * stride];
    const offset = y * stride + 1;

    for (let x = 0; x < width * bytesPerPixel; x++) {
      const rawByte = rawData[offset + x];
      const left = x >= bytesPerPixel ? currentScanline[x - bytesPerPixel] : 0;
      const up = prevScanline[x];
      const upLeft = x >= bytesPerPixel ? prevScanline[x - bytesPerPixel] : 0;

      let val = 0;
      if (filterType === 0) val = rawByte;
      else if (filterType === 1) val = (rawByte + left) & 0xFF;
      else if (filterType === 2) val = (rawByte + up) & 0xFF;
      else if (filterType === 3) val = (rawByte + Math.floor((left + up) / 2)) & 0xFF;
      else if (filterType === 4) val = (rawByte + paethPredictor(left, up, upLeft)) & 0xFF;
      else val = rawByte;

      currentScanline[x] = val;
    }

    // Now populate RGBA
    for (let x = 0; x < width; x++) {
      const pIdx = (y * width + x) * 4;
      let r = 0, g = 0, b = 0, a = 255;

      if (ihdr.colorType === 6) {
        r = currentScanline[x * 4];
        g = currentScanline[x * 4 + 1];
        b = currentScanline[x * 4 + 2];
        a = currentScanline[x * 4 + 3];
      } else if (ihdr.colorType === 2) {
        r = currentScanline[x * 3];
        g = currentScanline[x * 3 + 1];
        b = currentScanline[x * 3 + 2];
        a = 255;
      }

      // Check if pixel is background (either transparent or near-white)
      const isWhite = r > 240 && g > 240 && b > 240;
      const isTransparent = a < 20;

      if (!isWhite && !isTransparent) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }

      pixels[pIdx] = r;
      pixels[pIdx + 1] = g;
      pixels[pIdx + 2] = b;
      // Make near-white background transparent
      pixels[pIdx + 3] = isWhite ? 0 : a;
    }

    prevScanline.set(currentScanline);
  }

  console.log(`Bounding box: X [${minX}, ${maxX}] Y [${minY}, ${maxY}]`);
  const padding = 40;
  minX = Math.max(0, minX - padding);
  maxX = Math.min(width - 1, maxX + padding);
  minY = Math.max(0, minY - padding);
  maxY = Math.min(height - 1, maxY + padding);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  console.log(`Cropped dimensions: ${cropW} x ${cropH}`);

  function createCroppedPng(targetPath, isWhiteVersion = false) {
    const croppedStride = 1 + cropW * 4;
    const croppedRaw = Buffer.alloc(cropH * croppedStride);

    for (let y = 0; y < cropH; y++) {
      const origY = minY + y;
      const rawOffset = y * croppedStride;
      croppedRaw[rawOffset] = 0; // Filter 0: None

      for (let x = 0; x < cropW; x++) {
        const origX = minX + x;
        const origPIdx = (origY * width + origX) * 4;
        const destOffset = rawOffset + 1 + x * 4;

        const r = pixels[origPIdx];
        const g = pixels[origPIdx + 1];
        const b = pixels[origPIdx + 2];
        const a = pixels[origPIdx + 3];

        if (isWhiteVersion) {
          // If not transparent, render as white or keep brand color for the SD icon
          // For white logo variant: keep SD logo icon or make text white
          // We make all visible pixels white with original alpha
          croppedRaw[destOffset] = 255;
          croppedRaw[destOffset + 1] = 255;
          croppedRaw[destOffset + 2] = 255;
          croppedRaw[destOffset + 3] = a;
        } else {
          croppedRaw[destOffset] = r;
          croppedRaw[destOffset + 1] = g;
          croppedRaw[destOffset + 2] = b;
          croppedRaw[destOffset + 3] = a;
        }
      }
    }

    // PNG signature
    const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    
    // IHDR
    const ihdrData = Buffer.alloc(13);
    ihdrData.writeUInt32BE(cropW, 0);
    ihdrData.writeUInt32BE(cropH, 4);
    ihdrData[8] = 8; // bit depth
    ihdrData[9] = 6; // color type 6: RGBA
    ihdrData[10] = 0; // compression
    ihdrData[11] = 0; // filter
    ihdrData[12] = 0; // interlace
    const ihdrChunk = makeChunk('IHDR', ihdrData);

    // IDAT
    const deflated = zlib.deflateSync(croppedRaw, { level: 9 });
    const idatChunk = makeChunk('IDAT', deflated);

    // IEND
    const iendChunk = makeChunk('IEND', Buffer.alloc(0));

    const finalPng = Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
    fs.writeFileSync(targetPath, finalPng);
    console.log(`Saved: ${targetPath} (${finalPng.length} bytes)`);
  }

  // Backup original first if not already backed up
  const backupPath = path.resolve(__dirname, '../public/sawdaDigitalLogo_original.png');
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
    console.log('Original backup created at:', backupPath);
  }

  // Write optimized cropped logo
  createCroppedPng(inputPath, false);

  // Write white version for dark mode / dark footer
  const whitePath = path.resolve(__dirname, '../public/sawdaDigitalLogo-white.png');
  createCroppedPng(whitePath, true);
  console.log('Logo processing complete!');
}

try {
  processLogo();
} catch (e) {
  console.error('Error processing logo:', e);
}
