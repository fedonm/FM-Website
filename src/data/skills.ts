import { Language, NavItem, BranchingCategory } from '../types';

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
          { name: 'Linux Server Administration', description: 'Διαχείριση διακομιστών, δίκτυα και φιλοξενία ιστοσελίδων (Self-hosting)' },
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
          { name: 'Linux Server Administration', description: 'Server administration, networking infrastructure, and self-hosted website deployment' },
        ],
      },
    ],
  },
};
