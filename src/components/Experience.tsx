import React from 'react';
import { BookOpen, Code2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';

export const Experience: React.FC = () => (
  <section id="experience" className="py-20 sm:py-24">
    <SectionReveal className="mx-auto max-w-5xl px-6">
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#F15A24]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">Practice &amp; Training</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">My Development Journey</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {experienceTimeline.map((item, index) => (
          <article key={item.role} className="group rounded-2xl border border-[#EAE4DD] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)] transition duration-200 hover:-translate-y-0.5 hover:border-[#F15A24]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]">
                {index === 0 ? <Code2 className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
              </span>
              <span className="rounded-full bg-[#FDF8F3] px-3 py-1.5 text-xs font-bold text-[#555555]">{item.period}</span>
            </div>

            <h3 className="mt-5 font-display text-xl font-extrabold text-[#1C1C1C]">{item.role}</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-[#F15A24]">{item.organization}</p>

            {index === 0 && <p className="mt-4 inline-flex rounded-md border border-[#EAE4DD] bg-[#FDF8F3] px-2.5 py-1 text-[11px] font-semibold text-[#666666]">Self-directed projects · Not employment</p>}

            <ul className="mt-5 space-y-3 border-t border-[#EAE4DD] pt-5 text-sm leading-6 text-[#666666]">
              {item.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F15A24]" aria-hidden="true" /><span>{bullet}</span></li>)}
            </ul>
          </article>
        ))}
      </div>
    </SectionReveal>
  </section>
);
