import React, { useState } from 'react';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All Technologies', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend & APIs', value: 'backend' },
    { label: 'Databases', value: 'databases' },
    { label: 'Tools & DevOps', value: 'tools' },
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'frontend') return cat.title.toLowerCase().includes('frontend');
    if (selectedFilter === 'backend') return cat.title.toLowerCase().includes('backend');
    if (selectedFilter === 'databases') return cat.title.toLowerCase().includes('database');
    if (selectedFilter === 'tools') return cat.title.toLowerCase().includes('tools');
    return true;
  });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Verified Skills &amp; Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Technologies practiced and demonstrated through active projects and certified training.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === opt.value
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900/70 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:border-cyan-500/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  {iconMap[category.iconName] || <Layout className="w-5 h-5" />}
                </div>
                <h3 className="font-display font-bold text-slate-100 text-base">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-medium transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
