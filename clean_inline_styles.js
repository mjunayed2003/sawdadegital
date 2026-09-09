const fs = require('fs');
const path = require('path');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Strip all style="..." attributes from all HTML pages
      content = content.replace(/\s*style="[^"]*"/g, '');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Cleaned inline styles from: ${path.relative(__dirname, fullPath)}`);
      }
    }
  }
}

processDir(path.join(__dirname, '.next', 'server', 'app'));
console.log('Finished cleaning inline styles from build output.');
