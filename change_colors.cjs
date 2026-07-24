const fs = require('fs');
const glob = require('glob');

const files = glob.sync('/Users/hastyar/Desktop/HBgrow-Portfolio/src/**/*.{jsx,css}');

const colorMap = {
  '#07080D': '#0A192F', // Main background -> Navy
  '#030407': '#061020', // Darker background -> Darker Navy
  '#F5F2EC': '#F1F5F9', // Warm white -> Cool silver/white
  '245,242,236': '241,245,249', // Warm white RGB -> Cool silver RGB
  '#C9A84C': '#C6A45C', // Adjust gold slightly to match logo
  '201,168,76': '198,164,92' // Adjust gold RGB
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    // Escape regex chars for rgb strings
    const searchRegex = new RegExp(oldColor.replace(/,/g, '\\s*,\\s*'), 'gi');
    if (searchRegex.test(content)) {
      content = content.replace(searchRegex, newColor);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated colors in ' + file);
  }
});

console.log('Color replacement complete.');
