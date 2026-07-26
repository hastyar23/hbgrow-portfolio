const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('dist/index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
dom.window.addEventListener('error', (event) => {
  console.log("JSDOM ERROR:", event.message);
});
setTimeout(() => {
  console.log("JSDOM Check Complete");
}, 2000);
