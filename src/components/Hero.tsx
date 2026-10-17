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
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Info & Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status & Location Row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE4DD] text-[#1C1C1C] text-xs font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
                Available for Roles &amp; Internships
              </div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#666666]">
                <MapPin className="w-3.5 h-3.5 text-[#F15A24]" />
                {personalInfo.location}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#1C1C1C] tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-[#F15A24]">{personalInfo.name}</span>
            </h1>

            {/* Roles Subtitle */}
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold text-[#666666]">
              <span className="text-[#1C1C1C]">Junior Web Developer</span>
              <span className="text-[#EAE4DD]">•</span>
              <span className="text-[#F15A24]">Frontend Specialist</span>
              <span className="text-[#EAE4DD]">•</span>
              <span className="text-[#1C1C1C]">Aspiring Full Stack Engineer</span>
            </div>

            {/* Bio Summary */}
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F15A24] hover:bg-[#D94917] text-white font-semibold text-sm shadow-[0_2px_10px_rgba(241,90,36,0.25)] hover:shadow-[0_4px_16px_rgba(241,90,36,0.35)] hover:-translate-y-0.5 transition-all"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Umer_Jahangir_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-[#EAE4DD] hover:border-[#1C1C1C] text-[#1C1C1C] font-semibold text-sm shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4 text-[#666666]" />
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
                className="w-11 h-11 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] hover:border-[#F15A24] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] hover:border-[#F15A24] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                title={`Send Email (${personalInfo.email})`}
                className="w-11 h-11 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] hover:border-[#F15A24] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                title={`Call / WhatsApp (${personalInfo.phone})`}
                className="w-11 h-11 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] hover:border-[#F15A24] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm rounded-3xl bg-white border border-[#EAE4DD] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              {/* Photo Box */}
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-[#FDF8F3] border border-[#EAE4DD] mb-4">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_20%]"
                />

                {/* Overlaid Time Badge */}
                <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-sm border border-[#EAE4DD] flex items-center justify-between text-xs font-mono shadow-sm">
                  <div className="flex items-center gap-1.5 text-[#1C1C1C]">
                    <MapPin className="w-3.5 h-3.5 text-[#F15A24]" />
                    <span>Karachi, PK</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#F15A24] font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{karachiTime || 'PKT (UTC+5)'}</span>
                  </div>
                </div>
              </div>

              {/* Verified Credential Stats */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD]">
                  <div className="font-display font-extrabold text-[#F15A24] text-sm">S.M.I.T</div>
                  <div className="text-[10px] text-[#666666] font-medium mt-0.5">Full Stack</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD]">
                  <div className="font-display font-extrabold text-[#1C1C1C] text-sm">4+</div>
                  <div className="text-[10px] text-[#666666] font-medium mt-0.5">Core Projects</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FDF8F3] border border-[#EAE4DD]">
                  <div className="font-display font-extrabold text-[#1C1C1C] text-sm">React 19</div>
                  <div className="text-[10px] text-[#666666] font-medium mt-0.5">Modern UI</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
