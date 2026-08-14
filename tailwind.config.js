/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050505',
        darkCard: '#0B0F19',
        darkCardBorder: 'rgba(79, 140, 255, 0.15)',
        electricBlue: '#4F8CFF',
        electricBlueGlow: 'rgba(79, 140, 255, 0.35)',
        purpleAccent: '#7C3AED',
        purpleGlow: 'rgba(124, 58, 237, 0.35)',
        successGreen: '#00E676',
        cardText: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'General Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
