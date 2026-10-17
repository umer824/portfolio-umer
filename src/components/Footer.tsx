import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 text-slate-400 text-xs border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              UJ
            </div>
            <div>
              <span className="font-display font-bold text-slate-100 text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-400">
                {personalInfo.title}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" download className="text-cyan-400 hover:underline">
              Resume (PDF)
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            &copy; 2026 {personalInfo.name}. Built with React, Vite, TypeScript &amp; Tailwind CSS.
          </div>
          <div>
            All technical competencies, education, and projects verified strictly from provided credentials.
          </div>
        </div>
      </div>
    </footer>
  );
};
