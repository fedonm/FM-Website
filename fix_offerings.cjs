const fs = require('fs');

const path = 'src/components/OfferingsSection.tsx';
let code = fs.readFileSync(path, 'utf8');

const badPart = `                    </div>
                    <div className="space-y-1 mb-5">`;

const badIdx = code.indexOf(badPart);
if (badIdx !== -1) {
    code = code.substring(0, badIdx) + `      </div>\n    </section>\n  );\n};\n`;
    fs.writeFileSync(path, code);
    console.log('Fixed garbage');
} else {
    console.log('Garbage not found');
}
