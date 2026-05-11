const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInFiles(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;
            
            // 1. Primary Buttons: change text-white to text-background when bg-primary is present.
            // In Navbar.tsx
            content = content.replace(/bg-primary px-5 py-2.5 text-sm font-semibold text-white/g, 'bg-primary px-5 py-2.5 text-sm font-semibold text-background');
            content = content.replace(/bg-primary px-6 py-3 text-sm font-semibold text-white/g, 'bg-primary px-6 py-3 text-sm font-semibold text-background');
            
            // In HeroSection.tsx
            content = content.replace(/bg-primary px-7 py-3.5 text-center text-sm font-bold text-white/g, 'bg-primary px-7 py-3.5 text-center text-sm font-bold text-background');
            // Hero secondary button (ghost) -> Make it secondary
            content = content.replace(/hover:border-primary\/30 hover:bg-primary-soft/g, 'hover:border-secondary/30 hover:bg-secondary-soft');
            content = content.replace(/text-primary" fill="currentColor" viewBox="0 0 20 20"/g, 'text-secondary" fill="currentColor" viewBox="0 0 20 20"');

            // In BetaOffer.tsx
            content = content.replace(/bg-primary text-white/g, 'bg-primary text-background');
            content = content.replace(/bg-primary px-10 py-4 text-lg font-bold text-white/g, 'bg-primary px-10 py-4 text-lg font-bold text-background');

            // 2. Gen I Labs wordmark: The "I" should be secondary (Electric Purple)
            content = content.replace(/className="text-primary"\>I\<\/span\>/g, 'className="text-secondary"\>I\<\/span\>');

            // 3. BeforeAfter.tsx After column text color
            // It currently uses text-secondary which maps to the new purple. We want it to be Mint (primary).
            content = content.replace(/text-secondary leading-6/g, 'text-primary leading-6');
            content = content.replace(/bg-secondary\/20 border border-secondary\/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary/g, 'bg-primary/20 border border-primary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary');
            content = content.replace(/rounded-2xl border border-secondary\/20 bg-secondary-soft/g, 'rounded-2xl border border-primary/20 bg-primary-soft');
            content = content.replace(/text-secondary flex-shrink-0/g, 'text-primary flex-shrink-0');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInFiles('./components');
