/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',       // App Router files
    './pages/**/*.{js,jsx,ts,tsx}',     // Pages Router files (if any)
    './components/**/*.{js,jsx,ts,tsx}', // Shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
