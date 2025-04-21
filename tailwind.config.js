/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CC057B',
        'primary-dark': '#A9046A',
        secondary: '#150057',
        'secondary-light': '#2A0087',
        neutral: {
          100: '#F7F7F9',
          200: '#E9E9EC',
          300: '#D1D1D6',
        },
        text: '#242424'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '8xl': '6rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};