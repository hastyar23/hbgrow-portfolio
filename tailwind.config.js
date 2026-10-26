/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Main Background (Minimal High-End White) ──
        void: '#FFFFFF',
        background: '#FFFFFF',
        obsidian: '#FAFAFA',
        deep: '#FFFFFF',

        // ── Card Backgrounds (Frosted White Porcelain: #FFFFFF) ──
        card: '#FFFFFF',
        'glass-card': '#FFFFFF',
        'frosted-glass': '#FFFFFF',
        'card-frosted': 'rgba(0, 0, 0, 0.02)',

        // ── Card Borders (The Premium Edge: rgba(0, 0, 0, 0.08)) ──
        'premium-edge': 'rgba(0, 0, 0, 0.08)',
        'glass-edge': 'rgba(0, 0, 0, 0.08)',
        border: 'rgba(0, 0, 0, 0.08)',

        // ── Primary Typography (Obsidian / Midnight Charcoal) ──
        primary: '#0A0A0C',

        // ── Secondary Typography (Body Text: Slate 600 / Zinc 600) ──
        secondary: '#52525B',
        body: '#52525B',
        slate: '#52525B',

        // ── Accent & Brand Palette ──
        platinum: '#F4F4F6',
        gold: '#D4AF37',
        'gold-metallic': '#B8860B',
        'gold-vivid': '#03142B',
        'gold-lt': '#F1F5F9',
        'gold-bright': '#0A0A0C',
        'gold-dark': '#020C1B',
        'gold-glow': 'rgba(3, 20, 43, 0.12)',

        // ── Signature Dark Navy Blue (Brand Main) ──
        navy: '#03142B',
        'navy-dark': '#020C1B',
        'navy-mid': '#041E42',
        'navy-light': '#0A2E66',
        sapphire: '#0B3275',
        'logo-navy': '#03142B',
        'blue-glow': 'rgba(3, 20, 43, 0.18)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #020C1B 0%, #041E42 50%, #0A2E66 100%)',
        'navy-gradient-hover': 'linear-gradient(135deg, #03142B 0%, #08244D 50%, #0E3B7D 100%)',
        'champagne-gold': 'linear-gradient(135deg, #020C1B 0%, #041E42 50%, #0A2E66 100%)',
        'champagne-gold-hover': 'linear-gradient(135deg, #03142B 0%, #08244D 50%, #0E3B7D 100%)',
        'gold-gradient': 'linear-gradient(135deg, #020C1B 0%, #041E42 50%, #0A2E66 100%)',
        'void-canvas': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 50%, #F4F4F6 100%)',
      },
      borderColor: {
        'premium-edge': 'rgba(0, 0, 0, 0.08)',
        'glass-edge': 'rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', '"IBM Plex Sans Arabic"', '"Noto Kufi Arabic"', 'sans-serif'],
        display: ['Outfit', '"Sarchia Bokan"', 'sans-serif'],
        naskh: ['"Sarchia Bokan"', 'serif'],
        ibm: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        kufi: ['"IBM Plex Sans Arabic"', '"Noto Kufi Arabic"', 'sans-serif'],
        rabar: ['Rabar', 'sans-serif'],
        cairo: ['Cairo', 'Vazirmatn', 'sans-serif'],
        vazirmatn: ['Vazirmatn', 'Cairo', 'sans-serif'],
      },
      backdropBlur: {
        md: '12px',
        xl: '20px',
        '2xl': '32px',
      },
      boxShadow: {
        'premium-glass': '0 4px 24px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 1)',
        'navy-glow': '0 4px 20px -2px rgba(3, 20, 43, 0.35)',
        'navy-hover': '0 8px 28px -2px rgba(3, 20, 43, 0.45)',
        'champagne-glow': '0 4px 20px -2px rgba(3, 20, 43, 0.35)',
        'champagne-hover': '0 8px 28px -2px rgba(3, 20, 43, 0.45)',
      },
    },
  },
  plugins: [],
};
