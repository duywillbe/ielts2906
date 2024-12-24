/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'max-ipad': { max: '768px' }, //  ≤ 768px
      },
    },
  },
  plugins: [require('tailwindcss'), require('@tailwindcss/nesting'), require('autoprefixer')],
};
