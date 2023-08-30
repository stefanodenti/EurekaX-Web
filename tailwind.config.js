module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "tertiary": "var(--tertiary-color)",
        "base": "var(--base-color)",
        "success": "var(--success-color)",
        "warning": "var(--warning-color)",
        "error": "var(--error-color)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}
