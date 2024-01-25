/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:  '1.5rem',
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}