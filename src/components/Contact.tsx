import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Hi Umer,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Interested in hiring or discussing an engineering role? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Primary Email */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Primary Email
                  </span>
                  <span className="font-semibold text-slate-100 text-sm truncate block mt-0.5">
                    {personalInfo.email}
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors"
              >
                {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    LinkedIn Profile
                  </span>
                  <span className="font-semibold text-slate-100 text-sm truncate block mt-0.5">
                    in/umer-jahangir-8b3583328
                  </span>
                </div>
              </div>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shrink-0 transition-colors"
              >
                Connect
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    GitHub Profile
                  </span>
                  <span className="font-semibold text-slate-100 text-sm truncate block mt-0.5">
                    github.com/{personalInfo.githubUsername}
                  </span>
                </div>
              </div>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium shrink-0 transition-colors"
              >
                Visit
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="font-semibold text-slate-100 text-sm truncate block mt-0.5">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors"
              >
                {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 flex items-center gap-3.5 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Current Base
                </span>
                <span className="font-semibold text-slate-100 text-sm block mt-0.5">
                  {personalInfo.specificLocation}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <h3 className="font-display font-bold text-slate-100 text-xl mb-6">Send a Direct Message</h3>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6">
                ✓ Thank you, <strong>{name}</strong>! Your email client has been prepared. If it didn't open automatically, you can email directly to{' '}
                <a href={`mailto:${personalInfo.email}`} className="underline font-bold">
                  {personalInfo.email}
                </a>.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Recruiter / Founder"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Junior Web Developer / Frontend Role Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Discuss role details, interview invitation, or project scope..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                Dispatch Email to Umer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
