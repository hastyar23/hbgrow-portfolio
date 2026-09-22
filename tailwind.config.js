/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep:    '#030508',
        navy:    '#060B18',
        sapphire:'#0A1428',
        gold:    '#DFBA6B',
        'gold-lt':'#F5E5C9',
      },
      fontFamily: {
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
