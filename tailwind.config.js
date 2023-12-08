/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        body: {
          default: '#181818',
        },
        primary: {
          500: '#fd521b',
          400: '#f57c32',
        },
        secondary: {
          500: '#eaa527',
        },
        text: {
          500: '#7b7b7b',
          400: '#989898',
          300: '#8f8f8f',
        },
        gray2: {
          900: '#1c1c1c',
          600: '#131313',
          500: '#2b2b2b',
          400: '#202020',
        },
      },
      fontFamily: {
        sans: ['Mulish'],
        secondary: ['VastagoGrotesk'],
      },
    },
  },
  plugins: [],
};
