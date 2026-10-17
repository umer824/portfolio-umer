import { Project, SkillCategory, TimelineItem, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: 'Umer Jahangir',
  title: 'Junior Web Developer | Frontend Specialist | Aspiring Full Stack Engineer',
  roles: ['Junior Web Developer', 'Frontend Specialist', 'Aspiring Full Stack Engineer'],
  location: 'Karachi, Sindh, Pakistan',
  specificLocation: 'Bahadurabad, Karachi, Pakistan',
  email: 'jahangiru837@gmail.com',
  phone: '+92 317 2874875',
  githubUrl: 'https://github.com/umer824',
  githubUsername: 'umer824',
  linkedinUrl: 'https://www.linkedin.com/in/umer-jahangir-8b3583328/',
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

export const projectsData: Project[] = [
  {
    id: 'linguaquest',
    title: 'LinguaQuest — Gamified Language Learning',
    category: 'fullstack',
    description:
      'A modern, multilingual learning web application inspired by Duolingo. Features progressive course modules across 10 global languages, sequential lesson unlocking, interactive audio & translation exercises, streaks, and XP points.',
    image: '/assets/linguaquest-preview.svg',
    badge: 'Full Stack Web App',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase'],
    features: [
      '10 target languages including English, Urdu, Spanish, French, Japanese',
      'Real-time Firebase Firestore data syncing and authentication',
      'TypeScript backend with Express.js APIs & Motion animations',
      'Sequential level progression requiring prerequisite mastery'
    ],
    githubUrl: 'https://github.com/umer824/leraning-languages',
    caseStudy: {
      overview:
        'LinguaQuest is a gamified language-learning platform designed with modern interactive architecture inspired by Duolingo. Built to support progressive course curricula across 10 top spoken languages including English, Urdu, Spanish, French, Japanese, Arabic, and German.',
      architecture: {
        frontend: 'React 19, TypeScript, Tailwind CSS, Motion library for spring animations, Lucide icons.',
        backend: 'Node.js with Express.js (TypeScript) handling API routing and progress tracking.',
        database: 'Firebase Firestore (NoSQL) for real-time progress syncing, streaks, and XP points; Firebase Authentication.',
        tooling: 'Vite build tool, TypeScript compiler, ESLint.'
      },
      highlights: [
        'Sequential unlocking mechanism requiring prerequisite mastery',
        'Multilingual dictionary mapping across 10 major global languages',
        'Interactive translation & audio quizzes with reactive feedback',
        'Persistent streak and XP point calculation algorithms'
      ]
    }
  },
  {
    id: 'iris',
    title: 'Iris AI Assistant — Voice & Command Engine',
    category: 'backend',
    description:
      'An intelligent voice and command assistant web platform built with an asynchronous Python FastAPI server, SQLAlchemy ORM, and SQLite database for session persistence and command handling.',
    image: '/assets/iris-preview.svg',
    badge: 'Python & FastAPI',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Pydantic', 'JavaScript'],
    features: [
      'Asynchronous FastAPI endpoints with Pydantic model validation',
      'SQLAlchemy ORM integration with persistent SQLite storage',
      'Interactive frontend audio orb & speech synthesis processing',
      'Millisecond-level command parser and session telemetry'
    ],
    caseStudy: {
      overview:
        'A voice- and text-enabled AI assistant web platform running on a Python backend with asynchronous REST APIs and persistent database memory.',
      architecture: {
        backend: 'Python, FastAPI (asynchronous endpoint handling), Uvicorn ASGI server, Pydantic data schemas.',
        database: 'SQLAlchemy ORM connected to SQLite database for storing commands, transcripts, and preferences.',
        frontend: 'Vanilla JavaScript, CSS3 custom properties, responsive audio waveform visualization.'
      },
      highlights: [
        'Real-time command parsing and classification',
        'Dynamic voice synthesis integration',
        'Structured schema validation with Pydantic',
        'Fast and reliable SQLite session persistence'
      ]
    }
  },
  {
    id: 'shoestore',
    title: 'KicksHub — React 19 E-Commerce Storefront',
    category: 'frontend',
    description:
      'A modern, responsive footwear e-commerce storefront showcasing fluid component architectures, reactive cart state management, zero layout shifts, and rapid build optimization using Vite.',
    image: '/assets/shoestore-preview.svg',
    badge: 'React 19 & Vite',
    tags: ['React 19', 'Vite', 'JavaScript', 'Modern CSS3', 'Responsive UI'],
    features: [
      'Built with latest React 19 and Vite development server',
      'Interactive product catalog with dynamic filter and counter state',
      'Rigorous code quality enforced via modern ESLint configuration',
      'Mobile-optimized touch interactions and instant response'
    ],
    caseStudy: {
      overview:
        'A modern, high-speed footwear retail web storefront showcasing component-driven UI architecture, reactive cart state, and smooth catalog browsing.',
      architecture: {
        frontend: 'React 19, Vite (instant HMR and production bundle optimization), Modern CSS3 with Flexbox & Grid.',
        tooling: 'ESLint configuration with react-hooks and react-refresh rules.'
      },
      highlights: [
        'Instantaneous search and category filtering without layout shifts',
        'Reactive cart state with quantity counters and subtotal calculations',
        'Sub-second hot module replacement during development',
        'Mobile-first responsive fluid grids'
      ]
    }
  },
  {
    id: 'hero3d',
    title: 'Mobile-First 3D Perspective UI Engine',
    category: 'frontend',
    description:
      'An advanced UI research showcase implementing spatial depth with native CSS 3D matrix transforms, sub-pixel glassmorphism, and responsive touch/cursor gesture tracking at 60 FPS.',
    image: '/assets/hero3d-preview.svg',
    badge: 'CSS3 & DOM Engineering',
    tags: ['CSS 3D Transforms', 'Glassmorphism', 'Vanilla JS', 'Touch Gestures'],
    features: [
      'Native CSS perspective and rotate3d matrix acceleration',
      'Zero external dependencies — pure vanilla JS and CSS variables',
      'Mobile-first responsive viewport architecture',
      'Hardware-accelerated 60 FPS rendering on modern displays'
    ],
    caseStudy: {
      overview:
        'An interactive UI research project focusing on hardware-accelerated 3D CSS perspectives, glassmorphism, and real-time touch/pointer gesture tracking without external 3D libraries.',
      architecture: {
        frontend: 'Semantic HTML5, CSS3 transform: perspective(), rotate3d(), CSS custom properties.',
        tooling: 'Zero build tools required, pure browser-native execution.'
      },
      highlights: [
        '60 FPS silky smooth performance on mobile and desktop',
        'Real-time pointer and orientation coordinate normalization',
        'Multi-layer glassmorphic card stacking with sub-pixel blur',
        'Accessible fallback for users with prefers-reduced-motion'
      ]
    }
  }
];

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
    role: 'Full Stack Developer',
    organization: 'Self-Directed Web Projects',
    location: 'Karachi, Pakistan',
    period: 'Present',
    bullets: [
      'Designed and developed end-to-end web applications using modern JavaScript frameworks with responsive UI/UX.',
      'Built RESTful APIs and optimized backend services using Node.js, Express.js, and Python FastAPI.',
      'Implemented version control workflows with Git and GitHub ensuring clean, collaborative development.',
      'Focused on code quality, performance optimization, and scalable component architecture.',
      'Developed progressive web applications emphasizing user accessibility and responsive design standards.'
    ]
  },
  {
    role: 'Frontend Development Specialist',
    organization: 'Training & Skill Development',
    location: 'Karachi, Pakistan',
    period: 'In Progress / Continuous',
    bullets: [
      'Mastered HTML5 and CSS3 for semantic, accessible, and responsive web interfaces across devices.',
      'Developed deep proficiency in JavaScript for dynamic interactivity and complex DOM manipulation.',
      'Gained expertise in modern frameworks (React, Vue.js) for scalable component-based architectures.',
      'Engaged in daily technical practice and implementation of emerging modern web standards.'
    ]
  },
  {
    role: 'Sales & Customer Operations',
    organization: 'Retail & Customer Services',
    location: 'Karachi, Pakistan',
    period: '2024 – 2025',
    bullets: [
      'Cultivated high-level professional communication, active listening, and conflict resolution in fast-paced retail environments.',
      'Honed rigorous punctuality, cash administration, inventory accountability, and day-to-day work discipline.'
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: 'Certificate in Web Development',
    institution: 'Saylani Mass I.T Training (S.M.I.T) — Karachi',
    year: '2024',
    description:
      'Comprehensive Full Stack training covering frontend engineering, backend API development, and modern database technologies.'
  },
  {
    degree: 'Networking Fundamentals Certificate',
    institution: 'Cisco Networking Academy — Karachi',
    year: '2023',
    description:
      'In-depth coursework on TCP/IP protocols, routing principles, subnets, packet flow, and client-server network architecture foundations.'
  },
  {
    degree: 'Secondary School Certificate (Matriculation)',
    institution: 'Board of Secondary Education Karachi (BSEK) / Crown Public School',
    year: 'Completed',
    description:
      'Core academic foundation in General Science, Mathematics, English, and analytical problem-solving.'
  }
];

export const certificationsList: CertificationItem[] = [
  {
    title: 'CSS Essentials Certification',
    description: 'Advanced styling, modern Flexbox/Grid layouts, and responsive design techniques.'
  },
  {
    title: 'Full Stack Development Fundamentals',
    description: 'Complete end-to-end web development stack training (Client, Server, DB).'
  },
  {
    title: 'Open Source Collaboration Competency',
    description: 'Git version control workflows, branching, merging, pull requests, and GitHub best practices.'
  },
  {
    title: 'Microsoft Excel Certified',
    description: 'Data entry, spreadsheet management, formulas, and structured data analysis.'
  }
];
