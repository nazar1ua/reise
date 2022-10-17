const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        display: ['Noto Sans Display', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2.5xl': ['1.6875rem', '2.125rem'],
      },
      spacing: {
        '0.25': '0.0625rem',
      },
      borderRadius: {
        '4xl': '6.25rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
