export interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend';
  description: string;
  image: string;
  badge: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    overview: string;
    architecture: {
      frontend?: string;
      backend?: string;
      database?: string;
      tooling?: string;
    };
    highlights: string[];
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface TimelineItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  description: string;
}
