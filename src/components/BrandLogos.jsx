import { useTranslation } from 'react-i18next';
import { clients } from '../data/portfolioData';

export default function BrandLogos() {
  const { t, i18n } = useTranslation();

  const label = i18n.language?.startsWith('ku')
    ? 'هەندێک لەو براند و کۆمپانیایانەی کە کارمان بۆ کردوون'
    : i18n.language?.startsWith('ar')
      ? 'بعض العلامات التجارية والشركات التي عملنا معها'
      : 'Trusted by 100+ Brands & Businesses';

  const renderLogoItem = (src, key) => (
    <div
      key={key}
      style={{
        flexShrink: 0,
        height: 'clamp(30px, 4.8vw, 44px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'grayscale(100%) brightness(1.05)',
        opacity: 0.65,
        transition: 'opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.filter = 'grayscale(0%) brightness(1.3)';
        e.currentTarget.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = '0.65';
        e.currentTarget.style.filter = 'grayscale(100%) brightness(1.05)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <img
        src={src}
        alt="Client brand logo"
        loading="lazy"
        decoding="async"
        style={{
          height: '100%',
          maxWidth: 'clamp(80px, 13vw, 135px)',
          objectFit: 'contain',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
    </div>
  );

  return (
    <section
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #050811 0%, #080C16 50%, #050811 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(90vw, 800px)', height: 260,
        background: 'radial-gradient(ellipse, rgba(30, 58, 138, 0.18) 0%, rgba(3, 20, 43, 0.3) 45%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(1.25rem, 3vw, 2.25rem)', position: 'relative', zIndex: 2, padding: '0 1rem' }}>
        <p style={{
          fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
          fontSize: 'clamp(0.68rem, 1.6vw, 0.78rem)',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.65)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          {label}
        </p>
      </div>

      {/* Marquee Track Container: explicitly dir="ltr" to avoid RTL translation inversion / gaps */}
      <div
        dir="ltr"
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(40px, 10vw, 140px)',
          background: 'linear-gradient(to right, #050811 0%, transparent 100%)',
          zIndex: 3, pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(40px, 10vw, 140px)',
          background: 'linear-gradient(to left, #050811 0%, transparent 100%)',
          zIndex: 3, pointerEvents: 'none',
        }} />

        {/* Continuous Marquee Track */}
        <div
          className="brand-marquee-track"
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'brand-scroll 70s linear infinite',
            willChange: 'transform',
            padding: '0.5rem 0',
          }}
          onMouseEnter={e => { e.currentTarget.style.animationPlayState = 'paused'; }}
          onMouseLeave={e => { e.currentTarget.style.animationPlayState = 'running'; }}
        >
          {/* Group 1 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(2rem, 5vw, 4rem)',
              paddingRight: 'clamp(2rem, 5vw, 4rem)',
              flexShrink: 0,
            }}
          >
            {clients.map((src, i) => renderLogoItem(src, `g1-${i}`))}
          </div>

          {/* Group 2: Exact duplicate with matching gap & paddingRight for flawless 0-gap infinite repeat */}
          <div
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(2rem, 5vw, 4rem)',
              paddingRight: 'clamp(2rem, 5vw, 4rem)',
              flexShrink: 0,
            }}
          >
            {clients.map((src, i) => renderLogoItem(src, `g2-${i}`))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes brand-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .brand-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
