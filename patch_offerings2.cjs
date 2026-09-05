const fs = require('fs');

const path = 'src/components/OfferingsSection.tsx';
let code = fs.readFileSync(path, 'utf8');

// Find the start of the philosophy section
const startIdx = code.indexOf('{/* Integrated Philosophy / Pedagogical Framework Pillars */}');
if (startIdx !== -1) {
    // We know it goes until the end of the component
    // The component ends with:
    //       </div>
    //     </section>
    //   );
    // };
    const endStr = "      </div>\n    </section>\n  );\n};\n";
    const lastDivIdx = code.lastIndexOf("      </div>\n    </section>");
    
    if (lastDivIdx !== -1) {
        code = code.substring(0, startIdx) + endStr;
    }
}

fs.writeFileSync(path, code);
console.log('Patched offerings 2');
