import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'terminal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'CLI', href: '#terminal', id: 'terminal' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDF8F3]/90 backdrop-blur-md border-b border-[#EAE4DD] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4DD] flex items-center justify-center font-display font-extrabold text-[#1C1C1C] text-sm shadow-[0_1px_3px_rgba(0,0,0,0.04)] group-hover:border-[#F15A24] transition-colors relative">
            <span>UJ</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24] absolute top-2 right-2" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-[#1C1C1C] text-base tracking-tight leading-none">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[#F15A24] text-[11px] font-semibold tracking-wider mt-1 uppercase">
              Frontend Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === item.id
                  ? 'text-[#F15A24] font-semibold'
                  : 'text-[#666666] hover:text-[#1C1C1C]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F15A24] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Resume PDF Link */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Umer_Jahangir_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EAE4DD] bg-white text-[#1C1C1C] hover:border-[#1C1C1C] text-xs font-semibold tracking-wide transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            <FileText className="w-3.5 h-3.5 text-[#666666]" />
            Resume
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F15A24] hover:bg-[#D94917] text-white text-xs font-semibold transition-all shadow-[0_2px_8px_rgba(241,90,36,0.25)] hover:shadow-[0_4px_12px_rgba(241,90,36,0.35)] hover:-translate-y-0.5"
          >
            <Send className="w-3.5 h-3.5" />
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white border border-[#EAE4DD] flex items-center justify-center text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDF8F3] border-b border-[#EAE4DD] px-6 py-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1.5 border-b border-[#EAE4DD]/50 ${
                  activeSection === item.id ? 'text-[#F15A24] font-semibold' : 'text-[#1C1C1C]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 flex gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Umer_Jahangir_Resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#EAE4DD] bg-white text-[#1C1C1C] text-xs font-semibold"
            >
              <FileText className="w-4 h-4 text-[#666666]" />
              Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#F15A24] text-white text-xs font-semibold shadow-sm"
            >
              <Send className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
