/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
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
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
