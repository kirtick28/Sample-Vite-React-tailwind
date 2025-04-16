/** @type {import('tailwindcss').Config} */
export default {
  // darkmode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}' // Ensures Tailwind scans all component files
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
