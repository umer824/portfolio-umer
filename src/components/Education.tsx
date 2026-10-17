import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { educationList, certificationsList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Formal training, technical qualifications, and specialized competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Formal Education */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-100 text-xl">Formal Education</h3>
            </div>

            <div className="space-y-4">
              {educationList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:border-cyan-500/40 transition-all"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold mb-2">
                    {item.year}
                  </span>
                  <h4 className="font-display font-bold text-slate-100 text-base">{item.degree}</h4>
                  <div className="text-cyan-400 text-xs font-semibold mb-2">{item.institution}</div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-100 text-xl">
                Certifications &amp; Competencies
              </h3>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-5">
              {certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 pb-4 border-b border-white/5 last:border-b-0 last:pb-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 text-sm">{cert.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
