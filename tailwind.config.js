/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep:    '#02050a',
        navy:    '#050e1d',
        sapphire:'#0d2342',
        gold:    '#C5A459',
        'gold-lt':'#d4b66a',
      },
      fontFamily: {
        naskh: ['"Noto Naskh Arabic"', 'serif'],
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
