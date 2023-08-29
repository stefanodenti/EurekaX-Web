module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "tertiary": "var(--tertiary-color)",
        "accent": "var(--accent-color)"
      },
    },
  },
  plugins: [],
}
