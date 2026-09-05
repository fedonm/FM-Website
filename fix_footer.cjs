const fs = require('fs');

const path = 'src/components/Footer.tsx';
let code = fs.readFileSync(path, 'utf8');

const regex = /<div className="pt-2 flex flex-col space-y-1\.5 text-xs font-mono text-stone-500 dark:text-slate-400">[\s\S]*?<\/div>/;

if (regex.test(code)) {
    code = code.replace(regex, '');
    fs.writeFileSync(path, code);
    console.log('Removed footer contact div');
} else {
    console.log('Not found');
}
