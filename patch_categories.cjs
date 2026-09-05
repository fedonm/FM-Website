const fs = require('fs');

const path = 'src/data/branching-categories.ts';
let code = fs.readFileSync(path, 'utf8');

// Greek - High School
code = code.replace(
    "methodology: 'Συνδυασμός θεωρητικής επεξήγησης με οπτικοποιημένα παραδείγματα, διαβαθμισμένες ασκήσεις και τακτικές επαναλήψεις.',",
    "methodology: 'Έμφαση στην κατανόηση εις βάθος, συνδυασμένη με στοχευμένη εξάσκηση και τακτικές επαναλήψεις για πλήρη εμπέδωση της γνώσης.',"
);

// Greek - Panhellenic
code = code.replace(
    "methodology: 'Χρονομετρημένες ασκήσεις, προσομοιώσεις θεμάτων, τεχνικές αποφυγής συνηθισμένων λαθών και καθαρή μαθηματική διατύπωση.',",
    "methodology: 'Στρατηγική κατανόησης πολύπλοκων προβλημάτων, στοχευμένη εξάσκηση σε προσομοιώσεις και τεχνικές απόλυτης εμπέδωσης για τις εξετάσεις.',"
);

// Greek/English - International
code = code.replace(
    "methodology: 'Official past paper practice, syllabus-specific markscheme analysis, and rigorous English scientific communication.',",
    "methodology: 'Deep conceptual understanding, targeted past-paper exercise, and rigorous scientific communication to achieve true knowledge mastery.',"
);

// English - High School
code = code.replace(
    "methodology: 'Visualized examples, progressive problem sets, and regular spiraled review sessions.',",
    "methodology: 'Emphasis on deep understanding, coupled with targeted exercise and regular reviews for complete mastery of knowledge.',"
);

// English - Panhellenic / Exam (if applicable in en)
code = code.replace(
    "methodology: 'Timed exam simulations, precise mathematical justifications, and tailored error analysis.',",
    "methodology: 'Strategic understanding of complex problems, targeted exercise in simulations, and proven techniques for exam mastery.',"
);

// English - International
code = code.replace(
    "methodology: 'Official past paper practice, markscheme alignment, and rigorous scientific articulation.',",
    "methodology: 'Deep conceptual understanding, targeted past-paper exercise, and rigorous scientific articulation for absolute mastery.',"
);

fs.writeFileSync(path, code);
console.log('Patched categories');
