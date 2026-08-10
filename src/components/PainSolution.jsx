import { XCircle, CheckCircle2, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

const SECTION_BG = 'transparent';

export default function PainSolution() {
  const { openSchedule } = useSchedule();
  const { t } = useTranslation();

  const pains = t('pain_solution.pains', { returnObjects: true });
  const safePains = Array.isArray(pains) ? pains : [];

  const solutions = t('pain_solution.solutions', { returnObjects: true });
  const safeSolutions = Array.isArray(solutions) ? solutions : [];

  return (
    <section id="about" style={{ padding: 'clamp(5rem, 12vw, 9rem) 0' }}>
      <div className="section-wrap">

        {/* ── Header ── */}
        <div data-reveal style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1.75rem', display: 'inline-flex' }}>{t('pain_solution.badge')}</span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#ffffff',
            maxWidth: 620,
            margin: '0 auto',
          }}>
            {t('pain_solution.title_p1')}{' '}
            <span className="text-gold">{t('pain_solution.title_highlight')}</span>{' '}
            {t('pain_solution.title_p2')}
          </h2>
        </div>

        {/* ── Pain Grid ── */}
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
                padding: '2.5rem',
                transitionDelay: `${i * 100}ms`,
                borderTop: '1px solid rgba(220,60,60,0.12)',
              }}
            >
              <div style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                color: 'rgba(220,80,80,0.55)', marginBottom: '1.5rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                textTransform: 'uppercase',
                fontFamily: "'Noto Kufi Arabic', sans-serif",
              }}>
                <XCircle size={12} style={{ color: 'rgba(220,80,80,0.6)', flexShrink: 0 }} />
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
                fontSize: '0.95rem', color: 'rgba(203,213,225,0.65)',
                lineHeight: 2, fontWeight: 300, letterSpacing: '0.02em',
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Shift Banner ── */}
        <div data-reveal style={{
          padding: '3rem 2.5rem',
          marginBottom: 'clamp(3rem, 8vw, 5rem)',
          textAlign: 'center',
          background: 'rgba(197,164,89,0.04)',
          border: '1px solid rgba(197,164,89,0.12)',
          borderRadius: '1rem',
          backdropFilter: 'blur(12px)',
        }}>
          <p style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.4rem, 3vw, 2.25rem)',
            fontWeight: 700, lineHeight: 1.35,
            color: '#ffffff', letterSpacing: '0.01em',
          }}>
            {t('pain_solution.shift_p1')}{' '}
            <span className="text-gold">{t('pain_solution.shift_highlight')}</span>
            {' '}{t('pain_solution.shift_p2')}
          </p>
        </div>

        {/* ── Solutions Grid ── */}
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
              className="glass-card"
              style={{
                padding: '2.5rem',
                transitionDelay: `${i * 100}ms`,
                borderTop: '1px solid rgba(197,164,89,0.15)',
              }}
            >
              <div style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                color: 'rgba(197,164,89,0.55)', marginBottom: '1.5rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                textTransform: 'uppercase',
                fontFamily: "'Noto Kufi Arabic', sans-serif",
              }}>
                <CheckCircle2 size={12} style={{ color: 'rgba(197,164,89,0.6)', flexShrink: 0 }} />
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
                fontSize: '0.95rem', color: 'rgba(203,213,225,0.65)',
                lineHeight: 2, fontWeight: 300, letterSpacing: '0.02em',
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div data-reveal style={{ textAlign: 'center' }}>
          <button onClick={openSchedule} className="btn-primary" style={{ fontSize: '0.95rem', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}>
            <WhatsAppIcon size={18} />
            {t('pain_solution.cta_btn')}
          </button>
          <p style={{
            marginTop: '1.25rem',
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.8rem', color: 'rgba(203,213,225,0.4)',
            letterSpacing: '0.06em',
          }}>
            {t('pain_solution.cta_desc')}
          </p>
        </div>

      </div>
    </section>
  );
}
