/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
  ],
  theme: {

    colors: {
      'custom-yellow': '#FFD15B',
      'custom-gray': '#7A7A7A',
      'background-gray': '#EDEDED',
    },

    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
      'anton': ['Anton', 'sans-serif'],
    },

    fontSize: {
      'xs': '.75rem', //12px
      'sm': '.875rem', //14px
      'base': '1rem', //16px
      'lg': '1.125rem', //18px
      'xl': '1.3125rem', //21px
      '2xl': '1.5rem', //24px
      '3xl': '2.125rem', //34px
      '4xl': '2.75rem', //44px
    },

    extend: {},
  },
  plugins: [],
}

