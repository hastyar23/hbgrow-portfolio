import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, X, Grid } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const clients = [
  "https://framerusercontent.com/images/9TyuBjK9AfPnTYHmIjnMwMJroik.webp",
  "https://framerusercontent.com/images/YWRrcidcGDNbFjTq6dORFEmNxK8.webp",
  "https://framerusercontent.com/images/jldyWUfNnSoIoNRS27EAqPkVCMI.webp",
  "https://framerusercontent.com/images/1iktKPw73xJOa5aUkFRptJ40.webp",
  "https://framerusercontent.com/images/6IIFqFqedwsPCkZZL5AaTck9k9s.webp",
  "https://framerusercontent.com/images/hWPc2Q3P65ZDHVudSzUscNSMEB4.webp",
  "https://framerusercontent.com/images/Qgi05qYH740sKBO88vpQbiIhI.webp",
  "https://framerusercontent.com/images/OBy7G58X0A55NlkkeyLtJbydbeo.webp",
  "https://framerusercontent.com/images/OPAHPdNC6VpD1urxt7qozKgjroE.webp",
  "https://framerusercontent.com/images/b3Dqbm4Uzyd1S3iLXJVmA3jqYo.webp",
  "https://framerusercontent.com/images/iZCMsUrUEt6CnsUwkkb66C1dupk.webp",
  "https://framerusercontent.com/images/gArZDoTlKZNrLcIdR4dFCOu45ng.webp",
  "https://framerusercontent.com/images/Wk94SikRDtN0VMhL6Bxj0WHMlc4.webp",
  "https://framerusercontent.com/images/CekBiiEPXI1qVmshPHGhbWCfw.webp",
  "https://framerusercontent.com/images/9Hu2gpMqKE38z4XRp2pwHA8ZXo.webp",
  "https://framerusercontent.com/images/bzezBaxQBxh3AXRR7Rscxixnx4A.webp",
  "https://framerusercontent.com/images/XK8YFQ35wTwFjSS83mjfQw6Wl4.webp",
  "https://framerusercontent.com/images/NqnEXteqELv7bYRfVxHX1ommvOk.webp",
  "https://framerusercontent.com/images/5uATtZAQKVHvzw2eRYDeMMZuc.webp"
];

const videoIds = Array.from(new Set([
  'p0aFJdaP7pM', 'vsodX5maE0Y', 'GnJOvjbR-QI', 'vCpcE-WclXw',
  'RmtVkzzyj6w', 'swsbNcqVeGY', 'mpD_NsfH8tg', 'KFzJ6bk_61g',
  'xzEuBbw1Qn4', 'f_DTggAc378', '1yqfB-MXdcI', 'nNSHp3bsSBw',
  'CXVaAGWucqg', 'jJbVeiI79H8', 'NJHue-TKTv4', 'jrKgxXOWuUI',
  'Gh6nQCcXGP8', 'h8bVnb3SjGw', 'avEqHqHveEs', 'GH-k2yu9kxI',
  'HWz7SrUfUGQ', '_l8bWRuJL4I', 'PSwS5ozVYQU', 'cuP7mgwGY6k',
  'wIaDWAcGuO4', '8yUThY5Fez8', 'wGJAucD8CVo', 'mi-bfHoeFKk',
  'ARDIm5i0-9w', '9nkGvpejPTk', '91k9IF-tsQs', 'exoj6m8Ib34',
  '9sJRa8MC6a8', 'xVHH-M45E8g', 'a5r5bGOUFOk', 'EY_bEfzykZI',
  'ysVbCzKga3U', 'Dq42ROqBJz4', '6zYlNqNRrUs', 'h2GGtoM0-7M',
  'dkKXty424xU', 'VNdtS1eHeI8', 'm-w3gzsZCVw', 'PXXDE3CMqbs',
  'GXj4Gy_obTQ', 'm3kPv4sUx68', 'jw9scewDkOM', 'YBWB_upTC3k',
  'bk_PmsQOpxM', 'hDyWPH3jYvo', 'I8qNjzBC9F0', 'sVO04oQd_fA',
  'y8Q8_M2ZeKg', '3I4zTTLzEfI', 'y2b799_DacQ'
]));

/* ─────────────────────────────────────────────────────────────
   VideoThumbnail
   • Always shows the static thumbnail as a base layer
   • Mounts an autoplay/muted iframe ONLY when the card is
     intersecting its scrolling container (root = marquee viewport)
   • Clicking opens the full theater modal
───────────────────────────────────────────────────────────── */
function VideoThumbnail({ id, onClick, isMobile, rootRef }) {
  const cardRef   = useRef(null);
  const [hover,   setHover]   = useState(false);

  const W = isMobile ? 185 : 230;
  const H = isMobile ? 328 : 410;

  // Reel SVG icon (Instagram Reels clapperboard)
  const ReelIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H4V5h16v14z"/>
      <path d="M10 8l6 4-6 4V8z"/>
    </svg>
  );

  return (
    <div
      ref={cardRef}
      style={{
        width: W, height: H,
        position: 'relative',
        borderRadius: '0.875rem',
        overflow: 'hidden',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.38s ease',
        transform: hover ? 'scale(1.03) translateY(-3px)' : 'scale(1)',
        boxShadow: hover
          ? '0 24px 56px -8px rgba(0,0,0,0.85), 0 0 0 1px rgba(197,164,89,0.25)'
          : '0 8px 32px rgba(0,0,0,0.6)',
        background: '#0a0a0a',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(id)}
    >
      {/* ── Thumbnail image ── */}
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => {
          if (e.target.src.includes('maxresdefault')) {
            e.target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          }
        }}
        alt="Video Reel"
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'opacity 0.4s ease, transform 0.6s ease',
          transform: hover ? 'scale(1.04)' : 'scale(1)',
        }}
      />

      {/* Bottom gradient scrim */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '65%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Top gradient scrim */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '28%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* ── TOP BAR: Reels logo + camera icon ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '0.65rem 0.75rem 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        zIndex: 5,
      }}>
        {/* Instagram Reels wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
          </svg>
          <span style={{ color: 'white', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
            Reels
          </span>
        </div>
        {/* Camera icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      </div>

      {/* ── RIGHT SIDE: Action buttons (like IG Reels) ── */}
      <div style={{
        position: 'absolute', right: '0.6rem', bottom: '4.5rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.1rem',
        zIndex: 5,
      }}>
        {/* Heart */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'background 0.25s',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <span style={{ color: 'white', fontSize: '0.6rem', fontWeight: 600 }}>3.2K</span>
        </div>
        {/* Comment */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <span style={{ color: 'white', fontSize: '0.6rem', fontWeight: 600 }}>148</span>
        </div>
        {/* Share */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </div>
          <span style={{ color: 'white', fontSize: '0.6rem', fontWeight: 600 }}>87</span>
        </div>
        {/* Audio disc */}
        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'linear-gradient(135deg, #C5A459 0%, #d4b66a 100%)',
          border: '2px solid rgba(255,255,255,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'spin 4s linear infinite',
          boxShadow: '0 0 10px rgba(197,164,89,0.5)',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0a0a0a' }} />
        </div>
      </div>

      {/* ── BOTTOM: Profile + caption ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0 0.75rem 0.75rem',
        zIndex: 5,
      }}>
        {/* Profile row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <img
            src="/images/optimized/U9X57gP.avif"
            alt="HBgrow"
            style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid rgba(197,164,89,0.8)', objectFit: 'cover', flexShrink: 0 }}
          />
          <span style={{ color: 'white', fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: '0.01em' }}>
            hbgrow
          </span>
          <span style={{
            color: 'rgba(255,255,255,0.85)', fontSize: '0.65rem', fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.5)', borderRadius: '4px',
            padding: '0.08rem 0.45rem', marginLeft: '0.1rem',
          }}>
            Follow
          </span>
        </div>
        {/* Caption */}
        <p style={{
          color: 'rgba(255,255,255,0.82)', fontSize: '0.62rem', fontWeight: 400,
          lineHeight: 1.5, margin: 0, fontFamily: "'Inter', sans-serif",
          overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        }}>
          🔥 نتایجی ڕاستەقینە بۆ براندی تۆ ✨
        </p>
        {/* Audio bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.45rem' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 18V5l12-2v13M9 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/></svg>
          <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.58rem', fontFamily: "'Inter', sans-serif" }}>
            Original Audio • HBgrow
          </span>
        </div>
      </div>

      {/* ── Center play button (on hover) ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hover ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%',
          background: 'rgba(197,164,89,0.20)',
          border: '2px solid rgba(197,164,89,0.65)',
          backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: hover ? 'scale(1.05)' : 'scale(0.9)',
          transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
          boxShadow: '0 0 24px rgba(197,164,89,0.35)',
        }}>
          <Play size={20} style={{ fill: '#C5A459', color: '#C5A459', marginLeft: 2 }} />
        </div>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────
   Portfolio
───────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [activeVideo, setActiveVideo]     = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [visibleCount, setVisibleCount]   = useState(12);
  const [isMobile, setIsMobile]           = useState(false);
  const marqueeViewportRef                = useRef(null); // the overflow:hidden wrapper
  const { t } = useTranslation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (activeVideo || showAllVideos) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeVideo, showAllVideos]);

  return (
    <section id="portfolio" style={{ padding: 'clamp(4rem, 10vw, 9rem) 0' }}>
      <div className="section-wrap">

        {/* ── Header ── */}
        <div data-reveal style={{ marginBottom: 'clamp(2.5rem, 7vw, 5rem)' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>{t('portfolio.badge')}</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 style={{
              fontFamily: "'Sarchia Bokan', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
              fontWeight: 700, lineHeight: 1.25, color: '#ffffff', maxWidth: 460,
            }}>
              {t('portfolio.title_p1')}{' '}
              <span className="text-gold">{t('portfolio.title_highlight')}</span>
            </h2>
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: '0.875rem', color: 'rgba(203,213,225,0.6)',
              maxWidth: 320, lineHeight: 2, fontWeight: 300,
            }}>
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>

        {/* ── Client Logo Marquee ── */}
        <div style={{ overflow: 'hidden', position: 'relative', marginBottom: 'clamp(2rem, 5vw, 4rem)', padding: '1rem 0', direction: 'ltr' }}>
          {['left', 'right'].map(side => (
            <div key={side} style={{
              position: 'absolute', top: 0, bottom: 0, [side]: 0, width: '10%', zIndex: 2,
              background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, rgba(2,5,10,0.95), transparent)`,
              pointerEvents: 'none',
            }} />
          ))}
          <div className="marquee-track" style={{ gap: '2.5rem', alignItems: 'center' }}>
            {[...clients, ...clients].map((src, i) => (
              <div key={i} style={{
                flexShrink: 0, height: 30,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0.5, filter: 'grayscale(100%) brightness(180%)',
                transition: 'all 0.4s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0%) brightness(100%)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.filter = 'grayscale(100%) brightness(180%)'; }}
              >
                <img src={src} alt="Client Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="hairline" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)', opacity: 0.4 }} />
      </div>

      {/* ── Video GIF Marquee ── */}
      {/*
        marqueeViewportRef is the overflow:hidden div.
        Each VideoThumbnail uses it as its IntersectionObserver root
        so only cards visible INSIDE this div get active iframes.
      */}
      <div
        ref={marqueeViewportRef}
        style={{
          overflow: 'hidden', position: 'relative',
          marginBottom: '1.5rem', direction: 'ltr', padding: '0.5rem 0',
        }}
      >
        {['left', 'right'].map(side => (
          <div key={side} style={{
            position: 'absolute', top: 0, bottom: 0, [side]: 0, width: '8%', zIndex: 2,
            background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, rgba(2,5,10,0.95), transparent)`,
            pointerEvents: 'none',
          }} />
        ))}

        <div className="video-marquee-track">
          {[...videoIds, ...videoIds].map((id, i) => (
            <VideoThumbnail
              key={`${id}-${i}`}
              id={id}
              onClick={setActiveVideo}
              isMobile={isMobile}
              rootRef={marqueeViewportRef}
            />
          ))}
        </div>
      </div>

      {/* ── See More ── */}
      <div className="section-wrap">
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.5rem' }}>
          <button onClick={() => setShowAllVideos(true)} className="btn-ghost">
            <Grid size={14} style={{ opacity: 0.75, flexShrink: 0 }} />
            {t('portfolio.btn_more')}
          </button>
        </div>
      </div>

      {/* ── Theater Modal ── */}
      {activeVideo && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(2,5,10,0.97)', backdropFilter: 'blur(24px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
          }}
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={e => { e.stopPropagation(); setActiveVideo(null); }}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#ffffff', borderRadius: '50%', width: 40, height: 40,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10,
            }}
          >
            <X size={18} />
          </button>
          <div
            style={{
              width: '100%', maxWidth: 450, aspectRatio: '9/16', maxHeight: '85vh',
              background: '#000', borderRadius: '0.75rem', overflow: 'hidden',
              boxShadow: '0 32px 80px -12px rgba(0,0,0,0.9)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <iframe
              width="100%" height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ── All Videos Modal ── */}
      {showAllVideos && (
        <div className="modal-scroll" style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(2,5,10,0.98)', backdropFilter: 'blur(24px)',
          overflowY: 'auto', direction: 'rtl',
        }}>
          <div className="section-wrap" style={{ padding: 'clamp(2rem, 6vw, 4rem) 1.25rem' }}>
            <div className="modal-header">
              <div>
                <span className="badge" style={{ marginBottom: '0.75rem' }}>{t('portfolio.archive_badge')}</span>
                <h2 style={{
                  fontFamily: "'Sarchia Bokan', serif",
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700, color: '#ffffff',
                }}>
                  {t('portfolio.archive_title_p1')}<span className="text-gold">{t('portfolio.archive_title_highlight')}</span>
                </h2>
                <p style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.875rem', color: 'rgba(203,213,225,0.7)',
                  marginTop: '0.5rem',
                }}>
                  {t('portfolio.archive_subtitle')}
                </p>
              </div>
              <button onClick={() => { setShowAllVideos(false); setVisibleCount(12); }} className="btn-ghost" style={{ padding: '0.625rem 1rem', flexShrink: 0 }}>
                <X size={15} />
                {t('portfolio.btn_close')}
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 160px), 1fr))',
              gap: '1.25rem',
            }}>
              {videoIds.slice(0, visibleCount).map((id, i) => (
                <div
                  key={i}
                  style={{
                    width: '100%', aspectRatio: '9/16',
                    position: 'relative', borderRadius: '0.75rem', overflow: 'hidden',
                    cursor: 'pointer', border: '1px solid rgba(255,255,255,0.07)',
                    background: '#020810', transition: 'all 0.35s ease',
                  }}
                  onClick={() => { setShowAllVideos(false); setActiveVideo(id); }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = 'rgba(197,164,89,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                    onError={(e) => {
                      if (e.target.src.includes('maxresdefault')) {
                        e.target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                      }
                    }}
                    alt="Video Thumbnail"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
                  />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'rgba(197,164,89,0.15)', border: '1px solid rgba(197,164,89,0.4)',
                      backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Play size={16} style={{ fill: 'rgba(197,164,89,0.95)', color: 'rgba(197,164,89,0.95)', marginRight: -2 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < videoIds.length && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                <button
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="btn-ghost"
                  style={{ padding: '0.875rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Grid size={16} style={{ opacity: 0.75, flexShrink: 0, marginLeft: '0.5rem' }} />
                  {t('portfolio.btn_load_more')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
