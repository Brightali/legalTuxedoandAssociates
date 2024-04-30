/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        poppins: ["Poppins", "sans"],
        playfair: "Playfair",
        figtree: "Figtree",
      },
      colors: {
        maingold: "#d4ae5c",
        mainblue: "#143558",
      },
      screens: {
        screen1: "600px",
      },
    },
  },
  plugins: [],
};
