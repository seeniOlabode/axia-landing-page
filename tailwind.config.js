const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "axia-darkish": "rgb(34 34 84)",
        "axia-yellow": "rgb(240 183 63)",
        "axia-darkgrey": "rgb(63 63 63)",
        "axia-blue": "rgb(32 32 84)",
      },
      fontFamily: {
        sans: ["Avenir", ...defaultTheme.fontFamily.sans],
        tiempos: "Tiempos Headline",
      },
    },
  },
  plugins: [],
};
