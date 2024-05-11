/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gatile: ["Gatile"],
      },
      colors: {
        bluelight: "#E2E6E9",
        blue: "#8DA6FF",
        slate: "#B9B2FF",
        purple: "#BB98FF",
        orange: "#FFD27D",
        grey: "#e2e6e9",
        backdrop: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
