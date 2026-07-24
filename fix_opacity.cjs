const fs = require('fs');
const glob = require('glob');

const files = glob.sync('/Users/hastyar/Desktop/HBgrow-Portfolio/src/**/*.{jsx,css}');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  content = content.replace(/rgba\((245,242,236|255,255,255),\s*(0\.\d+)\)/g, (match, color, opacityStr) => {
    let opacity = parseFloat(opacityStr);
    
    // Boost opacity for text visibility
    if (opacity >= 0.25 && opacity <= 0.45) opacity = 0.75;
    else if (opacity > 0.45 && opacity <= 0.6) opacity = 0.85;
    else if (opacity < 0.25 && opacity > 0.15) opacity = 0.5;
    
    changed = true;
    return `rgba(${color},${opacity})`;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
console.log('Done');
