/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyber-red': '#FF0000',
        'cyber-dark': '#050505',
        'cyber-card': '#0B0B0B',
        'cyber-border': '#242424',
        'cyber-gray': '#B8B8B8',
        'cyber-muted': '#777777',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
