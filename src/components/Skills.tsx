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
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EAE4DD] text-[#F15A24] font-mono text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1C1C1C] tracking-tight">
            Verified Skills &amp; Competencies
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
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
                  ? 'bg-[#1C1C1C] text-white shadow-sm'
                  : 'bg-white border border-[#EAE4DD] text-[#666666] hover:text-[#1C1C1C] hover:border-[#1C1C1C]'
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
              className="bg-white border border-[#EAE4DD] rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#F15A24]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center">
                  {iconMap[category.iconName] || <Layout className="w-5 h-5" />}
                </div>
                <h3 className="font-display font-bold text-[#1C1C1C] text-base">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDF8F3] border border-[#EAE4DD] text-[#1C1C1C] text-xs font-medium hover:border-[#F15A24] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24]" />
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
