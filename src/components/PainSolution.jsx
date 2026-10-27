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
        background: 'radial-gradient(circle, rgba(3, 20, 43, 0.02) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(3, 20, 43, 0.02) 0%, transparent 70%)',
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
            color: '#0A0A0C', maxWidth: 620, margin: '0 auto',
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
                border: '1px solid rgba(0, 0, 0, 0.07)',
                animationDelay: `${i * 1.5}s`,
              }}
            >
              {/* Icon badge */}
              <div style={{
                width: 40, height: 40, borderRadius: '0.75rem',
                background: 'rgba(3, 20, 43, 0.04)',
                border: '1px solid rgba(3, 20, 43, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', flexShrink: 0,
                backdropFilter: 'blur(8px)',
              }}>
                <XCircle size={16} style={{ color: '#03142B' }} />
              </div>

              <div style={{
                fontSize: '0.65rem', fontWeight: 700,
                color: '#64748B', marginBottom: '0.75rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                textTransform: 'uppercase', fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: '1rem', fontWeight: 700,
                color: '#0A0A0C', marginBottom: '1rem', lineHeight: 1.5,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: '0.9rem', color: '#52525B',
                lineHeight: 2, fontWeight: 400,
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
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '1.75rem',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Banner shine line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent 10%, rgba(0, 0, 0, 0.05) 35%, rgba(3, 20, 43, 0.15) 50%, rgba(0, 0, 0, 0.05) 65%, transparent 90%)',
          }} />
          <p style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.4rem, 3vw, 2.25rem)',
            fontWeight: 700, lineHeight: 1.35,
            color: '#0A0A0C', position: 'relative', zIndex: 1,
          }}>
            {t('pain_solution.shift_p1')}{' '}
            <span className="text-gold">{t('pain_solution.shift_highlight')}</span>
            {' '}{t('pain_solution.shift_p2')}
          </p>
        </div>

        {/* Section 3: Our System Header */}
        <div data-reveal style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            {t('pain_solution.system_badge')}
          </span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)',
            fontWeight: 700, lineHeight: 1.25,
            color: '#0A0A0C', maxWidth: 620, margin: '0 auto',
          }}>
            {t('pain_solution.system_title_p1')}{' '}
            <span className="text-gold">{t('pain_solution.system_title_highlight')}</span>
          </h2>
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
              className="glass-card-blue"
              style={{
                padding: '2.25rem',
                transitionDelay: `${i * 80}ms`,
                border: '1px solid rgba(0, 0, 0, 0.07)',
              }}
            >
              {/* Icon badge */}
              <div style={{
                width: 40, height: 40, borderRadius: '0.75rem',
                background: 'rgba(3, 20, 43, 0.04)',
                border: '1px solid rgba(3, 20, 43, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', flexShrink: 0,
                backdropFilter: 'blur(8px)',
              }}>
                <CheckCircle2 size={16} style={{ color: '#0B3275' }} />
              </div>

              <div style={{
                fontSize: '0.65rem', fontWeight: 700,
                color: '#03142B', marginBottom: '0.75rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                textTransform: 'uppercase', fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: '1rem', fontWeight: 700,
                color: '#0A0A0C', marginBottom: '1rem', lineHeight: 1.5,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: '0.9rem', color: '#52525B',
                lineHeight: 2, fontWeight: 400,
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
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: '0.8rem', color: '#64748B',
          }}>
            {t('pain_solution.cta_desc')}
          </p>
        </div>

      </div>
    </section>
  );
}
