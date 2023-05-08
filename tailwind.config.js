/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: {
      big: '200px',
     },
    extend: {
      boxShadow: {
        'myShadow': '0px 0px 165px -70px rgba(71, 71, 71, 0.31)',
        'myShadow1': '0px 0px 165px -70px rgba(28, 119, 255, 0.31)',
        'myShadow3': '0px 0px 165px -70px rgba(0, 163, 255, 0.31)',
      },
      fontFamily: {
        'goret': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'color1': '#171821',
        'color3': '#2E2F37',
      },
    },
  },
  plugins: [],
}

