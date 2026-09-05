import { Language, NavItem, BranchingCategory } from '../types';

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
        field: 'Πτυχίο Χημείας',
        institution: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (Α.Π.Θ.)',
        location: 'Θεσσαλονίκη, Ελλάδα',
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
        field: 'Αποφοίτηση με Άριστα',
        institution: '15ο Γενικό Λύκειο Θεσσαλονίκης',
        location: 'Θεσσαλονίκη, Ελλάδα',
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
        field: 'Chemistry Degree',
        institution: 'Aristotle University of Thessaloniki (AUTh)',
        location: 'Thessaloniki, Greece',
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
        field: 'Graduated with Honors',
        institution: '15th General Lyceum of Thessaloniki',
        location: 'Thessaloniki, Greece',
        details: [
          'Graduated with honors with strong concentration in natural sciences and chemistry.',
        ],
      },
    ],
  },
};
