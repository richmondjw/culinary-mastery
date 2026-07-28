/** @type {import('tailwindcss').Config} */
// SIZZLE — risograph comic brand.
// Token NAMES are deliberately unchanged from the previous theme
// (copper/sage/wine/parchment/ink/star) so every screen restyles centrally.
//   copper -> flame (primary, Cook track)
//   sage   -> teal  (pass/complete, Business track)
//   wine   -> fluoro (celebration, Craft track)
//   star   -> butter (highlight, XP, selection)
//   ink    -> outline + text ramp
// RULE: flame/teal/fluoro/butter are FILL colours. Text on them is ink-900.
// When one must BE the text, use the -700 "deep" variant.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FFFDF8',
        parchment: {
          50: '#FFF6E8',   // app background + halftone
          100: '#F1EBDC',  // disabled fill, neutral pill
          200: '#E8E2CD',  // progress track, hairline rules
        },
        ink: {
          900: '#14100E',  // outlines, headings, text on every accent
          700: '#3A342C',  // long-form body
          500: '#6B655C',  // meta / eyebrow labels (4.9:1)
          400: '#6B655C',  // intentional alias: old ink-400 was too light for AA
          300: '#C2BCAE',  // locked outlines, quiet rules (non-text only)
          locked: '#5A544A', // text inside locked / disabled fills
        },
        copper: {
          50: '#FFE3D4',
          100: '#FFD3BF',
          300: '#FF9E7A',
          500: '#FF6B36',  // primary hover
          600: '#FF4B12',  // FLAME - primary fill
          700: '#B03A00',  // flame as text on paper (5.8:1)
          800: '#8F2C00',
        },
        sage: {
          100: '#D6F2EF',
          500: '#14B0A2',  // teal hover
          600: '#0F9B8E',  // TEAL - pass fill
          700: '#0A6F66',  // teal as text (6.1:1)
        },
        wine: {
          500: '#FF48B0',  // FLUORO - celebration fill
          600: '#C41E7A',  // fluoro as text (5.4:1)
        },
        star: {
          400: '#FFC93D',  // BUTTER - highlight, XP, focus ring, selection
        },
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        display: ['"Archivo Black"', 'Archivo', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Eyebrow / label floor. Nothing in the app goes below this.
        '2xs': ['0.75rem', { lineHeight: '1rem' }],   // 12px
        base: ['1.125rem', { lineHeight: '1.6' }],    // 18px body floor
      },
      boxShadow: {
        press: '2px 2px 0 0 #14100E',
        card: '4px 4px 0 0 #14100E',
        lift: '7px 7px 0 0 #14100E',
        halo: '0 0 0 3px #FFC93D',
        focus: '0 0 0 4px #FFC93D',
      },
      minHeight: {
        tap: '48px',
        cta: '52px',
        hero: '64px',
      },
      backgroundImage: {
        halftone: 'radial-gradient(rgba(20,16,14,0.055) 1.1px, transparent 1.2px)',
        heat: 'repeating-linear-gradient(135deg, #FF4B12 0 8px, #FF6B36 8px 16px)',
        photo: 'repeating-linear-gradient(135deg, #FFE3D4 0 9px, #FFF6E8 9px 18px)',
      },
      backgroundSize: {
        halftone: '13px 13px',
      },
      keyframes: {
        'sizzle-pop': {
          '0%': { transform: 'scale(0.9) rotate(-3deg)' },
          '60%': { transform: 'scale(1.04) rotate(1deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        'sizzle-pop': 'sizzle-pop 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
