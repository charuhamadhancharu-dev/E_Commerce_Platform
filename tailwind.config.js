/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        shop: {
          bg: '#090b14',
          surface: '#0f1424',
          card: '#151b33',
          border: 'rgba(255, 255, 255, 0.09)',
          input: '#12172a',
          primary: '#7c3aed',
          primaryHover: '#6d28d9',
          accent: '#38bdf8',
          neon: '#a855f7'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -3px rgba(168, 85, 247, 0.35)',
        'glow-primary': '0 0 30px -4px rgba(124, 58, 237, 0.45)',
        'glow-cyan': '0 0 25px -3px rgba(56, 189, 248, 0.35)',
        'glow-subtle': '0 8px 30px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
