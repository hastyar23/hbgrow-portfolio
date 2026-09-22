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

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          <span className="badge" style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(197, 164, 89, 0.08) 100%)',
            border: '1px solid rgba(197, 164, 89, 0.35)',
            boxShadow: '0 0 25px rgba(197, 164, 89, 0.15)',
            padding: '0.45rem 1.25rem',
          }}>
            <span className="radar-emerald" />
            <span style={{ color: '#F2E5BC', fontWeight: 700, letterSpacing: '0.04em' }}>{t('closing_cta.badge')}</span>
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Outfit', 'Sarchia Bokan', serif",
          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          fontWeight: 800, lineHeight: 1.15, color: '#ffffff',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          {t('closing_cta.title_p1')}<br />
          <span className="text-gold" style={{ textShadow: '0 0 35px rgba(197,164,89,0.4)' }}>
            {t('closing_cta.title_highlight')}
          </span>
        </h2>

        <p style={{
          fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
          maxWidth: 540, margin: '0 auto clamp(2.5rem, 6vw, 4rem)',
          fontSize: 'clamp(0.92rem, 2vw, 1.08rem)',
          fontWeight: 300,
          color: 'rgba(203,213,225,0.7)', lineHeight: 2.1,
        }}>
          {t('closing_cta.subtitle_p1')}{' '}
          <span style={{ color: '#F2E5BC', fontWeight: 600 }}>
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
              boxShadow: '0 0 50px -6px rgba(197,164,89,0.55), inset 0 1px 0 rgba(255,255,255,0.6)',
              fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
              padding: 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 5vw, 3.5rem)',
              maxWidth: 440, width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer',
              borderRadius: '100px',
            }}
          >
            <WhatsAppIcon size={20} style={{ flexShrink: 0 }} />
            {t('closing_cta.btn_schedule')}
            <ArrowLeft size={16} style={{ flexShrink: 0 }} />
          </button>
        </div>

        <p style={{
          marginTop: '1.25rem',
          fontFamily: "'Noto Kufi Arabic', sans-serif",
          fontSize: '0.78rem',
          color: 'rgba(203,213,225,0.4)',
        }}>
          {t('closing_cta.disclaimer')}
        </p>

        {/* Social proof */}
        <div style={{ marginTop: 'clamp(3rem, 7vw, 6rem)', paddingTop: 'clamp(2rem, 5vw, 3.5rem)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.62rem',
            textTransform: 'uppercase', color: 'rgba(203,213,225,0.4)',
            marginBottom: '1.25rem', fontWeight: 700, letterSpacing: '0.06em',
          }}>
            {t('closing_cta.trusted_by')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 3.5rem)', flexWrap: 'wrap' }}>
            {stats.map((item, idx) => (
              <span key={idx} style={{
                fontFamily: "'Outfit', 'Sarchia Bokan', serif",
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 700,
                color: '#F2E5BC',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '0.35rem 1rem',
                borderRadius: '100px',
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
