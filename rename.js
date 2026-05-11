const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;
            
            content = content.replace(/\bpurple\b/g, 'primary');
            content = content.replace(/\bteal\b/g, 'secondary');
            content = content.replace(/\bbg-card\b/g, 'bg-surface');
            content = content.replace(/var\(--bg-card\)/g, 'var(--bg-surface)');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInFiles('./components');
replaceInFiles('./app');
