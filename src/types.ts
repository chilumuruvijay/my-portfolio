export type Theme = 'dark' | 'light';

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'servicenow' | 'cloud-ai';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  completionDate?: string;
  architectureDetails?: string[];
  role?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Leadership' | 'Internship';
  points: string[];
  badge?: string;
  technologies?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: 'ServiceNow' | 'Cloud' | 'AI/ML' | 'Industry' | 'Development';
  verified: boolean;
  date: string;
  description: string;
  credentialUrl?: string;
  badgeCode?: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  field: string;
  cgpa: string;
  expectedGraduation: string;
  location: string;
  highlights: string[];
}
