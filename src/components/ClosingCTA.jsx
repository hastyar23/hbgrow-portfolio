import { Calendar, ArrowLeft } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function ClosingCTA() {
  const { openSchedule } = useSchedule();

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
          کاتی بڕیاردانە
        </span>

        <h2 style={{
          fontFamily: "'Sarchia Bokan', serif",
          fontSize: 'clamp(1.75rem, 5.5vw, 4rem)',
          fontWeight: 700, lineHeight: 1.2,
          letterSpacing: '0.01em', color: '#ffffff',
          marginBottom: '1.5rem',
        }}>
          کاتی خۆت بۆ<br />
          <span className="text-gold">بزنسەکەت بگەڕێنەوە.</span>
        </h2>

        <p style={{
          fontFamily: "'Noto Kufi Arabic', sans-serif",
          maxWidth: 500, margin: '0 auto clamp(2.5rem, 6vw, 4rem)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          fontWeight: 300,
          color: 'rgba(203,213,225,0.65)', lineHeight: 2,
          letterSpacing: '0.03em',
        }}>
          ڕکابەرەکانت چاوەڕێ ناکەن. با ئەمڕۆ ستراتیژییەکەی تۆ دابنێین.{' '}
          <span style={{ color: 'rgba(203,213,225,0.85)' }}>
            پەیوەندییەکی ١٥ خولەکی دەتوانێت ئاراستەی بزنسەکەت بگۆڕێت.
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
            کاتێک دیاریبکە بۆ گفتوگۆکردن
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
          پەیوەندییەکە بێ بەرامبەرە و هیچ پابەندبوونێکی تێدا نییە.
        </p>

        {/* Social proof */}
        <div style={{ marginTop: 'clamp(3rem, 7vw, 6rem)', paddingTop: 'clamp(2rem, 5vw, 3.5rem)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.58rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(203,213,225,0.3)',
            marginBottom: '1.25rem', fontWeight: 700,
          }}>
            متمانەپێکراو لە
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 3.5rem)', flexWrap: 'wrap' }}>
            {['١٠٠+ براند', '$٢٠K+ ڕیکلام', '١٠٠٠+ بەرهەم'].map(item => (
              <span key={item} style={{
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
