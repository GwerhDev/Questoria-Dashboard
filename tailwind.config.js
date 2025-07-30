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
        // Neutral Light mode colors
        'light-background': '#f9fafb',
        'light-surface': '#ffffff',
        'light-text-primary': '#1f2937',
        'light-text-secondary': '#6b7280',
        'light-border': '#e5e7eb',

        // Neutral Dark mode colors
        'dark-background': '#1a100a',
        'dark-surface': '#2e2014',
        'dark-text-primary': '#f9fafb',
        'dark-text-secondary': '#9ca3af',
        'dark-border': '#4a3b2e',
      },
      backgroundColor: {
        'light-transparent': 'rgba(255, 255, 255, 0.1)',
        'dark-transparent': 'rgba(26, 16, 10, 0.2)',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('supports-backdrop-blur', '@supports (backdrop-filter: blur(1rem))');
    },
  ],
}