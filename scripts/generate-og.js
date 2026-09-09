const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// CRC32 implementation
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

const W = 1200;
const H = 630;
const stride = 1 + W * 4;
const raw = Buffer.alloc(H * stride);

function setPixel(x, y, r, g, b, a = 255) {
  if (x < 0 || x >= W || y < 0 || y >= H) return;
  const offset = y * stride + 1 + x * 4;
  raw[offset] = r;
  raw[offset + 1] = g;
  raw[offset + 2] = b;
  raw[offset + 3] = a;
}

// Draw rich background with gradient and glow
for (let y = 0; y < H; y++) {
  raw[y * stride] = 0; // Filter: None
  for (let x = 0; x < W; x++) {
    // Base dark background: #0f1117 to #161b22
    const progress = y / H;
    let r = Math.round(15 + progress * 8);
    let g = Math.round(17 + progress * 8);
    let b = Math.round(23 + progress * 12);

    // Deep Burgundy Glow in top-right & bottom-left
    const dist1 = Math.hypot(x - 950, y - 180);
    if (dist1 < 500) {
      const glow = Math.pow(1 - dist1 / 500, 2);
      r = Math.min(255, Math.round(r + glow * 140)); // Burgundy tone #9D224D
      g = Math.min(255, Math.round(g + glow * 30));
      b = Math.min(255, Math.round(b + glow * 70));
    }

    const dist2 = Math.hypot(x - 200, y - 500);
    if (dist2 < 400) {
      const glow = Math.pow(1 - dist2 / 400, 2);
      r = Math.min(255, Math.round(r + glow * 80));
      g = Math.min(255, Math.round(g + glow * 20));
      b = Math.min(255, Math.round(b + glow * 60));
    }

    // Subtle grid dots
    if (x % 40 === 0 && y % 40 === 0) {
      r = Math.min(255, r + 20);
      g = Math.min(255, g + 20);
      b = Math.min(255, b + 30);
    }

    setPixel(x, y, r, g, b, 255);
  }
}

// Decorative border line on top
for (let x = 0; x < W; x++) {
  const p = x / W;
  const intensity = Math.sin(p * Math.PI);
  for (let y = 0; y < 4; y++) {
    setPixel(x, y, Math.round(157 * intensity), Math.round(34 * intensity), Math.round(77 * intensity), 255);
  }
}

// PNG export
const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
const ihdrData = Buffer.alloc(13);
ihdrData.writeUInt32BE(W, 0);
ihdrData.writeUInt32BE(H, 4);
ihdrData[8] = 8;
ihdrData[9] = 6;
ihdrData[10] = 0;
ihdrData[11] = 0;
ihdrData[12] = 0;

const ihdrChunk = makeChunk('IHDR', ihdrData);
const deflated = zlib.deflateSync(raw, { level: 9 });
const idatChunk = makeChunk('IDAT', deflated);
const iendChunk = makeChunk('IEND', Buffer.alloc(0));

const finalPng = Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
const outputPath = path.resolve(__dirname, '../public/og-image.png');
fs.writeFileSync(outputPath, finalPng);
console.log(`Generated OG Image: ${outputPath} (${finalPng.length} bytes)`);
