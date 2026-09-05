import { Language, NavItem, BranchingCategory } from '../types';

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
