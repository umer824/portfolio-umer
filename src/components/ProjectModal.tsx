import React, { useEffect } from 'react';
import { X, Check, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1C1C]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white border border-[#EAE4DD] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1C1C1C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FDF8F3] text-[#666666] hover:text-[#1C1C1C] flex items-center justify-center transition-colors border border-[#EAE4DD]"
          aria-label="Close Case Study"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FDEEE8] text-[#F15A24] font-mono text-xs font-semibold uppercase mb-2">
            {project.badge}
          </span>
          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-extrabold text-[#1C1C1C]">
            {project.title}
          </h3>
        </div>

        {/* Architecture & Tech Stack */}
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="text-xs font-mono uppercase text-[#666666] font-bold tracking-wider mb-2">Overview</h4>
            <p className="text-[#666666] leading-relaxed">{project.caseStudy.overview}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-[#666666] font-bold tracking-wider mb-3">
              System Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.architecture.frontend && (
                <div className="p-3.5 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD]">
                  <span className="text-xs text-[#F15A24] font-semibold block mb-1">Frontend Engineering</span>
                  <span className="text-xs text-[#666666]">{project.caseStudy.architecture.frontend}</span>
                </div>
              )}
              {project.caseStudy.architecture.backend && (
                <div className="p-3.5 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD]">
                  <span className="text-xs text-[#1C1C1C] font-semibold block mb-1">Backend &amp; APIs</span>
                  <span className="text-xs text-[#666666]">{project.caseStudy.architecture.backend}</span>
                </div>
              )}
              {project.caseStudy.architecture.database && (
                <div className="p-3.5 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD]">
                  <span className="text-xs text-[#F15A24] font-semibold block mb-1">Database &amp; Storage</span>
                  <span className="text-xs text-[#666666]">{project.caseStudy.architecture.database}</span>
                </div>
              )}
              {project.caseStudy.architecture.tooling && (
                <div className="p-3.5 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD]">
                  <span className="text-xs text-[#1C1C1C] font-semibold block mb-1">Dev Tools &amp; Build</span>
                  <span className="text-xs text-[#666666]">{project.caseStudy.architecture.tooling}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-[#666666] font-bold tracking-wider mb-2">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.caseStudy.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                  <span className="text-[#666666] text-xs sm:text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 mt-6 border-t border-[#EAE4DD] flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1C1C] hover:bg-[#333333] text-white font-semibold text-xs transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub (umer824)
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F15A24] hover:bg-[#D94917] text-white font-semibold text-xs transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
