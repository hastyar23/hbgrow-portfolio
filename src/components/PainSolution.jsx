import { XCircle, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function PainSolution() {
  const { openSchedule } = useSchedule();
  const { t } = useTranslation();

  const pains = t('pain_solution.pains', { returnObjects: true });
  const safePains = Array.isArray(pains) ? pains : [];

  const solutions = t('pain_solution.solutions', { returnObjects: true });
  const safeSolutions = Array.isArray(solutions) ? solutions : [];

  return (
    <section id="about" style={{ padding: 'clamp(5rem, 12vw, 9rem) 0', position: 'relative' }}>

      {/* Ambient background glows */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,80,80,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,164,89,0.08) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="section-wrap">

        {/* Header */}
        <div data-reveal style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1.75rem', display: 'inline-flex' }}>{t('pain_solution.badge')}</span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)',
            fontWeight: 700, lineHeight: 1.25,
            color: '#ffffff', maxWidth: 620, margin: '0 auto',
          }}>
            {t('pain_solution.title_p1')}{' '}
            <span className="text-gold">{t('pain_solution.title_highlight')}</span>{' '}
            {t('pain_solution.title_p2')}
          </h2>
        </div>

        {/* Pain Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(3rem, 8vw, 5rem)',
        }}>
          {safePains.map(({ title, desc }, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card"
              style={{
                padding: '2.25rem',
                transitionDelay: `${i * 80}ms`,
                borderTop: '1px solid rgba(220,60,60,0.20)',
                animationDelay: `${i * 1.5}s`,
              }}
            >
              {/* Red ambient glow per card */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
                background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(220,80,80,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Icon badge */}
              <div style={{
                width: 40, height: 40, borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(220,80,80,0.15) 0%, rgba(220,80,80,0.06) 100%)',
                border: '1px solid rgba(220,80,80,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', flexShrink: 0,
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 16px rgba(220,80,80,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}>
                <XCircle size={16} style={{ color: 'rgba(240,100,100,0.85)' }} />
              </div>

              <div style={{
                fontSize: '0.65rem', fontWeight: 700,
                color: 'rgba(240,100,100,0.60)', marginBottom: '0.75rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                textTransform: 'uppercase', fontFamily: "'Noto Kufi Arabic', sans-serif",
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '1rem', fontWeight: 700,
                color: '#ffffff', marginBottom: '1rem', lineHeight: 1.5,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '0.9rem', color: 'rgba(203,213,225,0.60)',
                lineHeight: 2, fontWeight: 300,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Shift Banner */}
        <div data-reveal style={{
          padding: '3rem 2.5rem',
          marginBottom: 'clamp(3rem, 8vw, 5rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(197,164,89,0.09) 0%, rgba(197,164,89,0.03) 100%)',
          border: '1px solid rgba(197,164,89,0.22)',
          borderRadius: '1.75rem',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          boxShadow: '0 16px 56px rgba(0,0,0,0.55), inset 0 1px 0 rgba(197,164,89,0.20), 0 0 48px rgba(197,164,89,0.08)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Banner shine line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent 10%, rgba(197,164,89,0.55) 50%, transparent 90%)',
          }} />
          {/* Banner inner glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(197,164,89,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <p style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.4rem, 3vw, 2.25rem)',
            fontWeight: 700, lineHeight: 1.35,
            color: '#ffffff', position: 'relative', zIndex: 1,
          }}>
            {t('pain_solution.shift_p1')}{' '}
            <span className="text-gold">{t('pain_solution.shift_highlight')}</span>
            {' '}{t('pain_solution.shift_p2')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
        }}>
          {safeSolutions.map(({ title, desc }, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card-gold"
              style={{
                padding: '2.25rem',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Icon badge */}
              <div style={{
                width: 40, height: 40, borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(197,164,89,0.20) 0%, rgba(197,164,89,0.08) 100%)',
                border: '1px solid rgba(197,164,89,0.30)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', flexShrink: 0,
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 16px rgba(197,164,89,0.15), inset 0 1px 0 rgba(255,255,255,0.10)',
              }}>
                <CheckCircle2 size={16} style={{ color: 'rgba(197,164,89,0.90)' }} />
              </div>

              <div style={{
                fontSize: '0.65rem', fontWeight: 700,
                color: 'rgba(197,164,89,0.60)', marginBottom: '0.75rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                textTransform: 'uppercase', fontFamily: "'Noto Kufi Arabic', sans-serif",
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '1rem', fontWeight: 700,
                color: '#ffffff', marginBottom: '1rem', lineHeight: 1.5,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '0.9rem', color: 'rgba(203,213,225,0.60)',
                lineHeight: 2, fontWeight: 300,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal style={{ textAlign: 'center' }}>
          <button onClick={openSchedule} className="btn-primary" style={{ fontSize: '0.95rem', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}>
            <WhatsAppIcon size={18} />
            {t('pain_solution.cta_btn')}
          </button>
          <p style={{
            marginTop: '1.25rem',
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.8rem', color: 'rgba(203,213,225,0.4)',
          }}>
            {t('pain_solution.cta_desc')}
          </p>
        </div>

      </div>
    </section>
  );
}
