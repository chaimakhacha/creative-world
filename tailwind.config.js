/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif', 'SFProLocalRange'],
      },
    },
  },
  plugins: [],
}
theme: {
  extend: {
    fontFamily: {
      sans: ['Rubik', 'ui-sans-serif', 'system-ui'],
    },
  },
},
