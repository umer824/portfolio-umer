import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Github, ExternalLink, Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend' | 'backend'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filterTabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend & React', value: 'frontend' },
    { label: 'Python & Backend', value: 'backend' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 border-y border-[#EAE4DD] bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EAE4DD] text-[#F15A24] font-mono text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            Real Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1C1C1C] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
            Authentic, hands-on software built and maintained by Umer Jahangir.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === tab.value
                  ? 'bg-[#1C1C1C] text-white shadow-sm'
                  : 'bg-white border border-[#EAE4DD] text-[#666666] hover:text-[#1C1C1C] hover:border-[#1C1C1C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col rounded-3xl bg-white border border-[#EAE4DD] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#F15A24]/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-[#FDF8F3] border-b border-[#EAE4DD] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#EAE4DD] text-[#1C1C1C] font-mono text-[11px] font-semibold shadow-sm">
                    {project.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display font-extrabold text-[#1C1C1C] text-xl mb-2 group-hover:text-[#F15A24] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#666666] text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 text-xs text-[#666666]">
                    {project.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#F15A24] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#FDF8F3] border border-[#EAE4DD] text-[11px] font-mono text-[#1C1C1C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-[#EAE4DD] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F15A24] hover:text-[#D94917] transition-colors"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      Architecture &amp; Specs
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold transition-colors shadow-sm"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F15A24] hover:bg-[#D94917] text-white text-xs font-bold transition-colors shadow-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={activeProjectModal} onClose={() => setActiveProjectModal(null)} />
    </section>
  );
};
