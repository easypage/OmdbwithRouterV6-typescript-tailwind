module.exports = {
  // purge 배열을 변경해 줍니다.
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ShipporiAntique: ['Shippori Antique', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: { scale: ['focus-within'] },
  },
  plugins: [],
};
