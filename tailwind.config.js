/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom": '#519f10'
      },
      backgroundColor:{
        "custom": '#519f10'
      }
    },
    fontFamily: {
      montserrat : ['Montserrat', "sans-serif"]
    }
  },
  plugins: [],
}

