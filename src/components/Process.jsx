import { Phone, BarChart2, Eye, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    {
      num: t('process.steps.0.num'),
      icon: <Phone size={16} />,
      title: t('process.steps.0.title'),
      duration: t('process.steps.0.duration'),
      desc: t('process.steps.0.desc'),
    },
    {
      num: t('process.steps.1.num'),
      icon: <BarChart2 size={16} />,
      title: t('process.steps.1.title'),
      duration: t('process.steps.1.duration'),
      desc: t('process.steps.1.desc'),
    },
    {
      num: t('process.steps.2.num'),
      icon: <Eye size={16} />,
      title: t('process.steps.2.title'),
      duration: t('process.steps.2.duration'),
      desc: t('process.steps.2.desc'),
    },
    {
      num: t('process.steps.3.num'),
      icon: <Smile size={16} />,
      title: t('process.steps.3.title'),
      duration: t('process.steps.3.duration'),
      desc: t('process.steps.3.desc'),
    },
  ];

  return (
    <section id="process" style={{ padding: 'clamp(4rem, 10vw, 9rem) 0' }}>
      <div className="section-wrap">

        {/* Header */}
        <div data-reveal style={{ maxWidth: 560, marginBottom: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>{t('process.badge')}</span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            fontWeight: 700, lineHeight: 1.25, color: '#ffffff',
            marginBottom: '1rem', marginTop: '0.75rem',
          }}>
            {t('process.title_p1')}{' '}
            <span className="text-gold">{t('process.title_highlight')}</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
            color: 'rgba(203,213,225,0.6)', lineHeight: 2,
            fontWeight: 300, letterSpacing: '0.03em',
          }}>
            {t('process.subtitle')}
          </p>
        </div>

        {/* Steps Grid — 2-col on tablet+, 1-col on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1rem',
        }}>
          {steps.map(({ num, icon, title, duration, desc }, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card"
              style={{
                padding: 'clamp(1.75rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2.25rem)',
                position: 'relative',
                overflow: 'hidden',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Ghost large number */}
              <span className="step-num">{num}</span>

              {/* Icon */}
              <div style={{
                width: 38, height: 38, borderRadius: '0.5rem',
                border: '1px solid rgba(197,164,89,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(197,164,89,0.7)',
                marginBottom: '1.5rem',
                background: 'rgba(197,164,89,0.05)',
                flexShrink: 0,
              }}>
                {icon}
              </div>

              {/* Duration label */}
              <div style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '0.65rem', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(197,164,89,0.5)',
                marginBottom: '0.875rem', fontWeight: 700,
              }}>
                {duration}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', fontWeight: 700,
                color: '#ffffff', marginBottom: '0.875rem', lineHeight: 1.4,
              }}>
                {title}
              </h3>

              {/* Desc */}
              <p style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '0.875rem', color: 'rgba(203,213,225,0.6)',
                lineHeight: 2, fontWeight: 300,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
