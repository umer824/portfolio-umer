import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { educationList, certificationsList } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';

export const Education: React.FC = () => (
  <section id="education" className="border-y border-[#EAE4DD] bg-[#FDF8F3] py-20 sm:py-24">
    <SectionReveal className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#F15A24]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">Learning &amp; Credentials</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">Education &amp; Certifications</h2>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]"><GraduationCap className="h-5 w-5" /></span>
            <h3 className="font-display text-xl font-bold text-[#1C1C1C]">Education</h3>
          </div>
          <div className="relative space-y-4 before:absolute before:bottom-5 before:left-[19px] before:top-5 before:w-px before:bg-[#EAE4DD]">
            {educationList.map((item) => (
              <article key={item.degree} className="relative flex gap-4 rounded-2xl border border-[#EAE4DD] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.025)] transition hover:border-[#F15A24]/40 sm:p-6">
                <span className="relative z-10 mt-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-white bg-[#F15A24] ring-2 ring-[#FDEEE8]" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="font-display text-base font-bold text-[#1C1C1C]">{item.degree}</h4>
                    <span className="rounded-full bg-[#FDEEE8] px-3 py-1 text-xs font-bold text-[#B64620]">{item.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#666666]">{item.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]"><Award className="h-5 w-5" /></span>
            <h3 className="font-display text-xl font-bold text-[#1C1C1C]">Additional Credentials</h3>
          </div>
          <ul className="divide-y divide-[#EAE4DD] rounded-2xl border border-[#EAE4DD] bg-white px-5 shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
            {certificationsList.map((credential) => (
              <li key={credential.title} className="flex items-center gap-3 py-4 text-sm font-semibold text-[#333333]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#F15A24]" aria-hidden="true" />
                {credential.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionReveal>
  </section>
);
