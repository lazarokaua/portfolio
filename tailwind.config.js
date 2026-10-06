/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        base: "#0a0a0f",
        surface: "#12121a",
        "surface-raised": "#1a1a24",
        "surface-glass": "rgba(18, 18, 26, 0.6)",
        primary: "#e2e8f0",
        secondary: "#94a3b8",
        muted: "#64748b",
        accent: "#818cf8",
        "accent-deep": "#6366f1",
        "accent-hot": "#f472b6",
        "accent-glow": "rgba(129, 140, 248, 0.15)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      boxShadow: {
        glow: "0 0 30px rgba(129, 140, 248, 0.3)",
        "glow-hot": "0 0 30px rgba(244, 114, 182, 0.3)",
        "glow-lg": "0 0 60px rgba(129, 140, 248, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #6366f1, #818cf8, #f472b6)",
        "gradient-aurora": "linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 30%, #312e81 50%, #1e1b4b 70%, #0a0a0f 100%)",
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
        "aurora": "aurora 8s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
