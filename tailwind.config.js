/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCE9EC',
          100: '#F8D3D9',
          200: '#F1A7B3',
          300: '#E97B8D',
          400: '#E04F67',
          500: '#CC2340',
          600: '#7E2231', // brand burgundy
          700: '#661C28',
          800: '#4D151E',
          900: '#330E14',
        },
        secondary: {
          50: '#FBFAEF',
          100: '#F8F5E0',
          200: '#F0EBC1',
          300: '#E9E0A1',
          400: '#E1D682',
          500: '#D4AF37', // brand gold
          600: '#BF9C31',
          700: '#8C7224',
          800: '#594918',
          900: '#26200A',
        },
        accent: {
          50: '#F3F5EF',
          100: '#E7EBDE',
          200: '#CED7BE',
          300: '#B5C39D',
          400: '#9CAF7D',
          500: '#556B2F', // brand olive
          600: '#4C6029',
          700: '#3D4E21',
          800: '#2E3919',
          900: '#1F2610',
        },
        cream: '#F5F5DC',
        success: {
          50: '#ECFDF5',
          300: '#6EE7B7',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          300: '#FCD34D',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          300: '#FCA5A5',
          600: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}