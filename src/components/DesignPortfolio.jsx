import { useState, useEffect } from 'react';
import { Paperclip, ShoppingBag, ArrowRight, Sparkles, X, Maximize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { designs } from '../data/portfolioData';
import { useSchedule } from '../ScheduleContext';

// Overlapping fan cards at the bottom of the orange banner (Screenshot 2)
const FAN_CARDS = [
  { src: designs[4] || designs[0],  rot: -8, offset: 12 },
  { src: designs[6] || designs[1],  rot: -5, offset: 6 },
  { src: designs[8] || designs[2],  rot: -2, offset: 0 },
  { src: designs[10] || designs[3], rot: 1,  offset: -4 },
  { src: designs[12] || designs[4], rot: 4,  offset: 0 },
  { src: designs[14] || designs[5], rot: 7,  offset: 6 },
  { src: designs[16] || designs[6], rot: 10, offset: 12 },
];

// The 4 collage cards for "Get ads your team wouldn't think of" (Screenshot 5)
const COLLAGE_CARDS = [
  {
    src: designs[3] || designs[0],
    style: { top: '0%', left: '2%', transform: 'rotate(-4deg)', zIndex: 1 },
  },
  {
    src: designs[5] || designs[1],
    style: { top: '6%', right: '2%', transform: 'rotate(3deg)', zIndex: 2 },
  },
  {
    src: designs[7] || designs[2],
    style: { bottom: '2%', left: '6%', transform: 'rotate(-2deg)', zIndex: 3 },
  },
  {
    src: designs[9] || designs[3],
    style: { bottom: '0%', right: '4%', transform: 'rotate(4deg)', zIndex: 4 },
  },
];

export default function DesignPortfolio() {
  const { openSchedule } = useSchedule();
  const [selectedImg, setSelectedImg] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  // Handle ESC key for modal
  useEffect(() => {
    if (!selectedImg) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg]);

  return (
    <section
      id="designs"
      className="statiq-dark-stage"
      style={{
        padding: '0 0 clamp(4rem, 8vw, 7.5rem)',
        background: '#080C15',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* ═════════════════════════════════════════════════════════════
            PART 1: THE VIBRANT RED-ORANGE GROWTH BANNER (Screenshot 2)
            ═════════════════════════════════════════════════════════════ */}
        <div data-reveal className="statiq-orange-banner" dir={isRTL ? 'rtl' : 'ltr'}>
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 5 }}>
            {/* Badges row: [Design Partner] + [eCom] */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              {/* Design partner badge with paperclip */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(10px)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                }}
              >
                <Paperclip size={13} style={{ transform: 'rotate(-45deg)' }} />
                {t('design_portfolio.banner_badge', 'Design Partner')}
              </span>

              {/* eCom badge */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '100px',
                  background: '#FEE75C',
                  color: '#0A0A0C',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  boxShadow: '0 4px 14px rgba(254, 231, 92, 0.35)',
                }}
              >
                <ShoppingBag size={13} />
                {t('design_portfolio.banner_title_ecom', 'eCom')}
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                fontSize: 'clamp(1.85rem, 4.4vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.16,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              {t('design_portfolio.banner_title_p1', 'Performance Design for')}{' '}
              <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)', textUnderlineOffset: '6px' }}>
                {t('design_portfolio.banner_title_ecom', 'eCom')}
              </span>{' '}
              {t('design_portfolio.banner_title_p2', 'Brands & Agencies')}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: 1.8,
                maxWidth: 640,
                margin: '1.25rem auto 2rem',
                fontWeight: 400,
              }}
            >
              {t(
                'design_portfolio.banner_subtitle',
                'Unlock limitless creative potential for your ads, emails, and landing pages — producing high-impact content faster and more cost-effectively than ever before.'
              )}
            </p>

            {/* Solid White Pill Button: Book a call */}
            <div>
              <button
                onClick={openSchedule}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.9rem 2.2rem',
                  background: '#FFFFFF',
                  color: '#0A0A0C',
                  fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.22), 0 2px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.22), 0 2px 6px rgba(0,0,0,0.1)';
                }}
              >
                <span>{t('design_portfolio.banner_btn', 'Book a call')}</span>
                <ArrowRight size={16} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
              </button>
            </div>
          </div>

          {/* Overlapping Fan of Ad Cards at the bottom (Screenshot 2) */}
          <div className="statiq-fan-container">
            {FAN_CARDS.map((item, idx) => (
              <div
                key={idx}
                className="statiq-fan-card"
                onClick={() => setSelectedImg(item.src)}
                style={{
                  transform: `rotate(${item.rot}deg) translateY(${item.offset}px)`,
                  marginLeft: idx === 0 ? 0 : 'clamp(-28px, -4vw, -45px)',
                  zIndex: idx + 1,
                }}
              >
                <img
                  src={item.src}
                  alt="Fan Creative"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            PART 2: "GET ADS YOUR TEAM WOULDN'T THINK OF" (Screenshot 5)
            ═════════════════════════════════════════════════════════════ */}
        <div data-reveal className="statiq-team-grid" dir={isRTL ? 'rtl' : 'ltr'}>
          {/* Column 1: Copy with Scattered Tilted Stickers */}
          <div style={{ position: 'relative' }}>
            {/* Top-left Blue Sticker: Landing Pages */}
            <div style={{ marginBottom: '1rem', display: 'flex' }}>
              <span
                className="statiq-sticker statiq-sticker-blue"
                style={{
                  transform: isRTL ? 'rotate(8deg)' : 'rotate(-10deg)',
                  fontSize: '0.8rem',
                  padding: '0.35rem 0.9rem',
                }}
              >
                {t('design_portfolio.sticker_landing', 'Landing Pages')}
              </span>
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              {t('design_portfolio.showcase_title_p1', 'Get ads your team')}{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ color: '#FFE043', textShadow: '0 0 35px rgba(255, 224, 67, 0.35)' }}>
                  {t('design_portfolio.showcase_title_p2', "wouldn't think of")}
                </span>
                {/* Yellow Sticker next to title: Ad Creatives */}
                <span
                  className="statiq-sticker statiq-sticker-yellow"
                  style={{
                    position: 'absolute',
                    top: '-0.6rem',
                    right: isRTL ? 'auto' : '-4.5rem',
                    left: isRTL ? '-4.5rem' : 'auto',
                    transform: isRTL ? 'rotate(-8deg)' : 'rotate(8deg)',
                    fontSize: '0.74rem',
                    padding: '0.28rem 0.75rem',
                  }}
                >
                  {t('design_portfolio.sticker_ads', 'Ad Creatives')}
                </span>
              </span>
            </h2>

            {/* Bottom Purple Sticker: Emails & More! */}
            <div style={{ marginBottom: '1.5rem', display: 'flex' }}>
              <span
                className="statiq-sticker statiq-sticker-purple"
                style={{
                  transform: isRTL ? 'rotate(-6deg)' : 'rotate(6deg)',
                  fontSize: '0.8rem',
                  padding: '0.35rem 0.9rem',
                }}
              >
                {t('design_portfolio.sticker_emails', 'Emails & More!')}
              </span>
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: 'clamp(0.92rem, 1.6vw, 1.1rem)',
                color: '#94A3B8',
                lineHeight: 1.8,
                maxWidth: 480,
                marginBottom: '2.5rem',
              }}
            >
              {t(
                'design_portfolio.showcase_subtitle',
                'For brands spending $100K+/month on Meta whose winners are starting to fatigue.'
              )}
            </p>

            {/* Orange CTA Button: Book a call */}
            <div>
              <button
                onClick={openSchedule}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.95rem 2.4rem',
                  background: 'linear-gradient(135deg, #FF4D2D 0%, #FF3815 100%)',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 12px 36px rgba(255, 77, 45, 0.45)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 16px 45px rgba(255, 77, 45, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(255, 77, 45, 0.45)';
                }}
              >
                <span>{t('design_portfolio.showcase_btn', 'Book a call')}</span>
                <ArrowRight size={16} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
              </button>
            </div>
          </div>

          {/* Column 2: 2x2 Collage of Floating Overlapping Ad Creatives (Screenshot 5) */}
          <div className="statiq-collage-container">
            {COLLAGE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="statiq-collage-card"
                onClick={() => setSelectedImg(card.src)}
                style={card.style}
              >
                <img
                  src={card.src}
                  alt="Creative Ad"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── High-Res Lightbox Modal ── */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(3, 8, 20, 0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 4vw, 2.5rem)',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'absolute',
              top: 'clamp(1rem, 3vw, 2rem)',
              right: 'clamp(1rem, 3vw, 2rem)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={selectedImg}
            alt="Fullscreen Ad Preview"
            style={{
              maxWidth: '92vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '16px',
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.8)',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
