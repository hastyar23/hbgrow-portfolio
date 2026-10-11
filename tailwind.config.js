/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep:        '#020612',
        navy:        '#03142B',
        sapphire:    '#042246',
        'logo-navy': '#031B39',
        gold:        '#FED703',
        'gold-vivid':'#FED703',
        'gold-lt':   '#FEF08A',
        'gold-bright':'#FFFDF0',
        'gold-dark': '#D97706',
        'gold-glow': 'rgba(254, 215, 3, 0.38)',
        'blue-500':  '#2563EB',
        'blue-600':  '#1D4ED8',
        'blue-400':  '#60A5FA',
        'blue-300':  '#93C5FD',
        'blue-700':  '#0B3275',
        'blue-glow': 'rgba(13, 110, 253, 0.38)',
      },
      fontFamily: {
        sans:  ['Inter', 'Noto Kufi Arabic', 'sans-serif'],
        display: ['Outfit', '"Sarchia Bokan"', 'sans-serif'],
        naskh: ['"Sarchia Bokan"', 'serif'],
        kufi:  ['"Noto Kufi Arabic"', 'sans-serif'],
        rabar: ['Rabar', 'sans-serif'],
      },
      backdropBlur: {
        xl: '20px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
}
