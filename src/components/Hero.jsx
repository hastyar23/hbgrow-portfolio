import { useEffect, useRef, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Play } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const { openSchedule } = useSchedule();
  const glowRef = useRef(null);
  const { t } = useTranslation();

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
    { val: '100+',   label: t('hero.stats.brands') },
    { val: '60,000+',  label: t('hero.stats.leads') },
    { val: '1,000+', label: t('hero.stats.creative') },
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
          fetchPriority="high"
          decoding="async"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.18,
            animation: 'bg-scale 30s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
          }}
        />
        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(4,7,17,0.3) 0%, rgba(4,7,17,0.6) 50%, rgba(2,3,7,0.98) 100%)',
        }} />
        {/* Sleek stage spotlight */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 75% 45% at 50% -5%, rgba(197,164,89,0.12) 0%, rgba(13,26,51,0.25) 50%, transparent 75%)',
        }} />
        {/* Dot grid texture */}
        <div className="grid-bg" />
        {/* Noise texture */}
        <div className="noise-overlay" />
        {/* Ambient gold orb — left */}
        <div className="glow-orb glow-orb-gold" style={{
          width: 500, height: 500,
          top: '2%', left: '-5%',
          opacity: 0.45,
        }} />
        {/* Ambient blue orb — right */}
        <div className="glow-orb glow-orb-blue" style={{
          width: 600, height: 600,
          top: '-8%', right: '-8%',
          opacity: 0.45,
        }} />
        {/* Bottom gold orb */}
        <div className="glow-orb glow-orb-gold" style={{
          width: 450, height: 450,
          bottom: '-15%', left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.25,
          animationDelay: '-2s',
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
        {/* 2026 Dynamic Status Badge */}
        <div className="animate-fade-in-up delay-100" style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'center', padding: '0 0.5rem' }}>
          <span className="badge" style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(197, 164, 89, 0.08) 100%)',
            border: '1px solid rgba(197, 164, 89, 0.35)',
            boxShadow: '0 0 25px rgba(197, 164, 89, 0.12), inset 0 1px 0 rgba(255,255,255,0.2)',
            padding: '0.45rem 1.25rem',
          }}>
            <span className="radar-emerald" />
            <span style={{ color: '#F2E5BC', fontWeight: 700, letterSpacing: '0.04em' }}>{t('hero.badge')}</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: "'Outfit', 'Sarchia Bokan', serif",
            fontSize: 'clamp(2.75rem, 8vw, 5.25rem)',
            fontWeight: 800,
            lineHeight: 1.04,
            color: '#ffffff',
            maxWidth: 880,
            margin: '0 auto 1.5rem',
            wordBreak: 'break-word',
            letterSpacing: '-0.02em',
          }}
        >
          {t('hero.title_p1')}{' '}
          <span className="text-gold" style={{ textShadow: '0 0 35px rgba(197,164,89,0.3)' }}>{t('hero.title_highlight')}</span>
          <span style={{
            display: 'block',
            marginTop: '0.2rem',
            fontSize: 'clamp(1.6rem, 5vw, 2.85rem)',
            fontWeight: 400,
            color: 'rgba(203,213,225,0.78)',
          }}>
            {t('hero.title_p2')}
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-in-up delay-300"
          style={{
            fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
            maxWidth: 580,
            margin: '0 auto 2.5rem',
            fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
            fontWeight: 300,
            color: 'rgba(203,213,225,0.7)',
            lineHeight: 2.1,
            wordBreak: 'break-word',
          }}
        >
          {t('hero.subtitle_1')}{' '}
          <span style={{ color: 'rgba(242,229,188,0.95)', fontWeight: 600 }}>
            {t('hero.subtitle_2')}
          </span>
        </p>

        {/* CTAs — responsive via CSS class hero-ctas */}
        <div className="animate-fade-in-up delay-400 hero-ctas" style={{ marginBottom: '3rem' }}>
          <button
            onClick={openSchedule}
            className="btn-primary"
            id="hero-cta-book"
            style={{
              boxShadow: '0 0 40px -6px rgba(197,164,89,0.55), inset 0 1px 0 rgba(255,255,255,0.6)',
              border: 'none',
              cursor: 'pointer',
              padding: '1rem 2.25rem',
              fontSize: '0.95rem',
            }}
          >
            <WhatsAppIcon size={18} style={{ flexShrink: 0 }} />
            {t('hero.cta_book')}
          </button>
          <a
            href="#portfolio"
            className="btn-ghost"
            id="hero-cta-work"
            style={{ padding: '0.95rem 2rem', fontSize: '0.92rem' }}
          >
            <Play size={14} style={{ fill: 'currentColor', flexShrink: 0 }} />
            {t('hero.cta_work')}
          </a>
        </div>

        {/* 2026 Floating Performance Command Center HUD */}
        <div className="animate-fade-in-up delay-600" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              padding: 'clamp(1.5rem, 4vw, 2.2rem) clamp(1.2rem, 4vw, 2.5rem)',
              animation: 'float-y 6s ease-in-out infinite',
              maxWidth: 760,
              width: '100%',
              borderRadius: '1.75rem',
              border: '1px solid rgba(197,164,89,0.22)',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.75), 0 0 35px rgba(197,164,89,0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            }}
          >
            {/* Top header row inside HUD */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingBottom: '1.25rem', marginBottom: '1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              fontSize: '0.72rem', color: 'rgba(203,213,225,0.6)',
              fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="radar-gold" />
                <span style={{ fontWeight: 600, color: '#F2E5BC', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Audited Growth Matrix
                </span>
              </div>
              <span style={{
                background: 'rgba(255,255,255,0.04)',
                padding: '0.2rem 0.6rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#34D399',
                fontWeight: 600,
                fontSize: '0.68rem',
              }}>
                ● Verified Results
              </span>
            </div>

            <div className="stats-inner" style={{ position: 'relative', zIndex: 1 }}>
              {stats.map(({ val, label }, index, arr) => (
                <Fragment key={label}>
                  <div
                    style={{
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', textAlign: 'center',
                      flex: 1, justifyContent: 'center',
                      padding: '0 0.5rem',
                    }}
                  >
                    <div style={{
                      fontFamily: "'Outfit', 'Sarchia Bokan', serif",
                      fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
                      fontWeight: 800, lineHeight: 1,
                      backgroundImage: 'linear-gradient(135deg, #FFF8E6 0%, #DFCA8C 40%, #C5A459 80%, #9A7B2C 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 4px 16px rgba(197,164,89,0.3))',
                    }}>
                      {val}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
                      fontSize: 'clamp(0.72rem, 2vw, 0.88rem)',
                      color: 'rgba(235, 240, 248, 0.85)',
                      marginTop: '0.6rem',
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}>
                      {label}
                    </div>
                  </div>

                  {index !== arr.length - 1 && (
                    <div className="stats-divider" />
                  )}
                </Fragment>
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
