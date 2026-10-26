import { Phone, BarChart2, Eye, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STEP_COLORS = [
  { border: 'rgba(0, 0, 0, 0.08)', glow: 'rgba(3, 20, 43, 0.03)', icon: '#0B3275', bg: 'rgba(3, 20, 43, 0.04)' },
  { border: 'rgba(0, 0, 0, 0.08)', glow: 'rgba(3, 20, 43, 0.03)', icon: '#0B3275', bg: 'rgba(3, 20, 43, 0.04)' },
  { border: 'rgba(0, 0, 0, 0.08)', glow: 'rgba(3, 20, 43, 0.03)', icon: '#0B3275', bg: 'rgba(3, 20, 43, 0.04)' },
  { border: 'rgba(0, 0, 0, 0.08)', glow: 'rgba(3, 20, 43, 0.03)', icon: '#0B3275', bg: 'rgba(3, 20, 43, 0.04)' },
];

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    { num: t('process.steps.0.num'), icon: <Phone size={16} />, title: t('process.steps.0.title'), duration: t('process.steps.0.duration'), desc: t('process.steps.0.desc') },
    { num: t('process.steps.1.num'), icon: <BarChart2 size={16} />, title: t('process.steps.1.title'), duration: t('process.steps.1.duration'), desc: t('process.steps.1.desc') },
    { num: t('process.steps.2.num'), icon: <Eye size={16} />, title: t('process.steps.2.title'), duration: t('process.steps.2.duration'), desc: t('process.steps.2.desc') },
    { num: t('process.steps.3.num'), icon: <Smile size={16} />, title: t('process.steps.3.title'), duration: t('process.steps.3.duration'), desc: t('process.steps.3.desc') },
  ];

  return (
    <section id="process" style={{ padding: 'clamp(4rem, 10vw, 9rem) 0', position: 'relative' }}>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(3, 20, 43, 0.03) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="section-wrap">

        {/* Header */}
        <div data-reveal style={{ maxWidth: 560, marginBottom: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>{t('process.badge')}</span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            fontWeight: 700, lineHeight: 1.25, color: '#0A0A0C',
            marginBottom: '1rem', marginTop: '0.75rem',
          }}>
            {t('process.title_p1')}{' '}
            <span className="text-gold">{t('process.title_highlight')}</span>
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
            color: '#52525B', lineHeight: 2, fontWeight: 400,
          }}>
            {t('process.subtitle')}
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.25rem',
        }}>
          {steps.map(({ num, icon, title, duration, desc }, i) => {
            const c = STEP_COLORS[i];
            return (
              <div
                key={i}
                data-reveal
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.5rem) clamp(1.25rem, 3vw, 2rem)',
                  position: 'relative',
                  overflow: 'hidden',
                  transitionDelay: `${i * 80}ms`,
                  border: '1px solid rgba(0, 0, 0, 0.07)',
                }}
              >
                {/* Ghost large number */}
                <span className="step-num">{num}</span>

                {/* Icon badge */}
                <div style={{
                  width: 44, height: 44, borderRadius: '0.875rem',
                  background: 'rgba(3, 20, 43, 0.04)',
                  border: '1px solid rgba(3, 20, 43, 0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#0B3275',
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 10px rgba(3, 20, 43, 0.05)',
                  position: 'relative', zIndex: 1,
                }}>
                  {icon}
                </div>

                {/* Duration label */}
                <div style={{
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.65rem', textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: '0.75rem', fontWeight: 700,
                  position: 'relative', zIndex: 1,
                }}>
                  {duration}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', fontWeight: 700,
                  color: '#0A0A0C', marginBottom: '0.875rem', lineHeight: 1.4,
                  position: 'relative', zIndex: 1,
                }}>
                  {title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.875rem', color: '#52525B',
                  lineHeight: 2, fontWeight: 400,
                  position: 'relative', zIndex: 1,
                }}>
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
