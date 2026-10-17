import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Download, Mail, Phone, Github, Linkedin, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [karachiTime, setKarachiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setKarachiTime(`${formatter.format(now)} PKT`);
      } catch {
        setKarachiTime('Karachi (UTC+5)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles &amp; Internships
              </div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.1]">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Roles Subtitle */}
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold text-cyan-400">
              <span>Junior Web Developer</span>
              <span className="text-slate-600">•</span>
              <span>Frontend Specialist</span>
              <span className="text-slate-600">•</span>
              <span>Aspiring Full Stack Engineer</span>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Umer_Jahangir_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub (@umer824)"
                className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                title={`Send Email (${personalInfo.email})`}
                className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                title={`Call / WhatsApp (${personalInfo.phone})`}
                className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl bg-slate-900/70 border border-white/10 p-5 shadow-2xl backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-300">
              {/* Photo Box */}
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 mb-4">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Time Badge */}
                <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Karachi, PK</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{karachiTime || 'PKT (UTC+5)'}</span>
                  </div>
                </div>
              </div>

              {/* Verified Credential Stats */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="font-display font-extrabold text-cyan-400 text-sm">S.M.I.T</div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">Full Stack</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="font-display font-extrabold text-indigo-400 text-sm">4+</div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">Core Projects</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="font-display font-extrabold text-emerald-400 text-sm">React 19</div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">Modern UI</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
