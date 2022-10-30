/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
