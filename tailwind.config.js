/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screen: {
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container: {
      center: true,
      padding:'1rem'
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto","sans-serif"]
      },
      colors: {
        'primary':'#FD3D57'
      }
    },
    
  },
  
  plugins: [],
}

