/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#FF5733",
        },
        yellow: {
          DEFAULT: "#FFD700",
        },
        green: {
          DEFAULT: "#7FFF00",
        },
        brown: {
          DEFAULT: "#8B4513",
        },
      },
    },
  },
  plugins: [],
};
