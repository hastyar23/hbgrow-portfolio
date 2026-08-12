import { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Grid } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const designs = [
  "/images/optimized/uy5HrR1.avif","/images/optimized/ZktcQkK.avif","/images/optimized/q6DnSPu.avif",
  "/images/optimized/31X3UhC.avif","/images/optimized/9ZcXFxv.avif","/images/optimized/Udutqjg.avif",
  "/images/optimized/x2zv7ZG.avif","/images/optimized/RYvnrEl.avif","/images/optimized/AejcHuv.avif",
  "/images/optimized/HDnhsAa.avif","/images/optimized/d506zmK.avif","/images/optimized/MiIhRs8.avif",
  "/images/optimized/EilfXvh.avif","/images/optimized/7tB1zkc.avif","/images/optimized/DFkhoY5.avif",
  "/images/optimized/15VaTNm.avif","/images/optimized/1YkWFFr.avif","/images/optimized/dOhJM0E.avif",
  "/images/optimized/ZXavnhR.avif","/images/optimized/v8gNGA2.avif","/images/optimized/C6uQfQq.avif",
  "/images/optimized/RsutZuI.avif","/images/optimized/Rnk7g0Z.avif","/images/optimized/OpRGJkN.avif",
  "/images/optimized/9XlKGpb.avif","/images/optimized/wFmWriU.avif","/images/optimized/Ncqp55p.avif",
  "/images/optimized/BWWxq41.avif","/images/optimized/1wpms23.avif","/images/optimized/es5Tgss.avif",
  "/images/optimized/8WI9Cct.avif","/images/optimized/hJH9J4m.avif","/images/optimized/0UXYdMW.avif",
  "/images/optimized/txwqP8H.avif","/images/optimized/DKJWSmR.avif","/images/optimized/wdi3oYk.avif",
  "/images/optimized/tgD2CzG.avif","/images/optimized/5ZwUNcA.avif","/images/optimized/UaVVdst.avif",
  "/images/optimized/ba4XnXL.avif","/images/optimized/UbYHz0e.avif","/images/optimized/tAqtfO1.avif",
  "/images/optimized/y50B95z.avif","/images/optimized/ecRahyT.avif","/images/optimized/MKHBOZJ.avif",
  "/images/optimized/4elfTeS.avif","/images/optimized/cu7Ku3P.avif","/images/optimized/xMfhqsY.avif",
  "/images/optimized/D0X0tV5.avif","/images/optimized/DnLy2Xl.avif","/images/optimized/6fwe56x.avif",
  "/images/optimized/QDN9xSp.avif","/images/optimized/PqX0cHp.avif","/images/optimized/9ULeE5i.avif",
  "/images/optimized/oE2S15s.avif","/images/optimized/WX1LhYR.avif","/images/optimized/snySCz2.avif",
  "/images/optimized/2OXjkJK.avif","/images/optimized/r2DiU7e.avif","/images/optimized/OgHYtSq.avif",
  "/images/optimized/wLUOB54.avif","/images/optimized/vUaZK3m.avif","/images/optimized/GEEa9yQ.avif",
  "/images/optimized/3KBnxCT.avif","/images/optimized/raF9j2J.avif","/images/optimized/SDe6VP5.avif",
  "/images/optimized/FgMI51L.avif","/images/optimized/tAE8UMP.avif","/images/optimized/uXRlh5R.avif",
  "/images/optimized/r4iqpzD.avif","/images/optimized/3VQIE5X.avif","/images/optimized/tgIz4fU.avif",
  "/images/optimized/l56uUMm.avif","/images/optimized/GTEJ2zi.avif","/images/optimized/EQ1I3Yh.avif",
  "/images/optimized/MrAUsyZ.avif","/images/optimized/zkIrL81.avif","/images/optimized/7QuphkU.avif",
  "/images/optimized/Ei3iyLy.avif","/images/optimized/JqRmhWp.avif","/images/optimized/gi0Yv00.avif",
  "/images/optimized/2OTcuhr.avif","/images/optimized/kwyErgy.avif","/images/optimized/14eAtxV.avif",
  "/images/optimized/R9qqDEX.avif","/images/optimized/r8jbsmQ.avif","/images/optimized/sMNlOlu.avif",
  "/images/optimized/g6MFewc.avif","/images/optimized/6drsqLG.avif","/images/optimized/E07MkJO.avif",
  "/images/optimized/TMzKTv6.avif","/images/optimized/EwBtK12.avif","/images/optimized/J8EyBlX.avif",
  "/images/optimized/WKPmPVN.avif","/images/optimized/4WgrrdX.avif","/images/optimized/Of1DaFs.avif",
  "/images/optimized/EVPNSDu.avif","/images/optimized/zZ1pcVF.avif","/images/optimized/Lgl9pV5.avif",
  "/images/optimized/pS7miGb.avif","/images/optimized/XGB2E1A.avif","/images/optimized/pNSj5te.avif",
  "/images/optimized/SfUSpI5.avif"
];

const track1 = designs.filter((_, i) => i % 2 === 0);
const track2 = designs.filter((_, i) => i % 2 !== 0);

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
        /* Instagram Post Card */
        width: isMobile ? 190 : 235,
        flexShrink: 0,
        position: 'relative',
        borderRadius: '0.9rem',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#0e0e0e',
        border: `1px solid ${hover ? 'rgba(197,164,89,0.30)' : 'rgba(255,255,255,0.08)'}`,
        transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: hover ? 'scale(1.03) translateY(-3px)' : 'scale(1)',
        boxShadow: hover
          ? '0 20px 52px -8px rgba(0,0,0,0.80), 0 0 0 1px rgba(197,164,89,0.18)'
          : '0 6px 28px rgba(0,0,0,0.55)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => !error && onClick(src)}
    >
      {/* ── TOP: Instagram post header ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.55rem 0.65rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.025)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <img
            src="/images/optimized/U9X57gP.avif"
            alt="HBgrow"
            loading="lazy"
            style={{
              width: 24, height: 24, borderRadius: '50%', objectFit: 'cover',
              border: '1.5px solid transparent',
              background: 'linear-gradient(#0e0e0e,#0e0e0e) padding-box, linear-gradient(135deg,#C5A459,#d4b66a,#B8902A) border-box',
              flexShrink: 0,
            }}
          />
          <span style={{
            color: 'rgba(255,255,255,0.90)', fontSize: '0.65rem', fontWeight: 700,
            fontFamily: "'Inter', sans-serif", letterSpacing: '0.01em',
          }}>hbgrow</span>
        </div>
        {/* Three dots */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
        </svg>
      </div>

      {/* ── IMAGE: Square post ── */}
      <div style={{
        width: '100%',
        aspectRatio: '1 / 1',
        position: 'relative',
        overflow: 'hidden',
        background: error ? 'rgba(197,164,89,0.04)' : 'rgba(2,5,10,0.5)',
      }}>
        {/* Skeleton */}
        {!loaded && !error && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 75%)',
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
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hover ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease',
              display: 'block',
              opacity: loaded ? 1 : 0,
            }}
            onLoad={() => setLoaded(true)}
            onError={() => { setLoaded(true); setError(true); }}
          />
        )}
        {error && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(197,164,89,0.3)', fontSize: '1.5rem',
          }}>🎨</div>
        )}
        {/* Hover zoom icon */}
        {!error && loaded && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(2,5,10,0.45)', backdropFilter: 'blur(2px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: hover ? 1 : 0, transition: 'opacity 0.35s ease',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(197,164,89,0.15)', border: '1px solid rgba(197,164,89,0.5)',
              backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: hover ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}>
              <Maximize2 size={15} style={{ color: 'rgba(197,164,89,0.95)' }} />
            </div>
          </div>
        )}
      </div>

      {/* ── BOTTOM: Instagram action bar ── */}
      <div style={{
        padding: '0.55rem 0.65rem 0.5rem',
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Action icons row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Heart */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2" style={{ cursor: 'pointer', transition: 'stroke 0.25s' }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {/* Comment */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {/* Share */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          {/* Bookmark */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2">
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
            fontWeight: 700, lineHeight: 1.25, color: '#ffffff',
            maxWidth: 560, margin: '0 auto',
          }}>
            {t('design_portfolio.title_p1')}{' '}
            <span className="text-gold">{t('design_portfolio.title_highlight')}</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.875rem', color: 'rgba(203,213,225,0.6)',
            maxWidth: 400, lineHeight: 2, fontWeight: 300,
            margin: '1rem auto 0', letterSpacing: '0.03em',
          }}>
            {t('design_portfolio.subtitle')}
          </p>
        </div>
      </div>

      {/* Track 1 */}
      <div style={{ overflow: 'hidden', position: 'relative', marginBottom: '1rem', direction: 'ltr', padding: '0.25rem 0' }}>
        {['left', 'right'].map(side => (
          <div key={side} style={{
            position: 'absolute', top: 0, bottom: 0, [side]: 0, width: '8%', zIndex: 2,
            background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, rgba(2,5,10,0.95), transparent)`,
            pointerEvents: 'none',
          }} />
        ))}
        <div className="design-marquee-track forward">
          {[...track1, ...track1].map((src, i) => (
            <MarqueeThumbnail key={`t1-${i}`} src={src} onClick={setActiveImg} isMobile={isMobile} index={i} />
          ))}
        </div>
      </div>

      {/* Track 2 */}
      <div style={{ overflow: 'hidden', position: 'relative', marginBottom: 'clamp(2rem, 5vw, 4rem)', direction: 'ltr', padding: '0.25rem 0' }}>
        {['left', 'right'].map(side => (
          <div key={side} style={{
            position: 'absolute', top: 0, bottom: 0, [side]: 0, width: '8%', zIndex: 2,
            background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, rgba(2,5,10,0.95), transparent)`,
            pointerEvents: 'none',
          }} />
        ))}
        <div className="design-marquee-track reverse">
          {[...track2, ...track2].map((src, i) => (
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
            background: 'rgba(2,5,10,0.99)', backdropFilter: 'blur(24px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setActiveImg(null)}
        >
          <button
            onClick={e => { e.stopPropagation(); setActiveImg(null); }}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
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
              boxShadow: '0 32px 80px -12px rgba(0,0,0,0.9)',
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* All Designs Modal */}
      {showAllDesigns && (
        <div className="modal-scroll" style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(2,5,10,0.98)', backdropFilter: 'blur(24px)',
          overflowY: 'auto', direction: 'rtl',
        }}>
          <div className="section-wrap" style={{ padding: 'clamp(2rem, 6vw, 4rem) 1.25rem' }}>
            <div className="modal-header">
              <div>
                <span className="badge" style={{ marginBottom: '0.75rem' }}>{t('design_portfolio.archive_badge')}</span>
                <h2 style={{
                  fontFamily: "'Sarchia Bokan', serif",
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700, color: '#ffffff',
                }}>
                  {t('design_portfolio.archive_title_p1')}<span className="text-gold">{t('design_portfolio.archive_title_highlight')}</span>
                </h2>
                <p style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.875rem', color: 'rgba(203,213,225,0.7)',
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
                      <Maximize2 size={18} style={{ color: 'rgba(197,164,89,0.95)' }} />
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
                  style={{ padding: '0.875rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
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
