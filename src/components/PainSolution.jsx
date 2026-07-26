import { XCircle, CheckCircle2, Calendar } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

const SECTION_BG = 'transparent';

const pains = [
  {
    title: 'کڕیاری ڕاستەقینەت نییە؟',
    desc: 'نازانیت چۆن لە سۆشیاڵ میدیا کڕیاری ڕاستەقینە بدۆزیتەوە و بیانکەیتە کڕیاری هەمیشەیی.',
  },
  {
    title: 'کاتت نییە بۆ بەڕێوەبردن؟',
    desc: 'وەک خاوەن کارێک کاتت نییە بۆ بەڕێوەبردنی پەیج و ڕیکلامەکانت بە شێوەیەکی پیشەگەرانە.',
  },
  {
    title: 'پارە لە ڕیکلامدا دەسوتێنیت؟',
    desc: 'ڕیکلامەکانت پارەیەکی زۆر دەسوتێنن بە بێ ئەوەی فرۆشتنێکی ئەوتۆ بهێنن. هەست دەکەیت ڕکابەرەکانت لە پێشترن.',
  },
];

const solutions = [
  {
    title: 'کاتێکی زۆرت بۆ دەگەڕێتەوە',
    desc: 'ئێمە هەموو کارەکان دەکەین. کاری تۆ تەنها پەسەندکردنی کارەکان و پێشوازیکردنە لە کڕیارەکانت.',
  },
  {
    title: 'خەرجییەکی زۆرت بۆ دەگەڕێتەوە',
    desc: 'چیتر پارە لە ڕیکلامی هەڕەمەکیدا بەفیڕۆ نادەیت. سپۆنسەرەکانت بە پلان و ستراتیژییەکی دروست بەڕێوەدەبرێن.',
  },
  {
    title: 'براندەکەت پڕۆفیشناڵ دەردەکەوێت',
    desc: 'تیمێکی تایبەت بە خۆت بۆ تەرخان دەکرێت بۆ ئەوەی براندەکەت وەک موگناتیس کڕیاری نوێ بۆ خۆی ڕابکێشێت.',
  },
];

export default function PainSolution() {
  const { openSchedule } = useSchedule();
  
  return (
    <section id="about" style={{ padding: 'clamp(5rem, 12vw, 9rem) 0' }}>
      <div className="section-wrap">

        {/* ── Header ── */}
        <div data-reveal style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1.75rem', display: 'inline-flex' }}>ئاڵنگارییەکان</span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#ffffff',
            maxWidth: 620,
            margin: '0 auto',
          }}>
            ئایا بزنسەکەت ڕووبەڕووی{' '}
            <span className="text-gold">ئەم ئاڵنگارییانە</span>{' '}
            بووەتەوە؟
          </h2>
        </div>

        {/* ── Pain Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(3rem, 8vw, 5rem)',
        }}>
          {pains.map(({ title, desc }, i) => (
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
            لەگەڵ{' '}
            <span className="text-gold">HBgrow</span>
            {' '}ئەم کێشانەت نامێنێت.
          </p>
        </div>

        {/* ── Solutions Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
        }}>
          {solutions.map(({ title, desc }, i) => (
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
            کاتێک دیاریبکە بۆ گفتوگۆکردن
          </button>
          <p style={{
            marginTop: '1.25rem',
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.8rem', color: 'rgba(203,213,225,0.4)',
            letterSpacing: '0.06em',
          }}>
            پەیوەندییەکە بێ بەرامبەرە و هیچ پابەندبوونێکی تێدا نییە.
          </p>
        </div>

      </div>
    </section>
  );
}
