import { Language, NavItem, BranchingCategory } from '../types';

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
