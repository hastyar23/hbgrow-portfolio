import { Calendar, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function ClosingCTA() {
  const { openSchedule } = useSchedule();
  const { t } = useTranslation();
  const rawStats = t('closing_cta.stats', { returnObjects: true });
  const stats = Array.isArray(rawStats) ? rawStats : [];

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(5rem, 14vw, 12rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 'min(800px, 100vw)', height: 'min(800px, 100vw)',
        borderRadius: '50%', transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(197,164,89,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 'min(600px, 80vw)', height: 'min(600px, 80vw)',
        borderRadius: '50%', transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(13,35,66,0.55) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="hairline" style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: 0.5 }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        <span className="badge" style={{ marginBottom: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <span className="dot" />
          {t('closing_cta.badge')}
        </span>

        <h2 style={{
          fontFamily: "'Sarchia Bokan', serif",
          fontSize: 'clamp(1.75rem, 5.5vw, 4rem)',
          fontWeight: 700, lineHeight: 1.2,
          letterSpacing: '0.01em', color: '#ffffff',
          marginBottom: '1.5rem',
        }}>
          {t('closing_cta.title_p1')}<br />
          <span className="text-gold">{t('closing_cta.title_highlight')}</span>
        </h2>

        <p style={{
          fontFamily: "'Noto Kufi Arabic', sans-serif",
          maxWidth: 500, margin: '0 auto clamp(2.5rem, 6vw, 4rem)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          fontWeight: 300,
          color: 'rgba(203,213,225,0.65)', lineHeight: 2,
          letterSpacing: '0.03em',
        }}>
          {t('closing_cta.subtitle_p1')}{' '}
          <span style={{ color: 'rgba(203,213,225,0.85)' }}>
            {t('closing_cta.subtitle_highlight')}
          </span>
        </p>

        {/* CTA — stacks on mobile */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.75rem',
        }}>
          <button
            onClick={openSchedule}
            className="btn-primary"
            id="closing-cta"
            style={{
              boxShadow: '0 0 48px -8px rgba(197,164,89,0.4)',
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              padding: 'clamp(0.875rem, 2vw, 1.125rem) clamp(1.5rem, 4vw, 3rem)',
              maxWidth: 420, width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer'
            }}
          >
            <WhatsAppIcon size={18} style={{ flexShrink: 0 }} />
            {t('closing_cta.btn_schedule')}
            <ArrowLeft size={13} style={{ flexShrink: 0 }} />
          </button>
        </div>

        <p style={{
          marginTop: '1.25rem',
          fontFamily: "'Noto Kufi Arabic', sans-serif",
          fontSize: '0.75rem',
          color: 'rgba(203,213,225,0.3)',
          letterSpacing: '0.06em',
        }}>
          {t('closing_cta.disclaimer')}
        </p>

        {/* Social proof */}
        <div style={{ marginTop: 'clamp(3rem, 7vw, 6rem)', paddingTop: 'clamp(2rem, 5vw, 3.5rem)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.58rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(203,213,225,0.3)',
            marginBottom: '1.25rem', fontWeight: 700,
          }}>
            {t('closing_cta.trusted_by')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 3.5rem)', flexWrap: 'wrap' }}>
            {stats.map((item, idx) => (
              <span key={idx} style={{
                fontFamily: "'Sarchia Bokan', serif",
                fontSize: 'clamp(0.875rem, 2vw, 1rem)', fontWeight: 600,
                color: 'rgba(203,213,225,0.55)',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hairline" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.5 }} />
    </section>
  );
}
