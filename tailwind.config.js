/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradiantbg': 'linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))'
      }
    },
  },
  plugins: [],
}

