import React from 'react';
import { User, Award, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-y border-[#EAE4DD] bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EAE4DD] text-[#F15A24] font-mono text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1C1C1C] tracking-tight">
            Dedicated to Clean Code &amp; Exceptional UX
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
            A developer who bridges technical precision with modern, responsive interface design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-[#666666] text-base leading-relaxed">
            {personalInfo.aboutNarrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="p-5 rounded-r-2xl bg-white border-l-4 border-[#F15A24] border-y border-r border-[#EAE4DD] text-[#1C1C1C] text-sm font-medium italic mt-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              "Transforming ideas into interactive digital experiences. Combining daily technical practice with hands-on project engineering to build responsive, scalable, user-centric web applications."
            </div>
          </div>

          {/* Right: Quick Specs Card */}
          <div className="lg:col-span-5 bg-white border border-[#EAE4DD] rounded-3xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
              Developer Profile Snapshot
            </h3>

            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3.5 pb-3.5 border-b border-[#EAE4DD]/70">
                <div className="w-8 h-8 rounded-lg bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    Specialization
                  </span>
                  <span className="font-semibold text-[#1C1C1C] mt-0.5 block">
                    Frontend Engineering &amp; Full Stack Development
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5 pb-3.5 border-b border-[#EAE4DD]/70">
                <div className="w-8 h-8 rounded-lg bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    Formal Training
                  </span>
                  <span className="font-semibold text-[#1C1C1C] mt-0.5 block">
                    Saylani Mass I.T Training (S.M.I.T) — 2024
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5 pb-3.5 border-b border-[#EAE4DD]/70">
                <div className="w-8 h-8 rounded-lg bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    Spoken Languages
                  </span>
                  <span className="font-semibold text-[#1C1C1C] mt-0.5 block">
                    English (Fluent) • Urdu (Native)
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5 pb-3.5 border-b border-[#EAE4DD]/70">
                <div className="w-8 h-8 rounded-lg bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    Location
                  </span>
                  <span className="font-semibold text-[#1C1C1C] mt-0.5 block">
                    {personalInfo.specificLocation}
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    Availability
                  </span>
                  <span className="font-semibold text-[#F15A24] mt-0.5 block">
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
