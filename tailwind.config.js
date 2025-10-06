/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enable dark mode via .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif', 'SFProLocalRange'],
        sans: ['Rubik', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
