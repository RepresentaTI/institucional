/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue' : '#060E1A',
        'mid-blue' : '#08377E',
      }
    },
    fontFamily:{
      'aileron' :['aileron','Inter'],
    }
  },
  plugins: [],
}