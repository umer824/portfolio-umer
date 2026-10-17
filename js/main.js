/**
 * Umer Jahangir — Personal Developer Portfolio
 * Core JavaScript & Interactive Modules
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Theme Switcher (Dark / Light Mode)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('umer_portfolio_theme');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('umer_portfolio_theme', theme);
  };

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDarkScheme.matches) {
    setTheme('dark');
  } else {
    setTheme('dark'); // Default to obsidian dark
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme} theme`);
    });
  }

  // -------------------------------------------------------------------------
  // 2. Sticky Header & Scroll Spy
  // -------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header background blur
    if (scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Scroll spy
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------------------
  // 3. Mobile Navigation Menu
  // -------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      } );
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 4. Live Karachi Time Clock (Asia/Karachi, UTC+5)
  // -------------------------------------------------------------------------
  const timeDisplay = document.getElementById('karachi-time');
  const updateKarachiTime = () => {
    if (!timeDisplay) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      timeDisplay.textContent = `${formatter.format(now)} PKT`;
    } catch {
      timeDisplay.textContent = 'Karachi, PK (UTC+5)';
    }
  };

  updateKarachiTime();
  setInterval(updateKarachiTime, 1000);

  // -------------------------------------------------------------------------
  // 5. Project Filtering
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 6. Interactive Developer Terminal Simulator
  // -------------------------------------------------------------------------
  const terminalInput = document.getElementById('terminal-cli-input');
  const terminalOutput = document.getElementById('terminal-cli-output');
  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');

  const terminalCommands = {
    help: `Available commands:
  • <span class="highlight">whoami</span>       : Summary of Umer Jahangir
  • <span class="highlight">skills</span>       : List verified technical competencies
  • <span class="highlight">projects</span>     : Real projects built &amp; architecture
  • <span class="highlight">education</span>    : Certifications, SMIT, &amp; training
  • <span class="highlight">contact</span>      : Email, phone, &amp; location info
  • <span class="highlight">resume</span>       : Download official resume PDF
  • <span class="highlight">karachi-time</span> : Current local time in Karachi (UTC+5)
  • <span class="highlight">clear</span>        : Clear the terminal console`,

    whoami: `<span class="success">Umer Jahangir</span>
Role: Junior Web Developer | Frontend Specialist | Aspiring Full Stack Engineer
Location: Karachi, Sindh, Pakistan (Bahadurabad)
Status: Available for Full-Time Roles &amp; Engineering Internships
Summary: Strong foundation in modern web technologies, building scalable, responsive, accessible web interfaces. Combines daily technical practice with hands-on project engineering.`,

    skills: `<span class="cmd">Verified Technical Stack:</span>
• <span class="info">Languages</span>     : JavaScript (ES6+), HTML5, CSS3, Python, TypeScript
• <span class="info">Frontend</span>      : React 19, Vue.js, Tailwind CSS, Responsive Design, CSS Essentials
• <span class="info">Backend</span>       : Node.js, Express.js, FastAPI, RESTful APIs, GraphQL
• <span class="info">Databases</span>     : PostgreSQL, MySQL, SQLite, MongoDB, Firebase Firestore
• <span class="info">Tools/DevOps</span>  : Git, GitHub (@umer824), Vite, VS Code, Linux CLI`,

    projects: `<span class="cmd">Real Verified Projects:</span>
1. <span class="highlight">LinguaQuest</span>: Multilingual gamified language learning web platform (React 19, TypeScript, Tailwind CSS, Node.js, Firebase)
2. <span class="highlight">Iris AI Assistant</span>: Python-powered voice/text assistant web app (FastAPI, SQLAlchemy, SQLite, Pydantic)
3. <span class="highlight">ShoeStore</span>: High-performance sneaker e-commerce storefront (React 19, Vite, Modern CSS3)
4. <span class="highlight">3D Hero Showcase</span>: Interactive mobile-first 3D CSS perspective engine &amp; gesture tracker`,

    education: `<span class="cmd">Education &amp; Certifications:</span>
• <span class="highlight">Saylani Mass I.T Training (S.M.I.T)</span> (2024): Certificate in Web Development (Comprehensive Full Stack)
• <span class="highlight">Cisco Networking Academy</span> (2023): Networking Fundamentals Certificate (TCP/IP, Routing)
• <span class="highlight">CSS Essentials</span>: Advanced styling, modern layouts, responsive design
• <span class="highlight">Open Source Collaboration</span>: Git workflows &amp; GitHub best practices
• <span class="highlight">Secondary Education</span>: Crown Public School / Board of Secondary Education Karachi`,

    contact: `<span class="cmd">Direct Contact Channels:</span>
• Email: <span class="highlight">jahangiru837@gmail.com</span>
• Phone / WhatsApp: <span class="highlight">+92-3172874875</span>
• LinkedIn: <a href="https://www.linkedin.com/in/umer-jahangir-8b3583328/" target="_blank" class="highlight">linkedin.com/in/umer-jahangir-8b3583328</a>
• GitHub: <a href="https://github.com/umer824" target="_blank" class="highlight">https://github.com/umer824</a>
• Location: Karachi, Sindh, Pakistan`,

    resume: `<span class="success">Downloading resume...</span>
Opening <a href="assets/Umer_Jahangir_Resume.pdf" target="_blank" class="highlight">Umer_Jahangir_Resume.pdf</a> directly in a new tab.`,

    'karachi-time': () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      return `<span class="info">Karachi Local Time:</span> <span class="success">${timeStr} PKT (UTC+5)</span>`;
    }
  };

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Append user input line
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt">umer@portfolio:~$</span> ${escapeHTML(trimmed)}`;
    terminalOutput.appendChild(userLine);

    if (trimmed === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    if (trimmed === 'resume') {
      window.open('assets/Umer_Jahangir_Resume.pdf', '_blank');
    }

    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-line';

    if (terminalCommands[trimmed]) {
      const resp = terminalCommands[trimmed];
      responseLine.innerHTML = typeof resp === 'function' ? resp() : resp;
    } else {
      responseLine.innerHTML = `<span style="color:#ef4444">Command not found: "${escapeHTML(trimmed)}". Type <span class="highlight">'help'</span> for a list of commands.</span>`;
    }

    terminalOutput.appendChild(responseLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(terminalInput.value);
        terminalInput.value = '';
      }
    });
  }

  quickCmdBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });

  // -------------------------------------------------------------------------
  // 7. Project Case Study Modal Dialog
  // -------------------------------------------------------------------------
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const caseStudyButtons = document.querySelectorAll('.view-case-study-btn');

  const projectDetailsData = {
    linguaquest: {
      title: 'LinguaQuest — Multilingual Gamified Learning Platform',
      body: `
        <p><strong>Overview:</strong> LinguaQuest is a gamified language-learning platform designed with modern interactive architecture inspired by Duolingo. Built to support progressive course curricula across 10 top spoken languages including English, Urdu, Spanish, French, Japanese, Arabic, and German.</p>
        <p><strong>Architecture &amp; Tech Stack:</strong></p>
        <ul style="padding-left:20px;margin-bottom:12px;">
          <li><strong>Frontend:</strong> React 19, TypeScript, Tailwind CSS, Motion library for spring animations, Lucide icons.</li>
          <li><strong>Backend:</strong> Node.js with Express.js (TypeScript) handling API routing and progress tracking.</li>
          <li><strong>Database &amp; Auth:</strong> Firebase Firestore (NoSQL) for real-time progress syncing, streaks, and XP points; Firebase Authentication.</li>
        </ul>
        <p><strong>Key Highlights:</strong> Sequential unlocking mechanism requiring prerequisite mastery, multilingual dictionary mapping, interactive translation &amp; audio quizzes, and reactive user feedback states.</p>
        <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap;">
          <a href="https://github.com/umer824/leraning-languages" target="_blank" class="btn btn-primary btn-sm">View on GitHub (umer824) →</a>
        </div>
      `
    },
    iris: {
      title: 'Iris AI Voice Assistant — FastAPI & SQLite Backend',
      body: `
        <p><strong>Overview:</strong> A voice- and text-enabled AI assistant web platform running on a Python backend with asynchronous REST APIs and persistent database memory.</p>
        <p><strong>Architecture &amp; Tech Stack:</strong></p>
        <ul style="padding-left:20px;margin-bottom:12px;">
          <li><strong>Backend:</strong> Python, FastAPI (asynchronous endpoint handling), Uvicorn server, Pydantic data schemas.</li>
          <li><strong>Persistence:</strong> SQLAlchemy ORM connected to SQLite database for storing commands, transcripts, and preferences.</li>
          <li><strong>Frontend:</strong> Vanilla JavaScript, CSS3 custom properties, responsive audio waveform visualization.</li>
        </ul>
        <p><strong>Key Highlights:</strong> Real-time command parsing, dynamic voice synthesis integration, structured data validation with Pydantic, and millisecond-level SQLite queries.</p>
        <div style="margin-top:16px;">
          <span class="status-pill"><span class="status-dot"></span> Self-Directed Python / Web Project</span>
        </div>
      `
    },
    shoestore: {
      title: 'KicksHub — React 19 & Vite E-Commerce Storefront',
      body: `
        <p><strong>Overview:</strong> A modern, high-speed footwear retail web storefront showcasing component-driven UI architecture, reactive cart state, and smooth catalog browsing.</p>
        <p><strong>Architecture &amp; Tech Stack:</strong></p>
        <ul style="padding-left:20px;margin-bottom:12px;">
          <li><strong>Frontend:</strong> React 19, Vite (instant HMR and production bundle optimization), Modern CSS3 with Flexbox &amp; Grid.</li>
          <li><strong>State Management:</strong> React hooks (useState, useEffect) managing dynamic cart items, filtering, and quantity counters.</li>
          <li><strong>Tooling:</strong> ESLint configuration with react-hooks and react-refresh rules.</li>
        </ul>
        <p><strong>Key Highlights:</strong> Instantaneous search/filter without layout shifts, responsive product cards, cart drawer with subtotal calculations, and mobile-optimized touch interactions.</p>
        <div style="margin-top:16px;">
          <span class="status-pill"><span class="status-dot"></span> React 19 &amp; Vite Showcase</span>
        </div>
      `
    },
    hero3d: {
      title: 'Mobile-First 3D Perspective UI Showcase',
      body: `
        <p><strong>Overview:</strong> An interactive UI research project focusing on hardware-accelerated 3D CSS perspectives, glassmorphism, and real-time touch/pointer gesture tracking without external 3D libraries.</p>
        <p><strong>Architecture &amp; Tech Stack:</strong></p>
        <ul style="padding-left:20px;margin-bottom:12px;">
          <li><strong>Core Technologies:</strong> Semantic HTML5, CSS3 <code>transform: perspective()</code>, <code>rotate3d()</code>, CSS custom variables.</li>
          <li><strong>Interactivity:</strong> Vanilla JavaScript event listeners computing normalized coordinates (-1 to +1) for natural spring-like tilt.</li>
          <li><strong>Visual Styling:</strong> Multi-layer glassmorphism, dynamic box-shadows, and sub-pixel backdrop blur.</li>
        </ul>
        <p><strong>Key Highlights:</strong> 60 FPS silky smooth performance on mobile and desktop, zero layout thrashing, and accessible fallback for users with reduced motion preferences.</p>
        <div style="margin-top:16px;">
          <span class="status-pill"><span class="status-dot"></span> Frontend Engineering Experiment</span>
        </div>
      `
    }
  };

  caseStudyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const project = projectDetailsData[projectId];
      if (project && modalBackdrop && modalTitle && modalBody) {
        modalTitle.textContent = project.title;
        modalBody.innerHTML = project.body;
        modalBackdrop.classList.add('open');
      }
    });
  });

  const closeModal = () => {
    modalBackdrop?.classList.remove('open');
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('open')) {
      closeModal();
    }
  });

  // -------------------------------------------------------------------------
  // 8. Copy to Clipboard Utility
  // -------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: "${textToCopy}"`);
          const originalText = btn.textContent;
          btn.textContent = 'Copied! ✓';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        }).catch(() => {
          showToast('Failed to copy. Please select and copy manually.');
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 9. Contact Form Simulation & Mailto Dispatch
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const subject = document.getElementById('contact-subject')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Prepare mailto link as fallback
      const mailtoUrl = `mailto:jahangiru837@gmail.com?subject=${encodeURIComponent(subject || `Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`Hi Umer,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `✓ Thank you, <strong>${escapeHTML(name)}</strong>! Your inquiry is ready. If your default mail client didn't open automatically, <a href="${mailtoUrl}" style="text-decoration:underline;color:inherit;font-weight:700;">click here to dispatch directly to jahangiru837@gmail.com</a>.`;
        formFeedback.style.display = 'block';
      }

      // Open email client
      window.location.href = mailtoUrl;
      showToast('Opening your email client to send message...');
      contactForm.reset();
    });
  }

  // -------------------------------------------------------------------------
  // 10. Toast Notification System
  // -------------------------------------------------------------------------
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${escapeHTML(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Helper function to escape HTML entities
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
