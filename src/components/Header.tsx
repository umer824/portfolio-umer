import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDF8F3]/95 backdrop-blur-md border-b border-[#EAE4DD] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#FDF8F3]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: "UJ" Monogram & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-xl p-1"
          aria-label="Umer Jahangir — Home"
        >
          {/* UJ Monogram */}
          <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4DD] flex items-center justify-center font-display font-extrabold text-[#1C1C1C] text-sm shadow-[0_1px_3px_rgba(0,0,0,0.04)] group-hover:border-[#F15A24] transition-colors relative">
            <span>UJ</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24] absolute top-2 right-2" />
          </div>

          {/* Name */}
          <span className="font-display font-bold text-[#1C1C1C] text-base sm:text-lg tracking-tight group-hover:text-[#F15A24] transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Center / Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-all relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-md px-1 ${
                  isActive
                    ? 'text-[#F15A24] font-semibold'
                    : 'text-[#666666] hover:text-[#1C1C1C]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F15A24] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: GitHub, LinkedIn & "Download Resume" Button */}
        <div className="flex items-center gap-3">
          {/* Social Icons (GitHub & LinkedIn) */}
          <div className="hidden sm:flex items-center gap-2 pr-1 border-r border-[#EAE4DD]">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] hover:border-[#F15A24] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
              aria-label="GitHub Profile"
              title="GitHub Profile (@umer824)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] hover:border-[#F15A24] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Umer_Jahangir_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold tracking-wide transition-all shadow-[0_2px_8px_rgba(28,28,28,0.12)] hover:shadow-[0_4px_14px_rgba(28,28,28,0.2)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
            aria-label="Download Official Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#F15A24]" />
            <span>Download Resume</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white border border-[#EAE4DD] flex items-center justify-center text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#FDF8F3] border-b border-[#EAE4DD] px-6 py-6 flex flex-col gap-5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] animate-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-label="Mobile Menu"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-base font-semibold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-white text-[#F15A24] border border-[#EAE4DD]'
                      : 'text-[#1C1C1C] hover:bg-white/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F15A24]" />}
                </a>
              );
            })}
          </nav>

          {/* Mobile Action Buttons and Socials */}
          <div className="pt-4 border-t border-[#EAE4DD] flex flex-col gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Umer_Jahangir_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#1C1C1C] text-white text-xs font-semibold shadow-sm"
            >
              <Download className="w-4 h-4 text-[#F15A24]" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* Social Icons row for mobile */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#666666] hover:text-[#F15A24] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
