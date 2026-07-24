const fs = require('fs');
const glob = require('glob');

const files = glob.sync('/Users/hastyar/Desktop/HBgrow-Portfolio/src/components/*.jsx');

const paddingMap = {
  "padding: '8rem 0'": "padding: 'clamp(4rem, 10vw, 8rem) 0'",
  "padding: '6rem 0'": "padding: 'clamp(3.5rem, 8vw, 6rem) 0'",
  "padding: '5rem 0'": "padding: 'clamp(3rem, 8vw, 5rem) 0'",
  "marginBottom: '5rem'": "marginBottom: 'clamp(3rem, 8vw, 5rem)'",
  "marginBottom: '4rem'": "marginBottom: 'clamp(2rem, 6vw, 4rem)'",
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const [oldPad, newPad] of Object.entries(paddingMap)) {
    if (content.includes(oldPad)) {
      content = content.split(oldPad).join(newPad);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated paddings in ' + file.split('/').pop());
  }
});

console.log('Padding updates complete.');
