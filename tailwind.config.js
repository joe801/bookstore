/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto',
        bebas: 'Bebas Neue',
        lobster: 'Lobster',
      },
      colors: {
        textHover: '#309ccf',
      }
    },
  },
  plugins: [],
}

