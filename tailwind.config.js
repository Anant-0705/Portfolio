/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        white: '#f2f0eb',
        cream: '#e8e4dc',
        accent: '#c8ff00',
        accent2: '#ff4d1c',
        mid: '#2a2a2a',
        subtle: '#5a5a5a',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        display: ['"Bebas Neue"', 'sans-serif'],
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        lineGrow: 'lineGrow 1s both',
        marquee: 'marquee 18s linear infinite',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
