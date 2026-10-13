/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ef3838',
          redHover: '#dc2626',
          redLight: '#fee2e2',
          redGlow: 'rgba(239, 56, 56, 0.4)',
          blue: '#2575dc',
          blueHover: '#1d63bf',
          blueLight: '#dbeafe',
          blueGlow: 'rgba(37, 117, 220, 0.4)',
          cyan: '#06b6d4',
          emerald: '#10b981',
          dark: '#080d1a',
          darker: '#04070f',
          deep: '#03060c',
          panel: '#0c1427',
          panelLight: '#f8fafc',
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(0, 0, 0, 0.08)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      boxShadow: {
        '3d-floating': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 117, 220, 0.15)',
        '3d-red': '0 25px 50px -12px rgba(239, 56, 56, 0.35), 0 0 25px rgba(239, 56, 56, 0.2)',
        '3d-blue': '0 25px 50px -12px rgba(37, 117, 220, 0.35), 0 0 25px rgba(37, 117, 220, 0.2)',
        '3d-pressed': 'inset 0 4px 8px rgba(0, 0, 0, 0.4), inset 0 -2px 4px rgba(255, 255, 255, 0.05)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 20px 40px rgba(0, 0, 0, 0.4)',
        'glass-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), 0 15px 35px -5px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        'tilt-float': {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'translateY(-8px) rotateX(2deg) rotateY(-2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'beacon': {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'tilt-float': 'tilt-float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'beacon': 'beacon 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      }
    },
  },
  plugins: [],
}
