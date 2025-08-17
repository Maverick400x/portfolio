module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // clean modern font
      },
      colors: {
        primary: "#6366F1", // Indigo
        secondary: "#9333EA", // Purple
        accent: "#FACC15", // Yellow
        dark: "#111827", // Background dark
      },
    },
  },
  plugins: [],
};