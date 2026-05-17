export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0f172a",
        accent: "#d4af37",
        surface: "#111827",
      },
      boxShadow: {
        glowing: "0 20px 50px rgba(212, 175, 55, 0.18)",
      },
    },
  },
  plugins: [],
};
