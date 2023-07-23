/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        caudex:['Caudex', 'serif'],
        bodoni_moda:['Bodoni_Moda', 'serif'],
        urbanist:['Urbanist', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}

