import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const { t } = useTranslation();
  
  // Get testimonials from translations
  const testimonials = useMemo(() => {
    const raw = t('testimonials.list', { returnObjects: true });
    return Array.isArray(raw) ? raw : [];
  }, [t]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev'
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const total = testimonials.length;

  const go = useCallback((idx, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 420);
  }, [animating]);

  const next = useCallback(() => {
    go((current + 1) % total, 'next');
  }, [current, total, go]);

  const prev = useCallback(() => {
    go((current - 1 + total) % total, 'prev');
  }, [current, total, go]);

  // Auto-play
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  // Touch/swipe support
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null || total === 0) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); resetTimer(); }
    touchStartX.current = null;
  };

  const currentTestimonial = total > 0 ? testimonials[current] : null;

  return (
    <section id="testimonials" style={{ padding: 'clamp(4rem, 10vw, 9rem) 0' }}>

      <style>{`
        .ts-card-enter-next  { animation: ts-slide-in-next  0.42s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        .ts-card-enter-prev  { animation: ts-slide-in-prev  0.42s cubic-bezier(0.25,0.46,0.45,0.94) both; }

        @keyframes ts-slide-in-next {
          from { opacity: 0; transform: translateX(60px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0)    scale(1);    }
        }
        @keyframes ts-slide-in-prev {
          from { opacity: 0; transform: translateX(-60px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0)     scale(1);    }
        }

        .ts-nav-btn {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          color: rgba(255,255,255,0.75);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .ts-nav-btn:hover {
          border-color: rgba(197,164,89,0.4);
          background: rgba(197,164,89,0.1);
          color: #C5A459;
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(197,164,89,0.15);
        }
        .ts-nav-btn:active { transform: scale(0.95); }

        .ts-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: none; cursor: pointer;
          transition: all 0.35s ease; padding: 0;
          flex-shrink: 0;
        }
        .ts-dot.active {
          width: 24px; border-radius: 3px;
          background: #C5A459;
          box-shadow: 0 0 10px rgba(197,164,89,0.4);
        }
        .ts-dot:hover:not(.active) { background: rgba(255,255,255,0.45); }
      `}</style>

      <div className="section-wrap">

        {/* ── Header ── */}
        <div data-reveal style={{ marginBottom: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>{t('testimonials.badge')}</span>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Sarchia Bokan', serif",
                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                fontWeight: 700, lineHeight: 1.25, color: '#ffffff',
                maxWidth: 520, marginTop: '0.75rem',
              }}>
                {t('testimonials.title_p1')}
                <span className="text-gold">{t('testimonials.title_highlight')}</span>
              </h2>
              <p style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '0.875rem', color: 'rgba(203,213,225,0.5)',
                marginTop: '1rem', fontWeight: 300, lineHeight: 1.9,
              }}>
                {t('testimonials.subtitle')}
              </p>
            </div>

            {/* Nav buttons — desktop */}
            <div className="hidden md:flex" style={{ gap: '0.625rem' }}>
              <button className="ts-nav-btn" onClick={() => { prev(); resetTimer(); }} aria-label="Previous">
                <ChevronRight size={18} />
              </button>
              <button className="ts-nav-btn" onClick={() => { next(); resetTimer(); }} aria-label="Next">
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Slider ── */}
        <div
          style={{ position: 'relative', overflow: 'hidden' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Progress bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 1, background: 'rgba(255,255,255,0.06)', zIndex: 2,
          }}>
            <div
              key={current}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #C5A459, #E8C96A)',
                animation: `progress-fill ${AUTOPLAY_MS}ms linear forwards`,
              }}
            />
          </div>
          <style>{`
            @keyframes progress-fill {
              from { width: 0%; }
              to   { width: 100%; }
            }
          `}</style>

          {/* Card */}
          {currentTestimonial && (
          <div
            key={current}
            className={animating ? '' : (direction === 'next' ? 'ts-card-enter-next' : 'ts-card-enter-prev')}
            style={{
              background: 'linear-gradient(145deg, rgba(197,164,89,0.08) 0%, rgba(13,26,51,0.3) 50%, rgba(2,4,8,0.92) 100%)',
              backdropFilter: 'blur(36px) saturate(180%)',
              WebkitBackdropFilter: 'blur(36px) saturate(180%)',
              border: '1px solid rgba(197,164,89,0.25)',
              boxShadow: '0 28px 70px rgba(0,0,0,0.7), 0 0 35px rgba(197,164,89,0.08), inset 0 1px 0 rgba(255,255,255,0.18)',
              borderRadius: '1.75rem',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.75rem',
              minHeight: 290,
              position: 'relative',
            }}
          >
            {/* Top row: quote icon + source */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Quote size={38} style={{
                color: 'rgba(197,164,89,0.25)',
                transform: 'scaleX(-1)',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '0.65rem',
                textTransform: 'uppercase', fontWeight: 700,
                color: (currentTestimonial.source === 'Facebook' || currentTestimonial.source === 'فيسبوك') ? '#60A5FA' : '#34D399',
                background: (currentTestimonial.source === 'Facebook' || currentTestimonial.source === 'فيسبوك') ? 'rgba(96,165,250,0.1)' : 'rgba(52,211,153,0.1)',
                border: (currentTestimonial.source === 'Facebook' || currentTestimonial.source === 'فيسبوك') ? '1px solid rgba(96,165,250,0.25)' : '1px solid rgba(52,211,153,0.25)',
                padding: '0.25rem 0.75rem',
                borderRadius: '100px',
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                letterSpacing: '0.04em',
              }}>
                ● Verified {currentTestimonial.source} Review
              </span>
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: 6 }}>
              {Array.from({ length: currentTestimonial.rating || 5 }).map((_, j) => (
                <span key={j} style={{ color: '#F2E5BC', fontSize: '1.2rem', filter: 'drop-shadow(0 0 6px rgba(197,164,89,0.6))' }}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 2.1,
              fontWeight: 300,
            }}>
              "{currentTestimonial.text}"
            </p>

            {/* Author row */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                  background: 'radial-gradient(circle at 35% 35%, #FFF8E6 0%, #DFCA8C 50%, #9A7B2C 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontWeight: 900, fontSize: '0.95rem', color: '#02050a',
                  boxShadow: '0 0 24px rgba(197,164,89,0.4)',
                  border: '2px solid rgba(255,255,255,0.4)',
                }}>
                  {currentTestimonial.initials}
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2,
                  }}>{currentTestimonial.name}</p>
                  <p style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: '0.78rem', color: 'rgba(203,213,225,0.55)',
                    marginTop: '0.25rem', fontWeight: 300,
                  }}>{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Counter */}
              <div style={{
                fontFamily: "'Outfit', 'Sarchia Bokan', serif",
                fontSize: '0.85rem', color: '#F2E5BC', fontWeight: 700,
                background: 'rgba(255,255,255,0.04)',
                padding: '0.3rem 0.8rem', borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>
            </div>
          </div>
          )}
        </div>

        {/* ── Dots + Mobile Nav ── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '1.25rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}>
          {/* Mobile nav */}
          <button className="ts-nav-btn md:hidden" onClick={() => { prev(); resetTimer(); }} aria-label="Previous">
            <ChevronRight size={17} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`ts-dot${i === current ? ' active' : ''}`}
                onClick={() => { go(i, i > current ? 'next' : 'prev'); resetTimer(); }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile nav */}
          <button className="ts-nav-btn md:hidden" onClick={() => { next(); resetTimer(); }} aria-label="Next">
            <ChevronLeft size={17} />
          </button>
        </div>

      </div>
    </section>
  );
}
