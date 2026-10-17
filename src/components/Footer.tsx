import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 bg-[#FDF8F3] text-[#666666] text-xs border-t border-[#EAE4DD]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EAE4DD]/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#EAE4DD] flex items-center justify-center font-display font-bold text-[#1C1C1C] text-xs shadow-sm relative">
              <span>UJ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24] absolute top-1.5 right-1.5" />
            </div>
            <div>
              <span className="font-display font-bold text-[#1C1C1C] text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-[#666666]">
                {personalInfo.title}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium">
            <a href="#about" className="hover:text-[#F15A24] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#F15A24] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#F15A24] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#F15A24] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#F15A24] transition-colors">Education</a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" download className="text-[#F15A24] hover:underline font-semibold">
              Resume (PDF)
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666666] text-center sm:text-left">
          <div>
            &copy; 2026 {personalInfo.name}. Designed with minimalist Apple-inspired aesthetics.
          </div>
          <div>
            All technical competencies, education, and projects verified strictly from provided credentials.
          </div>
        </div>
      </div>
    </footer>
  );
};
