const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      first: '10px 10px 10px rgba(81, 81, 81, 0.25)'
    },
    extend: {
      backgroundImage: theme => ({
        'fisrt-back': "url('./src/pictures/BeTKC3wIOz8.jpg')"
       }),
      fontFamily: {
        primary: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: '#00E0F3',
          500: '#00c4fd',
        },
        dark: '#333333',
				lightBlue: '#22BFEA',
				darkerBlue: '#0AAAC0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
