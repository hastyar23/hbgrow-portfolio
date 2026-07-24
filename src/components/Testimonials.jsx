import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Awer',
    role: 'کڕیار',
    rating: 5,
    text: 'The best agency I have ever worked with! I can warranty this team 100 hundred percent without any doubt! If there are other agencies that fill a part of your business, this agency is different — they can run your business completely, do everything as you please and as its necessary. Keep up the fine works guys.',
    initials: 'AH',
    source: 'Facebook',
  },
  {
    name: 'Sakar',
    role: 'کڕیار',
    rating: 5,
    text: 'دەستان خۆشبێت هەموو شتێکتان نایابە زۆر لێیان ڕازین لە ستاف و ئیشەکانیشتان لەشتان ساغ بێت ❤️❤️',
    initials: 'SA',
    source: 'Facebook',
  },
  {
    name: 'Muhammad',
    role: 'کڕیار',
    rating: 5,
    text: 'Bzhyn barasty xzmat guzaryakantan nawazaya zor supastan akam 😍😍😍',
    initials: 'MI',
    source: 'Facebook',
  },
  {
    name: 'Yousif',
    role: 'کڕیار',
    rating: 5,
    text: 'Supas bo HBgrow agency — baraste ta wasfe karakantan bkam kama. La hamwe greng tr w bashtr zanyare zor zorm war grtwa la ewa wa bo barrewa brdne esshakan tegashtnm. La karakam zor zor supas tan akam, bashtren group bo ba rewa brdne business online 💪',
    initials: 'YM',
    source: 'Facebook',
  },
  {
    name: 'Hardi',
    role: 'کڕیار',
    rating: 5,
    text: 'Dasttan xoshh bo hbgrow agency bajdy staffay ba azmuny karakanyan zor jwaaa',
    initials: 'HA',
    source: 'Facebook',
  },
  {
    name: 'Bakhtiar',
    role: 'کڕیار',
    rating: 5,
    text: 'هیوای سەرکەوتنتان بۆ دەخوازم یەکەم کارم لای ئێوە دەستپێکرد بەڕاستی ئیسفادەی زۆر باشمان لێکردووە ❣️',
    initials: 'BS',
    source: 'Facebook',
  },
  {
    name: 'کڕیار',
    role: 'پەیامی تایبەت',
    rating: 5,
    text: 'زۆر سوپاستان ئەکەم بەڕاستی من لە چاو ئەو کارگەیەم تازەیە سەرەتا فەزڵی خوایە بەڵام ئێوەش یارمەتی دەڕێکی زۆر باشم بوون بۆ پەیداکردنی متمانەی خەڵک',
    initials: '★',
    source: 'Message',
  },
  {
    name: 'کڕیار',
    role: 'پەیامی تایبەت',
    rating: 5,
    text: 'Best well arranged agency ever.',
    initials: '★',
    source: 'Message',
  },
  {
    name: 'کڕیار',
    role: 'پەیامی تایبەت',
    rating: 5,
    text: 'Zor swpastan akam lashtansagh bet hamw shtek mazbwt bw. Sarkawtwbn.',
    initials: '★',
    source: 'Message',
  },
  {
    name: 'Mohammed Nawzad',
    role: 'کڕیار',
    rating: 5,
    text: 'دیزاین و هەموو شتێکیشتان پێرفێکته دەستان خۆش بی بەجدی نایابه',
    initials: 'MN',
    source: 'Message',
  },
  {
    name: 'کڕیار',
    role: 'پەیامی تایبەت',
    rating: 5,
    text: 'سڵاو لە ستافەکەتان، زۆر سوپاس بۆ ئەوەی لە ماوەی مانگێکدا پێشکەشتانکردین، بەڕاستی کارەکانتان زۆر جوان و ڕێکوپێکە، زۆر بە ئامانەتەوە کارەکانتان ئەنجامدا، بەهیوای ئەوەی لە داهاتوودا بە شێوەیەکی باشترو سەرکەوتوانەتر بەردەوام بن.',
    initials: '★',
    source: 'Message',
  },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
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
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); resetTimer(); }
    touchStartX.current = null;
  };

  const t = testimonials[current];

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
          <span className="badge" style={{ marginBottom: '1.5rem' }}>بەڵگەنامەکان</span>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Noto Naskh Arabic', serif",
                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                fontWeight: 700, lineHeight: 1.25, color: '#ffffff',
                maxWidth: 520, marginTop: '0.75rem',
              }}>
                ئەوانەی پێش تۆ بڕیارییانداوە،{' '}
                <span className="text-gold">ئێستا لە لوتکەدان.</span>
              </h2>
              <p style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '0.875rem', color: 'rgba(203,213,225,0.5)',
                marginTop: '1rem', fontWeight: 300, lineHeight: 1.9,
              }}>
                ئەنجامەکانمان تەنها ژمارە نین، گەشەکردنی ڕاستەقینەی بزنسەکانن.
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
          <div
            key={current}
            className={animating ? '' : (direction === 'next' ? 'ts-card-enter-next' : 'ts-card-enter-prev')}
            dir="rtl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: '2px solid rgba(197,164,89,0.3)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(197,164,89,0.05)',
              borderRadius: '1.25rem',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.75rem',
              minHeight: 280,
            }}
          >
            {/* Top row: quote icon + source */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Quote size={36} style={{
                color: 'rgba(197,164,89,0.12)',
                transform: 'scaleX(-1)',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '0.58rem', letterSpacing: '0.18em',
                textTransform: 'uppercase', fontWeight: 700,
                color: t.source === 'Facebook' ? 'rgba(130,170,255,0.65)' : 'rgba(100,220,130,0.65)',
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                paddingTop: '0.25rem',
              }}>
                {t.source === 'Facebook' ? '● Facebook' : '● Message'}
              </span>
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: t.rating }).map((_, j) => (
                <span key={j} style={{ color: '#C5A459', fontSize: '1.1rem' }}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 2.1,
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}>
              "{t.text}"
            </p>

            {/* Author row */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #C5A459, #E8C96A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontWeight: 900, fontSize: '0.9rem', color: '#02050a',
                  boxShadow: '0 0 20px rgba(197,164,89,0.3)',
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2,
                  }}>{t.name}</p>
                  <p style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: '0.78rem', color: 'rgba(203,213,225,0.45)',
                    marginTop: '0.2rem', fontWeight: 300,
                  }}>{t.role}</p>
                </div>
              </div>

              {/* Counter */}
              <div style={{
                fontFamily: "'Noto Naskh Arabic', serif",
                fontSize: '0.78rem', color: 'rgba(203,213,225,0.3)',
                letterSpacing: '0.1em', fontWeight: 600,
              }}>
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>
            </div>
          </div>
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
