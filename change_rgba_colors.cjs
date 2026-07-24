const fs = require('fs');
const glob = require('glob');

const files = glob.sync('/Users/hastyar/Desktop/HBgrow-Portfolio/src/**/*.{jsx,css}');

const colorMap = {
  '7,8,13': '10,25,47', // RGB for #0A192F
  '3,4,7': '6,16,32',   // RGB for #061020
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    const searchRegex = new RegExp(oldColor, 'g');
    if (searchRegex.test(content)) {
      content = content.replace(searchRegex, newColor);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated RGBA colors in ' + file);
  }
});

console.log('RGBA color replacement complete.');
