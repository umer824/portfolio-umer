# Umer Jahangir — Developer Portfolio (React & TypeScript)

A modern, responsive, and minimalist developer portfolio web application for **Umer Jahangir**, Junior Web Developer, Frontend Specialist, and Aspiring Full Stack Engineer based in Karachi, Pakistan.

## 🛠️ Technology Stack

- **Frontend Framework**: [React.js](https://react.dev/) (Component-Driven Architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing & data models)
- **Build Tool**: [Vite](https://vitejs.dev/) (Sub-second HMR & optimized production bundling)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Modern CSS3 Design System
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth transitions & modal dialogs)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Development Tools**: Git, GitHub, Visual Studio Code

## 🌟 Architecture & Features

- **Component-Driven Architecture**:
  - `Header`: Sticky glassmorphic navbar with active scrollspy, mobile drawer, resume PDF link, and dark/light mode toggle.
  - `Hero`: Available for work indicator, photo showcase, live Karachi PKT clock, and social buttons.
  - `About`: Professional summary and developer profile snapshot.
  - `Skills`: Interactive category filter for Frontend, Backend, Databases, and Tools.
  - `Projects`: Real hands-on project cards with interactive case study modals (`LinguaQuest`, `Iris AI Assistant`, `KicksHub Storefront`, `3D Perspective UI Engine`).
  - `Experience`: Authentic career and training trajectory timeline.
  - `Education`: Formal qualifications (Saylani S.M.I.T, Cisco Networking Academy, BSEK) and certifications.
  - `Terminal`: Interactive in-browser developer CLI simulator (`whoami`, `skills`, `projects`, `education`, `contact`, `resume`, `karachi-time`).
  - `Contact`: Primary contact channels, copy-to-clipboard buttons, and mailto inquiry form.
- **Zero Backend Required**: Fully client-side, secure, and fast.

## 📂 Project Structure

```
portfolio/
├── dist/                          # Production-ready build artifacts
├── public/
│   ├── assets/
│   │   ├── favicon.svg            # Vector monogram favicon
│   │   ├── umer-profile.jpg       # Authentic profile photo
│   │   ├── Umer_Jahangir_Resume.pdf # Downloadable resume PDF
│   │   ├── linguaquest-preview.svg# LinguaQuest project preview
│   │   ├── iris-preview.svg       # Iris AI Assistant preview
│   │   ├── shoestore-preview.svg  # React Storefront preview
│   │   └── hero3d-preview.svg     # 3D Perspective UI preview
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx              # About narrative & specs
│   │   ├── AmbientGlow.tsx        # Ambient background lights
│   │   ├── Contact.tsx            # Contact cards & form
│   │   ├── Education.tsx          # Education & certificates
│   │   ├── Experience.tsx         # Career timeline
│   │   ├── Footer.tsx             # Footer & copyright
│   │   ├── Header.tsx             # Sticky nav & theme toggle
│   │   ├── Hero.tsx               # Hero showcase & stats
│   │   ├── ProjectModal.tsx       # Architectural case studies
│   │   ├── Projects.tsx           # Projects grid & filter
│   │   ├── Skills.tsx             # Skills grid & filter
│   │   └── Terminal.tsx           # Interactive CLI console
│   ├── data/
│   │   └── portfolioData.ts       # Central verified data store
│   ├── types/
│   │   └── index.ts               # TypeScript data interfaces
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Tailwind & global design tokens
│   └── main.tsx                   # DOM entry point
├── index.html                     # Semantic HTML5 template
├── package.json                   # Dependencies & build scripts
├── postcss.config.js              # PostCSS config
├── tailwind.config.js             # Tailwind CSS tokens
├── tsconfig.json                  # TypeScript compiler options
└── vite.config.ts                 # Vite bundler configuration
```

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build locally
npm run preview
```

## 📬 Contact & Profiles

- **Email**: [jahangiru837@gmail.com](mailto:jahangiru837@gmail.com)
- **LinkedIn**: [linkedin.com/in/umer-jahangir-8b3583328](https://www.linkedin.com/in/umer-jahangir-8b3583328/)
- **GitHub**: [github.com/umer824](https://github.com/umer824)
- **Location**: Karachi, Sindh, Pakistan

---
© 2026 Umer Jahangir. Built with React, Vite, TypeScript & Tailwind CSS.
