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
          background: 'linear-gradient(to bottom, rgba(2,5,10,0.15) 0%, rgba(5,14,29,0.4) 40%, rgba(2,5,10,0.98) 100%)',
        }} />
        {/* Top gold & sapphire stage lighting */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(212,175,55,0.22) 0%, rgba(30,80,185,0.18) 45%, transparent 75%)',
        }} />
        {/* Dot grid texture */}
        <div className="grid-bg" />
        {/* Noise texture */}
        <div className="noise-overlay" />
        {/* Ambient gold orb — left */}
        <div className="glow-orb glow-orb-gold" style={{
          width: 550, height: 550,
          top: '2%', left: '-5%',
          opacity: 0.85,
        }} />
        {/* Ambient blue orb — right */}
        <div className="glow-orb glow-orb-blue" style={{
          width: 650, height: 650,
          top: '-8%', right: '-8%',
          opacity: 0.85,
        }} />
        {/* Ambient cyan orb — center right */}
        <div className="glow-orb glow-orb-cyan" style={{
          width: 450, height: 450,
          top: '30%', right: '15%',
          opacity: 0.6,
        }} />
        {/* Bottom gold orb */}
        <div className="glow-orb glow-orb-gold" style={{
          width: 500, height: 500,
          bottom: '-15%', left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.55,
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
        {/* Badge */}
        <div className="animate-fade-in-up delay-100" style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'center', padding: '0 0.5rem' }}>
          <span className="badge">
            <span className="dot" />
            {t('hero.badge')}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: "'Outfit', 'Sarchia Bokan', serif",
            fontSize: 'clamp(2.75rem, 8vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#ffffff',
            maxWidth: 820,
            margin: '0 auto 1.25rem',
            wordBreak: 'break-word',
          }}
        >
          {t('hero.title_p1')}{' '}
          <span className="text-gold">{t('hero.title_highlight')}</span>
          <span style={{
            display: 'block',
            marginTop: '0.1rem',
            fontSize: 'clamp(1.5rem, 5vw, 2.75rem)',
            fontWeight: 400,
            color: 'rgba(203,213,225,0.72)',
          }}>
            {t('hero.title_p2')}
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-in-up delay-300"
          style={{
            fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
            maxWidth: 540,
            margin: '0 auto 2.5rem',
            fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
            fontWeight: 300,
            color: 'rgba(203,213,225,0.65)',
            lineHeight: 2.1,
            wordBreak: 'break-word',
          }}
        >
          {t('hero.subtitle_1')}{' '}
          <span style={{ color: 'rgba(197,164,89,0.9)', fontWeight: 500 }}>
            {t('hero.subtitle_2')}
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
            {t('hero.cta_book')}
          </button>
          <a href="#portfolio" className="btn-ghost" id="hero-cta-work">
            <Play size={13} style={{ fill: 'currentColor', flexShrink: 0 }} />
            {t('hero.cta_work')}
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
            className="glass-stat-card"
            style={{
              position: 'relative',
              padding: 'clamp(1.25rem, 4vw, 1.85rem) clamp(1rem, 4vw, 2.25rem)',
              animation: 'float-y 7s ease-in-out infinite',
              maxWidth: 700,
              width: '100%',
            }}
          >
            {/* Subtle inner glow */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center top, rgba(197, 164, 89, 0.15) 0%, transparent 60%)',
              borderRadius: 'inherit',
              pointerEvents: 'none',
            }} />
            
            <div className="stats-inner" style={{ position: 'relative', zIndex: 1 }}>
              {stats.map(({ val, label }, index, arr) => (
                <Fragment key={label}>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1, justifyContent: 'center' }}
                  >
                    <div style={{
                      fontFamily: "'Outfit', 'Sarchia Bokan', serif",
                      fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                      fontWeight: 700, lineHeight: 1,
                      backgroundImage: 'linear-gradient(135deg, #F1EAD4 0%, #C5A459 50%, #B8902A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 4px 12px rgba(197,164,89,0.25))',
                    }}>
                      {val}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
                      fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                      color: 'rgba(235, 240, 248, 0.85)',
                      marginTop: '0.5rem',
                      fontWeight: 500,
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
