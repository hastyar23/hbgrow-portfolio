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

  const W = isMobile ? 180 : 225;
  const H = isMobile ? 320 : 400;

  return (
    <div
      ref={cardRef}
      style={{
        width: W, height: H,
        position: 'relative',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${hover ? 'rgba(197,164,89,0.35)' : 'rgba(255,255,255,0.07)'}`,
        background: '#020810',
        flexShrink: 0,
        transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        transform: hover ? 'scale(1.03)' : 'scale(1)',
        boxShadow: hover ? '0 16px 48px -12px rgba(0,0,0,0.75)' : 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(id)}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => {
          if (e.target.src.includes('maxresdefault')) {
            e.target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          }
        }}
        alt="Video Thumbnail"
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.55,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(2,5,10,0.18)',
        opacity: hover ? 1 : 0.7,
        transition: 'opacity 0.35s ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(197,164,89,0.15)',
          border: '1px solid rgba(197,164,89,0.45)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: hover ? 'scale(1.12)' : 'scale(1)',
          transition: 'transform 0.35s ease',
        }}>
          <Play size={14} style={{ fill: 'rgba(197,164,89,0.95)', color: 'rgba(197,164,89,0.95)', marginRight: -2 }} />
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
