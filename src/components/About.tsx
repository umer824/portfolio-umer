import React from 'react';
import { User, Award, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Dedicated to Clean Code &amp; Exceptional UX
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            A developer who bridges technical precision with modern, responsive interface design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-slate-300 text-base leading-relaxed">
            {personalInfo.aboutNarrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-cyan-400 border border-white/5 text-slate-200 text-sm font-medium italic mt-2">
              "Transforming ideas into interactive digital experiences. Combining daily technical practice with hands-on project engineering to build responsive, scalable, user-centric web applications."
            </div>
          </div>

          {/* Right: Quick Specs Card */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md">
            <h3 className="font-display font-bold text-slate-100 text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Developer Profile Snapshot
            </h3>

            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3.5 pb-3.5 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Specialization
                  </span>
                  <span className="font-semibold text-slate-100 mt-0.5 block">
                    Frontend Engineering &amp; Full Stack Development
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5 pb-3.5 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Formal Training
                  </span>
                  <span className="font-semibold text-slate-100 mt-0.5 block">
                    Saylani Mass I.T Training (S.M.I.T) — 2024
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5 pb-3.5 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Spoken Languages
                  </span>
                  <span className="font-semibold text-slate-100 mt-0.5 block">
                    English (Fluent) • Urdu (Native)
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5 pb-3.5 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Location
                  </span>
                  <span className="font-semibold text-slate-100 mt-0.5 block">
                    {personalInfo.specificLocation}
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Availability
                  </span>
                  <span className="font-semibold text-emerald-400 mt-0.5 block">
                    {personalInfo.availability}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
