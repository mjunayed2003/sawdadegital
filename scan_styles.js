const fs = require('fs');
const path = require('path');

let totalFiles = 0;
let filesWithStyles = 0;

function scan(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      scan(p);
    } else if (f.endsWith('.html')) {
      totalFiles++;
      const c = fs.readFileSync(p, 'utf8');
      const m = c.match(/style="[^"]*"/g);
      if (m) {
        filesWithStyles++;
        console.log(p, 'count:', m.length);
        const unique = [...new Set(m)];
        console.log('unique:', unique);
      }
    }
  }
}

scan('.next/server/app');
console.log(`Scan completed: Total HTML files scanned: ${totalFiles}, Files with inline styles: ${filesWithStyles}`);
