/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#1a1a1a',
        'black-secondary': '#2c2c2c',
        'gray-dark': '#3f3f3f',
        'gray-medium': '#6b6b6b',
        'gray-light': '#a0a0a0',
        'white-primary': '#ffffff',
        'white-secondary': '#f0f0f0',
        'cyan-50': '#ecfeff',
        'cyan-100': '#cffafe',
        'cyan-200': '#a5f3fc',
        'cyan-300': '#67e8f9',
        'cyan-400': '#22d3ee',
        'cyan-500': '#06b6d4',
        'cyan-600': '#0891b2',
        'cyan-700': '#0e7490',
        'cyan-800': '#155e75',
        'cyan-900': '#164e63',
      },
    },
  },
  plugins: [],
}

