import { useEffect, useRef, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Play } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';
import HeroCreativeGrid from './HeroCreativeGrid';

export default function Hero() {
  const { openSchedule } = useSchedule();
  const glowRef = useRef(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

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
        {/* Clean light gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.95) 50%, #FFFFFF 100%)',
        }} />
        {/* Sleek stage spotlight */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(3, 20, 43, 0.04) 0%, transparent 70%)',
        }} />
        {/* Dot grid texture */}
        <div className="grid-bg" />
        {/* Noise texture */}
        <div className="noise-overlay" />
        {/* Ambient subtle glow — left */}
        <div className="glow-orb glow-orb-gold" style={{
          width: 550, height: 550,
          top: '2%', left: '-5%',
          opacity: 0.03,
        }} />
        {/* Ambient subtle glow — right */}
        <div className="glow-orb glow-orb-cyan" style={{
          width: 600, height: 600,
          top: '-8%', right: '-8%',
          opacity: 0.03,
        }} />
      </div>

      {/* Content */}
      <div
        className="section-wrap"
        style={{
          position: 'relative', zIndex: 2,
          paddingTop: 'clamp(6.5rem, 14vw, 9.5rem)',
          paddingBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
        }}
      >
        <div className="hero-split-grid">
          {/* Column 1: Text & Actions & Stats */}
          <div className="hero-text-col">
            {/* Top Blue Sticker: Landing Pages (Screenshot High-End Style) */}
            <div className="animate-fade-in-up hero-sticker-top-wrap" style={{ marginBottom: '1.25rem' }}>
              <span
                className="statiq-sticker statiq-sticker-blue"
                style={{
                  transform: isRTL ? 'rotate(8deg)' : 'rotate(-10deg)',
                  fontSize: '0.8rem',
                  padding: '0.35rem 0.9rem',
                }}
              >
                {t('design_portfolio.sticker_landing', 'Landing Pages')}
              </span>
            </div>

            {/* Headline in High-End Statiq Style */}
            <h1
              className="animate-fade-in-up delay-100"
              style={{
                fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                fontSize: 'clamp(2.2rem, 5.2vw, 4.1rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#0A0A0C',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                wordBreak: 'break-word',
              }}
            >
              {t('hero.title_p1')}{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span
                  style={{
                    color: '#0070F3',
                    textShadow: '0 0 35px rgba(0, 112, 243, 0.35)',
                  }}
                >
                  {t('hero.title_highlight')} {t('hero.title_p2')}
                </span>
                {/* Yellow Sticker next to title: Ad Creatives */}
                <span
                  className="statiq-sticker statiq-sticker-yellow hero-title-yellow-sticker"
                  style={{
                    position: 'absolute',
                    top: '-0.6rem',
                    right: isRTL ? 'auto' : '-4.5rem',
                    left: isRTL ? '-4.5rem' : 'auto',
                    transform: isRTL ? 'rotate(-8deg)' : 'rotate(8deg)',
                    fontSize: '0.74rem',
                    padding: '0.28rem 0.75rem',
                  }}
                >
                  {t('design_portfolio.sticker_ads', 'Ad Creatives')}
                </span>
              </span>
            </h1>

            {/* Bottom Purple Sticker: Emails & More! */}
            <div className="animate-fade-in-up delay-200 hero-sticker-bottom-wrap" style={{ marginBottom: '1.5rem' }}>
              <span
                className="statiq-sticker statiq-sticker-purple"
                style={{
                  transform: isRTL ? 'rotate(-6deg)' : 'rotate(6deg)',
                  fontSize: '0.8rem',
                  padding: '0.35rem 0.9rem',
                }}
              >
                {t('design_portfolio.sticker_emails', 'Emails & More!')}
              </span>
            </div>

            {/* Sub-headline */}
            <p
              className="animate-fade-in-up delay-300"
              style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: 'clamp(0.88rem, 1.8vw, 1.05rem)',
                fontWeight: 400,
                color: '#52525B',
                lineHeight: 1.95,
                marginBottom: '1.75rem',
                maxWidth: 580,
                wordBreak: 'break-word',
              }}
            >
              {t('hero.subtitle_1')}{' '}
              <span style={{ color: '#0A0A0C', fontWeight: 600 }}>
                {t('hero.subtitle_2')}
              </span>
            </p>

            {/* CTAs — responsive via CSS class hero-ctas */}
            <div className="animate-fade-in-up delay-400 hero-ctas" style={{ marginBottom: '1.75rem' }}>
              <button
                onClick={openSchedule}
                className="btn-primary"
                id="hero-cta-book"
                style={{ boxShadow: '0 4px 20px -2px rgba(3, 20, 43, 0.35)', border: 'none', cursor: 'pointer' }}
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
              className="hairline animate-fade-in-up delay-500 hero-hairline"
              style={{ opacity: 0.7 }}
            />

            {/* Stats Card — glassmorphic, responsive */}
            <div className="animate-fade-in-up delay-600 hero-stats-wrap">
              <div
                className="glass-stat-card"
                style={{
                  position: 'relative',
                  padding: 'clamp(1rem, 2.5vw, 1.35rem) clamp(0.75rem, 2vw, 1.5rem)',
                  width: '100%',
                }}
              >
                {/* Subtle inner glow */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center top, rgba(3, 20, 43, 0.02) 0%, transparent 60%)',
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
                          fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                          fontWeight: 800, lineHeight: 1,
                          color: '#0A0A0C',
                        }}>
                          {val}
                        </div>
                        <div style={{
                          fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                          fontSize: 'clamp(0.68rem, 1.4vw, 0.78rem)',
                          color: '#64748B',
                          marginTop: '0.4rem',
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

          {/* Column 2: Creative Grid — Next to the texts! */}
          <div className="hero-media-col animate-fade-in-up delay-400">
            <HeroCreativeGrid />
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2,
          marginTop: 'clamp(2rem, 4vw, 3.5rem)',
        }}>
          <div style={{
            width: 1, height: 32,
            background: 'linear-gradient(to bottom, rgba(3, 20, 43, 0.4), transparent)',
            animation: 'float-y 2.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}
