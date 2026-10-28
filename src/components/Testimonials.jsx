import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');
  
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
    <section id="testimonials" style={{ padding: 'clamp(4rem, 8vw, 8rem) 0' }}>

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
          border: 1px solid rgba(0,0,0,0.1);
          background: #FFFFFF;
          backdrop-filter: blur(12px);
          color: #0A0A0C;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s ease;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .ts-nav-btn:hover {
          border-color: #03142B;
          background: #F8FAFC;
          color: #03142B;
          transform: scale(1.05);
        }
        .ts-nav-btn:active { transform: scale(0.95); }

        .ts-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(0,0,0,0.15);
          border: none; cursor: pointer;
          transition: all 0.35s ease; padding: 0;
          flex-shrink: 0;
        }
        .ts-dot.active {
          width: 24px; border-radius: 3px;
          background: #03142B;
          box-shadow: 0 0 10px rgba(3, 20, 43, 0.3);
        }
        .ts-dot:hover:not(.active) { background: rgba(0,0,0,0.3); }
      `}</style>

      <div className="section-wrap">

        {/* ── Header with Statiq-style Handwritten Micro-Tag ── */}
        <div data-reveal style={{ marginBottom: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
          <span className="font-script-accent">
            {isRTL ? 'ڕای کڕیاران و هاوبەشەکانمان' : 'What Our Partners Say'}
          </span>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge">{t('testimonials.badge')}</span>
          </div>
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
                fontWeight: 700, lineHeight: 1.25, color: '#0A0A0C',
                maxWidth: 520, marginTop: '0.75rem',
              }}>
                {t('testimonials.title_p1')}
                <span className="text-gold">{t('testimonials.title_highlight')}</span>
              </h2>
              <p style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: '0.875rem', color: '#52525B',
                marginTop: '1rem', fontWeight: 400, lineHeight: 1.9,
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
            height: 2, background: 'rgba(0,0,0,0.04)', zIndex: 2,
          }}>
            <div
              key={current}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #020C1B, #0B3275)',
                boxShadow: '0 0 10px rgba(11, 50, 117, 0.3)',
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
              backgroundColor: '#FFFFFF',
              backgroundImage: 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255, 255, 255, 1)',
              borderRadius: '1.25rem',
              padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.75rem',
              minHeight: 280,
            }}
          >
            {/* Top row: quote icon + source */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Quote size={36} style={{
                color: 'rgba(3, 20, 43, 0.15)',
                transform: 'scaleX(-1)',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '0.58rem',
                textTransform: 'uppercase', fontWeight: 700,
                color: '#64748B',
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                paddingTop: '0.25rem',
              }}>
                ● {currentTestimonial.source}
              </span>
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: currentTestimonial.rating || 5 }).map((_, j) => (
                <span key={j} style={{ color: '#D97706', fontSize: '1.1rem' }}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              color: '#0A0A0C',
              lineHeight: 2.1,
              fontWeight: 400,
            }}>
              "{currentTestimonial.text}"
            </p>

            {/* Author row */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #020C1B 0%, #0B3275 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontWeight: 900, fontSize: '0.9rem', color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(3, 20, 43, 0.20)',
                }}>
                  {currentTestimonial.initials}
                </div>
                <div>
                  <p style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: '1rem', fontWeight: 700, color: '#0A0A0C', lineHeight: 1.2,
                  }}>{currentTestimonial.name}</p>
                  <p style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: '0.78rem', color: '#64748B',
                    marginTop: '0.2rem', fontWeight: 400,
                  }}>{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Counter */}
              <div style={{
                fontFamily: "'Sarchia Bokan', serif",
                fontSize: '0.78rem', color: '#64748B', fontWeight: 600,
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
