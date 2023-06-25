
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        title: `1.6rem;`,
        paragraph: `1.2rem;`
      },
      fontFamily: {
        'Montserrat': ['Montserrat']
      },colors: {
        cyan: colors.blue,
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
