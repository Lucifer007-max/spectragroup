/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Montserrat', 'sans-serif'],
        'syncopate': ['Montserrat', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      colors: {
        primary: '#066aab',
        dark: '#121212',
        light: '#ffffff',
        customOrange: "#DB4D4D",
        customOrangeDark: "#DB4D4D"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}