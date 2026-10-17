import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionReveal } from './SectionReveal';

type FormStatus = { type: 'error' | 'ready'; message: string } | null;

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(null);
  const [draftUrl, setDraftUrl] = useState('');

  const clearDraft = () => {
    setDraftUrl('');
    setStatus(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !subject || !message) {
      setDraftUrl('');
      setStatus({ type: 'error', message: 'Please complete all fields before preparing your email.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setDraftUrl('');
      setStatus({ type: 'error', message: 'Enter a valid email address so Umer can reply.' });
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    setDraftUrl(`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setStatus({ type: 'ready', message: 'Your message is ready as an email draft. This website has not sent it; open the draft in your email app to send it.' });
  };

  return (
    <section id="contact" className="border-y border-[#EAE4DD] bg-[#FDF8F3] py-20 sm:py-24">
      <SectionReveal className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#F15A24]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">Get in touch</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">Let's Build Something Together</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-[#666666]">I'm open to connecting with developers, collaborating on interesting projects, and exploring opportunities to grow as a web developer.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-5">
            <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 rounded-2xl border border-[#EAE4DD] bg-white p-5 shadow-[0_3px_16px_rgba(0,0,0,0.025)] transition hover:-translate-y-0.5 hover:border-[#F15A24]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]"><Mail className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#77716B]">Email</span><span className="mt-1 block truncate text-sm font-semibold text-[#1C1C1C]">{profile.email}</span></span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#99918A] transition group-hover:text-[#F15A24]" />
            </a>

            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-[#EAE4DD] bg-white p-5 shadow-[0_3px_16px_rgba(0,0,0,0.025)] transition hover:-translate-y-0.5 hover:border-[#F15A24]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]"><Linkedin className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#77716B]">LinkedIn</span><span className="mt-1 block truncate text-sm font-semibold text-[#1C1C1C]">Connect on LinkedIn</span></span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#99918A] transition group-hover:text-[#F15A24]" />
            </a>

            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-[#EAE4DD] bg-white p-5 shadow-[0_3px_16px_rgba(0,0,0,0.025)] transition hover:-translate-y-0.5 hover:border-[#F15A24]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]"><Github className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#77716B]">GitHub</span><span className="mt-1 block truncate text-sm font-semibold text-[#1C1C1C]">View GitHub Profile</span></span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#99918A] transition group-hover:text-[#F15A24]" />
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-[#EAE4DD] bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDEEE8] text-[#F15A24]"><MapPin className="h-5 w-5" /></span>
              <span><span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#77716B]">Location</span><span className="mt-1 block text-sm font-semibold text-[#1C1C1C]">{profile.location}</span></span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#EAE4DD] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-7">
            <h3 className="font-display text-xl font-bold text-[#1C1C1C]">Send a message</h3>
            <p className="mt-2 text-sm leading-6 text-[#666666]">This form prepares a message in your email app. It does not send information to a website server.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-[#1C1C1C]">Name</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} onChange={clearDraft} className="w-full rounded-xl border border-[#EAE4DD] bg-[#FDF8F3] px-4 py-3 text-sm text-[#1C1C1C] outline-none transition placeholder:text-[#888078] focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/15" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-[#1C1C1C]">Email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} onChange={clearDraft} className="w-full rounded-xl border border-[#EAE4DD] bg-[#FDF8F3] px-4 py-3 text-sm text-[#1C1C1C] outline-none transition placeholder:text-[#888078] focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/15" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-semibold text-[#1C1C1C]">Subject</label>
                <input id="contact-subject" name="subject" type="text" required maxLength={150} onChange={clearDraft} className="w-full rounded-xl border border-[#EAE4DD] bg-[#FDF8F3] px-4 py-3 text-sm text-[#1C1C1C] outline-none transition placeholder:text-[#888078] focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/15" placeholder="What would you like to discuss?" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-[#1C1C1C]">Message</label>
                <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={5} onChange={clearDraft} className="w-full resize-y rounded-xl border border-[#EAE4DD] bg-[#FDF8F3] px-4 py-3 text-sm leading-6 text-[#1C1C1C] outline-none transition placeholder:text-[#888078] focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/15" placeholder="Write your message..." />
              </div>

              {status && <p role={status.type === 'error' ? 'alert' : 'status'} aria-live={status.type === 'error' ? 'assertive' : 'polite'} className={`rounded-xl border p-4 text-sm leading-6 ${status.type === 'error' ? 'border-red-200 bg-red-50 text-red-800' : 'border-[#F15A24]/25 bg-[#FDEEE8] text-[#5C2B1A]'}`}>{status.message}</p>}

              {draftUrl ? (
                <a href={draftUrl} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F15A24] px-5 py-3 text-sm font-bold text-white shadow-[0_5px_18px_rgba(241,90,36,0.2)] transition hover:bg-[#D94917] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2">
                  <Mail className="h-4 w-4" /> Open Draft in Email App
                </a>
              ) : (
                <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F15A24] px-5 py-3 text-sm font-bold text-white shadow-[0_5px_18px_rgba(241,90,36,0.2)] transition hover:bg-[#D94917] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2">
                  <Send className="h-4 w-4" /> Prepare Email
                </button>
              )}
            </form>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};
