import { useEffect, useRef, useState } from 'react';
import { TrendingUp, CheckCircle2, Star, Maximize2, X } from 'lucide-react';
import { designs } from '../data/portfolioData';

// Curated pool of high-performing creatives (keeping all 9 iconic creatives from user's showcase + additions)
const COL_1_IMAGES = [designs[2], designs[20], designs[38], designs[4]];
const COL_2_IMAGES = [designs[8], designs[26], designs[44], designs[10]];
const COL_3_IMAGES = [designs[14], designs[32], designs[50], designs[18]];

// Luxury floating social-proof badges
const BADGES = [
  {
    id: 'content',
    top: '7%',
    right: '2%',
    sub: 'CONTENT CREATED',
    value: '+1000',
    icon: TrendingUp,
    iconBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    iconShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
    delay: 0.2,
    className: 'badge-pos-2',
  },
  {
    id: 'brands',
    bottom: '12%',
    left: '2%',
    sub: 'PORTFOLIO',
    value: '100+ Brands',
    icon: CheckCircle2,
    iconBg: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    iconShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
    delay: 0.8,
    className: 'badge-pos-3',
  },
  {
    id: 'leads',
    bottom: '7%',
    right: '2%',
    sub: 'ACQUISITION',
    value: '60K+ Leads',
    icon: Star,
    iconBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    iconShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
    delay: 0.4,
    className: 'badge-pos-4',
  },
];

export default function HeroCreativeGrid() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key for fullscreen preview modal
  useEffect(() => {
    if (!selectedImg) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedImg]);

  return (
    <>
      <div
        ref={containerRef}
        className="hero-creative-container"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
          height: 'clamp(440px, 52vw, 640px)',
          overflow: 'hidden',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.6s ease',
          boxSizing: 'border-box',
          padding: '0.25rem 0',
        }}
      >
        {/* Soft Ambient Glow Halo behind the floating cards */}
        <div
          style={{
            position: 'absolute',
            inset: '10%',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(197, 164, 89, 0.12) 0%, rgba(3, 20, 43, 0.05) 50%, transparent 80%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* ── Floating social-proof badges ── */}
        {BADGES.map((badge, i) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.id}
              className={`hero-creative-badge ${badge.className}`}
              dir="ltr"
              style={{
                position: 'absolute',
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right,
                zIndex: 10,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'clamp(0.45rem, 1vw, 0.65rem)',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(20px) saturate(190%)',
                WebkitBackdropFilter: 'blur(20px) saturate(190%)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '100px',
                padding: 'clamp(0.32rem, 0.8vw, 0.42rem) clamp(0.7rem, 1.4vw, 0.95rem) clamp(0.32rem, 0.8vw, 0.42rem) clamp(0.38rem, 0.9vw, 0.5rem)',
                boxShadow: '0 16px 36px -6px rgba(3, 20, 43, 0.18), 0 4px 14px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)',
                animation: `float-badge-${i % 2 === 0 ? 'a' : 'b'} ${5 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${badge.delay}s`,
                pointerEvents: 'none',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Jewel Icon Badge */}
              <div
                style={{
                  width: 'clamp(24px, 2.5vw, 28px)',
                  height: 'clamp(24px, 2.5vw, 28px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: badge.iconBg,
                  boxShadow: badge.iconShadow,
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <IconComponent size={14} strokeWidth={2.5} />
              </div>

              {/* Text content with high-end micro-typography */}
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.15 }}>
                <span
                  style={{
                    fontSize: 'clamp(0.55rem, 1.1vw, 0.62rem)',
                    fontWeight: 700,
                    color: '#64748B',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {badge.sub}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(0.72rem, 1.3vw, 0.84rem)',
                    fontWeight: 800,
                    color: '#03142B',
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                    letterSpacing: '-0.01em',
                  }}
                >
                  {badge.value}
                </span>
              </div>
            </div>
          );
        })}

        {/* ── Image columns with gentle edge feathering ── */}
        <div
          className="hero-grid-columns"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(8px, 1.8vw, 15px)',
            height: '100%',
            padding: '0 clamp(4px, 1vw, 8px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1,
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          {/* Column 1 — slides up */}
          <Column images={COL_1_IMAGES} direction="up" speed={24} offset={0} onSelectImg={setSelectedImg} />
          {/* Column 2 — slides down (offset) */}
          <Column images={COL_2_IMAGES} direction="down" speed={30} offset={-80} onSelectImg={setSelectedImg} />
          {/* Column 3 — slides up (fast) */}
          <Column images={COL_3_IMAGES} direction="up" speed={21} offset={-40} onSelectImg={setSelectedImg} />
        </div>

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
          .hero-creative-container:hover .hero-creative-col-track {
            animation-play-state: paused;
          }
          .hero-creative-card:hover {
            transform: translateY(-4px) scale(1.025);
            box-shadow: 0 20px 45px -8px rgba(3, 20, 43, 0.22), 0 4px 12px rgba(0, 0, 0, 0.08) !important;
            border-color: rgba(197, 164, 89, 0.45) !important;
          }
          .hero-creative-card:hover .hero-card-overlay {
            opacity: 1 !important;
          }
          .hero-creative-card:hover img {
            transform: scale(1.03);
          }
          @media (max-width: 480px) {
            .badge-pos-3, .badge-pos-4 {
              display: none !important;
            }
          }
          @keyframes modalZoomIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>

      {/* ── High-Res Fullscreen Lightbox Modal ── */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(3, 20, 43, 0.88)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 4vw, 2.5rem)',
            cursor: 'zoom-out',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'absolute',
              top: 'clamp(1rem, 3vw, 2rem)',
              right: 'clamp(1rem, 3vw, 2rem)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Close Preview"
          >
            <X size={20} />
          </button>

          {/* Expanded Image Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '90vh',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.65)',
              background: '#FFFFFF',
              cursor: 'default',
              animation: 'modalZoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <img
              src={selectedImg}
              alt="Fullscreen ad creative"
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

function Column({ images, direction, speed, offset, onSelectImg }) {
  // Duplicate for seamless infinite loop
  const all = [...images, ...images];

  return (
    <div style={{ overflow: 'hidden', height: '100%', position: 'relative' }}>
      <div
        className="hero-creative-col-track"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(10px, 1.8vw, 16px)',
          animation: `scroll-col-${direction} ${speed}s linear infinite`,
          willChange: 'transform',
          transform: `translateY(${offset}px)`,
        }}
      >
        {all.map((src, i) => (
          <div
            key={i}
            className="hero-creative-card"
            onClick={() => onSelectImg(src)}
            style={{
              borderRadius: 'clamp(10px, 1.6vw, 16px)',
              overflow: 'hidden',
              flexShrink: 0,
              width: '100%',
              background: '#FFFFFF',
              border: '1px solid rgba(3, 20, 43, 0.08)',
              boxShadow: '0 10px 28px -6px rgba(3, 20, 43, 0.12), 0 3px 8px rgba(0, 0, 0, 0.04)',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: 'translateZ(0)',
            }}
          >
            {/* The Image — Actual Natural Size / Aspect Ratio, Zero Cropping */}
            <img
              src={src}
              alt="Creative ad design"
              loading={i < 3 ? 'eager' : 'lazy'}
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Subtle Interactive Hover Cue */}
            <div
              className="hero-card-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(3, 20, 43, 0.65) 0%, rgba(3, 20, 43, 0.15) 45%, transparent 100%)',
                opacity: 0,
                transition: 'opacity 0.25s ease',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                padding: '0.65rem',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#03142B',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <Maximize2 size={11} />
                <span>View</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
