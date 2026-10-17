import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AmbientGlow } from './components/AmbientGlow';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('umer_portfolio_theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.className = saved;
    } else {
      setTheme('dark');
      document.documentElement.className = 'dark';
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('umer_portfolio_theme', newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      <AmbientGlow />
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Terminal />
        <Contact />
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 border border-white/10 hover:border-cyan-500/50 text-cyan-400 hover:text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default App;
