const fs = require('fs');
const path = require('path');

// 1. Update Logo I to primary
function updateLogo(file) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/className="text-secondary"\>I\<\/span\>/g, 'className="text-primary"\>I\<\/span\>');
    fs.writeFileSync(file, content);
}
updateLogo('./components/landing/Navbar.tsx');
updateLogo('./components/landing/Footer.tsx');
updateLogo('./components/landing/AboutSection.tsx');

// 2. Update Calendly links
let contentTs = fs.readFileSync('./lib/content.ts', 'utf8');
contentTs = contentTs.replace(/https:\/\/calendly\.com\/officialgenilabs\/agentflowstrategy/g, 'https://calendly.com/officialgenilabs/property-viewing-consultation');
fs.writeFileSync('./lib/content.ts', contentTs);

// 3. Update ProblemSection 47 sec
let problemTsx = fs.readFileSync('./components/landing/ProblemSection.tsx', 'utf8');
// Assuming the 47 is rendered in a span or div with some color. 
// I need to find the exact class. I will write a regex or manually check it.
