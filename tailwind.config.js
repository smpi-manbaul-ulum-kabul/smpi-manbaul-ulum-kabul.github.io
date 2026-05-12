module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        amiri: ["Amiri", "serif"],
      },
      colors: {
        primary: "#0F4C5C",
        secondary: "#FF6B35",
        accent: "#F7931E",
        gold: "#FFD700",
        emerald: "#10B981",
        nuGreen: "#1E5F2F",
        nuGold: "#D4A017",
        nuCream: "#FFF8E7",
        purple: "#8B5CF6",
        pink: "#EC4899",
        pink500: "#ec4899",
        purple600: "#9333ea",
        muhadharah1: "#009000",
        muhadharah2: "#F5F5F0",
        olahraga: "#5DADE2",
        facebook: "#1877F2"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        dance: "dance 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-20px,0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,107,53,0.3)" },
          "50%": {
            boxShadow:
              "0 0 50px rgba(255,107,53,0.8), 0 0 100px rgba(255,107,53,0.4)",
          },
        },
        dance: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.1) rotate(5deg)" },
          "50%": { transform: "scale(0.95) rotate(-3deg)" },
          "75%": { transform: "scale(1.05) rotate(2deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
