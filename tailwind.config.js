/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E60012",
        secondary: "#D88E51",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Menjadikan Inter sebagai font default
        bodoni: ["Bodoni MT", "serif"],
      },
    },
  },
  plugins: [],
};
