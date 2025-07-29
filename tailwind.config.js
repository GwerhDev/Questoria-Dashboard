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
        // Light mode colors
        'light-background': '#f0f2f5',
        'light-surface': '#ffffff',
        'light-text-primary': '#1a202c',
        'light-text-secondary': '#4a5568',
        'light-border': '#e2e8f0',

        // Dark mode colors
        'dark-background': '#1a202c',
        'dark-surface': '#2d3748',
        'dark-text-primary': '#e2e8f0',
        'dark-text-secondary': '#a0aec0',
        'dark-border': '#4a5568',

        // Shared colors (blacks, grays, cyans, whites)
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

