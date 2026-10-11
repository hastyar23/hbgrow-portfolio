/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Main Background (The Void) ──
        void: '#0A0A0C',
        background: '#0A0A0C',
        obsidian: '#0A0A0C',
        deep: '#0A0A0C',

        // ── Card Backgrounds (Frosted Glass: #111116) ──
        card: '#111116',
        'glass-card': '#111116',
        'frosted-glass': '#111116',
        'card-frosted': 'rgba(255, 255, 255, 0.03)',

        // ── Card Borders (The Premium Edge: rgba(255, 255, 255, 0.08)) ──
        'premium-edge': 'rgba(255, 255, 255, 0.08)',
        'glass-edge': 'rgba(255, 255, 255, 0.08)',
        border: 'rgba(255, 255, 255, 0.08)',

        // ── Primary Typography (Pure White) ──
        primary: '#FFFFFF',

        // ── Secondary Typography (Body Text: Zinc 400) ──
        secondary: '#A1A1AA',
        body: '#A1A1AA',
        slate: '#A1A1AA',

        // ── The New Accent (Champagne Gold: #E5E4E2 to #D4AF37) ──
        platinum: '#E5E4E2',
        gold: '#D4AF37',
        'gold-metallic': '#D4AF37',
        'gold-vivid': '#D4AF37',
        'gold-lt': '#E5E4E2',
        'gold-bright': '#FFFFFF',
        'gold-dark': '#B89228',
        'gold-glow': 'rgba(212, 175, 55, 0.18)',

        // ── System Compatibility Mappings Routed to Stealth Wealth Palette ──
        navy: '#0A0A0C',
        sapphire: '#111116',
        'logo-navy': '#111116',
        'blue-glow': 'rgba(212, 175, 55, 0.15)',
      },
      backgroundImage: {
        'champagne-gold': 'linear-gradient(135deg, #E5E4E2 0%, #D4AF37 100%)',
        'champagne-gold-hover': 'linear-gradient(135deg, #FFFFFF 0%, #E5C158 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E5E4E2 0%, #D4AF37 100%)',
        'void-canvas': 'linear-gradient(180deg, #0A0A0C 0%, #08080A 40%, #060608 100%)',
      },
      borderColor: {
        'premium-edge': 'rgba(255, 255, 255, 0.08)',
        'glass-edge': 'rgba(255, 255, 255, 0.08)',
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
        'premium-glass': '0 16px 40px rgba(0, 0, 0, 0.80), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'champagne-glow': '0 0 24px rgba(212, 175, 55, 0.25)',
        'champagne-hover': '0 0 32px rgba(212, 175, 55, 0.40)',
      },
    },
  },
  plugins: [],
};
