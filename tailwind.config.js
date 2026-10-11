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
        gold:        '#DFB248',
        'gold-vivid':'#DFB248',
        'gold-lt':   '#F6E4B4',
        'gold-bright':'#FFF6DD',
        'gold-dark': '#A87A1E',
        'gold-glow': 'rgba(223, 178, 72, 0.25)',
        'blue-500':  '#2563EB',
        'blue-600':  '#1D4ED8',
        'blue-400':  '#60A5FA',
        'blue-300':  '#93C5FD',
        'blue-700':  '#0B3275',
        'blue-glow': 'rgba(13, 110, 253, 0.38)',
        obsidian:    '#0a0a0c',
      },
      fontFamily: {
        sans:  ['Inter', '"IBM Plex Sans Arabic"', '"Noto Kufi Arabic"', 'sans-serif'],
        display: ['Outfit', '"Sarchia Bokan"', 'sans-serif'],
        naskh: ['"Sarchia Bokan"', 'serif'],
        ibm:   ['"IBM Plex Sans Arabic"', 'sans-serif'],
        kufi:  ['"IBM Plex Sans Arabic"', '"Noto Kufi Arabic"', 'sans-serif'],
        rabar: ['Rabar', 'sans-serif'],
        cairo: ['Cairo', 'Vazirmatn', 'sans-serif'],
        vazirmatn: ['Vazirmatn', 'Cairo', 'sans-serif'],
      },
      backdropBlur: {
        xl: '20px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
}
