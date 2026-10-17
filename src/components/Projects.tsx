import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, Github } from 'lucide-react';
import { selectedProjects } from '../data/selectedProjects';
import { profile } from '../data/profile';

export const Projects: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="border-y border-[#EAE4DD] bg-[#FDF8F3] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#F15A24]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">Selected work</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">Selected Projects</h2>
          <p className="mt-3 text-base leading-7 text-[#666666]">A collection of projects showcasing my development practice, technical skills, and approach to building web experiences.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.06 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#EAE4DD] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#F15A24]/40 hover:shadow-[0_16px_36px_rgba(28,28,28,0.09)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[#EAE4DD] bg-[#F7F1EA]">
                <img src={project.image} alt={`${project.title} preview illustration`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy" decoding="async" />
                <span className="absolute right-4 top-4 rounded-full border border-[#EAE4DD] bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#666666] shadow-sm">{project.badge}</span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-extrabold text-[#1C1C1C] transition-colors group-hover:text-[#F15A24]">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#666666]">{project.description}</p>

                <div className="mt-5">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#77716B]">Technologies</h4>
                  <ul className="mt-2 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag} className="rounded-md border border-[#EAE4DD] bg-[#FDF8F3] px-2.5 py-1 text-[11px] font-medium text-[#444444]">{tag}</li>)}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#77716B]">Key Features</h4>
                  <ul className="mt-2 space-y-2 text-xs leading-5 text-[#666666]">
                    {project.features.map((feature) => <li key={feature} className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F15A24]" /><span>{feature}</span></li>)}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-[#EAE4DD] pt-5 mt-6">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1C1C1C] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2" aria-label={`Open ${project.title} GitHub repository`}>
                    <Github className="h-3.5 w-3.5" /> GitHub Repository <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F15A24] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#D94917] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2" aria-label={`Open ${project.title} live demo`}>
                      Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex min-h-11 items-center rounded-full border border-dashed border-[#EAE4DD] px-4 py-2 text-xs font-medium text-[#77716B]">Live demo coming soon</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#666666] transition hover:text-[#F15A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]">
            More projects on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
