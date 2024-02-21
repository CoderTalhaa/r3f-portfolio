/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor: "#1c1c1c",
        primary: "#ffd900",
      },
      fontFamily: {
        Anto: ["Anta", "sans-serif"],
        Ubanta: ["Ubuntu", "sans-serif"],
        skill: ["Rubik Glitch Pop", "sans-serif"]
      }
    },
  },
  plugins: [],
}

