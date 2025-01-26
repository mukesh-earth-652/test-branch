/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '575px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },


    container : {
      center: true,
      'sm': '302px',
      'md': '430px',
      'lg': '575px',
      'xl': '90%',
      '2xl': '90%',
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },


    extend: {
      color: {
        'primary': '#53514d',
        'secondary': '#7b9645',
        'light': '#fff',
      },
    },
  },
  plugins: [],
}

