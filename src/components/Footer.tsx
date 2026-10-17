import React from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

const footerNavigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-[#EAE4DD] bg-[#FDF8F3] text-[#666666]">
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
      <div className="grid grid-cols-1 gap-10 border-b border-[#EAE4DD] pb-9 md:grid-cols-3 md:gap-8">
        <div>
          <a href="#home" className="inline-flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]" aria-label={`${profile.name}, home`}>
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#EAE4DD] bg-white font-display text-sm font-extrabold text-[#1C1C1C] shadow-sm">
              UJ<span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#F15A24]" />
            </span>
            <span><span className="block font-display text-sm font-bold text-[#1C1C1C]">{profile.name}</span><span className="mt-0.5 block text-xs">{profile.title}</span></span>
          </a>
          <p className="mt-4 inline-flex items-center gap-2 text-xs"><MapPin className="h-3.5 w-3.5 text-[#F15A24]" />{profile.location}</p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#77716B]">Navigation</h2>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium">
            {footerNavigation.map((item) => <li key={item.href}><a href={item.href} className="inline-flex min-h-11 items-center px-1.5 -mx-1.5 rounded-sm transition-colors hover:text-[#F15A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]">{item.label}</a></li>)}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#77716B]">Connect</h2>
          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name} at ${profile.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#EAE4DD] bg-white px-3.5 text-xs font-semibold text-[#333333] transition hover:border-[#F15A24]/50 hover:text-[#F15A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"><Mail className="h-4 w-4" />Email</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${profile.name} on LinkedIn, opens in a new tab`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#EAE4DD] bg-white px-3.5 text-xs font-semibold text-[#333333] transition hover:border-[#F15A24]/50 hover:text-[#F15A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"><Linkedin className="h-4 w-4" />LinkedIn<ArrowUpRight className="h-3 w-3" /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${profile.name} on GitHub, opens in a new tab`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#EAE4DD] bg-white px-3.5 text-xs font-semibold text-[#333333] transition hover:border-[#F15A24]/50 hover:text-[#F15A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"><Github className="h-4 w-4" />GitHub<ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Umer Jahangir</p>
        <p>Designed and developed with care by Umer Jahangir.</p>
      </div>
    </div>
  </footer>
);
