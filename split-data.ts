import { Project, SyntaxKind } from "ts-morph";
import * as fs from "fs";
import * as path from "path";

const project = new Project();
const sourceFile = project.addSourceFileAtPath("src/data/content.ts");
const exports = sourceFile.getVariableStatements().filter(v => v.hasExportKeyword());

const dataDir = path.join(process.cwd(), "src/data");
const newFiles = [];

// Get types path relative to src/data
const typesImport = `import { Language, NavItem, BranchingCategory } from '../types';\n\n`;

for (const exp of exports) {
    const decls = exp.getDeclarations();
    for (const decl of decls) {
        const name = decl.getName();
        const fileName = name.replace(/Data$/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        
        const newFilePath = path.join(dataDir, `${fileName}.ts`);
        const text = exp.getFullText();
        
        let newContent = text;
        if (text.includes("Language") || text.includes("NavItem") || text.includes("BranchingCategory")) {
            newContent = typesImport + text.trim();
        } else {
            newContent = text.trim();
        }
        
        fs.writeFileSync(newFilePath, newContent + '\n');
        newFiles.push(`export * from './${fileName}';`);
    }
}

fs.writeFileSync(path.join(dataDir, "index.ts"), newFiles.join('\n') + '\n');
console.log("Successfully split files");
