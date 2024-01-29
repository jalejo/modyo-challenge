/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container:{
      padding:  '1.5rem',
    },
    extend: {

      colors: {
        'green-challenge':'#0EBD74',
        'blue-challenge':'#151F38',
        'blue-challenge-hover':'#2a3550'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },

      animation:{
        fadeIn: 'fadeIn',
        fadeOut: 'fadeOut',
        scaleIn: 'scaleIn',
        scaleOut: 'scaleOut'
      },

      keyframes:{
        fadeIn:{
          '0%':{ opacity:0 },
          '100%':{ opacity:1 }
        },
        fadeOut:{
          '0%':{ opacity:1 },
          '100%':{ opacity:0 }
        },
        scaleIn:{
          '0%':{ transform : 'scale(0)' },
          '100%':{ transform : 'scale(1)' }
        },
        scaleOut:{
          '0%':{ transform : 'scale(1)' },
          '100%':{ transform : 'scale(0)' }
        }
      }
    },
  },
  plugins: [],
}
