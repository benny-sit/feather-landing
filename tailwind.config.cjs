/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        north: ['North'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["wireframe", "dark"],
  },
}
