import React from 'react';
import { experienceTimeline } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EAE4DD] text-[#F15A24] font-mono text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            Career Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1C1C1C] tracking-tight">
            Professional Experience
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
            Hands-on project engineering and professional skill development trajectory.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#EAE4DD] space-y-10">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Node indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FDF8F3] border-2 border-[#F15A24] group-hover:scale-125 transition-transform" />

              <div className="bg-white border border-[#EAE4DD] rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:border-[#F15A24]/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-display font-extrabold text-[#1C1C1C] text-lg sm:text-xl">
                    {item.role}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#FDEEE8] text-[#F15A24] font-mono text-xs font-semibold">
                    {item.period}
                  </span>
                </div>

                <div className="text-[#666666] text-xs sm:text-sm font-semibold mb-4">
                  {item.organization} • {item.location}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#666666]">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-[#F15A24] font-bold">▸</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
