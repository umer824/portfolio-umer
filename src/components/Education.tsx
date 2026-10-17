import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { educationList, certificationsList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-y border-[#EAE4DD] bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EAE4DD] text-[#F15A24] font-mono text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1C1C1C] tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
            Formal training, technical qualifications, and specialized competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Formal Education */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[#1C1C1C] text-xl">Formal Education</h3>
            </div>

            <div className="space-y-4">
              {educationList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#EAE4DD] rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#F15A24]/40 transition-all"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FDEEE8] text-[#F15A24] font-mono text-xs font-semibold mb-2">
                    {item.year}
                  </span>
                  <h4 className="font-display font-bold text-[#1C1C1C] text-base">{item.degree}</h4>
                  <div className="text-[#F15A24] text-xs font-semibold mb-2">{item.institution}</div>
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[#1C1C1C] text-xl">
                Certifications &amp; Competencies
              </h3>
            </div>

            <div className="bg-white border border-[#EAE4DD] rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-5">
              {certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 pb-4 border-b border-[#EAE4DD]/70 last:border-b-0 last:pb-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] text-sm">{cert.title}</h4>
                    <p className="text-[#666666] text-xs mt-0.5 leading-relaxed">{cert.description}</p>
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
