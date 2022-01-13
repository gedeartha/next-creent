const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        background: '#E5E5E5',
        primary: '#F6BE44',
        secondary: '#F70C3D',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
        lilita: ['Lilita One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
