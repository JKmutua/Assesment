/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#EFFDF5",
          100: "#D9FBE8",
          200: "#B3F5D1",
          300: "#23a455",
          400: "#23a455",
          500: "#23a455",
          600: "#23a455",
          700: "#23a455",
          800: "#016538",
          900: "#0A5331",
          950: "#052e16",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
