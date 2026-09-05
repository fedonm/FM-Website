import { Language, NavItem, BranchingCategory } from '../types';

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
