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
    <section id="contact" className="py-24 border-y border-[#EAE4DD] bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EAE4DD] text-[#F15A24] font-mono text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1C1C1C] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
            Interested in hiring or discussing an engineering role? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Primary Email */}
            <div className="bg-white border border-[#EAE4DD] rounded-3xl p-5 flex items-center justify-between gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    Primary Contact Email
                  </span>
                  <span className="font-semibold text-[#1C1C1C] text-sm truncate block mt-0.5">
                    {personalInfo.email}
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="px-3.5 py-1.5 rounded-full bg-[#FDF8F3] hover:bg-[#EAE4DD] text-[#1C1C1C] text-xs font-medium flex items-center gap-1.5 shrink-0 border border-[#EAE4DD] transition-colors"
              >
                {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-[#F15A24]" /> : <Copy className="w-3.5 h-3.5 text-[#666666]" />}
                <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn */}
            <div className="bg-white border border-[#EAE4DD] rounded-3xl p-5 flex items-center justify-between gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    LinkedIn Profile
                  </span>
                  <span className="font-semibold text-[#1C1C1C] text-sm truncate block mt-0.5">
                    in/umer-jahangir-8b3583328
                  </span>
                </div>
              </div>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold shrink-0 transition-colors shadow-sm"
              >
                Connect
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-white border border-[#EAE4DD] rounded-3xl p-5 flex items-center justify-between gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    GitHub Profile
                  </span>
                  <span className="font-semibold text-[#1C1C1C] text-sm truncate block mt-0.5">
                    github.com/{personalInfo.githubUsername}
                  </span>
                </div>
              </div>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-[#FDF8F3] hover:bg-[#EAE4DD] text-[#1C1C1C] text-xs font-medium shrink-0 border border-[#EAE4DD] transition-colors"
              >
                Visit
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="bg-white border border-[#EAE4DD] rounded-3xl p-5 flex items-center justify-between gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="font-semibold text-[#1C1C1C] text-sm truncate block mt-0.5">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="px-3.5 py-1.5 rounded-full bg-[#FDF8F3] hover:bg-[#EAE4DD] text-[#1C1C1C] text-xs font-medium flex items-center gap-1.5 shrink-0 border border-[#EAE4DD] transition-colors"
              >
                {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-[#F15A24]" /> : <Copy className="w-3.5 h-3.5 text-[#666666]" />}
                <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location */}
            <div className="bg-white border border-[#EAE4DD] rounded-3xl p-5 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-xl bg-[#FDEEE8] text-[#F15A24] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase text-[#666666] font-semibold tracking-wider">
                  Current Base
                </span>
                <span className="font-semibold text-[#1C1C1C] text-sm block mt-0.5">
                  {personalInfo.specificLocation}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-white border border-[#EAE4DD] rounded-3xl p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <h3 className="font-display font-bold text-[#1C1C1C] text-xl mb-6">Send a Direct Message</h3>

            {submitted && (
              <div className="p-4 rounded-2xl bg-[#FDEEE8] border border-[#F15A24]/30 text-[#1C1C1C] text-xs sm:text-sm font-medium mb-6">
                ✓ Thank you, <strong>{name}</strong>! Your email client has been prepared. If it didn't open automatically, you can email directly to{' '}
                <a href={`mailto:${personalInfo.email}`} className="underline font-bold text-[#F15A24]">
                  {personalInfo.email}
                </a>.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Recruiter / Founder"
                    className="w-full px-4 py-3 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD] text-[#1C1C1C] placeholder:text-[#666666]/60 text-sm focus:outline-none focus:border-[#F15A24] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD] text-[#1C1C1C] placeholder:text-[#666666]/60 text-sm focus:outline-none focus:border-[#F15A24] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1C1C] mb-1.5">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Junior Web Developer / Frontend Role Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD] text-[#1C1C1C] placeholder:text-[#666666]/60 text-sm focus:outline-none focus:border-[#F15A24] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1C1C] mb-1.5">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Discuss role details, interview invitation, or project scope..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD] text-[#1C1C1C] placeholder:text-[#666666]/60 text-sm focus:outline-none focus:border-[#F15A24] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#F15A24] hover:bg-[#D94917] text-white font-semibold text-sm shadow-[0_2px_10px_rgba(241,90,36,0.25)] hover:shadow-[0_4px_16px_rgba(241,90,36,0.35)] transition-all"
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
