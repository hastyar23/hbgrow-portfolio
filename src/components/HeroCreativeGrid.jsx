import { useEffect, useRef, useState } from 'react';
import { designs } from '../data/portfolioData';

// Pick 6 designs evenly distributed from the pool
const GRID_IMAGES = [
  designs[2],  designs[8],  designs[14],
  designs[20], designs[26], designs[32],
  designs[38], designs[44], designs[50],
];

// Floating badge overlays for social-proof feel
const BADGES = [
  { label: '🔥 ROAS 6.2×', top: '8%',  left: '2%',  delay: 0 },
  { label: '📈 +340% Sales', top: '14%', right: '3%', delay: 0.6 },
  { label: '✅ 100+ Brands', bottom: '18%', left: '2%', delay: 1.1 },
  { label: '⭐ 60K+ Leads', bottom: '12%', right: '3%', delay: 0.3 },
];

export default function HeroCreativeGrid() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 900,
        margin: '0 auto',
        height: 'clamp(300px, 45vw, 520px)',
        overflow: 'hidden',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* ── Floating social-proof badges ── */}
      {BADGES.map((badge, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...badge,
            zIndex: 10,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(3, 20, 43, 0.12)',
            borderRadius: '100px',
            padding: '0.4rem 0.9rem',
            fontSize: 'clamp(0.65rem, 1.5vw, 0.78rem)',
            fontWeight: 700,
            color: '#03142B',
            fontFamily: "'Inter', sans-serif",
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            animation: `float-badge-${i % 2 === 0 ? 'a' : 'b'} ${5 + i * 0.7}s ease-in-out infinite`,
            animationDelay: `${badge.delay}s`,
          }}
        >
          {badge.label}
        </div>
      ))}

      {/* ── Image columns ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(8px, 1.5vw, 14px)',
          height: '100%',
          padding: '0 clamp(0.5rem, 2vw, 1.5rem)',
        }}
      >
        {/* Column 1 — slides up */}
        <Column images={[GRID_IMAGES[0], GRID_IMAGES[3], GRID_IMAGES[6]]} direction="up" speed={22} offset={0} />
        {/* Column 2 — slides down (offset) */}
        <Column images={[GRID_IMAGES[1], GRID_IMAGES[4], GRID_IMAGES[7]]} direction="down" speed={28} offset={-60} />
        {/* Column 3 — slides up (fast) */}
        <Column images={[GRID_IMAGES[2], GRID_IMAGES[5], GRID_IMAGES[8]]} direction="up" speed={19} offset={-30} />
      </div>

      {/* Top & bottom fade masks */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '18%',
        background: 'linear-gradient(to bottom, #FFFFFF 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 5,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '18%',
        background: 'linear-gradient(to top, #FFFFFF 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 5,
      }} />

      {/* Subtle vignette sides */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '8%',
        background: 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 5,
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: '8%',
        background: 'linear-gradient(to left, rgba(255,255,255,0.7) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 5,
      }} />

      <style>{`
        @keyframes float-badge-a {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-badge-b {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
        @keyframes scroll-col-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-col-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function Column({ images, direction, speed, offset }) {
  // Duplicate for seamless loop
  const all = [...images, ...images];

  return (
    <div style={{ overflow: 'hidden', height: '100%', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(8px, 1.5vw, 14px)',
          animation: `scroll-col-${direction} ${speed}s linear infinite`,
          willChange: 'transform',
          transform: `translateY(${offset}px)`,
        }}
      >
        {all.map((src, i) => (
          <div
            key={i}
            style={{
              borderRadius: '0.875rem',
              overflow: 'hidden',
              flexShrink: 0,
              aspectRatio: '9/16',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              background: '#F8FAFC',
            }}
          >
            <img
              src={src}
              alt="Creative ad design"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
