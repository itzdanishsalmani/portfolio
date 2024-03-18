/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-green':'rgb(22 242 179)',
        'custom-pink':'rgb(236 72 153)',
      },
    },
  },
  plugins: [],
}

