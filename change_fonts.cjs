const fs = require('fs');
const glob = require('glob');

const files = glob.sync('/Users/hastyar/Desktop/HBgrow-Portfolio/src/components/*.jsx');

// Map old sizes to new legible sizes
const sizeMap = {
  '0.6rem': '0.75rem',
  '0.65rem': '0.8rem',
  '0.68rem': '0.8rem',
  '0.7rem': '0.85rem',
  '0.72rem': '0.85rem',
  '0.75rem': '0.875rem',
  '0.8rem': '0.95rem',
  '0.82rem': '0.95rem',
  '0.85rem': '1rem',
  '0.88rem': '1rem',
  '0.9rem': '1rem',
  '0.95rem': '1.05rem',
  '1.05rem': '1.15rem'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const [oldSize, newSize] of Object.entries(sizeMap)) {
    // We want to replace fontSize: 'Xrem' exactly.
    // Also handle text-[Xrem] just in case.
    const regex = new RegExp(oldSize, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, newSize);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated font sizes in ' + file.split('/').pop());
  }
});

console.log('Font size updates complete.');
