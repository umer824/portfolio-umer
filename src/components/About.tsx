import React from 'react';
import { SectionReveal } from './SectionReveal';

const paragraphs = [
  "I'm a web developer based in Karachi, Pakistan, with a foundation in HTML, CSS, and JavaScript.",
  'Through my training at Saylani Mass I.T. Training and independent development practice, I have been building my understanding of modern web development.',
  "I'm interested in creating responsive interfaces, building interactive user experiences, and learning how frontend applications connect with backend services and databases.",
  "I'm continuously improving my technical skills, strengthening my problem-solving abilities, and looking for opportunities to contribute to real-world development projects.",
];

export const About: React.FC = () => (
  <section id="about" className="border-y border-[#EAE4DD] bg-white/60 py-20 sm:py-24">
    <SectionReveal className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-[#F15A24]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">A little introduction</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">About Me</h2>
        <div className="mt-7 flex flex-col gap-5 text-base leading-8 text-[#555555] sm:text-lg sm:leading-9">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </SectionReveal>
  </section>
);
