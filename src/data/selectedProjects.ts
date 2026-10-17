import { Project } from '../types';

// Keep project titles, verified repository/demo URLs, descriptions, and features here.
// Screenshot assets are intentionally marked as placeholders until real captures are added.
export const selectedProjects: Project[] = [
  {
    id: 'clearvoice',
    title: 'ClearVoice',
    category: 'fullstack',
    description: 'A browser-based audio noise remover. The repository describes audio processing, before-and-after previews, and WAV export.',
    image: '/assets/project-preview-placeholder.svg',
    badge: 'Screenshot coming soon',
    tags: ['Next.js 15', 'React Three Fiber', 'Web Audio API', 'WaveSurfer.js', 'Tailwind CSS 4'],
    features: ['Audio cleanup using browser audio filters and compression', 'Before-and-after audio preview with synchronized waveforms', 'One-click WAV export'],
    githubUrl: 'https://github.com/umer824/ClearVoice',
    liveUrl: 'https://clearvoice32.netlify.app/',
    caseStudy: {
      overview: 'A browser-based audio noise removal project. Project details are summarized from the repository README.',
      architecture: { frontend: 'Next.js 15, React Three Fiber, Tailwind CSS 4.', tooling: 'Web Audio API, WaveSurfer.js, Lucide React.' },
      highlights: ['Audio preview before and after processing', 'Browser-based audio processing', 'WAV export'],
    },
  },
  {
    id: 'shoes',
    title: 'Shoes Website',
    category: 'frontend',
    description: 'A responsive shoes website focused on clean UI design, structured layout, and a user-friendly experience.',
    image: '/assets/project-preview-placeholder.svg',
    badge: 'Screenshot coming soon',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive website layout', 'Clean interface and structured page layout'],
    githubUrl: 'https://github.com/umer824/shoes',
    liveUrl: 'https://umer824.github.io/shoes/',
    caseStudy: {
      overview: 'A responsive shoes website built with HTML, CSS, and basic JavaScript.',
      architecture: { frontend: 'HTML, CSS, and basic JavaScript.' },
      highlights: ['Responsive web design', 'Clean UI design and structured layout'],
    },
  },
  {
    id: 'learning-languages',
    title: 'Learning Languages',
    category: 'frontend',
    description: 'Project description and feature details are coming soon.',
    image: '/assets/project-preview-placeholder.svg',
    badge: 'Details coming soon',
    tags: ['TypeScript'],
    features: ['Feature details coming soon.'],
    githubUrl: 'https://github.com/umer824/leraning-languages',
    caseStudy: {
      overview: 'Project details coming soon.',
      architecture: { frontend: 'TypeScript (repository language).' },
      highlights: ['Project details coming soon.'],
    },
  },
];
