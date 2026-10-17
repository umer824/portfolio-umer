/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FDF8F3',
        accent: {
          DEFAULT: '#F15A24',
          hover: '#D94917',
          light: '#FDEEE8',
        },
        primary: '#1C1C1C',
        secondary: '#666666',
        card: '#FFFFFF',
        border: '#EAE4DD',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px rgba(28, 28, 28, 0.04)',
        'card-hover': '0 12px 32px rgba(28, 28, 28, 0.08)',
      }
    },
  },
  plugins: [],
}
