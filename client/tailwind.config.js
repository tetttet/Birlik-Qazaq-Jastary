/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0000FF",
        secondary: "#000000",
        tertiary: "#FF0000",
        quaternary: "#FF0000",
        quinary: "#FF0000",
        senary: "#FF0000",
        septenary: "#FF0000",
        octonary: "#FF0000",
        nonary: "#FF0000",
        denary: "#FF0000",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },
    },
  },
  plugins: [],
}

