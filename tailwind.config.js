module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 10px 2px rgba(20, 184, 166, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 20px 4px rgba(20, 184, 166, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
