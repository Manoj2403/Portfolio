const { transform } = require('motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#F564A9",
        customGreen: "#34D399",
        customTeal: "#3DC2EC",
        customOrange: "orange"
      },

      animation: {
        'fade-in': 'fadeIn 1s linear',
        'fade-right': 'faderight 1s linear',
        'fade-left': 'fadeleft 1s linear',
        'scroll-left': 'scrollLeft 15s linear infinite',
        'scroll-right': 'scrollRight 15s linear infinite',
        'fade-top': 'fadeTop 1.5s ease-in'
      },
      extend: {
        rotate: {
          'y-6': '6deg'
        }
      },

      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        fadeIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        faderight: {
          "0%": { transform: 'translateX(-100px)', opacity: '0' },
          "100%": { transform: 'translateX(0px)', opacity: '1' },
        },
        fadeleft: {
          "0%": { transform: 'translateX(100px)', opacity: '0' },
          "100%": { transform: 'translateX(0)', opacity: '1' },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeTop: {
          "0%": { transform: "translateY(-300px)", opacity: '0' },
          "50%": { opacity: '0' },
          "100%": { transform: "translateY(0)", opacity: '1' }
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },

      ignoreWarnings: [
        {
          module: /lucide-react/,
        },
      ],

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cursive: ['Cedarville Cursive', 'cursive']
      },
    },
  },
  plugins: [],
  // plugins: [require('tailwind-scrollbar')],
};
