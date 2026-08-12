import { Phone, BarChart2, Eye, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STEP_COLORS = [
  { border: 'rgba(197,164,89,0.30)', glow: 'rgba(197,164,89,0.14)', icon: 'rgba(197,164,89,0.85)', bg: 'rgba(197,164,89,0.12)' },
  { border: 'rgba(100,160,255,0.28)', glow: 'rgba(80,140,255,0.10)', icon: 'rgba(120,170,255,0.85)', bg: 'rgba(80,140,255,0.10)' },
  { border: 'rgba(160,120,255,0.28)', glow: 'rgba(140,100,255,0.10)', icon: 'rgba(170,140,255,0.85)', bg: 'rgba(140,100,255,0.10)' },
  { border: 'rgba(100,220,140,0.28)', glow: 'rgba(80,200,120,0.10)', icon: 'rgba(100,230,150,0.85)', bg: 'rgba(80,200,120,0.10)' },
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
        background: 'radial-gradient(ellipse, rgba(197,164,89,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

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
            color: 'rgba(203,213,225,0.6)', lineHeight: 2, fontWeight: 300,
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
                  borderTop: `1px solid ${c.border}`,
                }}
              >
                {/* Per-card top colour glow */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '55%',
                  background: `radial-gradient(ellipse 90% 55% at 50% -15%, ${c.glow} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Ghost large number */}
                <span className="step-num">{num}</span>

                {/* Icon badge */}
                <div style={{
                  width: 44, height: 44, borderRadius: '0.875rem',
                  background: `linear-gradient(135deg, ${c.bg} 0%, rgba(255,255,255,0.04) 100%)`,
                  border: `1px solid ${c.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: c.icon,
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(8px)',
                  boxShadow: `0 4px 20px ${c.glow}, inset 0 1px 0 rgba(255,255,255,0.10)`,
                  position: 'relative', zIndex: 1,
                }}>
                  {icon}
                </div>

                {/* Duration label */}
                <div style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.65rem', textTransform: 'uppercase',
                  color: c.icon.replace('0.85', '0.55'),
                  marginBottom: '0.75rem', fontWeight: 700,
                  position: 'relative', zIndex: 1,
                }}>
                  {duration}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', fontWeight: 700,
                  color: '#ffffff', marginBottom: '0.875rem', lineHeight: 1.4,
                  position: 'relative', zIndex: 1,
                }}>
                  {title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.875rem', color: 'rgba(203,213,225,0.6)',
                  lineHeight: 2, fontWeight: 300,
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
