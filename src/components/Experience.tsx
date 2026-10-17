import React from 'react';
import { experienceTimeline } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            Career Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Hands-on project engineering and professional skill development trajectory.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-10">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Node indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-md shadow-cyan-400/50 group-hover:scale-125 transition-transform" />

              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-extrabold text-slate-100 text-lg sm:text-xl">
                    {item.role}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs font-semibold">
                    {item.period}
                  </span>
                </div>

                <div className="text-indigo-400 text-xs sm:text-sm font-semibold mb-4">
                  {item.organization} • {item.location}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold">▸</span>
                      <span>{bullet}</span>
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
