import React from 'react';
import { Braces, Database, GitBranch, Layers3, Server, Sparkles } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills?: string[];
  learning?: string[];
};

const categories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Layers3 className="h-5 w-5" />,
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Vue.js', 'Responsive Design', 'CSS Flexbox', 'CSS Grid'],
  },
  {
    title: 'Backend Development',
    icon: <Server className="h-5 w-5" />,
    skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    learning: ['GraphQL · In Progress'],
  },
  {
    title: 'Databases',
    icon: <Database className="h-5 w-5" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Developer Tools',
    icon: <GitBranch className="h-5 w-5" />,
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'Command Line / Terminal'],
  },
  {
    title: 'Currently Learning',
    icon: <Sparkles className="h-5 w-5" />,
    learning: ['Full-stack integration', 'Advanced React patterns', 'Deployment workflows'],
  },
];

export const Skills: React.FC = () => (
  <section id="skills" className="py-20 sm:py-24">
    <SectionReveal className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#F15A24]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">Skills &amp; Technologies</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">My Technical Toolkit</h2>
        <p className="mt-3 text-base leading-7 text-[#666666]">The tools I work with and the areas I’m developing next.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <article key={category.title} className="rounded-2xl border border-[#EAE4DD] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)] transition duration-200 hover:-translate-y-0.5 hover:border-[#F15A24]/40 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]">{category.icon}</span>
              <h3 className="font-display text-base font-bold text-[#1C1C1C]">{category.title}</h3>
            </div>
            {category.skills && <ul className="flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
              {category.skills.map((skill) => <li key={skill} className="rounded-lg border border-[#EAE4DD] bg-[#FDF8F3] px-3 py-1.5 text-xs font-medium text-[#444444]">{skill}</li>)}
            </ul>}
            {category.learning && <>
              {category.skills && <p className="mb-2 mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F15A24]">In progress</p>}
              <ul className="flex flex-wrap gap-2" aria-label={`${category.title} topics`}>
                {category.learning.map((skill) => <li key={skill} className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-[#E9A58C] bg-[#FFF9F6] px-3 py-1.5 text-xs font-medium text-[#8A452D]"><Braces className="h-3 w-3" />{skill}</li>)}
              </ul>
            </>}
          </article>
        ))}
      </div>
    </SectionReveal>
  </section>
);
