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

        {/* 2026 Bento Comparison Architecture */}
        
        {/* Row 1: The Broken Agency Model (Pains) */}
        <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <span style={{
              fontSize: '0.72rem', fontWeight: 700,
              textTransform: 'uppercase', color: '#F87171',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              padding: '0.3rem 0.85rem', borderRadius: '100px',
              letterSpacing: '0.04em', fontFamily: "'Noto Kufi Arabic', sans-serif"
            }}>
              ✕ The Traditional Agency Pitfalls
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.25rem',
          }}>
            {safePains.map(({ title, desc }, i) => (
              <div
                key={i}
                data-reveal
                className="bento-crimson-card"
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.25rem)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Red ambient glow per card */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '60%',
                  background: 'radial-gradient(ellipse 90% 60% at 50% -15%, rgba(239,68,68,0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Top row with icon and index */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '0.875rem',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(239, 68, 68, 0.15)',
                  }}>
                    <XCircle size={18} style={{ color: '#F87171' }} />
                  </div>

                  <span style={{
                    fontFamily: "'Outfit', 'Sarchia Bokan', serif",
                    fontSize: '1.1rem', fontWeight: 800,
                    color: 'rgba(239, 68, 68, 0.45)',
                  }}>
                    0{i + 1}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '1.05rem', fontWeight: 700,
                  color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.4,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.88rem', color: 'rgba(203,213,225,0.65)',
                  lineHeight: 1.9, fontWeight: 300,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 2026 Shift Banner */}
        <div data-reveal style={{
          padding: 'clamp(2rem, 5vw, 3.5rem) 2rem',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(197,164,89,0.12) 0%, rgba(13,26,51,0.4) 50%, rgba(2,4,8,0.9) 100%)',
          border: '1px solid rgba(197,164,89,0.35)',
          borderRadius: '2rem',
          backdropFilter: 'blur(36px)',
          WebkitBackdropFilter: 'blur(36px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.25), 0 0 45px rgba(197,164,89,0.12)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Top shine line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent 5%, rgba(242,229,188,0.8) 50%, transparent 95%)',
          }} />
          
          <p style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.4rem, 3.2vw, 2.35rem)',
            fontWeight: 700, lineHeight: 1.35,
            color: '#ffffff', position: 'relative', zIndex: 1,
          }}>
            {t('pain_solution.shift_p1')}{' '}
            <span className="text-gold" style={{ textShadow: '0 0 28px rgba(197,164,89,0.4)' }}>
              {t('pain_solution.shift_highlight')}
            </span>
            {' '}{t('pain_solution.shift_p2')}
          </p>
        </div>

        {/* Row 2: The HBgrow Exponential Engine (Solutions) */}
        <div style={{ marginBottom: 'clamp(3rem, 8vw, 5rem)' }}>
          <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <span style={{
              fontSize: '0.72rem', fontWeight: 700,
              textTransform: 'uppercase', color: '#F2E5BC',
              background: 'rgba(197, 164, 89, 0.14)',
              border: '1px solid rgba(197, 164, 89, 0.35)',
              padding: '0.3rem 0.85rem', borderRadius: '100px',
              letterSpacing: '0.04em', fontFamily: "'Noto Kufi Arabic', sans-serif"
            }}>
              ✓ The HBgrow Exponential Engine
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.25rem',
          }}>
            {safeSolutions.map(({ title, desc }, i) => (
              <div
                key={i}
                data-reveal
                className="bento-gold-card"
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.25rem)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Top row with icon and index */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '0.875rem',
                    background: 'linear-gradient(135deg, rgba(197,164,89,0.25) 0%, rgba(197,164,89,0.1) 100%)',
                    border: '1px solid rgba(197,164,89,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(197,164,89,0.2)',
                  }}>
                    <CheckCircle2 size={18} style={{ color: '#F2E5BC' }} />
                  </div>

                  <span style={{
                    fontFamily: "'Outfit', 'Sarchia Bokan', serif",
                    fontSize: '1.1rem', fontWeight: 800,
                    color: 'rgba(197, 164, 89, 0.45)',
                  }}>
                    0{i + 1}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '1.05rem', fontWeight: 700,
                  color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.4,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.88rem', color: 'rgba(203,213,225,0.7)',
                  lineHeight: 1.9, fontWeight: 300,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
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
            fontSize: '0.8rem', color: 'rgba(203,213,225,0.45)',
          }}>
            {t('pain_solution.cta_desc')}
          </p>
        </div>

      </div>
    </section>
  );
}
