import { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Grid } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { designs } from '../data/portfolioData';

const track1 = designs.filter((_, i) => i % 2 === 0);
const track2 = designs.filter((_, i) => i % 2 !== 0);

// Limit marquees to top 15 designs to prevent iOS Safari memory crashes
const marqueeTrack1 = track1.slice(0, 15);
const marqueeTrack2 = track2.slice(0, 15);

// No need for Imgur thumbnail optimization anymore since we use local AVIF files
const getThumbUrl = (url) => url;

// Thumbnail heights: smaller on mobile
const THUMB_HEIGHT_MOBILE = 200;
const THUMB_HEIGHT_DESKTOP = 250;

function MarqueeThumbnail({ src, onClick, isMobile, index }) {
  const [hover, setHover] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  // First 8 images load immediately (above-fold / near-fold), rest lazy
  const [inView, setInView] = useState(index < 8);
  const ref = useRef(null);
  const h = isMobile ? THUMB_HEIGHT_MOBILE : THUMB_HEIGHT_DESKTOP;

  useEffect(() => {
    if (index < 8) return; // already eager
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: '600px' } // preload 600px before visible
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        /* Instagram Post Card — no fixed height, grows with image */
        width: isMobile ? 190 : 235,
        flexShrink: 0,
        position: 'relative',
        borderRadius: '0.9rem',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#FFFFFF',
        border: `1px solid ${hover ? 'rgba(3, 20, 43, 0.25)' : 'rgba(0,0,0,0.08)'}`,
        transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: hover ? 'scale(1.03) translateY(-3px)' : 'scale(1)',
        boxShadow: hover
          ? '0 16px 36px -4px rgba(3, 20, 43, 0.12)'
          : '0 4px 16px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => !error && onClick(src)}
    >
      {/* ── IMAGE: fixed height, full-width cover ── */}
      <div style={{
        width: '100%',
        height: isMobile ? 230 : 280,
        position: 'relative',
        overflow: 'hidden',
        background: error ? 'rgba(3, 20, 43, 0.04)' : '#F8FAFC',
      }}>
        {/* Skeleton shimmer */}
        {!loaded && !error && (
          <div style={{
            position: 'absolute', inset: 0, minHeight: 200,
            background: 'linear-gradient(90deg, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.02) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.6s ease infinite',
          }} />
        )}
        {inView && (
          <img
            src={getThumbUrl(src)}
            alt="Design work"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.4s ease, transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
            }}
            onLoad={() => setLoaded(true)}
            onError={() => { setLoaded(true); setError(true); }}
          />
        )}
        {error && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(3, 20, 43, 0.4)', fontSize: '1.5rem',
          }}>🎨</div>
        )}
        {/* Hover zoom overlay */}
        {!error && loaded && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(3, 20, 43, 0.40)', backdropFilter: 'blur(2px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: hover ? 1 : 0, transition: 'opacity 0.35s ease',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.25)', border: '1px solid rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: hover ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}>
              <Maximize2 size={15} style={{ color: '#FFFFFF' }} />
            </div>
          </div>
        )}
      </div>

      {/* ── BOTTOM: Instagram action bar ── */}
      <div style={{
        padding: '0.5rem 0.65rem 0.5rem',
        background: '#F8FAFC',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Heart */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {/* Comment */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {/* Share */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          {/* Bookmark */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}



export default function DesignPortfolio() {
  const [activeImg, setActiveImg] = useState(null);
  const [showAllDesigns, setShowAllDesigns] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (activeImg || showAllDesigns) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeImg, showAllDesigns]);

  return (
    <section id="designs" style={{ padding: 'clamp(4rem, 10vw, 9rem) 0' }}>
      <div className="section-wrap">
        <div data-reveal style={{ marginBottom: 'clamp(2.5rem, 7vw, 5rem)', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>{t('design_portfolio.badge')}</span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            fontWeight: 700, lineHeight: 1.25, color: '#0A0A0C',
            maxWidth: 560, margin: '0 auto',
          }}>
            {t('design_portfolio.title_p1')}{' '}
            <span className="text-gold">{t('design_portfolio.title_highlight')}</span>
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: '0.875rem', color: '#52525B',
            maxWidth: 400, lineHeight: 2, fontWeight: 300,
            margin: '1rem auto 0',
          }}>
            {t('design_portfolio.subtitle')}
          </p>
        </div>
      </div>

      {/* Track 1 */}
      <div style={{ overflow: 'hidden', position: 'relative', width: '100%', marginBottom: '1rem', direction: 'ltr', padding: '0.25rem 0' }}>
        {['left', 'right'].map(side => (
          <div key={side} style={{
            position: 'absolute', top: 0, bottom: 0, [side]: 0, width: '8%', zIndex: 2,
            background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, #FFFFFF, transparent)`,
            pointerEvents: 'none',
          }} />
        ))}
        <div className="design-marquee-track forward">
          {[...marqueeTrack1, ...marqueeTrack1].map((src, i) => (
            <MarqueeThumbnail key={`t1-${i}`} src={src} onClick={setActiveImg} isMobile={isMobile} index={i} />
          ))}
        </div>
      </div>

      {/* Track 2 */}
      <div style={{ overflow: 'hidden', position: 'relative', width: '100%', marginBottom: '2.5rem', direction: 'ltr', padding: '0.25rem 0' }}>
        {['left', 'right'].map(side => (
          <div key={side} style={{
            position: 'absolute', top: 0, bottom: 0, [side]: 0, width: '8%', zIndex: 2,
            background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, #FFFFFF, transparent)`,
            pointerEvents: 'none',
          }} />
        ))}
        <div className="design-marquee-track reverse">
          {[...marqueeTrack2, ...marqueeTrack2].map((src, i) => (
            <MarqueeThumbnail key={`t2-${i}`} src={src} onClick={setActiveImg} isMobile={isMobile} index={i} />
          ))}
        </div>
      </div>

      {/* See More */}
      <div className="section-wrap">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => setShowAllDesigns(true)} className="btn-ghost">
            <Grid size={14} style={{ opacity: 0.75, flexShrink: 0 }} />
            {t('design_portfolio.btn_more')}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(3, 20, 43, 0.75)', backdropFilter: 'blur(24px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setActiveImg(null)}
        >
          <button
            onClick={e => { e.stopPropagation(); setActiveImg(null); }}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff', borderRadius: '50%', width: 40, height: 40,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10,
            }}
          >
            <X size={18} />
          </button>
          <img
            src={activeImg}
            alt="Fullscreen design"
            style={{
              maxWidth: '100%', maxHeight: '92dvh',
              objectFit: 'contain', borderRadius: '0.75rem',
              boxShadow: '0 32px 80px -12px rgba(0,0,0,0.5)',
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* All Designs Modal */}
      {showAllDesigns && (
        <div className="modal-scroll" style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(24px)',
          overflowY: 'auto', direction: 'rtl',
        }}>
          <div className="section-wrap" style={{ padding: 'clamp(2rem, 6vw, 4rem) 1.25rem' }}>
            <div className="modal-header">
              <div>
                <span className="badge" style={{ marginBottom: '0.75rem' }}>{t('design_portfolio.archive_badge')}</span>
                <h2 style={{
                  fontFamily: "'Sarchia Bokan', serif",
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700, color: '#0A0A0C',
                }}>
                  {t('design_portfolio.archive_title_p1')}<span className="text-gold">{t('design_portfolio.archive_title_highlight')}</span>
                </h2>
                <p style={{
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.875rem', color: '#52525B',
                  marginTop: '0.5rem',
                }}>
                  {t('design_portfolio.archive_subtitle')}
                </p>
              </div>
              <button onClick={() => { setShowAllDesigns(false); setVisibleCount(12); }} className="btn-ghost" style={{ padding: '0.625rem 1rem', flexShrink: 0 }}>
                <X size={15} />
                {t('design_portfolio.btn_close')}
              </button>
            </div>
            <div className="masonry-grid">
              {designs.slice(0, visibleCount).map((src, i) => (
                <div key={i} className="masonry-item" onClick={() => setActiveImg(src)}>
                  <img
                    src={getThumbUrl(src)}
                    alt="Design work"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="masonry-overlay">
                    <div className="masonry-btn">
                      <Maximize2 size={18} style={{ color: '#E5E4E2' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < designs.length && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                <button
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="btn-ghost"
                  style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}
                >
                  <Grid size={16} style={{ opacity: 0.75, flexShrink: 0, marginLeft: '0.5rem' }} />
                  {t('design_portfolio.btn_load_more')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
