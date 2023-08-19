/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        color1: '#cdb4db',
        color2: '#ffc8dd',
        color3: '#ffafcc',
        color4: '#bde0fe',
        color5: '#a2d2ff',
        color6: '#050A30',
        color7: '#000C66',
        color8: '#0000FF',
        color9: '#7EC8E3',
      },
      fontFamily: {
        custom: ['Barriecito', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
