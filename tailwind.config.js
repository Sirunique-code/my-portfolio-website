/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Big Shoulders"', 'sans-serif'],
        sans: ['"Host Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        dean: {
          bg: {
            light: '#ffffff',
            dark: '#0f0f0f',
          },
          card: {
            light: '#f2f2f2',
            dark: '#1c1c1c',
          },
          subcard: {
            light: '#f0f0f0',
            dark: '#242424',
          },
          border: {
            light: '#e3e3e3',
            dark: '#303030',
          },
          subtle: {
            light: '#e0e0e0',
            dark: '#3a3a3a',
          },
          cyan: {
            DEFAULT: '#08b9d4',
            dark: '#00bdf1',
            light: '#cff9ff',
          },
          green: '#44c92c',
          red: '#fe2026',
          text: {
            primary: {
              light: '#000000',
              dark: '#ffffff',
            },
            muted: {
              light: '#575757',
              dark: '#cccccc',
            },
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
