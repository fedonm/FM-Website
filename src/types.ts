export type Language = 'el' | 'en';
export type Theme = 'light' | 'dark';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SubCategory {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  description: string;
  topics: string[];
  audience: string;
  methodology: string;
}

export interface BranchingCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  badge?: string;
  subcategories: SubCategory[];
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  practicalApplication: string;
  iconName: 'Compass' | 'Zap' | 'Award' | 'Atom' | 'CheckCircle2' | 'FlaskConical';
}

export interface EducationItem {
  period: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  details: string[];
  grade?: string;
  highlightBadge?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  standards?: string;
  location?: string;
  responsibilities: string[];
  skillsApplied: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    level?: string;
  }[];
}

export interface MilestoneItem {
  year: string;
  title: string;
  category: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  aspectRatio: string;
  colorScheme: string;
  tags: string[];
  imageSrc?: string;
  placeholderType: 'portrait' | 'radiochemistry' | 'teaching' | 'laboratory' | 'spectroscopy';
}

export interface BookingFormData {
  name: string;
  email: string;
  studentLevel: string;
  lessonLanguage: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedInText: string;
  linkedInUrl: string;
}
