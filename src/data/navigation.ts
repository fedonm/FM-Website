import { Language, NavItem, BranchingCategory } from '../types';

export const navigationData: Record<Language, NavItem[]> = {
  el: [
    { id: 'home', label: 'Αρχική', href: '#home' },
    { id: 'offerings', label: 'Υπηρεσίες', href: '#offerings' },
    { id: 'philosophy', label: 'Διδασκαλία', href: '#philosophy' },
    { id: 'education', label: 'Εκπαίδευση & Έρευνα', href: '#education' },
    { id: 'experience', label: 'Εμπειρία', href: '#experience' },
    { id: 'skills', label: 'Δεξιότητες', href: '#skills' },
    { id: 'booking', label: 'Κράτηση', href: '#booking' },
  ],
  en: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'offerings', label: 'Services', href: '#offerings' },
    { id: 'philosophy', label: 'Philosophy', href: '#philosophy' },
    { id: 'education', label: 'Education & Research', href: '#education' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'booking', label: 'Book a Lesson', href: '#booking' },
  ],
};
