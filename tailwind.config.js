/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#00b2df',
        secondary: '#003140',
      },
    },
  },
  plugins: [],
}
