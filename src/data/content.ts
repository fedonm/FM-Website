import {
  BranchingCategory,
  ContactInfo,
  EducationItem,
  ExperienceItem,
  GalleryItem,
  Language,
  MilestoneItem,
  NavItem,
  PhilosophyPillar,
  SkillCategory
} from '../types';

export const navigationData: Record<Language, NavItem[]> = {
  el: [
    { id: 'home', label: 'Αρχική', href: '#home' },
    { id: 'offerings', label: 'Υπηρεσίες', href: '#offerings' },
    { id: 'philosophy', label: 'Διδασκαλία', href: '#philosophy' },
    { id: 'education', label: 'Εκπαίδευση & Έρευνα', href: '#education' },
    { id: 'experience', label: 'Εμπειρία', href: '#experience' },
    { id: 'skills', label: 'Δεξιότητες', href: '#skills' },
    { id: 'highlights', label: 'Ορόσημα', href: '#highlights' },
    { id: 'booking', label: 'Κράτηση', href: '#booking' },
  ],
  en: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'offerings', label: 'Services', href: '#offerings' },
    { id: 'philosophy', label: 'Philosophy', href: '#philosophy' },
    { id: 'education', label: 'Education & Research', href: '#education' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'highlights', label: 'Highlights', href: '#highlights' },
    { id: 'booking', label: 'Book a Lesson', href: '#booking' },
  ],
};

export const heroData = {
  el: {
    greeting: 'Φαίδων Μεσθανεύς',
    subtitle: 'Χημικός & Καθηγητής Χημείας',
    tagline: 'Η Χημεία γίνεται κατανοητή και συναρπαστική όταν ανακαλύπτεις το γιατί πίσω από κάθε αντίδραση.',
    description: 'Με εξειδίκευση στη Ραδιοφαρμακευτική Χημεία (MSc 2024-2026) και πιστοποιημένη παιδαγωγική επάρκεια, συνδέω την αυστηρή εργαστηριακή έρευνα με τη σύγχρονη διδασκαλία, υποστηρίζοντας μαθητές και φοιτητές να κατανοήσουν τη βαθύτερη χημική λογική.',
    primaryCta: 'Κλείσε μάθημα',
    secondaryCta: 'Εκπαίδευση & Έρευνα',
    cardTitle: 'Χημικός & Εργαστηριακή Έρευνα',
    cardSubtitle: 'Ραδιοφαρμακευτική, Οργανική Σύνθεση & Ενόργανη Ανάλυση',
    labHighlights: [
      {
        tag: 'Wet Lab & Σύνθεση',
        title: 'Οργανική & Ραδιοφαρμακευτική Σύνθεση',
        detail: 'Πολυσταδιακές συνθετικές πορείες, διαχωρισμός, εκχύλιση, καθαρισμός και ανάπτυξη ραδιοιχνηθετών.',
      },
      {
        tag: 'Ενόργανη Ανάλυση',
        title: 'Φασματοσκοπία NMR & Χρωματογραφία HPLC',
        detail: 'Διαλεύκανση δομής 1H / 13C NMR (MestReNova), ποσοτικός έλεγχος καθαρότητας HPLC και Radio-TLC.',
      },
      {
        tag: 'Πρότυπα Ποιότητας',
        title: 'Διαπιστευμένα Εργαστήρια ISO 17025',
        detail: 'Ποσοτική ανάλυση, διασφάλιση ποιότητας, διακρίβωση αναλυτικών οργάνων και στατιστική επικύρωση.',
      },
    ],
    credentials: [
      { label: 'Ακαδημαϊκά', value: 'BSc ΑΠΘ & MSc ΕΚΠΑ' },
      { label: 'Παιδαγωγική', value: 'Πιστοποίηση ΠΠΔΕ' },
      { label: 'Γλώσσες', value: 'Ελληνικά & C2 English' },
    ],
  },
  en: {
    greeting: 'Fedon Mesthanefs',
    subtitle: 'Chemist & Chemistry Tutor',
    tagline: 'Chemistry becomes intuitive and engaging when you understand the fundamental "why" behind every phenomenon.',
    description: 'Combining research expertise in Radiopharmaceutical Chemistry (MSc 2024-2026) with certified pedagogical training, I bridge rigorous wet-lab experimentation with structured mentoring to help students master chemical logic and excel academically.',
    primaryCta: 'Book a Lesson',
    secondaryCta: 'Education & Research',
    cardTitle: 'Chemist & Laboratory Research',
    cardSubtitle: 'Radiopharmaceutical, Organic Synthesis & Instrumentation',
    labHighlights: [
      {
        tag: 'Wet Lab & Synthesis',
        title: 'Organic & Radiopharmaceutical Synthesis',
        detail: 'Multi-step synthetic routes, compound isolation, extraction, purification, and molecular radiotracers.',
      },
      {
        tag: 'Instrumental Analysis',
        title: 'NMR Spectroscopy & HPLC Chromatography',
        detail: '1H / 13C NMR structural elucidation (MestReNova), quantitative HPLC purity profiling, and Radio-TLC.',
      },
      {
        tag: 'Quality Standards',
        title: 'ISO 17025 Accredited Laboratory Experience',
        detail: 'Quantitative analysis, quality assurance workflows, analytical calibration, and statistical validation.',
      },
    ],
    credentials: [
      { label: 'Degrees', value: 'BSc AUTh & MSc NKUA' },
      { label: 'Pedagogy', value: 'Certified Competence (PPDE)' },
      { label: 'Languages', value: 'Greek & C2 English' },
    ],
  },
};

export const aboutData = {
  el: {
    sectionNumber: '01',
    heading: 'Σχετικά με εμένα',
    subheading: 'Επιστημονική κατάρτιση, εργαστηριακή εμπειρία και πάθος για τη μετάδοση της γνώσης.',
    paragraphs: [
      'Είμαι πτυχιούχος Χημικός του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης και μεταπτυχιακός φοιτητής στο πρόγραμμα «Σχεδιασμός & Ανάπτυξη Νέων Φαρμακευτικών Ενώσεων» του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών, με ειδίκευση στη Ραδιοφαρμακευτική Χημεία.',
      'Η ενασχόλησή μου με τη σύνθεση ραδιοιχνηθετών, τη φαρμακοχημεία και τη φασματοσκοπική ανάλυση μου επιτρέπει να προσεγγίζω τη διδασκαλία όχι ως αποστήθιση αφηρημένων κανόνων, αλλά ως ένα συνεκτικό σύστημα φυσικοχημικής λογικής.',
      'Παράλληλα με την ερευνητική μου δραστηριότητα, διαθέτω Πιστοποιητικό Παιδαγωγικής και Διδακτικής Επάρκειας (ΠΠΔΕ) και ενεργή διδακτική εμπειρία σε μαθητές δευτεροβάθμιας εκπαίδευσης και πανεπιστημιακούς φοιτητές, τόσο στα Ελληνικά όσο και στα Αγγλικά.',
    ],
    scientificInterestsTitle: 'Επιστημονικά & Ερευνητικά Ενδιαφέροντα',
    scientificInterests: [
      { title: 'Ραδιοχημεία & Ραδιοφαρμακευτική', desc: 'Σύνθεση και αξιολόγηση ραδιοεπισημασμένων μορίων για διαγνωστικές και θεραπευτικές εφαρμογές.' },
      { title: 'Φαρμακοχημεία & Drug Design', desc: 'Ορθολογικός σχεδιασμός βιοδραστικών μορίων, σχέσεις δομής-δραστικότητας (SAR) και φαρμακοκινητική.' },
      { title: 'Βιοχημεία & Βιομακρομόρια', desc: 'Χημεία πρωτεϊνών, ενζυμικοί μηχανισμοί και μοριακές αλληλεπιδράσεις σε βιολογικά συστήματα.' },
      { title: 'Χημική Σύνθεση & Μηχανισμοί', desc: 'Οργανική σύνθεση πολλαπλών σταδίων, ανάλυση μηχανισμών αντίδρασης και τεχνικές καθαρισμού.' },
    ],
  },
  en: {
    sectionNumber: '01',
    heading: 'About Me',
    subheading: 'Scientific training, rigorous laboratory experience, and a dedicated commitment to conceptual clarity.',
    paragraphs: [
      'I am a Chemist (BSc, Aristotle University of Thessaloniki) and currently pursuing my MSc in "Drug Design and Development" at the National and Kapodistrian University of Athens, with a research focus on Radiopharmaceutical Chemistry.',
      'My hands-on experience in radiotracer synthesis, medicinal chemistry, and spectroscopic analysis shapes my teaching methodology: treating chemistry not as arbitrary rote memorization, but as an interconnected logical framework of physical and molecular principles.',
      'Alongside my research work, I hold a formal Certificate of Pedagogical Competence (PPDE) and have extensive experience tutoring secondary and university students in both Greek and English.',
    ],
    scientificInterestsTitle: 'Scientific & Research Areas',
    scientificInterests: [
      { title: 'Radiochemistry & Radiopharmaceuticals', desc: 'Synthesis, radiolabeling, and analytical characterization of molecular radiotracers for biomedical imaging.' },
      { title: 'Medicinal Chemistry & Drug Design', desc: 'Rational design of bioactive small molecules, structure-activity relationships (SAR), and pharmacokinetics.' },
      { title: 'Biochemistry & Biomolecules', desc: 'Protein chemistry, enzyme kinetics, and molecular interactions within biological pathways.' },
      { title: 'Chemical Synthesis & Mechanisms', desc: 'Multi-step organic synthesis, reaction mechanisms, spectroscopic identification, and analytical purity.' },
    ],
  },
};

export const branchingCategoriesData: Record<Language, BranchingCategory[]> = {
  el: [
    {
      id: 'tutoring-levels',
      number: '01',
      title: 'Μαθήματα Χημείας',
      badge: 'Όλα τα επίπεδα',
      shortDesc: 'Εξατομικευμένη διδασκαλία προσαρμοσμένη στις ανάγκες, το επίπεδο και τον ρυθμό μάθησης κάθε μαθητή.',
      subcategories: [
        {
          id: 'sec-education',
          title: 'Δευτεροβάθμια Εκπαίδευση',
          subtitle: 'Γυμνάσιο & Α΄ - Β΄ Λυκείου',
          tagline: 'Οικοδόμηση ισχυρών βάσεων και ανάπτυξη κριτικής σκέψης.',
          description: 'Στοχευμένη κάλυψη της σχολικής ύλης με έμφαση στην κατανόηση των θεμελιωδών νόμων της Χημείας. Αποσαφήνιση της ατομικής δομής, του περιοδικού πίνακα, της ονοματολογίας και της στοιχειομετρίας.',
          topics: ['Ατομική θεωρία & Περιοδικός πίνακας', 'Χημικοί δεσμοί & Μοριακή δομή', 'Στοιχειομετρικοί υπολογισμοί & Διαλύματα', 'Χημικές αντιδράσεις & Κατηγορίες', 'Εισαγωγή στην Οργανική Χημεία'],
          audience: 'Μαθητές Γυμνασίου και Λυκείου που επιθυμούν υψηλές επιδόσεις και βαθιά κατανόηση.',
          methodology: 'Συνδυασμός θεωρητικής επεξήγησης με οπτικοποιημένα παραδείγματα, διαβαθμισμένες ασκήσεις και τακτικές επαναλήψεις.',
        },
        {
          id: 'panhellenic',
          title: 'Πανελλαδικές Εξετάσεις',
          subtitle: 'Γ΄ Λυκείου (Θετικές & Σπουδές Υγείας)',
          tagline: 'Συστηματική προετοιμασία για κορυφαία βαθμολογία.',
          description: 'Πλήρης εμβάθυνση στην ύλη των Πανελλαδικών: Χημική Ισορροπία, Οξεοβασική Ισορροπία & Ρυθμιστικά διαλύματα, Θερμοχημεία, Οργανική Χημεία και Ηλεκτρονική Δομή. Εκμάθηση μεθοδολογίας για απαιτητικά θέματα Γ και Δ.',
          topics: ['Διαμοριακές δυνάμεις & Καταστάσεις ύλης', 'Χημική κινητική & Χημική ισορροπία', 'Οξέα, Βάσεις & Ιοντική ισορροπία', 'Οξειδοαναγωγή & Ηλεκτροχημεία', 'Οργανική χημεία & Συνθετικές πορείες'],
          audience: 'Υποψήφιοι Ομάδων Προσανατολισμού Θετικών Σπουδών και Σπουδών Υγείας.',
          methodology: 'Χρονομετρημένες ασκήσεις, προσομοιώσεις θεμάτων, τεχνικές αποφυγής συνηθισμένων λαθών και καθαρή μαθηματική διατύπωση.',
        },
        {
          id: 'intl-curricula',
          title: 'Διεθνή Προγράμματα & Αγγλόφωνη Διδασκαλία',
          subtitle: 'IB Chemistry, A-Levels, AP Chemistry & Studies in Europe',
          tagline: 'Fluent tutoring in English for international curricula.',
          description: 'Διδασκαλία Χημείας εξ ολοκλήρου στην Αγγλική γλώσσα (C2 level) για μαθητές International Baccalaureate (SL/HL), British A-Levels, Advanced Placement (AP) και φοιτητές ευρωπαϊκών πανεπιστημίων.',
          topics: ['IB Chemistry Standard & Higher Level', 'Cambridge / Edexcel A-Level Chemistry', 'AP Chemistry Syllabus', 'European University Chemistry Modules', 'Laboratory report analysis and scientific terminology in English'],
          audience: 'Μαθητές διεθνών σχολείων και φοιτητές σε αγγλόφωνα προγράμματα σπουδών.',
          methodology: 'Official past paper practice, syllabus-specific markscheme analysis, and rigorous English scientific communication.',
        },
      ],
    },
    {
      id: 'exam-prep',
      number: '02',
      title: 'Προετοιμασία Εξετάσεων',
      badge: 'Στρατηγική & Αποτελέσματα',
      shortDesc: 'Μεθοδική προσέγγιση για εξετάσεις υψηλών απαιτήσεων με έμφαση στη στρατηγική επίλυσης.',
      subcategories: [
        {
          id: 'prep-methodology',
          title: 'Στρατηγική Επίλυσης & Διαχείριση Χρόνου',
          subtitle: 'Από την ανάγνωση του προβλήματος στην άρτια λύση',
          tagline: 'Δομημένα βήματα σκέψης για κάθε τύπο άσκησης.',
          description: 'Ανάλυση των συνηθέστερων παγίδων στις εξετάσεις, ανάπτυξη λογικού διαγράμματος επίλυσης και τεχνικές επαλήθευσης των αποτελεσμάτων χωρίς περιττή πίεση χρόνου.',
          topics: ['Αναγνώριση ζητουμένων και δεδομένων', 'Σύνδεση πολλαπλών κεφαλαίων σε συνδυαστικά θέματα', 'Έλεγχος μονάδων μέτρησης και σημαντικών ψηφίων', 'Διαχείριση άγχους και ιεράρχηση θεμάτων'],
          audience: 'Μαθητές και φοιτητές που αντιμετωπίζουν δυσκολία στη μεταφορά της θεωρίας σε σύνθετα προβλήματα.',
          methodology: 'Ανάλυση βήμα-προς-βήμα, μοντελοποίηση υποδειγματικών λύσεων και αυτοαξιολόγηση.',
        },
        {
          id: 'exam-simulations',
          title: 'Διαγωνίσματα Προσομοίωσης',
          subtitle: 'Πραγματικές συνθήκες εξέτασης & αναλυτικό feedback',
          tagline: 'Εξοικείωση με την εξέταση πριν τη μεγάλη μέρα.',
          description: 'Σύνταξη πρωτότυπων θεμάτων προσομοίωσης στα πρότυπα των Πανελλαδικών ή των πανεπιστημιακών εξεταστικών, με λεπτομερή βαθμολόγηση και εξατομικευμένη ανατροφοδότηση.',
          topics: ['Προσομοιώσεις 3ώρου', 'Αναλυτικό διορθωτικό υπόμνημα', 'Εντοπισμός κενών και στοχευμένη επανάληψη', 'Στρατηγική κατανομής χρόνου'],
          audience: 'Όλοι οι εξεταζόμενοι μαθητές και φοιτητές.',
          methodology: 'Τακτικά τεστ με κλιμακούμενη δυσκολία και άμεση προσωπική συζήτηση επί των λαθών.',
        },
      ],
    },
    {
      id: 'university-chemistry',
      number: '03',
      title: 'Πανεπιστημιακή Χημεία',
      badge: 'Ακαδημαϊκή Υποστήριξη',
      shortDesc: 'Υποστήριξη φοιτητών Χημείας, Φαρμακευτικής, Ιατρικής, Βιολογίας, Χημικών Μηχανικών και συναφών τμημάτων.',
      subcategories: [
        {
          id: 'uni-organic',
          title: 'Οργανική Χημεία & Μηχανισμοί',
          subtitle: 'Από τις βασικές αρχές στη σύνθετη πολυσταδιακή σύνθεση',
          tagline: 'Κατανόηση της κίνησης των ηλεκτρονίων και της αντιδραστικότητας.',
          description: 'Εκμάθηση μηχανισμών οργανικών αντιδράσεων (πυρηνόφιλη υποκατάσταση, απόσπαση, προσθήκη, αρωματικές αντιδράσεις, οργανομεταλλικά, καρβονυλικές ενώσεις) με σαφή λογική συνοχή.',
          topics: ['Στερεοχημεία & Διαμορφώσεις', 'Μηχανισμοί SN1, SN2, E1, E2', 'Χημεία καρβονυλικών & ενολικών ενώσεων', 'Αρωματικότητα & Ηλεκτρονιόφιλη αρωματική υποκατάσταση', 'Αναδρομική ανάλυση (Retrosynthesis)'],
          audience: 'Φοιτητές Χημείας, Φαρμακευτικής, Βιολογίας, Ιατρικής και Πολυτεχνείων.',
          methodology: 'Εστίαση στα βέλη μετατόπισης ηλεκτρονίων (curly arrows), ανάλυση σταθερότητας ενδιάμεσων και πρακτική εξάσκηση.',
        },
        {
          id: 'uni-analysis-instruments',
          title: 'Ενόργανη Ανάλυση & Φασματοσκοπία',
          subtitle: 'NMR, IR, HPLC, Radio-TLC & Φασματομετρία Μάζας',
          tagline: 'Αποκωδικοποίηση πειραματικών και φασματοσκοπικών δεδομένων.',
          description: 'Πρακτική και θεωρητική ανάλυση φασμάτων 1H/13C-NMR, υπέρυθρης φασματοσκοπίας (FT-IR) και χρωματογραφικών μεθόδων (HPLC, TLC, Radio-TLC) με βάση την ενεργή εργαστηριακή μου εμπειρία.',
          topics: ['Ερμηνεία φασμάτων 1H & 13C NMR (χημικές μετατοπίσεις, σχάσεις)', 'Ταυτοποίηση χαρακτηριστικών ομάδων μέσω IR', 'Αρχές υγρής χρωματογραφίας υψηλής απόδοσης (HPLC)', 'Αρχές ραδιοχρωματογραφίας λεπτής στιβάδας (Radio-TLC)', 'Επίλυση αγνώστων δομών από συνδυασμό φασμάτων'],
          audience: 'Φοιτητές που παρακολουθούν εργαστηριακά ή θεωρητικά μαθήματα Ενόργανης Ανάλυσης.',
          methodology: 'Πραγματικά φάσματα από την εργαστηριακή πρακτική, βήμα-βήμα αποκωδικοποίηση και συστηματική μεθοδολογία ταυτοποίησης.',
        },
        {
          id: 'uni-pharma-biochem',
          title: 'Φαρμακοχημεία & Ραδιοχημεία',
          subtitle: 'Σχεδιασμός φαρμάκων, φαρμακοκινητική & ραδιοϊσότοπα',
          tagline: 'Σύνδεση χημικής δομής με τη βιολογική δράση.',
          description: 'Εξειδικευμένη υποστήριξη σε θέματα σχεδιασμού νέων φαρμάκων, σχέσεων δομής-δραστικότητας (SAR), μοριακών στόχων, βασικών αρχών ADME και χρήσης ραδιονουκλιδίων στη διάγνωση και θεραπεία.',
          topics: ['Αρχές Φαρμακοχημείας & Target Binding', 'Φαρμακοκινητική & ADME παράμετροι', 'Ραδιοφαρμακευτικά & Σύνθεση Ραδιοιχνηθετών', 'Βιομακρομόρια & Αλληλεπιδράσεις'],
          audience: 'Φοιτητές Φαρμακευτικής, Μεταπτυχιακοί φοιτητές και ενδιαφερόμενοι ερευνητές.',
          methodology: 'Case studies εγκεκριμένων φαρμάκων, διερεύνηση βιβλιογραφίας και αναλυτική σύνδεση θεωρίας-εφαρμογής.',
        },
      ],
    },
    {
      id: 'scientific-thinking',
      number: '04',
      title: 'Επιστημονική Κατανόηση & Έρευνα',
      badge: 'Ανάπτυξη Επιστήμονα',
      shortDesc: 'Καλλιέργεια αναλυτικής σκέψης, επιστημονικής μεθοδολογίας και εργαστηριακής κουλτούρας.',
      subcategories: [
        {
          id: 'sci-beyond-rote',
          title: 'Πέρα από την Παπαγαλία',
          subtitle: 'Η δύναμη της επαγωγικής και παραγωγικής σκέψης',
          tagline: 'Μάθε να σκέφτεσαι όπως ένας χημικός.',
          description: 'Αντικατάσταση της μηχανικής απομνημόνευσης με βαθιά κατανόηση των αρχών θερμοδυναμικής, κινητικής και ηλεκτρονικής κατανομής που διέπουν όλες τις χημικές μεταβολές.',
          topics: ['Γιατί συμβαίνουν οι αντιδράσεις (ενεργειακά διαγράμματα)', 'Πώς η μοριακή γεωμετρία ορίζει τις μακροσκοπικές ιδιότητες', 'Σύνδεση καθημερινών φαινομένων με μοριακά συμβάντα', 'Ανάπτυξη επιστημονικής διαίσθησης'],
          audience: 'Κάθε μαθητής και φοιτητής που θέλει να αγαπήσει πραγματικά την επιστήμη.',
          methodology: 'Διαλογική διδασκαλία τύπου Socratic method, νοητικά πειράματα και στοχευμένες ερωτήσεις διερεύνησης.',
        },
        {
          id: 'sci-mentorship',
          title: 'Ακαδημαϊκή Συμβουλευτική & Έρευνα',
          subtitle: 'Καθοδήγηση για σπουδές, μεταπτυχιακά και εργαστήρια',
          tagline: 'Προσανατολισμός για τα επόμενα βήματα στη Χημεία και τις Επιστήμες Υγείας.',
          description: 'Συζήτηση και πρακτικές συμβουλές για την επιλογή κατεύθυνσης σπουδών, την προετοιμασία για μεταπτυχιακά προγράμματα στην Ελλάδα και το εξωτερικό, και την ένταξη σε ερευνητικά εργαστήρια.',
          topics: ['Επιλογή κλάδου (Οργανική, Αναλυτική, Φαρμακοχημεία, Ραδιοχημεία)', 'Προετοιμασία αιτήσεων & CV για μεταπτυχιακά', 'Κατανόηση της εργαστηριακής πραγματικότητας & προτύπων (ISO 17025)', 'Παρουσίαση επιστημονικών εργασιών'],
          audience: 'Τελειόφοιτοι μαθητές Λυκείου και προπτυχιακοί φοιτητές.',
          methodology: 'Εξατομικευμένη συζήτηση, αξιολόγηση ενδιαφερόντων και ρεαλιστικός σχεδιασμός πλάνου.',
        },
      ],
    },
  ],
  en: [
    {
      id: 'tutoring-levels',
      number: '01',
      title: 'Chemistry Lessons',
      badge: 'All Academic Levels',
      shortDesc: 'Personalized tuition adapted to each student’s individual goals, pace, and current knowledge level.',
      subcategories: [
        {
          id: 'sec-education',
          title: 'Secondary Education',
          subtitle: 'Middle & High School Curriculum',
          tagline: 'Building unshakable fundamentals and analytical confidence.',
          description: 'Targeted support across standard school syllabi. Demystifying atomic theory, periodic trends, chemical bonding, stoichiometry, and reaction classification.',
          topics: ['Atomic Theory & Periodic Trends', 'Chemical Bonding & Molecular Shapes', 'Stoichiometric Calculations & Solution Chemistry', 'Reaction Types & Equations', 'Introduction to Organic Chemistry'],
          audience: 'Secondary students aiming for academic excellence and genuine comprehension.',
          methodology: 'Visual breakdowns, graded problem sets, real-world analogies, and active recall check-ins.',
        },
        {
          id: 'panhellenic',
          title: 'National & High-Stakes Exams',
          subtitle: 'Senior High School & University Admissions',
          tagline: 'Systematic preparation for top-tier examination scores.',
          description: 'Rigorous mastery of advanced topics: chemical kinetics, equilibrium, acid-base equilibria & buffer systems, thermodynamics, and organic reaction pathways.',
          topics: ['Intermolecular Forces & States of Matter', 'Chemical Kinetics & Dynamic Equilibrium', 'Acid-Base Equilibria & Buffer Chemistry', 'Redox & Electrochemistry', 'Organic Synthesis & Complex Multi-Part Problems'],
          audience: 'Students preparing for Greek Panhellenic examinations or international university admission tests.',
          methodology: 'Timed exam simulations, precise mathematical justifications, and tailored error analysis.',
        },
        {
          id: 'intl-curricula',
          title: 'International Curricula & English Tutoring',
          subtitle: 'IB Chemistry, A-Levels, AP Chemistry & Studies in Europe',
          tagline: 'Fluent chemistry instruction in English (C2 certified).',
          description: 'Full instruction conducted in English for students following IB (SL/HL), Cambridge/Edexcel A-Levels, Advanced Placement (AP), or enrolled in English-medium European university programs.',
          topics: ['IB Chemistry Standard & Higher Level', 'Cambridge / Edexcel A-Level Chemistry', 'AP Chemistry Syllabus', 'European University Chemistry Modules', 'Lab report writing & English scientific terminology'],
          audience: 'International school students and European university undergraduates.',
          methodology: 'Official past paper practice, markscheme alignment, and rigorous scientific articulation.',
        },
      ],
    },
    {
      id: 'exam-prep',
      number: '02',
      title: 'Exam Preparation',
      badge: 'Strategy & Results',
      shortDesc: 'A systematic approach to high-stakes examinations with dedicated problem-solving frameworks.',
      subcategories: [
        {
          id: 'prep-methodology',
          title: 'Problem-Solving Strategy & Time Management',
          subtitle: 'From problem deconstruction to flawless execution',
          tagline: 'A reproducible, step-by-step thinking framework.',
          description: 'Learn to pinpoint what a problem is truly testing, connect multi-chapter concepts, and verify calculations rapidly under timed conditions.',
          topics: ['Deconstructing complex problem statements', 'Bridging multiple chapters in synthesis questions', 'Dimensional analysis & significant figures', 'Stress reduction & strategic time allocation'],
          audience: 'Students wanting to turn theoretical knowledge into consistent high test scores.',
          methodology: 'Step-by-step cognitive modeling, structured templates, and targeted post-mortem reviews.',
        },
        {
          id: 'exam-simulations',
          title: 'Mock Examinations & Detailed Feedback',
          subtitle: 'Authentic exam simulation conditions',
          tagline: 'Experience the real test environment before exam day.',
          description: 'Custom-crafted mock tests following strict examination blueprints, followed by comprehensive line-by-line feedback.',
          topics: ['Full 3-hour timed simulations', 'Detailed rubric-based marking', 'Targeted gap identification & fast revisions', 'Time pacing calibration'],
          audience: 'Candidates preparing for end-of-year or university exams.',
          methodology: 'Progressive difficulty increments and 1-on-1 constructive feedback sessions.',
        },
      ],
    },
    {
      id: 'university-chemistry',
      number: '03',
      title: 'University Chemistry',
      badge: 'Academic Mentorship',
      shortDesc: 'University-level support for Chemistry, Pharmacy, Medicine, Biology, Chemical Engineering, and allied disciplines.',
      subcategories: [
        {
          id: 'uni-organic',
          title: 'Organic Chemistry & Mechanisms',
          subtitle: 'From core fundamentals to sophisticated retrosynthesis',
          tagline: 'Understanding electron flow, orbitals, and reactivity patterns.',
          description: 'Master organic mechanisms (SN1, SN2, E1, E2, electrophilic aromatic substitution, carbonyl chemistry, enolates) with intuitive logic instead of memory grids.',
          topics: ['Conformations & Stereochemistry', 'Substitution & Elimination Mechanisms', 'Carbonyl & Enolate Chemistry', 'Aromaticity & Pericyclic Reactions', 'Retrosynthetic Analysis & Multi-step Synthesis'],
          audience: 'Undergraduates in Chemistry, Pharmacy, Biology, Medicine, and Engineering.',
          methodology: 'Curved-arrow mechanism mastery, intermediate stability rules, and extensive problem sets.',
        },
        {
          id: 'uni-analysis-instruments',
          title: 'Instrumental Analysis & Spectroscopy',
          subtitle: 'NMR, IR, HPLC, Radio-TLC & Mass Spectrometry',
          tagline: 'Deciphering experimental spectra with laboratory precision.',
          description: 'Practical and theoretical interpretation of 1H/13C-NMR, FT-IR functional group identification, and chromatographic separations (HPLC, TLC, Radio-TLC) grounded in active lab practice.',
          topics: ['1H & 13C NMR spectral interpretation (chemical shifts, J-coupling)', 'FT-IR diagnostic absorption bands', 'High-Performance Liquid Chromatography (HPLC) principles', 'Radio-Thin Layer Chromatography (Radio-TLC)', 'Elucidating unknown chemical structures from multi-spectra data'],
          audience: 'Students in analytical chemistry, instrumental labs, and quality control modules.',
          methodology: 'Real-world laboratory spectra, step-by-step identification algorithms, and ISO 17025 data integrity principles.',
        },
        {
          id: 'uni-pharma-biochem',
          title: 'Medicinal Chemistry & Radiochemistry',
          subtitle: 'Drug design, pharmacokinetics, and radiopharmaceuticals',
          tagline: 'Connecting chemical structure to pharmacological action.',
          description: 'Specialized tuition in rational drug design, structure-activity relationships (SAR), biomolecular targets, ADME profiles, and radionuclides in molecular medicine.',
          topics: ['Principles of Medicinal Chemistry & Target Binding', 'Pharmacokinetics & ADME parameters', 'Radiopharmaceuticals & Radiotracer Synthesis', 'Biomolecules & Molecular Interactions'],
          audience: 'Pharmacy, Chemistry, and Postgraduate students.',
          methodology: 'Approved drug case studies, current literature dissection, and clear conceptual modeling.',
        },
      ],
    },
    {
      id: 'scientific-thinking',
      number: '04',
      title: 'Scientific Understanding & Research',
      badge: 'Scientist Development',
      shortDesc: 'Fostering analytical curiosity, laboratory culture, and scientific communication.',
      subcategories: [
        {
          id: 'sci-beyond-rote',
          title: 'Beyond Rote Memorization',
          subtitle: 'The power of inductive and deductive scientific reasoning',
          tagline: 'Learn to think with the mindset of a trained chemist.',
          description: 'Moving beyond passive memorization to understand the thermodynamic and kinetic driving forces behind all chemical transformations.',
          topics: ['Why reactions happen (energy landscapes & free energy)', 'How submicroscopic structure dictates macroscopic behavior', 'Connecting everyday phenomena with molecular mechanics', 'Developing intuitive chemical instincts'],
          audience: 'Any student seeking a lifelong passion and true mastery in science.',
          methodology: 'Socratic dialogue, thought experiments, and guided discovery.',
        },
        {
          id: 'sci-mentorship',
          title: 'Academic Guidance & Laboratory Pathways',
          subtitle: 'Navigating degrees, research labs, and postgraduate choices',
          tagline: 'Clear direction for next steps in science and healthcare.',
          description: 'Actionable guidance on selecting academic pathways, preparing competitive MSc applications in Greece or abroad, and integrating smoothly into scientific laboratories.',
          topics: ['Field specialization (Organic, Analytical, Medicinal, Radiochemistry)', 'CV and academic application preparation', 'Understanding real laboratory workflows & ISO 17025 standards', 'Scientific presentation & literature reading'],
          audience: 'High school seniors and university undergraduates.',
          methodology: 'Individual consultation, strengths assessment, and structured roadmap planning.',
        },
      ],
    },
  ],
};

export const philosophyData: Record<Language, {
  heading: string;
  subheading: string;
  intro: string;
  pillars: PhilosophyPillar[];
}> = {
  el: {
    heading: 'Φιλοσοφία Διδασκαλίας',
    subheading: 'Μια σύγχρονη, επιστημονικά θεμελιωμένη παιδαγωγική προσέγγιση.',
    intro: 'Η διδασκαλία μου βασίζεται σε τρεις αδιαπραγμάτευτους πυλώνες: την ουσιαστική κατανόηση των αρχών, τη στοχευμένη πρακτική εξάσκηση και την πλήρη εμπέδωση μέσα από τη σύνδεση της θεωρίας με την πραγματική επιστήμη.',
    pillars: [
      {
        number: '01',
        title: 'Κατανόηση',
        subtitle: 'Understand',
        description: 'Δεν αποστηθίζουμε τύπους χωρίς νόημα. Ξεκινάμε πάντα από το «γιατί». Όταν ο μαθητής καταλάβει τη φυσική και χημική αιτία πίσω από ένα φαινόμενο, η απομνημόνευση καθίσταται περιττή και η γνώση παραμένει για πάντα.',
        practicalApplication: 'Οπτικοποίηση ατομικών τροχιακών, ανάλυση ενεργειακών μεταβολών και αποδόμηση σύνθετων εννοιών σε απλά, λογικά βήματα.',
        iconName: 'Compass',
      },
      {
        number: '02',
        title: 'Εξάσκηση',
        subtitle: 'Practice',
        description: 'Η θεωρία μετατρέπεται σε δεξιότητα μόνο μέσα από τη δομημένη επίλυση προβλημάτων. Εξασκούμαστε σε διαβαθμισμένες ασκήσεις, μαθαίνοντας να αναγνωρίζουμε τα μοτίβα και τη μεθοδολογία κάθε κατηγορίας.',
        practicalApplication: 'Συστηματική επίλυση ασκήσεων, ανάλυση οριακών περιπτώσεων και εκμάθηση τεχνικών επαλήθευσης των αποτελεσμάτων.',
        iconName: 'Zap',
      },
      {
        number: '03',
        title: 'Εμπέδωση',
        subtitle: 'Master',
        description: 'Η τελική κατάκτηση της γνώσης έρχεται όταν ο μαθητής μπορεί να εξηγήσει την έννοια με δικά του λόγια και να αντιμετωπίσει με αυτοπεποίθηση οποιοδήποτε πρωτότυπο ή συνδυαστικό πρόβλημα.',
        practicalApplication: 'Προσομοιώσεις πραγματικών εξετάσεων, σύνδεση με εφαρμογές της καθημερινότητας και καλλιέργεια ανεξάρτητης επιστημονικής σκέψης.',
        iconName: 'Award',
      },
    ],
  },
  en: {
    heading: 'Teaching Philosophy',
    subheading: 'A contemporary, scientifically grounded pedagogical framework.',
    intro: 'My approach centers on three core pillars: deep conceptual comprehension, structured deliberate practice, and comprehensive mastery through the lens of real-world chemistry.',
    pillars: [
      {
        number: '01',
        title: 'Understand',
        subtitle: 'Κατανόηση',
        description: 'We avoid mindless rote memorization by starting with the fundamental "why". Once a student grasps the underlying thermodynamic and electronic forces, formulas become natural conclusions rather than arbitrary rules.',
        practicalApplication: 'Visualizing molecular orbitals, analyzing energy profiles, and breaking complex theories into intuitive logical steps.',
        iconName: 'Compass',
      },
      {
        number: '02',
        title: 'Practice',
        subtitle: 'Εξάσκηση',
        description: 'Theory transforms into capability through structured problem solving. We work through progressively challenging scenarios, learning to recognize underlying patterns across diverse questions.',
        practicalApplication: 'Systematic problem deconstruction, edge-case testing, and rapid result verification techniques.',
        iconName: 'Zap',
      },
      {
        number: '03',
        title: 'Master',
        subtitle: 'Εμπέδωση',
        description: 'True mastery is achieved when a student can clearly articulate concepts in their own words and tackle novel, multi-layered examination problems with calm confidence.',
        practicalApplication: 'Authentic exam simulations, linking theory to modern medicinal & industrial chemistry, and building self-directed analytical independence.',
        iconName: 'Award',
      },
    ],
  },
};

export const educationData: Record<Language, {
  heading: string;
  subheading: string;
  items: EducationItem[];
}> = {
  el: {
    heading: 'Εκπαίδευση & Ακαδημαϊκή Πορεία',
    subheading: 'Συνεχής επιστημονική κατάρτιση σε κορυφαία ακαδημαϊκά ιδρύματα.',
    items: [
      {
        period: '2024-2026',
        degree: 'MSc: Σχεδιασμός & Ανάπτυξη Νέων Φαρμακευτικών Ενώσεων',
        field: 'Ειδίκευση: Ραδιοφαρμακευτική Χημεία',
        institution: 'Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (Ε.Κ.Π.Α.)',
        location: 'Αθήνα, Ελλάδα',
        details: [
          'Διπλωματική Εργασία: Ραδιοφαρμακευτική Χημεία (Σύνθεση και αξιολόγηση ραδιοεπισημασμένων μορίων).',
          'Εκτενής μελέτη φαρμακοχημείας, ορθολογικού σχεδιασμού φαρμάκων και μοριακής μοντελοποίησης.',
          'Προηγμένες τεχνικές φασματοσκοπίας, χρωματογραφίας και ραδιοχημικής ανάλυσης.',
        ],
      },
      {
        period: '2024',
        degree: 'Specialization: Drug Development & Product Management',
        field: 'Project Management Fundamentals & Φαρμακοκινητική',
        institution: 'UC San Diego / Microsoft / Novartis',
        location: 'Διεθνές Πρόγραμμα',
        details: [
          'Ειδίκευση στη διαχείριση έργων (Project Management) στον φαρμακευτικό κλάδο.',
          'Εξειδίκευση στις αρχές Φαρμακοκινητικής και στα στάδια κλινικής ανάπτυξης φαρμάκων.',
        ],
      },
      {
        period: '2018 – 2023',
        degree: 'BSc: Χημεία',
        field: 'Βαθμός Πτυχίου: 7,6 / 10',
        institution: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (Α.Π.Θ.)',
        location: 'Θεσσαλονίκη, Ελλάδα',
        grade: '7.6 / 10',
        details: [
          'Εργαστηριακή έρευνα στο Εργαστήριο Ραδιοχημείας του Τμήματος Χημείας Α.Π.Θ.',
          'Πιστοποιητικό Παιδαγωγικής & Διδακτικής Επάρκειας (ΠΠΔΕ) με άριστη πρακτική εξάσκηση.',
          'Ολοκληρωμένη εργαστηριακή και θεωρητική κατάρτιση στην Οργανική, Ανόργανη, Αναλυτική και Φυσικοχημεία.',
        ],
      },
      {
        period: '2019',
        degree: 'Διαπανεπιστημιακά Μαθήματα',
        field: '«Βιομακρομόρια & Εκτίμηση Αθηροσκλήρωσης»',
        institution: 'Beihang University',
        location: 'Πεκίνο, Κίνα',
        details: [
          'Παρακολούθηση εξειδικευμένων μαθημάτων βιοχημείας μακρομορίων και καρδιαγγειακής βιοχημείας.',
          'Διεθνές ακαδημαϊκό περιβάλλον και ανταλλαγή επιστημονικών μεθοδολογιών.',
        ],
      },
      {
        period: '2011 – 2017',
        degree: 'Απολυτήριο Γενικού Λυκείου',
        field: 'Βαθμός Αποφοίτησης: 19 / 20',
        institution: '15ο Γενικό Λύκειο Θεσσαλονίκης',
        location: 'Θεσσαλονίκη, Ελλάδα',
        grade: '19 / 20',
        details: [
          'Άριστη επίδοση με έμφαση στις Θετικές Επιστήμες και τη Χημεία.',
        ],
      },
    ],
  },
  en: {
    heading: 'Education & Academic Pathway',
    subheading: 'Continuous scientific pursuit and specialization across premier institutions.',
    items: [
      {
        period: '2024-2026',
        degree: 'MSc: Drug Design and Development',
        field: 'Specialization: Radiopharmaceutical Chemistry',
        institution: 'National and Kapodistrian University of Athens (NKUA)',
        location: 'Athens, Greece',
        details: [
          'MSc Thesis: Radiopharmaceutical Chemistry (Synthesis and characterization of radiolabeled compounds).',
          'In-depth training in rational drug design, pharmacokinetics, and molecular modeling.',
          'Advanced spectroscopic, chromatographic, and radiochemical analytical methodologies.',
        ],
      },
      {
        period: '2024',
        degree: 'Specialization: Drug Development & Product Management',
        field: 'Project Management Fundamentals & Pharmacokinetics',
        institution: 'UC San Diego / Microsoft / Novartis',
        location: 'International Specialization',
        details: [
          'Specialized coursework in pharmaceutical project management and lifecycle strategy.',
          'Rigorous training in Pharmacokinetics principles and translational drug discovery.',
        ],
      },
      {
        period: '2018 – 2023',
        degree: 'BSc: Chemistry',
        field: 'Degree Grade: 7.6 / 10',
        institution: 'Aristotle University of Thessaloniki (AUTh)',
        location: 'Thessaloniki, Greece',
        grade: '7.6 / 10',
        details: [
          'Undergraduate laboratory research at the Laboratory of Radiochemistry, AUTh.',
          'Certificate of Pedagogical and Didactic Competence (PPDE) with classroom practicum.',
          'Comprehensive laboratory and theoretical curriculum in Organic, Inorganic, Analytical, and Physical Chemistry.',
        ],
      },
      {
        period: '2019',
        degree: 'Cross-University Coursework',
        field: '«Biomacromolecules & Atherosclerosis Assessment»',
        institution: 'Beihang University',
        location: 'Beijing, China',
        details: [
          'Advanced coursework in biomacromolecules and cardiovascular biochemistry.',
          'International scientific exchange and methodology immersion.',
        ],
      },
      {
        period: '2011 – 2017',
        degree: 'General High School Diploma',
        field: 'Graduation Grade: 19 / 20',
        institution: '15th General Lyceum of Thessaloniki',
        location: 'Thessaloniki, Greece',
        grade: '19 / 20',
        details: [
          'Graduated with honors with strong concentration in natural sciences and chemistry.',
        ],
      },
    ],
  },
};

export const experienceData: Record<Language, {
  heading: string;
  subheading: string;
  items: ExperienceItem[];
}> = {
  el: {
    heading: 'Επαγγελματική Εμπειρία',
    subheading: 'Διδασκαλία, εργαστηριακός έλεγχος ποιότητας και ερευνητική πρακτική.',
    items: [
      {
        period: 'Απρ 2025 – Σήμερα',
        role: 'Καθηγητής Χημείας (Ιδιαίτερα Μαθήματα στα Αγγλικά)',
        organization: 'Studies in Europe',
        location: 'Ευρωπαϊκό & Διεθνές Πρόγραμμα',
        responsibilities: [
          'Διδασκαλία πανεπιστημιακών και προπαρασκευαστικών μαθημάτων Χημείας εξ ολοκλήρου στην Αγγλική γλώσσα.',
          'Προετοιμασία φοιτητών για εισαγωγικές και εξαμηνιαίες εξετάσεις σε ευρωπαϊκά πανεπιστήμια.',
          'Ανάπτυξη εξατομικευμένου διδακτικού υλικού, ασκήσεων και επεξηγηματικών σημειώσεων στα Αγγλικά.',
        ],
        skillsApplied: ['English C2 Tutoring', 'General & Organic Chemistry', 'Curriculum Design', 'International Education'],
      },
      {
        period: 'Νοέμ 2023 – Ιούν 2024',
        role: 'Βοηθός Χημικού Αναλυτή',
        organization: 'Εργαστήριο Ελέγχου Εφοδίων Κλάσης Ι του Ελληνικού Στρατού',
        standards: 'Διαπιστευμένο κατά ISO 17025',
        location: 'Ελλάδα',
        responsibilities: [
          'Εκτέλεση χημικών και ενόργανων αναλύσεων σε δείγματα εφοδίων σύμφωνα με το διεθνές πρότυπο ISO 17025.',
          'Εφαρμογή αναλυτικών τεχνικών, στατιστικής επεξεργασίας δεδομένων και σύνταξη επίσημων εκθέσεων δοκιμών.',
          'Διασφάλιση ποιότητας εργαστηρίου, διακρίβωση οργάνων και τήρηση αυστηρών πρωτοκόλλων ασφαλείας.',
        ],
        skillsApplied: ['ISO 17025 Standards', 'Quantitative Chemical Analysis', 'Quality Assurance', 'Instrument Calibration'],
      },
      {
        period: 'Ιαν 2023 – Μάη 2023',
        role: 'Καθηγητής Χημείας (Πρακτική Άσκηση ΠΠΔΕ)',
        organization: '15ο Γενικό Λύκειο Θεσσαλονίκης',
        location: 'Θεσσαλονίκη, Ελλάδα',
        responsibilities: [
          'Διδασκαλία μαθημάτων Χημείας σε τμήματα Γενικού Λυκείου στο πλαίσιο της απόκτησης Πιστοποιητικού Παιδαγωγικής Επάρκειας.',
          'Σχεδιασμός σχεδίων μαθήματος, διαδραστικών παρουσιάσεων και διαγνωστικών αξιολογήσεων.',
          'Εφαρμογή σύγχρονων μεθόδων ενεργητικής μάθησης και διαχείριση σχολικής τάξης.',
        ],
        skillsApplied: ['Classroom Teaching', 'Pedagogical Methodology (PPDE)', 'Curriculum Planning', 'Student Assessment'],
      },
    ],
  },
  en: {
    heading: 'Professional Experience',
    subheading: 'Instruction, accredited quality control laboratory analysis, and research practice.',
    items: [
      {
        period: 'Apr 2025 – Present',
        role: 'Chemistry Tutor (Instruction in English)',
        organization: 'Studies in Europe',
        location: 'European & International Tutoring',
        responsibilities: [
          'Delivering advanced university and preparatory chemistry tutoring conducted entirely in English.',
          'Guiding students preparing for European university admissions, coursework, and semester examinations.',
          'Authoring custom problem sets, study guides, and bilingual scientific notes.',
        ],
        skillsApplied: ['English C2 Tutoring', 'General & Organic Chemistry', 'Curriculum Design', 'International Education'],
      },
      {
        period: 'Nov 2023 – June 2024',
        role: 'Assistant Chemical Analyst',
        organization: 'Class I Supply Quality Control Laboratory of the Hellenic Army',
        standards: 'Accredited under ISO 17025',
        location: 'Greece',
        responsibilities: [
          'Performed chemical testing and instrumental analyses on supply samples under ISO 17025 accreditation standards.',
          'Applied quantitative analytical methods, statistical validation, and authored formal analytical reports.',
          'Maintained laboratory quality protocols, instrument verification, and chemical safety standards.',
        ],
        skillsApplied: ['ISO 17025 Standards', 'Quantitative Chemical Analysis', 'Quality Assurance', 'Instrument Calibration'],
      },
      {
        period: 'Jan 2023 – May 2023',
        role: 'Chemistry Teacher (PPDE Practicum)',
        organization: '15th General Lyceum of Thessaloniki',
        location: 'Thessaloniki, Greece',
        responsibilities: [
          'Taught secondary school chemistry classes as part of the formal Pedagogical Competence (PPDE) practicum.',
          'Designed structured lesson plans, engaging interactive demonstrations, and diagnostic student assessments.',
          'Implemented active learning methodologies to foster conceptual curiosity and classroom engagement.',
        ],
        skillsApplied: ['Classroom Teaching', 'Pedagogical Methodology (PPDE)', 'Curriculum Planning', 'Student Assessment'],
      },
    ],
  },
};

export const skillsData: Record<Language, {
  heading: string;
  subheading: string;
  categories: SkillCategory[];
}> = {
  el: {
    heading: 'Επιστημονικές & Τεχνικές Δεξιότητες',
    subheading: 'Εργαστηριακές τεχνικές, εξειδικευμένο λογισμικό χημείας και γλωσσική επάρκεια.',
    categories: [
      {
        title: 'Εργαστηριακές Τεχνικές & Ενόργανη Ανάλυση',
        description: 'Πρακτική εμπειρία σε όργανα υψηλής ακρίβειας και χημική ανάλυση.',
        skills: [
          { name: 'HPLC', description: 'Υγρή Χρωματογραφία Υψηλής Απόδοσης (ποσοτικός διαχωρισμός & καθαρισμός ενώσεων)' },
          { name: 'NMR', description: 'Πυρηνικός Μαγνητικός Συντονισμός 1H/13C (διαλεύκανση μοριακής δομής)' },
          { name: 'IR Spectroscopy', description: 'Φασματοσκοπία Υπερύθρου / FT-IR (ταυτοποίηση χαρακτηριστικών ομάδων)' },
          { name: 'Radio-TLC', description: 'Ραδιοχρωματογραφία Λεπτής Στιβάδας (ραδιοχημικός έλεγχος καθαρότητας)' },
          { name: 'ISO 17025 Protocols', description: 'Εργαστηριακός έλεγχος ποιότητας, διαπίστευση και επικύρωση μεθόδων' },
        ],
      },
      {
        title: 'Εξειδικευμένο Λογισμικό Χημείας',
        description: 'Ψηφιακά εργαλεία για μοριακό σχεδιασμό και επεξεργασία φασμάτων.',
        skills: [
          { name: 'ChemDraw', description: 'Σχεδιασμός χημικών δομών, αντιδράσεων και μηχανισμών υψηλής ακρίβειας' },
          { name: 'Mestre (MestReNova)', description: 'Επεξεργασία, ανάλυση και ολοκλήρωση φασμάτων NMR' },
        ],
      },
      {
        title: 'Γλώσσες',
        description: 'Άνετη επιστημονική και διδακτική επικοινωνία.',
        skills: [
          { name: 'Ελληνικά', level: 'Μητρική', description: 'Άριστη χρήση επιστημονικής και παιδαγωγικής ορολογίας' },
          { name: 'English', level: 'Proficiency C2', description: 'Άπταιστη διδασκαλία, συγγραφή επιστημονικών κειμένων & διεθνής επικοινωνία' },
          { name: 'Français', level: 'A1', description: 'Βασική κατανόηση' },
        ],
      },
      {
        title: 'Λογισμικό & Ψηφιακά Εργαλεία',
        description: 'Εργαλεία οργάνωσης, ανάλυσης δεδομένων και ψηφιακής επεξεργασίας.',
        skills: [
          { name: 'Microsoft Office', description: 'Excel (στατιστική ανάλυση & γραφήματα), Word, PowerPoint' },
          { name: 'Adobe Photoshop', description: 'Επεξεργασία εικόνας και οπτικοποίηση επιστημονικών διαγραμμάτων' },
          { name: 'Adobe Lightroom', description: 'Επεξεργασία φωτογραφίας και ψηφιακών αρχείων' },
        ],
      },
    ],
  },
  en: {
    heading: 'Scientific & Technical Competencies',
    subheading: 'Laboratory instrumentation, specialized chemistry software, and linguistic proficiency.',
    categories: [
      {
        title: 'Laboratory Instrumentation & Analysis',
        description: 'Hands-on operational competence with analytical instrumentation.',
        skills: [
          { name: 'HPLC', description: 'High-Performance Liquid Chromatography (quantitative separation & purity analysis)' },
          { name: 'NMR', description: 'Nuclear Magnetic Resonance 1H/13C (molecular structure elucidation)' },
          { name: 'IR Spectroscopy', description: 'Infrared Spectroscopy / FT-IR (functional group identification)' },
          { name: 'Radio-TLC', description: 'Radio-Thin Layer Chromatography (radiochemical purity assessment)' },
          { name: 'ISO 17025 Protocols', description: 'Quality assurance, accredited laboratory workflows & method verification' },
        ],
      },
      {
        title: 'Specialized Chemistry Software',
        description: 'Digital tools for chemical structure drawing and spectral processing.',
        skills: [
          { name: 'ChemDraw', description: 'Professional chemical structure rendering and reaction scheme authoring' },
          { name: 'Mestre (MestReNova)', description: 'Advanced NMR spectral processing, multiplet analysis and peak integration' },
        ],
      },
      {
        title: 'Languages',
        description: 'Clear, articulate communication across languages.',
        skills: [
          { name: 'Greek', level: 'Native', description: 'Native fluency in academic and pedagogical contexts' },
          { name: 'English', level: 'Proficiency C2', description: 'Fluent instruction, scientific writing, and international curriculum delivery' },
          { name: 'French', level: 'A1', description: 'Elementary proficiency' },
        ],
      },
      {
        title: 'Software & Productivity',
        description: 'Data analysis, presentation, and image processing tools.',
        skills: [
          { name: 'Microsoft Office', description: 'Excel (scientific data analysis & charting), Word, PowerPoint' },
          { name: 'Adobe Photoshop', description: 'Graphic processing and scientific illustration enhancement' },
          { name: 'Adobe Lightroom', description: 'Digital imaging and photographic optimization' },
        ],
      },
    ],
  },
};

export const highlightsData: Record<Language, {
  heading: string;
  subheading: string;
  items: MilestoneItem[];
}> = {
  el: {
    heading: 'Σημαντικοί Σταθμοί',
    subheading: 'Ακαδημαϊκές διακρίσεις, πιστοποιήσεις και ερευνητικά ορόσημα.',
    items: [
      {
        year: '2024',
        category: 'Μεταπτυχιακή Έρευνα',
        title: 'Εισαγωγή στο MSc «Σχεδιασμός & Ανάπτυξη Νέων Φαρμακευτικών Ενώσεων»',
        description: 'Έναρξη έρευνας στον τομέα της Ραδιοφαρμακευτικής Χημείας στο Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών.',
      },
      {
        year: '2024',
        category: 'Διεθνής Πιστοποίηση',
        title: 'Drug Development & Product Management Specialization',
        description: 'Ολοκλήρωση εξειδίκευσης σε Project Management και Φαρμακοκινητική (UC San Diego / Microsoft / Novartis).',
      },
      {
        year: '2023 – 2024',
        category: 'Επαγγελματικό Πρότυπο',
        title: 'Εργαστηριακή Εμπειρία υπό Πρότυπο ISO 17025',
        description: 'Εκτέλεση χημικών αναλύσεων στο Εργαστήριο Ελέγχου Εφοδίων Κλάσης Ι του Ελληνικού Στρατού.',
      },
      {
        year: '2023',
        category: 'Παιδαγωγική Κατάρτιση',
        title: 'Απόκτηση Πιστοποιητικού Παιδαγωγικής Επάρκειας (ΠΠΔΕ)',
        description: 'Ολοκλήρωση επίσημου προγράμματος παιδαγωγικής κατάρτισης και διδακτικής πρακτικής άσκησης στο 15ο ΓΕΛ Θεσσαλονίκης.',
      },
      {
        year: '2023',
        category: 'Πτυχίο Χημείας',
        title: 'Αποφοίτηση από το Τμήμα Χημείας Α.Π.Θ. (7,6/10)',
        description: 'Ολοκλήρωση προπτυχιακών σπουδών με ερευνητική δραστηριότητα στο Εργαστήριο Ραδιοχημείας.',
      },
      {
        year: '2019',
        category: 'Διεθνής Ακαδημαϊκή Εμπειρία',
        title: 'Beihang University — Πεκίνο, Κίνα',
        description: 'Παρακολούθηση διαπανεπιστημιακών μαθημάτων στη βιοχημεία μακρομορίων και την αθηροσκλήρωση.',
      },
    ],
  },
  en: {
    heading: 'Highlights & Milestones',
    subheading: 'Academic milestones, certifications, and research achievements.',
    items: [
      {
        year: '2024',
        category: 'Postgraduate Research',
        title: 'Admitted to MSc in Drug Design & Development',
        description: 'Commenced thesis research in Radiopharmaceutical Chemistry at the National and Kapodistrian University of Athens.',
      },
      {
        year: '2024',
        category: 'International Certification',
        title: 'Drug Development & Product Management Specialization',
        description: 'Completed specialized training in Project Management fundamentals & Pharmacokinetics (UC San Diego / Microsoft / Novartis).',
      },
      {
        year: '2023 – 2024',
        category: 'Accredited Experience',
        title: 'Laboratory Work under ISO 17025 Standard',
        description: 'Performed chemical testing and quality assurance at the Hellenic Army Class I Quality Control Lab.',
      },
      {
        year: '2023',
        category: 'Pedagogy Certification',
        title: 'Certificate of Pedagogical Competence (PPDE)',
        description: 'Awarded formal pedagogical credential following teaching practicum at the 15th General Lyceum of Thessaloniki.',
      },
      {
        year: '2023',
        category: 'BSc Graduation',
        title: 'Graduated in Chemistry from AUTh (7.6/10)',
        description: 'Completed undergraduate curriculum with thesis research at the Laboratory of Radiochemistry.',
      },
      {
        year: '2019',
        category: 'Global Academic Exposure',
        title: 'Beihang University — Beijing, China',
        description: 'Attended cross-university advanced coursework in biomacromolecules and cardiovascular biochemistry.',
      },
    ],
  },
};

export const galleryData: Record<Language, {
  heading: string;
  subheading: string;
  items: GalleryItem[];
}> = {
  el: {
    heading: 'Εικόνες & Επιστημονικό Περιβάλλον',
    subheading: 'Στιγμιότυπα από την έρευνα, τα εργαστηριακά περιβάλλοντα και την ακαδημαϊκή καθημερινότητα.',
    items: [
      {
        id: 'photo-portrait',
        title: 'Φαίδων Μεσθανεύς',
        category: 'Προφίλ & Ταυτότητα',
        description: 'Χημικός & Καθηγητής Χημείας με έδρα τη Θεσσαλονίκη και την Αθήνα.',
        aspectRatio: 'aspect-square',
        colorScheme: 'from-slate-800 to-slate-900',
        tags: ['Προφίλ', 'Χημικός', 'Θεσσαλονίκη'],
        placeholderType: 'portrait',
      },
      {
        id: 'photo-radiochem',
        title: 'Έρευνα Ραδιοχημείας & Σύνθεσης',
        category: 'Εργαστηριακή Έρευνα',
        description: 'Ενασχόληση με τη σύνθεση και τον χαρακτηρισμό ραδιοεπισημασμένων μορίων για διαγνωστικές εφαρμογές.',
        aspectRatio: 'aspect-4/3',
        colorScheme: 'from-teal-900 to-emerald-950',
        tags: ['Ραδιοχημεία', 'MSc ΕΚΠΑ', 'Ραδιοφαρμακευτική'],
        placeholderType: 'radiochemistry',
      },
      {
        id: 'photo-spectroscopy',
        title: 'Ενόργανη Ανάλυση (NMR & HPLC)',
        category: 'Αναλυτική Χημεία',
        description: 'Διαλεύκανση δομών με NMR και ποσοτικός διαχωρισμός με τεχνικές HPLC και Radio-TLC.',
        aspectRatio: 'aspect-4/3',
        colorScheme: 'from-cyan-950 to-slate-900',
        tags: ['NMR', 'HPLC', 'ISO 17025'],
        placeholderType: 'spectroscopy',
      },
      {
        id: 'photo-teaching',
        title: 'Διδασκαλία & Επίλυση Προβλημάτων',
        category: 'Παιδαγωγική Πράξη',
        description: 'Εξατομικευμένη καθοδήγηση μαθητών και φοιτητών με καθαρή λογική και διαδραστικότητα.',
        aspectRatio: 'aspect-4/3',
        colorScheme: 'from-stone-800 to-zinc-900',
        tags: ['ΠΠΔΕ', 'Ιδιαίτερα Μαθήματα', 'Online & Live'],
        placeholderType: 'teaching',
      },
    ],
  },
  en: {
    heading: 'Visual Moments & Scientific Environment',
    subheading: 'Glimpses into laboratory research, analytical instrumentation, and educational mentorship.',
    items: [
      {
        id: 'photo-portrait',
        title: 'Fedon Mesthanefs',
        category: 'Profile & Identity',
        description: 'Chemist & Chemistry Tutor based in Thessaloniki and Athens.',
        aspectRatio: 'aspect-square',
        colorScheme: 'from-slate-800 to-slate-900',
        tags: ['Profile', 'Chemist', 'Thessaloniki'],
        placeholderType: 'portrait',
      },
      {
        id: 'photo-radiochem',
        title: 'Radiochemistry & Synthesis Research',
        category: 'Laboratory Research',
        description: 'Synthesis and evaluation of radiolabeled molecules for biomedical imaging applications.',
        aspectRatio: 'aspect-4/3',
        colorScheme: 'from-teal-900 to-emerald-950',
        tags: ['Radiochemistry', 'MSc NKUA', 'Radiopharmaceuticals'],
        placeholderType: 'radiochemistry',
      },
      {
        id: 'photo-spectroscopy',
        title: 'Instrumental Analysis (NMR & HPLC)',
        category: 'Analytical Chemistry',
        description: 'Structural elucidation via NMR and high-resolution chromatographic purification.',
        aspectRatio: 'aspect-4/3',
        colorScheme: 'from-cyan-950 to-slate-900',
        tags: ['NMR', 'HPLC', 'ISO 17025'],
        placeholderType: 'spectroscopy',
      },
      {
        id: 'photo-teaching',
        title: 'Mentorship & Problem Solving',
        category: 'Pedagogy in Action',
        description: '1-on-1 personalized tutoring designed to build lasting scientific confidence.',
        aspectRatio: 'aspect-4/3',
        colorScheme: 'from-stone-800 to-zinc-900',
        tags: ['Pedagogy', 'Tutoring', 'Online & Live'],
        placeholderType: 'teaching',
      },
    ],
  },
};

export const bookingData = {
  el: {
    heading: 'Κλείσε μάθημα Χημείας',
    subheading: 'Συμπλήρωσε τα στοιχεία σου για να προγραμματίσουμε μια πρώτη συνάντηση γνωριμίας.',
    description: 'Είτε προετοιμάζεσαι για τις Πανελλαδικές, είτε χρειάζεσαι υποστήριξη σε πανεπιστημιακά μαθήματα ή διεθνή προγράμματα (IB/A-Levels), στείλε μου το αίτημά σου.',
    nameLabel: 'Ονοματεπώνυμο',
    namePlaceholder: 'π.χ. Αλέξανδρος Παπαδόπουλος',
    emailLabel: 'Email επικοινωνίας',
    emailPlaceholder: 'alexandros@example.com',
    phoneLabel: 'Τηλέφωνο Επικοινωνίας (Προαιρετικό)',
    phonePlaceholder: '+30 69X XXX XXXX',
    levelLabel: 'Επίπεδο σπουδών',
    levelOptions: [
      { value: 'Γυμνάσιο', label: 'Γυμνάσιο' },
      { value: 'Λύκειο (Α΄/Β΄)', label: 'Λύκειο (Α΄ ή Β΄ Τάξη)' },
      { value: 'Πανελλαδικές (Γ΄ Λυκείου)', label: 'Πανελλαδικές Εξετάσεις (Γ΄ Λυκείου)' },
      { value: 'Πανεπιστήμιο', label: 'Πανεπιστημιακή Χημεία (Προπτυχιακό / Μεταπτυχιακό)' },
      { value: 'International (IB / A-Levels / AP)', label: 'Διεθνή Προγράμματα (IB / A-Levels / AP)' },
      { value: 'Άλλο', label: 'Άλλο επίπεδο' },
    ],
    languageLabel: 'Προτιμώμενη γλώσσα μαθήματος',
    languageOptions: [
      { value: 'Ελληνικά', label: 'Ελληνικά (Greek)' },
      { value: 'English', label: 'English (Αγγλικά)' },
      { value: 'Bilingual (GR/EN)', label: 'Δίγλωσσο (Ελληνικά & English)' },
    ],
    dateLabel: 'Επιθυμητή ημερομηνία έναρξης (Προαιρετικό)',
    timeLabel: 'Προτιμώμενη ώρα / ημέρες (Προαιρετικό)',
    timePlaceholder: 'π.χ. Απογεύματα Δευτέρα / Τετάρτη',
    messageLabel: 'Σε τι θα ήθελες βοήθεια;',
    messagePlaceholder: 'Περιέγραψε σύντομα τους στόχους σου, τις δυσκολίες ή τα συγκεκριμένα κεφάλαια που σε ενδιαφέρουν...',
    submitButton: 'Υποβολή Αιτήματος',
    submittingButton: 'Αποστολή...',
    securityCheckLabel: 'Επαλήθευση Ασφαλείας',
    directContactTitle: 'Ή επικοινώνησε απευθείας μαζί μου:',
    fallbackNote: 'Το αίτημα αποστέλλεται άμεσα μέσω ασφαλούς υποδομής.',
    validation: {
      nameRequired: 'Παρακαλώ συμπληρώστε το όνομά σας.',
      emailRequired: 'Παρακαλώ συμπληρώστε ένα έγκυρο email.',
      emailInvalid: 'Το email δεν φαίνεται να έχει σωστή μορφή.',
      levelRequired: 'Παρακαλώ επιλέξτε επίπεδο σπουδών.',
      messageRequired: 'Παρακαλώ γράψτε ένα σύντομο μήνυμα για τις ανάγκες σας.',
      messageTooLong: 'Το μήνυμα δεν μπορεί να υπερβαίνει τους 1000 χαρακτήρες.',
      turnstileRequired: 'Παρακαλώ ολοκληρώστε την επαλήθευση ασφαλείας.',
    },
    successTitle: 'Το αίτημά σας καταχωρήθηκε επιτυχώς!',
    successBody: 'Σας ευχαριστώ για την επικοινωνία. Θα εξετάσω το αίτημά σας και θα επικοινωνήσω μαζί σας το συντομότερο δυνατόν.',
    copyEmailButton: 'Αντιγραφή κειμένου email',
    copiedText: 'Αντιγράφηκε στο πρόχειρο!',
    sendAnotherButton: 'Υποβολή νέου αιτήματος',
  },
  en: {
    heading: 'Book a Chemistry Lesson',
    subheading: 'Fill in your details below to schedule an initial consultation.',
    description: 'Whether you are preparing for high school exams, university coursework, or international qualifications (IB / A-Levels / AP), reach out directly.',
    nameLabel: 'Full Name',
    namePlaceholder: 'e.g. Alex Smith',
    emailLabel: 'Email Address',
    emailPlaceholder: 'alex@example.com',
    phoneLabel: 'Phone Number (Optional)',
    phonePlaceholder: '+30 69X XXX XXXX',
    levelLabel: 'Academic Level',
    levelOptions: [
      { value: 'Middle School', label: 'Middle School / Junior High' },
      { value: 'High School', label: 'High School (Years 10–11)' },
      { value: 'National Exams', label: 'National University Entrance Exams' },
      { value: 'University', label: 'University Level (Undergraduate / Postgraduate)' },
      { value: 'International (IB / A-Levels / AP)', label: 'International Programs (IB / A-Levels / AP)' },
      { value: 'Other', label: 'Other Level' },
    ],
    languageLabel: 'Preferred Lesson Language',
    languageOptions: [
      { value: 'English', label: 'English' },
      { value: 'Greek', label: 'Ελληνικά (Greek)' },
      { value: 'Bilingual', label: 'Bilingual (English & Greek)' },
    ],
    dateLabel: 'Preferred Start Date (Optional)',
    timeLabel: 'Preferred Time / Days (Optional)',
    timePlaceholder: 'e.g. Weekday afternoons, 18:00',
    messageLabel: 'What would you like help with?',
    messagePlaceholder: 'Briefly describe your goals, specific syllabus, or topics you want to master...',
    submitButton: 'Submit Lesson Inquiry',
    submittingButton: 'Submitting...',
    securityCheckLabel: 'Security Verification',
    directContactTitle: 'Or contact me directly:',
    fallbackNote: 'Your inquiry is submitted securely through direct backend dispatch.',
    validation: {
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter a valid email address.',
      emailInvalid: 'Please enter a valid email format.',
      levelRequired: 'Please select your academic level.',
      messageRequired: 'Please provide a brief description of what you need help with.',
      messageTooLong: 'Message must not exceed 1000 characters.',
      turnstileRequired: 'Please complete the security check.',
    },
    successTitle: 'Inquiry Successfully Submitted!',
    successBody: 'Thank you for reaching out. I will review your inquiry and get back to you as soon as possible.',
    copyEmailButton: 'Copy inquiry text',
    copiedText: 'Copied to clipboard!',
    sendAnotherButton: 'Submit another inquiry',
  },
};

export const contactData: Record<Language, {
  heading: string;
  subheading: string;
  info: ContactInfo;
  emailMeBtn: string;
  callMeBtn: string;
  linkedInBtn: string;
  locationLabel: string;
  phoneLabel: string;
  emailLabel: string;
  linkedInLabel: string;
}> = {
  el: {
    heading: 'Επικοινωνία',
    subheading: 'Ας συζητήσουμε για τις ανάγκες σου στη Χημεία.',
    info: {
      name: 'Φαίδων Μεσθανεύς',
      title: 'Χημικός & Καθηγητής Χημείας',
      email: 'mesthanefs@gmail.com',
      phone: '6942664016',
      location: 'Κέντρο, Θεσσαλονίκη',
      linkedInText: 'Fedon Mesthanefs',
      linkedInUrl: 'https://www.linkedin.com/in/fedon-mesthanefs',
    },
    emailMeBtn: 'Αποστολή Email',
    callMeBtn: 'Κλήση',
    linkedInBtn: 'Προφίλ LinkedIn',
    locationLabel: 'Τοποθεσία',
    phoneLabel: 'Τηλέφωνο',
    emailLabel: 'Email',
    linkedInLabel: 'LinkedIn',
  },
  en: {
    heading: 'Get in Touch',
    subheading: 'Let’s discuss your academic goals and chemistry tutoring schedule.',
    info: {
      name: 'Fedon Mesthanefs',
      title: 'Chemist & Chemistry Tutor',
      email: 'mesthanefs@gmail.com',
      phone: '6942664016',
      location: 'City Center, Thessaloniki, Greece',
      linkedInText: 'Fedon Mesthanefs',
      linkedInUrl: 'https://www.linkedin.com/in/fedon-mesthanefs',
    },
    emailMeBtn: 'Email Me',
    callMeBtn: 'Call',
    linkedInBtn: 'LinkedIn Profile',
    locationLabel: 'Location',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    linkedInLabel: 'LinkedIn',
  },
};

export const footerData = {
  el: {
    tagline: 'Η Χημεία, με καθαρή επιστημονική σκέψη.',
    copyright: `© ${new Date().getFullYear()} Φαίδων Μεσθανεύς. Με επιφύλαξη παντός δικαιώματος.`,
    quickNavTitle: 'Πλοήγηση',
    tutoringTitle: 'Υπηρεσίες',
    legalNote: 'Ακαδημαϊκή & εκπαιδευτική υποστήριξη Χημείας.',
  },
  en: {
    tagline: 'Chemistry, explained with scientific clarity.',
    copyright: `© ${new Date().getFullYear()} Fedon Mesthanefs. All rights reserved.`,
    quickNavTitle: 'Quick Navigation',
    tutoringTitle: 'Services',
    legalNote: 'Academic mentoring and professional chemistry tuition.',
  },
};
