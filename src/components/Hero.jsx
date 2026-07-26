import { useEffect, useRef } from 'react';
import { Calendar, Play } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const { openSchedule } = useSchedule();
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = e.clientX + 'px';
      glowRef.current.style.top  = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const stats = [
    { val: '100+',   label: 'براندی متمانەپێکراو' },
    { val: '60,000+',  label: 'بەرهەمهێنانی نامە بۆ کڕیارانمان' },
    { val: '1,000+', label: 'بەرهەمی دیزاین و ڤیدیۆ' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Cursor glow — only visible on desktop (controlled via CSS pointer:fine) */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Cinematic BG layers */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          src="/images/cinematic_hero.jpg"
          alt=""
          fetchpriority="high"
          decoding="async"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.22,
            animation: 'bg-scale 30s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(2,5,10,0.2) 0%, rgba(5,14,29,0.35) 40%, rgba(2,5,10,0.97) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(197,164,89,0.08) 0%, transparent 65%)',
        }} />
      </div>

      {/* Content */}
      <div
        className="section-wrap"
        style={{
          position: 'relative', zIndex: 2,
          paddingTop: 'clamp(6rem, 15vw, 10rem)',
          paddingBottom: 'clamp(4rem, 10vw, 7rem)',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <div className="animate-fade-in-up delay-100" style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'center', padding: '0 0.5rem' }}>
          <span className="badge">
            <span className="dot" />
            متمانەپێکراوە لەلایەن +١٠٠ کڕیار لە کوردستان و عێراق
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(2.2rem, 6.5vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1,
            color: '#ffffff',
            maxWidth: 820,
            margin: '0 auto 1.25rem',
            wordBreak: 'break-word',
          }}
        >
          براندەکەت شایەنی{' '}
          <span className="text-gold">کــــڕیارە،</span>
          <span style={{
            display: 'block',
            marginTop: '0.4rem',
            fontSize: 'clamp(1.25rem, 4vw, 2.75rem)',
            fontWeight: 400,
            color: 'rgba(203,213,225,0.72)',
          }}>
            نەک تەنها بـــــــــــــــینەر
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-in-up delay-300"
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            maxWidth: 540,
            margin: '0 auto 2.5rem',
            fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
            fontWeight: 300,
            color: 'rgba(203,213,225,0.65)',
            lineHeight: 2.1,
            letterSpacing: '0.01em',
            wordBreak: 'break-word',
          }}
        >
          ئێمە تەنها "پۆست" ناکەین. ئێمە ستراتیجییەکی تەواوی گەشەکردن و فرۆشتن بۆ کلینیک، کۆمپانیا و براندە ئاست بەرزەکان دروست دەکەین.{' '}
          <span style={{ color: 'rgba(197,164,89,0.9)', fontWeight: 500 }}>
            کاتی خۆت بۆ بزنسەکەت تەرخان بکە، گەشەکردنەکە جێبهێڵە بۆ ئێمە.
          </span>
        </p>

        {/* CTAs — responsive via CSS class hero-ctas */}
        <div className="animate-fade-in-up delay-400 hero-ctas">
          <button
            onClick={openSchedule}
            className="btn-primary"
            id="hero-cta-book"
            style={{ boxShadow: '0 0 32px -8px rgba(197,164,89,0.45)', border: 'none', cursor: 'pointer' }}
          >
            <WhatsAppIcon size={16} style={{ flexShrink: 0 }} />
            کاتێک دیاریبکە بۆ گفتوگۆکردن لەگەڵمان
          </button>
          <a href="#portfolio" className="btn-ghost" id="hero-cta-work">
            <Play size={13} style={{ fill: 'currentColor', flexShrink: 0 }} />
            نموونەی کارەکانمان ببینە
          </a>
        </div>

        {/* Hairline */}
        <div
          className="hairline animate-fade-in-up delay-500"
          style={{ maxWidth: 440, margin: '0 auto 2.5rem', opacity: 0.4 }}
        />

        {/* Stats Card — glassmorphic, responsive via CSS classes */}
        <div className="animate-fade-in-up delay-600" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.25rem, 4vw, 2rem) clamp(1.25rem, 5vw, 2.5rem)',
              animation: 'float-y 7s ease-in-out infinite',
              maxWidth: 600,
              width: '100%',
            }}
          >
            <div className="stats-inner">
              {stats.map(({ val, label }, index, arr) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                  >
                    <div style={{
                      fontFamily: "'Sarchia Bokan', serif",
                      fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
                      fontWeight: 700, lineHeight: 1,
                      backgroundImage: 'linear-gradient(135deg, #C5A459 0%, #F1EAD4 50%, #E8C96A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {val}
                    </div>
                    <div style={{
                      fontFamily: "'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.7rem',
                      color: 'rgba(203,213,225,0.6)',
                      marginTop: '0.5rem',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                    }}>
                      {label}
                    </div>
                  </div>

                  {index !== arr.length - 1 && (
                    <div className="stats-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2,
      }}>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, rgba(197,164,89,0.6), transparent)',
          animation: 'float-y 2.5s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
