/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void:        '#0A0A0C',
        obsidian:    '#0A0A0C',
        deep:        '#0A0A0C',
        card:        '#111116',
        'glass-card':'#111116',
        secondary:   '#A1A1AA',
        platinum:    '#E5E4E2',
        gold:        '#D4AF37',
        'gold-metallic': '#D4AF37',
        'gold-vivid':'#D4AF37',
        'gold-lt':   '#E5E4E2',
        'gold-bright':'#FFFFFF',
        'gold-dark': '#B89228',
        'gold-glow': 'rgba(212, 175, 55, 0.18)',
        // Retain compatibility mappings directed to stealth wealth palette
        navy:        '#0A0A0C',
        sapphire:    '#111116',
        'logo-navy': '#111116',
        'blue-500':  '#3b82f6',
        'blue-600':  '#2563eb',
        'blue-400':  '#60a5fa',
        'blue-300':  '#93c5fd',
        'blue-700':  '#1d4ed8',
        'blue-glow': 'rgba(212, 175, 55, 0.15)',
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
