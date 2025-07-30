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
        'dark-background': '#111827',
        'dark-surface': '#1f2937',
        'dark-text-primary': '#f9fafb',
        'dark-text-secondary': '#9ca3af',
        'dark-border': '#374151',
        'accent-blue': '#d1d5db',
        'accent-blue-hover': '#9ca3af',
        'accent-blue-active': '#4b5563',
      },
    },
  },
  plugins: [],
}

