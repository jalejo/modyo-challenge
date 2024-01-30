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
        'blue-challenge':'#132D46',
        'blue-challenge-hover':'#2a3550'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },

      animation:{
        showToast: 'showToast 2s ease-in-out',
        hideLogin: 'hideLogin 1s ease-in-out',
        showLogin: 'showLogin 1s ease-in-out',
      },
      backgroundImage: {
        'dots-pattern':"url(./assets/img/dots-bgr.png)",
      },
      keyframes:{
        showToast:{
          '0%':{ opacity:0, right:'-10rem', display:'none' },
          '1%':{ opacity:0, right:'-10rem', display:'flex' },
          '20%':{ opacity:1, right:'0', display:'flex' },
          '80%':{ opacity:1, right:'0', display:'flex' },
          '99%':{ opacity:0, right:'4rem', display:'flex' },
          '100%':{ opacity:0, right:'0', display:'none' }
        },
        hideLogin:{
          '0%':{ transform: 'scale(1)', height: '100dvh' },
          '35%':{  transform: 'scale(0)', height: '100dvh'  },
          '100%':{  transform: 'scale(0)', height: '0dvh'  }
        },
        showLogin:{
          '0%':{ transform: 'scale(0)', height: '0dvh' },
          '35%':{  transform: 'scale(1)', height: '100dvh'  },
          '100%':{  transform: 'scale(1)', height: '100dvh'  }
        }
      }
    },
  },
  plugins: [],
}
