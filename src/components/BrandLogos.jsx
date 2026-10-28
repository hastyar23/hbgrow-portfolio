import { useTranslation } from 'react-i18next';
import { clients } from '../data/portfolioData';

// Duplicate for seamless infinite scroll
const LOGOS = [...clients, ...clients];

export default function BrandLogos() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  const label = isRTL
    ? 'براندەکان و کۆمپانیاکانمان کە پێیانخزمەت کردووین'
    : 'Trusted by 100+ Brands & Businesses';

  return (
    <section
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 250,
        background: 'radial-gradient(ellipse, rgba(3,20,43,0.025) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(1.25rem, 3vw, 2.25rem)', position: 'relative', zIndex: 2, padding: '0 1rem' }}>
        <p style={{
          fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
          fontSize: 'clamp(0.68rem, 1.6vw, 0.78rem)',
          fontWeight: 600,
          color: 'rgba(3,20,43,0.45)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          {label}
        </p>
      </div>

      {/* Marquee Track */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(30px, 8vw, 100px)',
          background: 'linear-gradient(to right, #F8FAFC 0%, transparent 100%)',
          zIndex: 3, pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(30px, 8vw, 100px)',
          background: 'linear-gradient(to left, #F8FAFC 0%, transparent 100%)',
          zIndex: 3, pointerEvents: 'none',
        }} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            animation: 'brand-scroll 35s linear infinite',
            width: 'max-content',
            padding: '0.25rem 0',
          }}
        >
          {LOGOS.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                height: 'clamp(28px, 4.5vw, 42px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'grayscale(100%)',
                opacity: 0.55,
                transition: 'opacity 0.3s ease, filter 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '0.55';
                e.currentTarget.style.filter = 'grayscale(100%)';
              }}
            >
              <img
                src={src}
                alt="Client brand logo"
                loading="lazy"
                decoding="async"
                style={{
                  height: '100%',
                  maxWidth: 'clamp(70px, 12vw, 130px)',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brand-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="brand-scroll"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
