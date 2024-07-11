// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit'],
      },
      backgroundImage: {
        'linear-gradient-to-right': 'linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)',
      },
      animation: {
        'loader': 'loader 3s linear infinite',
      },
    },
  },
  plugins: [],
};
