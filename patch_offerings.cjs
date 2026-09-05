const fs = require('fs');

const path = 'src/components/OfferingsSection.tsx';
let code = fs.readFileSync(path, 'utf8');

// Remove philosophy data import
code = code.replace(
  "import { branchingCategoriesData, bookingData, philosophyData } from \"../data\";",
  "import { branchingCategoriesData, bookingData } from \"../data\";"
);

// Remove icons that were only used in philosophy
code = code.replace(
  "  Zap,\n  Award,\n  Atom,\n",
  ""
);

// Remove helper state and function
const helperRegex = /  const pData = philosophyData\[language\];\n  const \[activePillar, setActivePillar\] = useState<number>\(0\);\n\n  const getIcon = \(iconName: string\) => {[\s\S]*?  };\n\n/;
code = code.replace(helperRegex, "");

// Remove the UI block
const uiRegex = /        \{\/\* Integrated Philosophy \/ Pedagogical Framework Pillars \*\/\}[\s\S]*?        <\/div>\n/;
code = code.replace(uiRegex, "");

fs.writeFileSync(path, code);
console.log('Patched offerings');
