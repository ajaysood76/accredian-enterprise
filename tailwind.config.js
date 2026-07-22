/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          800: "#101A2E",
          700: "#16223B",
          600: "#1D2C49",
        },
        cream: {
          DEFAULT: "#F7F4EC",
          100: "#FBF9F4",
          200: "#F1ECDF",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E4C766",
          dark: "#9A7A17",
        },
        emerald: {
          DEFAULT: "#1F6F5C",
          light: "#2E8E76",
        },
        slate: {
          muted: "#5B6472",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "seal-radial":
          "radial-gradient(circle at center, rgba(201,162,39,0.15) 0%, rgba(201,162,39,0) 70%)",
      },
    },
  },
  plugins: [],
};
