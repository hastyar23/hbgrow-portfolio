import { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Grid } from 'lucide-react';

const designs = [
  "https://i.imgur.com/uy5HrR1.jpeg","https://i.imgur.com/ZktcQkK.jpeg","https://i.imgur.com/q6DnSPu.jpeg",
  "https://i.imgur.com/31X3UhC.jpeg","https://i.imgur.com/9ZcXFxv.jpeg","https://i.imgur.com/Udutqjg.jpeg",
  "https://i.imgur.com/x2zv7ZG.jpeg","https://i.imgur.com/RYvnrEl.jpeg","https://i.imgur.com/AejcHuv.jpeg",
  "https://i.imgur.com/HDnhsAa.jpeg","https://i.imgur.com/d506zmK.jpeg","https://i.imgur.com/MiIhRs8.jpeg",
  "https://i.imgur.com/EilfXvh.jpeg","https://i.imgur.com/7tB1zkc.jpeg","https://i.imgur.com/DFkhoY5.jpeg",
  "https://i.imgur.com/15VaTNm.jpeg","https://i.imgur.com/1YkWFFr.jpeg","https://i.imgur.com/dOhJM0E.jpeg",
  "https://i.imgur.com/ZXavnhR.jpeg","https://i.imgur.com/v8gNGA2.jpeg","https://i.imgur.com/C6uQfQq.jpeg",
  "https://i.imgur.com/RsutZuI.jpeg","https://i.imgur.com/Rnk7g0Z.jpeg","https://i.imgur.com/OpRGJkN.jpeg",
  "https://i.imgur.com/9XlKGpb.jpeg","https://i.imgur.com/wFmWriU.jpeg","https://i.imgur.com/Ncqp55p.jpeg",
  "https://i.imgur.com/BWWxq41.jpeg","https://i.imgur.com/1wpms23.jpeg","https://i.imgur.com/es5Tgss.jpeg",
  "https://i.imgur.com/8WI9Cct.jpeg","https://i.imgur.com/hJH9J4m.jpeg","https://i.imgur.com/0UXYdMW.jpeg",
  "https://i.imgur.com/txwqP8H.jpeg","https://i.imgur.com/DKJWSmR.jpeg","https://i.imgur.com/wdi3oYk.jpeg",
  "https://i.imgur.com/tgD2CzG.jpeg","https://i.imgur.com/5ZwUNcA.jpeg","https://i.imgur.com/UaVVdst.jpeg",
  "https://i.imgur.com/ba4XnXL.jpeg","https://i.imgur.com/UbYHz0e.jpeg","https://i.imgur.com/tAqtfO1.jpeg",
  "https://i.imgur.com/y50B95z.jpeg","https://i.imgur.com/ecRahyT.jpeg","https://i.imgur.com/MKHBOZJ.jpeg",
  "https://i.imgur.com/4elfTeS.jpeg","https://i.imgur.com/cu7Ku3P.jpeg","https://i.imgur.com/xMfhqsY.gif",
  "https://i.imgur.com/D0X0tV5.jpeg","https://i.imgur.com/DnLy2Xl.jpeg","https://i.imgur.com/6fwe56x.jpeg",
  "https://i.imgur.com/QDN9xSp.jpeg","https://i.imgur.com/PqX0cHp.jpeg","https://i.imgur.com/9ULeE5i.jpeg",
  "https://i.imgur.com/oE2S15s.jpeg","https://i.imgur.com/WX1LhYR.jpeg","https://i.imgur.com/snySCz2.jpeg",
  "https://i.imgur.com/2OXjkJK.jpeg","https://i.imgur.com/r2DiU7e.jpeg","https://i.imgur.com/OgHYtSq.jpeg",
  "https://i.imgur.com/wLUOB54.jpeg","https://i.imgur.com/vUaZK3m.jpeg","https://i.imgur.com/GEEa9yQ.jpeg",
  "https://i.imgur.com/3KBnxCT.jpeg","https://i.imgur.com/raF9j2J.jpeg","https://i.imgur.com/SDe6VP5.jpeg",
  "https://i.imgur.com/FgMI51L.jpeg","https://i.imgur.com/tAE8UMP.jpeg","https://i.imgur.com/uXRlh5R.jpeg",
  "https://i.imgur.com/r4iqpzD.jpeg","https://i.imgur.com/3VQIE5X.jpeg","https://i.imgur.com/tgIz4fU.jpeg",
  "https://i.imgur.com/l56uUMm.jpeg","https://i.imgur.com/GTEJ2zi.jpeg","https://i.imgur.com/EQ1I3Yh.jpeg",
  "https://i.imgur.com/MrAUsyZ.jpeg","https://i.imgur.com/zkIrL81.jpeg","https://i.imgur.com/7QuphkU.jpeg",
  "https://i.imgur.com/Ei3iyLy.jpeg","https://i.imgur.com/JqRmhWp.jpeg","https://i.imgur.com/gi0Yv00.jpeg",
  "https://i.imgur.com/2OTcuhr.jpeg","https://i.imgur.com/kwyErgy.jpeg","https://i.imgur.com/14eAtxV.jpeg",
  "https://i.imgur.com/R9qqDEX.jpeg","https://i.imgur.com/r8jbsmQ.jpeg","https://i.imgur.com/sMNlOlu.jpeg",
  "https://i.imgur.com/g6MFewc.jpeg","https://i.imgur.com/6drsqLG.jpeg","https://i.imgur.com/E07MkJO.jpeg",
  "https://i.imgur.com/TMzKTv6.jpeg","https://i.imgur.com/EwBtK12.jpeg","https://i.imgur.com/J8EyBlX.jpeg",
  "https://i.imgur.com/WKPmPVN.jpeg","https://i.imgur.com/4WgrrdX.jpeg","https://i.imgur.com/Of1DaFs.jpeg",
  "https://i.imgur.com/EVPNSDu.jpeg","https://i.imgur.com/zZ1pcVF.jpeg","https://i.imgur.com/Lgl9pV5.jpeg",
  "https://i.imgur.com/pS7miGb.jpeg","https://i.imgur.com/XGB2E1A.jpeg","https://i.imgur.com/pNSj5te.jpeg",
  "https://i.imgur.com/SfUSpI5.jpeg"
];

const track1 = designs.filter((_, i) => i % 2 === 0);
const track2 = designs.filter((_, i) => i % 2 !== 0);

// Optimize Imgur links to load highly compressed thumbnails ('l' modifier = Large Thumbnail ~ 640px)
const getThumbUrl = (url) => {
  if (!url || typeof url !== 'string' || url.endsWith('.gif')) return url;
  return url.replace(/(\.[a-zA-Z]+)$/, 'l$1');
};

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
        height: h, minWidth: 140, flexShrink: 0,
        position: 'relative', borderRadius: '0.75rem', overflow: 'hidden',
        cursor: 'pointer', border: '1px solid rgba(255,255,255,0.07)',
        background: error ? 'rgba(197,164,89,0.04)' : 'rgba(2,5,10,0.5)',
        transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hover ? '0 16px 40px -8px rgba(0,0,0,0.7)' : 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => !error && onClick(src)}
    >
      {/* Skeleton shimmer while not loaded */}
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
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          decoding="async"
          style={{
            height: '100%', width: 'auto', objectFit: 'cover',
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

      {!error && loaded && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(2,5,10,0.5)', backdropFilter: 'blur(2px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hover ? 1 : 0, transition: 'opacity 0.4s ease',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(197,164,89,0.15)', border: '1px solid rgba(197,164,89,0.45)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: hover ? 'scale(1)' : 'scale(0.85)',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}>
            <Maximize2 size={17} style={{ color: 'rgba(197,164,89,0.95)' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function DesignPortfolio() {
  const [activeImg, setActiveImg] = useState(null);
  const [showAllDesigns, setShowAllDesigns] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
          <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>دیزاین</span>
          <h2 style={{
            fontFamily: "'Noto Naskh Arabic', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            fontWeight: 700, lineHeight: 1.25, color: '#ffffff',
            maxWidth: 560, margin: '0 auto',
          }}>
            دیزاینی ناوازە بۆ{' '}
            <span className="text-gold">براندە پێشەنگەکان.</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.875rem', color: 'rgba(203,213,225,0.6)',
            maxWidth: 400, lineHeight: 2, fontWeight: 300,
            margin: '1rem auto 0', letterSpacing: '0.03em',
          }}>
            پێشانگایەک لەو دیزاینانەی کە یارمەتی براندەکانیان داوە ببنە جێگەی سەرنج.
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
            بینینی دیزاینی زیاتر
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
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
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
                <span className="badge" style={{ marginBottom: '0.75rem' }}>ئەرشیف</span>
                <h2 style={{
                  fontFamily: "'Noto Naskh Arabic', serif",
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700, color: '#ffffff',
                }}>
                  نموونەی بەشێک لە <span className="text-gold">دیزاینەکانمان</span>
                </h2>
                <p style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.875rem', color: 'rgba(203,213,225,0.7)',
                  marginTop: '0.5rem',
                }}>
                  کوالێتی هەندێک لە دیزاینەکانمان دابەزاندووە تا زووتر بکرێنەوە
                </p>
              </div>
              <button onClick={() => setShowAllDesigns(false)} className="btn-ghost" style={{ padding: '0.625rem 1rem', flexShrink: 0 }}>
                <X size={15} />
                داخستن
              </button>
            </div>
            <div className="masonry-grid">
              {designs.map((src, i) => (
                <div key={i} className="masonry-item" onClick={() => setActiveImg(src)}>
                  <img
                    src={getThumbUrl(src)}
                    alt="Design work"
                    loading="lazy"
                    decoding="async"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                  />
                  <div className="masonry-overlay">
                    <div className="masonry-btn">
                      <Maximize2 size={18} style={{ color: 'rgba(197,164,89,0.95)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
