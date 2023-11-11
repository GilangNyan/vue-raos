/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFB300',
        'primary-variant': '#FFCA28',
        'info': '#00BCD4',
        'error': '#F44336',
        'success': '#4CAF50',
        'warning': '#FFEB3B',
        'dark-primary': '#FFE082',
        'dark-info': '#80DEEA',
        'dark-error': '#EF9A9A',
        'dark-success': '#A5D6A7',
        'dark-warning': '#ECF897',
        'dark-background': '#263238',
        'dark-surface': '#37474F'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

