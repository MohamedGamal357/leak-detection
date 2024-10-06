/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'primary': '#FE6152',
      'secondary': '#959DB4',
      'third': '#CED6E0',
      'forth': '#8C8C8C',
      'fifth': '#FF6731',
      'sixth': '#F9F9F9',
      'white': '#fff',
      'text-dark': '#697E95',
      'black': '#000',
      'blue': '#1FB6FF',
      'purple': '#7E5BEF',
      'pink': '#FF49DB',
      'orange': '#FF7849',
      'green': '#13CE66',
      'description': '#697E95',
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['din', 'sans-serif'],

    },
    minHeight: {
      '3/4': '75%',
    },
    maxWidth: {
      '3/4': '75%',
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [

  ]
};