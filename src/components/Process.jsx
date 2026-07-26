import { Phone, BarChart2, Eye, Smile } from 'lucide-react';

const steps = [
  {
    num: '١',
    icon: <Phone size={16} />,
    title: 'دیاریکردنی کێشەکان',
    duration: '١٥–٢٠ خولەک',
    desc: 'سەرەتا پەیوەندییەکی ١٥ بۆ ٢٠ خولەکت لەگەڵدا دەکەین تا تێبگەین لە ئامانجەکەت و ستایلەکەت.',
  },
  {
    num: '٢',
    icon: <BarChart2 size={16} />,
    title: 'پلان و ستراتیجی',
    duration: '٥–٧ ڕۆژ',
    desc: 'لە ماوەی ٥ بۆ ٧ ڕۆژ پلان و ستراتیجییەکەت بۆ ڕێکدەخرێت تا لەگەڵ ئامانجەکەت یەک بگرێتەوە.',
  },
  {
    num: '٣',
    icon: <Eye size={16} />,
    title: 'پاڵدانەوە و تەماشاکردن',
    duration: 'جێبەجێکردن',
    desc: 'پۆستەکانت بەپێی خشتەی دیاریکراو بۆ دروستدەکرێت، ئەوەی لەسەر تۆیە تەنها پەسەندکردنە.',
  },
  {
    num: '٤',
    icon: <Smile size={16} />,
    title: 'دڵخۆشی و گەشەکردن',
    duration: 'دوای چەند مانگێک',
    desc: 'دوای چەند مانگێک دڵخۆشدەبیت بە بینینی ئەنجامەکانت و ناساندنی زیاتری کارەکەت.',
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: 'clamp(4rem, 10vw, 9rem) 0' }}>
      <div className="section-wrap">

        {/* Header */}
        <div data-reveal style={{ maxWidth: 560, marginBottom: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>پرۆسەکەمان</span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            fontWeight: 700, lineHeight: 1.25, color: '#ffffff',
            marginBottom: '1rem', marginTop: '0.75rem',
          }}>
            پرۆسەی کارکردنمان:{' '}
            <span className="text-gold">چۆن چۆنییە؟</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
            color: 'rgba(203,213,225,0.6)', lineHeight: 2,
            fontWeight: 300, letterSpacing: '0.03em',
          }}>
            سیستەمێکی کارکردنی بێ ئەرک. تۆ کاتت نییە، بۆیەیە ئێمە هەموو شتێکمان ئاسان کردووە.
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
