import { useTranslation } from 'react-i18next';
import { Check, Sparkles, ShieldCheck, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';
import { designs } from '../data/portfolioData';

// All features combined across all 3 packages (deduplicated)
const ALL_FEATURES_EN = [
  'Full audit of your business, products & advertising data',
  'Crafting high-converting commercial sales offers',
  'Ad creative production: Video Reels + Conversion Designs',
  'Campaign setup & active Meta Ads management',
  'WhatsApp conversion scripts to turn leads into sales',
  'Weekly optimization & Meta budget management',
  'Monthly offer iteration & refinement',
  'Transparent monthly performance reports with verified data',
  'Automated lead filtration & buyer qualification (up to 300/mo)',
  'Retargeting & follow-up systems to recover lost prospects',
  'Monthly executive strategy sessions to scale revenue',
  'Staff sales training & messaging scripts for maximum close rate',
];

const ALL_FEATURES_KU = [
  'توێژینەوەی تەواوی کارەکەت، بەرهەمەکانت و داتای ڕیکلامەکانت',
  'دامەزراندنی پێشکەشکردنی بازرگانی بەرز کە فرۆش درووست دەکات',
  'بەرهەمهێنانی کریتیڤ: ڤیدیۆی ریلز + دیزاینی فرۆش',
  'دامەزراندن و بەرێوەبردنی چالاکانەی کامپەینی مەتا ئادز',
  'سکریپتی گفتوگۆ بۆ وهاتساپ بۆ گوردانەوەی لیدەکان بۆ فرۆش',
  'باشترکردنی هەفتانەی کامپەین و بەرێوەبردنی بودجەی ئادز',
  'نوێکردنەوەی مانگانەی پێشکەشکردنەکان',
  'ڕاپۆرتی کارلێکی مانگانەی ڕوون و داتا-بنچینەیی',
  'فلترکردنی ئۆتۆماتیکی لیدەکان و پێناسەکردنی کڕیارانی ڕاستەقینە',
  'سیستەمی ریتارگێتینگ بۆ گەڕاندنەوەی ئەوانەی نەیکڕیون',
  'دانیشتنی ئیستراتیژی مانگانە بۆ زیادکردنی فرۆش',
  'پەروەردەکردنی ستافت و سکریپتی پەیامدان بۆ زیادکردنی نرخی داخستن',
];

// Pick 2 showcase designs
const SHOWCASE = [designs[5], designs[18], designs[33]];

export default function Packages() {
  const { openSchedule } = useSchedule();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  const features = isRTL ? ALL_FEATURES_KU : ALL_FEATURES_EN;

  const heading = isRTL
    ? 'ئەمەش کە لەگەڵ هەموو پلانێکدا دێت'
    : 'Everything Included in Every Plan';

  const subheading = isRTL
    ? 'کۆنتراکتی تایبەت بەپێی پێداویستی کارەکەت. نرخ لە دانیشتنی خۆرایی دەمێنینەوە.'
    : 'Custom contracts built for your business. Pricing discussed on your free audit call.';

  const callLabel = isRTL ? 'پەیوەندیمان پێوە بکە بۆ خۆرایی' : 'Book Your Free Strategy Call';
  const callSub = isRTL ? 'بێ پابەندی — دانیشتنی ڕاوێژکاری خۆرایی ١٥ خولەک' : 'No commitment — 15-min free consultation';

  const guaranteeTitle = isRTL
    ? 'گەرەنتی ١٤ ڕۆژ — ئەگەر ئەنجام نەبینیت، بێ بەها کاردەکەین'
    : '14-Day Performance Guarantee — Results or we work free';

  const guaranteeDesc = isRTL
    ? 'ئەگەر لە ١٤ ڕۆژی یەکەمدا نەگەینە ئامانجی پێش تای کراوی لیدی کڕیاری پێوانەپێکراو، بەردەوام دەکەین بێ هیچ کرێیەکی زیادە تا بگەینە ئامانجەکە.'
    : 'If we don\'t hit the pre-agreed volume of qualified leads in the first 14 days, we continue at zero charge until the goal is achieved.';

  return (
    <section
      id="packages"
      style={{ padding: 'clamp(5rem, 12vw, 9rem) 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 'min(1000px, 95%)', height: 500,
        background: 'radial-gradient(ellipse, rgba(3,20,43,0.025) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="section-wrap">

        {/* ── Section Header ── */}
        <div data-reveal style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto clamp(3rem, 7vw, 5rem)' }}>
          <span className="font-script-accent">
            {isRTL ? 'پلانی گەشە و فرۆش' : 'Growth & Revenue Plans'}
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="badge">
              <Sparkles size={12} />
              {t('packages.badge')}
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', 'Outfit', serif",
            fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
            fontWeight: 700, lineHeight: 1.25,
            color: '#0A0A0C', marginBottom: '1rem',
          }}>
            {heading}
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', 'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            color: '#52525B', lineHeight: 1.9, maxWidth: 560, margin: '0 auto',
          }}>
            {subheading}
          </p>
        </div>

        {/* ── Main Split Layout (Statiq-style) ── */}
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 7vw, 5rem)',
          }}
        >
          {/* ── Left: Feature List ── */}
          <div>
            <p style={{
              fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'rgba(3,20,43,0.45)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              {isRTL ? '— داگیرکراوەی هەموو پلانەکان' : '— What every plan includes'}
            </p>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {features.map((feat, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: '#334155',
                    lineHeight: 1.65,
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                  }}
                >
                  <span style={{
                    width: 20, height: 20,
                    borderRadius: '50%',
                    background: 'rgba(3,20,43,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '0.1rem',
                  }}>
                    <Check size={11} style={{ color: '#03142B', strokeWidth: 3 }} />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA block */}
            <div style={{ marginTop: 'clamp(2rem, 5vw, 3rem)' }}>
              <button
                onClick={openSchedule}
                className="btn-primary"
                style={{
                  gap: '0.65rem',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  boxShadow: '0 6px 28px -4px rgba(3,20,43,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'center',
                  maxWidth: 420,
                }}
              >
                <WhatsAppIcon size={18} />
                {callLabel}
                {isRTL ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
              </button>
              <p style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: '0.8rem',
                color: 'rgba(3,20,43,0.45)',
                marginTop: '0.7rem',
                textAlign: 'center',
                maxWidth: 420,
              }}>
                {callSub}
              </p>
            </div>
          </div>

          {/* ── Right: Stacked showcase images ── */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Decorative grid background */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(3,20,43,0.07) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              borderRadius: '1.5rem',
              opacity: 0.5,
              pointerEvents: 'none',
            }} />

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.75rem, 2vw, 1.25rem)',
              position: 'relative',
              zIndex: 2,
              maxWidth: 320,
              width: '100%',
            }}>
              {SHOWCASE.map((src, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px -10px rgba(3,20,43,0.15)',
                    border: '1px solid rgba(0,0,0,0.07)',
                    aspectRatio: i === 1 ? '16/7' : '16/9',
                    transform: i === 0 ? 'rotate(-1.5deg)' : i === 2 ? 'rotate(1.2deg)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <img
                    src={src}
                    alt="HBgrow ad creative"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}

              {/* Floating price tag */}
              <div style={{
                position: 'absolute',
                bottom: '-1rem',
                right: isRTL ? 'auto' : '-1.5rem',
                left: isRTL ? '-1.5rem' : 'auto',
                background: 'linear-gradient(135deg, #020C1B 0%, #041E42 50%, #0A2E66 100%)',
                color: '#FFFFFF',
                padding: '0.75rem 1.25rem',
                borderRadius: '1rem',
                boxShadow: '0 8px 30px rgba(3,20,43,0.3)',
                fontFamily: "'Outfit', 'Inter', sans-serif",
                zIndex: 10,
              }}>
                <div style={{ fontSize: '0.7rem', opacity: 0.7, marginBottom: '0.2rem', fontWeight: 500 }}>
                  {isRTL ? 'دەستپێکردن لە' : 'Starting from'}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1 }}>$150</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 14-Day Guarantee Card ── */}
        <div
          data-reveal
          style={{
            padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3rem)',
            borderRadius: '1.5rem',
            background: 'linear-gradient(135deg, #020C1B 0%, #041E42 50%, #0A2E66 100%)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: 960,
            margin: '0 auto',
          }}
        >
          {/* Subtle dot grid on dark bg */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
          }} />
          {/* Top shine */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.2) 50%, transparent 90%)',
          }} />

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '0.85rem',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <ShieldCheck size={22} style={{ color: '#FFFFFF' }} />
              </div>
              <span style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.3rem 0.9rem',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {t('packages.guarantee_badge')}
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Sarchia Bokan', 'Outfit', serif",
              fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
              fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3,
            }}>
              {guaranteeTitle}
            </h3>

            <p style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', 'Inter', sans-serif",
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.85, maxWidth: 700,
            }}>
              {guaranteeDesc}
            </p>

            <button
              onClick={openSchedule}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#FFFFFF',
                padding: '0.8rem 1.5rem',
                borderRadius: '100px',
                fontSize: '0.9rem', fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                alignSelf: 'flex-start',
                transition: 'background 0.25s ease, border-color 0.25s ease',
                flexDirection: isRTL ? 'row-reverse' : 'row',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
            >
              <Phone size={16} />
              {isRTL ? 'داوای دانیشتنی خۆرایی بکە' : 'Claim My Free Audit Call'}
              {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
