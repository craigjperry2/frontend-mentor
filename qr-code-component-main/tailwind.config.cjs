/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: 'hsl(var(--color-white))',
      lightgray: 'hsl(var(--color-lightgray))',
      greyishblue: 'hsl(var(--color-greyishblue))',
      darkblue: 'hsl(var(--color-darkblue))',
    },
    fontFamily: {
      'sans': ["Outfit"],
    }
  },
  plugins: [],
}
