/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // need this to not fail looking for components
  content: ["app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
