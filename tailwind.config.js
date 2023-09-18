/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto',
        bebas: 'Bebas Neue',
        lobster: 'Lobster',
        mooli: 'Mooli',
      },
      colors: {
        textHover: '#309ccf',
        primary: '#0b1222',
      }
    },
  },
  plugins: [],
}

