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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-white/10"
          aria-label="Close Case Study"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs font-semibold uppercase mb-2">
            {project.badge}
          </span>
          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {project.title}
          </h3>
        </div>

        {/* Architecture & Tech Stack */}
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-2">Overview</h4>
            <p className="text-slate-300 leading-relaxed">{project.caseStudy.overview}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
              System Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.architecture.frontend && (
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <span className="text-xs text-cyan-400 font-semibold block mb-1">Frontend Engineering</span>
                  <span className="text-xs text-slate-300">{project.caseStudy.architecture.frontend}</span>
                </div>
              )}
              {project.caseStudy.architecture.backend && (
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <span className="text-xs text-indigo-400 font-semibold block mb-1">Backend &amp; APIs</span>
                  <span className="text-xs text-slate-300">{project.caseStudy.architecture.backend}</span>
                </div>
              )}
              {project.caseStudy.architecture.database && (
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <span className="text-xs text-emerald-400 font-semibold block mb-1">Database &amp; Storage</span>
                  <span className="text-xs text-slate-300">{project.caseStudy.architecture.database}</span>
                </div>
              )}
              {project.caseStudy.architecture.tooling && (
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <span className="text-xs text-amber-400 font-semibold block mb-1">Dev Tools &amp; Build</span>
                  <span className="text-xs text-slate-300">{project.caseStudy.architecture.tooling}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-2">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.caseStudy.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs sm:text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
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
