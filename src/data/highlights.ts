import { Language, NavItem, BranchingCategory } from '../types';

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
        title: 'Αποφοίτηση από το Τμήμα Χημείας Α.Π.Θ.',
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
        title: 'Graduated in Chemistry from AUTh',
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
