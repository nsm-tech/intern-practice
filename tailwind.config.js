/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E60012",
        secondary: "#D88E51",
        base: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bodoni: ["Bodoni MT", "serif"],
      },
    },
  },
  plugins: [],
};
