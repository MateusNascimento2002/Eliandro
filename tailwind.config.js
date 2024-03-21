/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #22c55e 0%, #064e3b 100%)",
      },

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
