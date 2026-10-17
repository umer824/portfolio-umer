import React from 'react';
import { Braces, Database, GitBranch, Lightbulb, PanelsTopLeft, RefreshCw, Smartphone, Waypoints } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

const strengths = [
  { title: 'Web Application Development', description: 'Building web applications through hands-on projects and practice.', icon: <Braces className="h-5 w-5" /> },
  { title: 'Frontend Engineering', description: 'Creating interfaces with HTML, CSS, JavaScript, and modern frameworks.', icon: <PanelsTopLeft className="h-5 w-5" /> },
  { title: 'Responsive Design', description: 'Designing layouts that adapt to different screen sizes.', icon: <Smartphone className="h-5 w-5" /> },
  { title: 'API Integration', description: 'Connecting frontend experiences with backend services.', icon: <Waypoints className="h-5 w-5" /> },
  { title: 'Database Fundamentals', description: 'Learning relational and NoSQL database concepts.', icon: <Database className="h-5 w-5" /> },
  { title: 'Version Control', description: 'Using Git to track changes and manage code.', icon: <GitBranch className="h-5 w-5" /> },
  { title: 'Problem Solving', description: 'Breaking development challenges into clear, manageable steps.', icon: <Lightbulb className="h-5 w-5" /> },
  { title: 'Continuous Learning', description: 'Growing through regular practice and exploring new technologies.', icon: <RefreshCw className="h-5 w-5" /> },
];

export const Strengths: React.FC = () => (
  <section id="strengths" className="border-y border-[#EAE4DD] bg-white/60 py-20 sm:py-24">
    <SectionReveal className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#F15A24]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">Ways I contribute</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">What I Bring to a Team</h2>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((strength) => (
          <li key={strength.title} className="group rounded-2xl border border-[#EAE4DD] bg-white p-5 shadow-[0_3px_16px_rgba(0,0,0,0.02)] transition duration-200 hover:-translate-y-0.5 hover:border-[#F15A24]/40 hover:shadow-[0_10px_26px_rgba(28,28,28,0.06)]">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24] transition-colors group-hover:bg-[#F15A24] group-hover:text-white">{strength.icon}</span>
            <h3 className="font-display text-sm font-bold leading-5 text-[#1C1C1C]">{strength.title}</h3>
            <p className="mt-2 text-xs leading-5 text-[#666666]">{strength.description}</p>
          </li>
        ))}
      </ul>
    </SectionReveal>
  </section>
);
