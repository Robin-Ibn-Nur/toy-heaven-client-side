const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}