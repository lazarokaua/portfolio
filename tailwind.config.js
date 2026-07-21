/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        suisse: ["SuisseIntl-Regular", "sans-serif"],
        display: ["Anton", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        base: "#050505",
        surface: "#0f0f0f",
        "surface-raised": "#1a1a1a",
        primary: "#ffffff",
        secondary: "#d1d5db", // Light Gray for high visibility
        accent: "#ccff00", // Acid Green
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
