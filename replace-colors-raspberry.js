const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components')
];

// Replaces old theme with Raspberry Theme
const replacements = [
  { regex: /#D4AF37/gi, replacement: '#9D224D' },
  { regex: /#B5952F/gi, replacement: '#7A173A' },
  { regex: /#E5C765/gi, replacement: '#C94B73' },
  { regex: /#DBEAFE/gi, replacement: '#FCE7F3' },
  { regex: /#1E3A8A/gi, replacement: '#334155' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    processDirectory(dir);
  } else {
    console.warn(`Directory not found: ${dir}`);
  }
});

console.log('Color replacement to Raspberry Theme complete!');
