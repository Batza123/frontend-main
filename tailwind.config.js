/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#9c1b1b',
        'brand-purple': '#3e0e6b',
        'brand-blue': '#0a3a7c',
        'brand-gold': '#e0b200',
        'brand-green': '#368c3b',
        'surface': '#1e1e2f',
        'elevated': '#2a2a40',
        'soft-text': '#cbd5e1',
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(135deg, #3e0e6b, #9c1b1b 50%, #0a3a7c)",
        'accent-gradient': "linear-gradient(135deg, #e0b200, #368c3b)",
      },
    },
  },
  plugins: [],
};
