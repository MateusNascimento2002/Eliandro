/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "entrada-letras": "moverLetras 2s ease-out forwards",
      },
      keyframes: {
        moverLetras: {
          "0%": { transform: "translateZ(-1000px)", opacity: "0" },
          "100%": { transform: "translateZ(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
