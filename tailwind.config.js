/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep:       '#020408',
        navy:       '#050A18',
        sapphire:   '#08162E',
        'blue-500': '#0099FF',
        'blue-300': '#7ACAFF',
        'blue-700': '#0068AD',
        'blue-glow':'rgba(0, 153, 255, 0.35)',
        gold:       '#0099FF', // backwards compatibility alias to brand blue
        'gold-lt':  '#BAE6FD',
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
