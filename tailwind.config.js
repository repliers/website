/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.sans],
        display: ["Arvo", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
