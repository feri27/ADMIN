const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },colors: {
        cyan: colors.cyan,
        orange: colors.orange
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      display: ['group-hover'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      opacity: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
