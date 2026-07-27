/** @type {import('tailwindcss').Config} */
// Manga × Nintendo theme. Token names are kept from the original design
// (copper/sage/wine/parchment/ink) so every screen restyles centrally:
//   copper → hero red (Switch neon / Mario red), sage → 1-UP green,
//   wine → boss magenta, parchment → manga paper, ink → panel outline black.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fffdf5',
          100: '#f8f3e2',
          200: '#e8e2cd',
        },
        ink: {
          900: '#0f0e0d',
          700: '#33302c',
          500: '#6b665e',
          400: '#9b958a',
          300: '#c2bcae',
        },
        copper: {
          50: '#ffeef0',
          100: '#ffd9dd',
          300: '#ff8b94',
          500: '#ff4554',
          600: '#e60012',
          700: '#bc0010',
          800: '#8f000c',
        },
        sage: {
          100: '#dff5d8',
          500: '#49b64e',
          600: '#2fa044',
          700: '#1f7a30',
        },
        wine: {
          500: '#d4306a',
          600: '#a81c50',
        },
        star: {
          400: '#ffcb05',
        },
        luigi: {
          500: '#00c3e3',
        },
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Bangers', '"M PLUS Rounded 1c"', 'system-ui', 'cursive'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '0.9rem' }],
      },
      boxShadow: {
        card: '4px 4px 0 0 #0f0e0d',
        lift: '7px 7px 0 0 #0f0e0d',
        press: '2px 2px 0 0 #0f0e0d',
      },
    },
  },
  plugins: [],
}
