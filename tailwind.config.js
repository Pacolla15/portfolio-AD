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
        brand: {
          orange: '#FF5A1F',
          blue: '#245BFF',
          purple: '#873BFF',
          offwhite: '#F4F0E8',
          black: '#171717',
        },
        surface: {
          darkest: '#0D0D0D',
          dark: '#121212',
          DEFAULT: '#171717',
          elevated: '#1F1F1F',
          card: '#222222',
          border: 'rgba(244, 240, 232, 0.08)',
          borderStrong: 'rgba(244, 240, 232, 0.2)',
        },
        text: {
          primary: '#F4F0E8',
          secondary: '#A39F97',
          muted: '#6E6B65',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widestx: '0.2em',
      }
    },
  },
  plugins: [],
}
