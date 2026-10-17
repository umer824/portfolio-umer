import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0) => reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, delay } };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#F15A24]/[0.07] blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start lg:col-span-7">
          <motion.div {...entrance()} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#EAE4DD] bg-white/80 px-3.5 py-2 text-[11px] font-bold tracking-[0.16em] text-[#666666] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F15A24]" />
            {profile.title.toUpperCase()}
          </motion.div>

          <motion.h1 {...entrance(0.06)} className="max-w-3xl font-display text-[clamp(2.8rem,6vw,5.4rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#1C1C1C]">
            Building the Web,<br />
            <span className="text-[#F15A24]">One Experience</span><br className="hidden sm:block" /> at a Time.
          </motion.h1>

          <motion.p {...entrance(0.12)} className="mt-7 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
            I'm {profile.name}, a {profile.title} based in Karachi, Pakistan. I enjoy building responsive, accessible, and user-friendly web experiences while continuously expanding my knowledge of modern frontend and full-stack technologies.
          </motion.p>

          <motion.div {...entrance(0.18)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F15A24] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(241,90,36,0.22)] transition hover:-translate-y-0.5 hover:bg-[#D94917] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2">
              Explore My Projects <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href={personalInfo.resumeUrl} download="Umer_Jahangir_Resume.pdf" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#EAE4DD] bg-white px-6 py-3 text-sm font-bold text-[#1C1C1C] transition hover:-translate-y-0.5 hover:border-[#1C1C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2">
              <Download className="h-4 w-4 text-[#F15A24]" /> Download Resume
            </a>
          </motion.div>

          <motion.div {...entrance(0.24)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#EAE4DD] pt-5">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 py-2 text-sm font-semibold text-[#666666] transition hover:text-[#F15A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-sm" aria-label={`Connect with ${profile.name} on LinkedIn`}>
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 py-2 text-sm font-semibold text-[#666666] transition hover:text-[#F15A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-sm" aria-label={`View ${profile.name}'s GitHub profile`}>
              <Github className="h-4 w-4" /> View GitHub Profile <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>

        <motion.div {...(reduceMotion ? {} : { initial: { opacity: 0, scale: 0.97 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.55, delay: 0.12 } })} className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:ml-auto">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-[#F15A24]/20" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#EAE4DD] bg-white p-2.5 shadow-[0_24px_70px_rgba(28,28,28,0.12)]">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.25rem] bg-[#FDF8F3]">
              <img src={personalInfo.photoUrl} alt="Umer Jahangir" className="h-full w-full object-cover object-[center_20%]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C1C1C]/75 to-transparent px-5 pb-5 pt-16 text-white">
                <div className="font-display text-xl font-bold">{profile.name}</div>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-white/80"><MapPin className="h-3.5 w-3.5 text-[#FF9A73]" /> {profile.location}</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-6 hidden items-center gap-3 rounded-2xl border border-[#EAE4DD] bg-white px-4 py-3 shadow-lg sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FDEEE8] font-mono text-sm font-bold text-[#F15A24]">&lt;/&gt;</span>
            <span className="text-xs font-semibold leading-5 text-[#1C1C1C]">Thoughtful code,<br />useful experiences</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
