/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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

