import { Project, SkillCategory, TimelineItem, EducationItem, CertificationItem } from '../types';
import { selectedProjects } from './selectedProjects';
import { profile } from './profile';

export const personalInfo = {
  ...profile,
  roles: ['Junior Web Developer', 'Frontend Specialist', 'Aspiring Full Stack Engineer'],
  specificLocation: 'Bahadurabad, Karachi, Pakistan',
  phone: '+92 317 2874875',
  githubUrl: profile.github,
  githubUsername: 'umer824',
  linkedinUrl: profile.linkedin,
  resumeUrl: '/assets/Umer_Jahangir_Resume.pdf',
  photoUrl: '/assets/umer-profile.jpg',
  summary:
    'Full Stack Developer with a strong foundation in modern web technologies and a passion for building scalable, user-centric applications. Proficient in frontend and backend development with expertise in JavaScript, HTML5/CSS3, and full-stack frameworks. Combining daily technical practice with hands-on project engineering.',
  aboutNarrative: [
    'I am an Aspiring Full Stack Developer & Frontend Specialist specializing in HTML5, CSS3, JavaScript (ES6+), React 19, and full-stack backend integrations. Based in Karachi, Pakistan, I blend structured software engineering principles with active daily coding practice.',
    'My background includes rigorous formal training through Saylani Mass I.T Training (S.M.I.T), where I mastered full-stack web workflows spanning client-side interfaces, server-side APIs (Node.js/Express, Python/FastAPI), and persistent databases (PostgreSQL, SQLite, MongoDB).',
    'In parallel, my Cisco Networking Academy certification established deep fundamentals in TCP/IP protocols, client-server routing, and network architecture.',
    'Currently seeking an internship or junior developer role where I can contribute my frontend engineering skills, collaborative Git workflows, and passion for performance optimization.'
  ],
  languages: ['English (Fluent / Professional)', 'Urdu (Native Speaker)'],
  availability: 'Available for Full-Time Roles & Internships (Karachi / Remote)'
};

export const projectsData: Project[] = selectedProjects;

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    iconName: 'Layout',
    skills: [
      'React 19',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5 Semantic',
      'CSS3 & Essentials',
      'Tailwind CSS',
      'Vue.js',
      'Responsive Web Design',
      'DOM Manipulation',
      'Component Architecture'
    ]
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'RESTful APIs',
      'GraphQL',
      'SQLAlchemy ORM',
      'Pydantic Validation'
    ]
  },
  {
    title: 'Databases & Cloud',
    iconName: 'Database',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'Firebase Firestore',
      'Firebase Auth',
      'Database Schema Design'
    ]
  },
  {
    title: 'Tools & Workflow',
    iconName: 'Wrench',
    skills: [
      'Git & GitHub (@umer824)',
      'Visual Studio Code',
      'Vite Build Tool',
      'Command Line (CLI)',
      'ESLint Code Quality',
      'Microsoft Excel Certified',
      'Open Source Collaboration'
    ]
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    role: 'Frontend Web Projects',
    organization: 'Self-directed / Personal Portfolio Work',
    location: '',
    period: '2024–Present',
    bullets: [
      'Developing responsive web interfaces.',
      'Building interactive React components.',
      'Practicing Git version control.',
      'Learning accessibility and performance optimization.',
      'Developing small full-stack projects.'
    ]
  },
  {
    role: 'Full Stack Development Training',
    organization: 'Saylani Mass I.T. Training (SMIT), Karachi',
    location: '',
    period: '2024',
    bullets: [
      'Training included frontend and backend development, RESTful APIs, SQL and NoSQL databases, and collaborative development exercises.'
    ]
  }
];
export const educationList: EducationItem[] = [
  {
    degree: 'Certificate in Full Stack Web Development',
    institution: 'Saylani Mass I.T. Training (SMIT), Karachi',
    year: '2024',
    description: ''
  },
  {
    degree: 'Networking Fundamentals Certificate',
    institution: 'Cisco Networking Academy, Karachi',
    year: '2023',
    description: ''
  }
];

export const certificationsList: CertificationItem[] = [
  { title: 'CSS Essentials', description: '' },
  { title: 'Microsoft Excel', description: '' },
  { title: 'Open Source Collaboration', description: '' }
];
