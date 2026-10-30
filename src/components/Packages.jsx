import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Check, Sparkles, ShieldCheck, ArrowRight, ArrowLeft, ArrowUpRight, Phone, 
  Rocket, Users, BookOpen, ExternalLink, Video, Calendar
} from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';
import { designs } from '../data/portfolioData';

// Pick 3 showcase designs for DFY packages visual
const SHOWCASE = [designs[5], designs[18], designs[33]];

export default function Packages() {
  const { openSchedule } = useSchedule();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  // Active Model Tab: 'dfy' (Packages) | 'dwy' (Consulting) | 'diy' (Courses & Books)
  const [activeTab, setActiveTab] = useState('dfy');
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'diy') {
      window.open('https://hbgrow.mozan.store', '_blank', 'noopener,noreferrer');
    }
  };

  // 3 Model Cards configuration (Statiq Dark aesthetic)
  const models = [
    {
      id: 'dfy',
      title: t('packages.card1_title', 'پاکێج و ئۆفەر'),
      tagline: t('packages.card1_type', 'Done-For-You'),
      tag: t('packages.card1_tag', 'خۆمان دەیکەین'),
      subtitle: t('packages.card1_sub', 'خۆمان هەموو کارەکانت بۆ دەکەین'),
      icon: Rocket,
      accentColor: '#38BDF8',
      glowColor: 'rgba(56, 189, 248, 0.35)',
      activeBorder: '#0284C7',
      iconBg: 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(14, 165, 233, 0.12) 100%)',
      badgeBg: '#0284C7',
      isExternal: false,
    },
    {
      id: 'dwy',
      title: t('packages.card2_title', 'ڕاوێژکاری'),
      tagline: t('packages.card2_type', 'Done-With-You'),
      tag: t('packages.card2_tag', 'پێکەوە دەیکەین'),
      subtitle: t('packages.card2_sub', 'ڕاوێژکاریت پێدەدەین و لەگەڵت دەبین خۆت بیکەیت تا ئاستێکی باش'),
      icon: Users,
      accentColor: '#C084FC',
      glowColor: 'rgba(192, 132, 252, 0.35)',
      activeBorder: '#9333EA',
      iconBg: 'linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(168, 85, 247, 0.12) 100%)',
      badgeBg: '#9333EA',
      isExternal: false,
    },
    {
      id: 'diy',
      title: t('packages.card3_title', 'کۆرس و کتێب'),
      tagline: t('packages.card3_type', 'Do-It-Yourself ↗'),
      tag: t('packages.card3_tag', 'خۆت فێربە'),
      subtitle: t('packages.card3_sub', 'فێرکاری و کۆرسیت پێدەدەین تا خۆت لە سفرەوە بیانکەیت'),
      icon: BookOpen,
      accentColor: '#FCD34D',
      glowColor: 'rgba(252, 211, 77, 0.35)',
      activeBorder: '#D97706',
      iconBg: 'linear-gradient(135deg, rgba(217, 119, 6, 0.25) 0%, rgba(245, 158, 11, 0.12) 100%)',
      badgeBg: '#D97706',
      isExternal: true,
    },
  ];

  // Features list from translations
  const dfyFeatures = t('packages.dfy_features', { returnObjects: true });
  const safeDfyFeatures = Array.isArray(dfyFeatures) ? dfyFeatures : [];

  const dwyFeatures = t('packages.dwy_features', { returnObjects: true });
  const safeDwyFeatures = Array.isArray(dwyFeatures) ? dwyFeatures : [];

  const diyFeatures = t('packages.diy_features', { returnObjects: true });
  const safeDiyFeatures = Array.isArray(diyFeatures) ? diyFeatures : [];

  return (
    <section
      id="packages"
      className="statiq-dark-stage"
      style={{
        padding: 'clamp(4.5rem, 9vw, 8rem) 0',
        background: '#080C15',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        color: '#FFFFFF',
      }}
    >
      {/* ── Ambient Background Glows ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(1200px, 95%)',
          height: 650,
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30, 64, 175, 0.22) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '10%',
          width: 450,
          height: 450,
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 65%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: 480,
          height: 480,
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.10) 0%, transparent 65%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto clamp(2.5rem, 6vw, 4rem)' }}>
          {/* Tilted Blue Sticker Badge */}
          <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span
              className="statiq-sticker statiq-sticker-blue"
              style={{
                transform: isRTL ? 'rotate(5deg)' : 'rotate(-5deg)',
                fontSize: '0.82rem',
                padding: '0.35rem 0.95rem',
              }}
            >
              <Sparkles size={13} style={{ flexShrink: 0 }} />
              <span>{t('packages.badge', 'شێوازی هاوکاری')}</span>
            </span>
          </div>

          {/* Main Title in High-End Statiq Dark Aesthetic */}
          <h2
            style={{
              fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            {isRTL ? (
              <>
                ئێمە چۆن{' '}
                <span style={{ color: '#FFE043', textShadow: '0 0 35px rgba(255, 224, 67, 0.45)' }}>
                  یارمەتیت دەدەین؟
                </span>
              </>
            ) : (
              <>
                How We{' '}
                <span style={{ color: '#FFE043', textShadow: '0 0 35px rgba(255, 224, 67, 0.45)' }}>
                  Help You Scale
                </span>
              </>
            )}
          </h2>

          <p
            style={{
              fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#94A3B8',
              lineHeight: 1.8,
              maxWidth: 620,
              margin: '0 auto',
              fontWeight: 400,
            }}
          >
            {t('packages.subtitle', 'سێ شێوازی کارکردنمان هەیە: (کام شێواز بۆ تۆ دەگونجێت ئەوە هەڵبژێرە)')}
          </p>
        </div>

        {/* ── 3 Interactive High-End Selector Cards (Dark Mode) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1rem, 2.5vw, 1.5rem)',
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
          }}
        >
          {models.map((m) => {
            const isActive = activeTab === m.id;
            const isHovered = hoveredCard === m.id;
            const Icon = m.icon;

            return (
              <div
                key={m.id}
                role="button"
                tabIndex={0}
                onClick={() => handleSelectTab(m.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectTab(m.id);
                  }
                }}
                onMouseEnter={() => setHoveredCard(m.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  padding: 'clamp(1.35rem, 2.8vw, 1.85rem)',
                  borderRadius: '1.5rem',
                  background: isActive
                    ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
                    : isHovered
                      ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)'
                      : 'linear-gradient(180deg, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: isActive
                    ? `1.5px solid ${m.activeBorder}`
                    : isHovered
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive
                    ? `0 20px 45px -10px ${m.glowColor}, inset 0 1px 1px rgba(255, 255, 255, 0.25)`
                    : isHovered
                      ? '0 12px 35px -8px rgba(0, 0, 0, 0.5)'
                      : '0 4px 20px rgba(0, 0, 0, 0.25)',
                  transform: isActive ? 'translateY(-4px)' : isHovered ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 200,
                  boxSizing: 'border-box',
                }}
              >
                {/* Active Pill at Top Edge */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-0.7rem',
                      [isRTL ? 'left' : 'right']: '1.25rem',
                      background: m.badgeBg,
                      color: '#FFFFFF',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '0.22rem 0.75rem',
                      borderRadius: '100px',
                      boxShadow: `0 4px 16px ${m.glowColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                      letterSpacing: '0.02em',
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        boxShadow: '0 0 6px #FFFFFF',
                      }}
                    />
                    <span>{isRTL ? 'هەڵبژێردراوە' : 'Selected'}</span>
                  </div>
                )}

                {/* Top Row: Icon + Badge */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.15rem',
                      flexDirection: 'row',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '1rem',
                        background: m.iconBg,
                        border: `1px solid ${m.activeBorder}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: m.accentColor,
                        flexShrink: 0,
                        boxShadow: `0 8px 20px -4px ${m.glowColor}`,
                      }}
                    >
                      <Icon size={24} style={{ strokeWidth: 2.2 }} />
                    </div>

                    <span
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: m.accentColor,
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '0.28rem 0.8rem',
                        borderRadius: '100px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {m.title}
                  </h3>

                  {/* Card Subtitle */}
                  <p
                    style={{
                      fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.88rem',
                      color: '#94A3B8',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {m.subtitle}
                  </p>
                </div>

                {/* Bottom Action Pill */}
                <div
                  style={{
                    marginTop: '1.35rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isActive ? m.accentColor : '#64748B',
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    transition: 'color 0.2s ease',
                  }}
                >
                  <span>
                    {m.isExternal
                      ? (isRTL ? 'کردنەوەی فرۆشگا ↗' : 'Visit Store ↗')
                      : (isRTL ? 'بینینی خزمەتگوزارییەکان' : 'View Deliverables')}
                  </span>
                  {m.isExternal ? (
                    <ExternalLink size={14} style={{ color: m.accentColor }} />
                  ) : isRTL ? (
                    <ArrowLeft size={14} style={{ color: isActive ? m.accentColor : '#64748B' }} />
                  ) : (
                    <ArrowRight size={14} style={{ color: isActive ? m.accentColor : '#64748B' }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Main Detail Panel for Selected Model (Dark Glassmorphism) ── */}
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(8, 12, 21, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '2rem',
            padding: 'clamp(1.75rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 3rem)',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 'clamp(3rem, 7vw, 4.5rem)',
            animation: 'fadeInPanel 0.35s ease-out forwards',
          }}
        >
          {/* Subtle top indicator bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: activeTab === 'dfy'
                ? 'linear-gradient(90deg, #0284C7, #38BDF8)'
                : activeTab === 'dwy'
                  ? 'linear-gradient(90deg, #9333EA, #C084FC)'
                  : 'linear-gradient(90deg, #D97706, #FCD34D)',
            }}
          />

          {/* ──────────────── TAB 1: پاکێج و ئۆفەر (DFY) ──────────────── */}
          {activeTab === 'dfy' && (
            <div>
              {/* Header inside Panel */}
              <div style={{ maxWidth: 840, marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38BDF8',
                    border: '1px solid rgba(56, 189, 248, 0.28)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.85rem',
                    borderRadius: '100px',
                    marginBottom: '0.85rem',
                    letterSpacing: '0.04em',
                    fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                  }}
                >
                  {isRTL ? 'خزمەتگوزاری و بەڕێوەبردنی تەواو (Done-For-You)' : 'Full Service Growth Agency (Done-For-You)'}
                </span>

                <h3
                  style={{
                    fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                    fontSize: 'clamp(1.5rem, 3.8vw, 2.4rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {t('packages.dfy_title', 'پاکێج و ئۆفەر: خۆمان هەموو کارەکانت بۆ دەکەین')}
                </h3>

                <p
                  style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                    fontWeight: 600,
                    color: '#38BDF8',
                    marginBottom: '0.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t('packages.dfy_lead', 'سەرجەم کارەکان خۆمان بۆت دەکەین، واتە تۆ تەنها سەیر دەکەیت.')}
                </p>

                <p
                  style={{
                    fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: '0.9rem',
                    color: '#94A3B8',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {t('packages.dfy_intro', 'کارەکانیش پێک دێن لەمانەی خوارەوە، کە ڕاستەوخۆ کار لەسەر فرۆشی بزنسەکەت دەکەین:')}
                </p>
              </div>

              {/* Split Layout: 8 Deliverables + Visual Showcase */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                  gap: 'clamp(2rem, 5vw, 3.5rem)',
                  alignItems: 'center',
                }}
              >
                {/* 8 Deliverable Items */}
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {safeDfyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.035)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '1rem',
                          padding: '0.85rem 1rem',
                          transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.transform = isRTL ? 'translateX(-3px)' : 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.035)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: 'rgba(56, 189, 248, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '0.15rem',
                          }}
                        >
                          <Check size={13} style={{ color: '#38BDF8', strokeWidth: 3 }} />
                        </div>

                        <span
                          style={{
                            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                            fontSize: 'clamp(0.85rem, 1.8vw, 0.94rem)',
                            color: '#E2E8F0',
                            fontWeight: 500,
                            lineHeight: 1.6,
                          }}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Vibrant Orange CTA Button */}
                  <div style={{ marginTop: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                    <button
                      onClick={openSchedule}
                      style={{
                        padding: '0.95rem 2.4rem',
                        fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
                        background: 'linear-gradient(135deg, #FF4D2D 0%, #FF3815 100%)',
                        color: '#FFFFFF',
                        boxShadow: '0 12px 36px rgba(255, 77, 45, 0.45)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.65rem',
                        width: '100%',
                        maxWidth: 380,
                        borderRadius: '100px',
                        fontWeight: 800,
                        fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 16px 45px rgba(255, 77, 45, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 12px 36px rgba(255, 77, 45, 0.45)';
                      }}
                    >
                      <WhatsAppIcon size={19} style={{ flexShrink: 0 }} />
                      <span>{t('packages.dfy_cta', 'یەکێک لە پاکێجەکان هەڵبژێرە')}</span>
                      {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </button>
                    <p
                      style={{
                        fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '0.8rem',
                        color: '#94A3B8',
                        marginTop: '0.6rem',
                        maxWidth: 380,
                        textAlign: 'center',
                      }}
                    >
                      {t('packages.dfy_cta_sub', 'بێ پابەندی — دانیشتنی ڕاوێژکاری خۆڕایی ١٥ خولەک')}
                    </p>
                  </div>
                </div>

                {/* Right: Stacked Creative Visuals */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '0.5rem 0',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px)',
                      backgroundSize: '22px 22px',
                      borderRadius: '1.5rem',
                      opacity: 0.6,
                      pointerEvents: 'none',
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(0.75rem, 2vw, 1.15rem)',
                      position: 'relative',
                      zIndex: 2,
                      maxWidth: 340,
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    {SHOWCASE.map((src, i) => (
                      <div
                        key={i}
                        style={{
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          boxShadow: '0 15px 40px -10px rgba(0, 0, 0, 0.6)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          aspectRatio: i === 1 ? '16/7' : '16/9',
                          transform: i === 0 ? 'rotate(-1.2deg)' : i === 2 ? 'rotate(1deg)' : 'none',
                          transition: 'transform 0.3s ease',
                          background: '#0F172A',
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

                    {/* Floating Price Sticker */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-0.75rem',
                        [isRTL ? 'left' : 'right']: '0.5rem',
                        background: 'linear-gradient(135deg, #020C1B 0%, #041E42 50%, #0A2E66 100%)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        color: '#FFFFFF',
                        padding: '0.65rem 1.15rem',
                        borderRadius: '1rem',
                        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.25)',
                        fontFamily: "'Outfit', 'Inter', sans-serif",
                        zIndex: 10,
                      }}
                    >
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8', marginBottom: '0.15rem', fontWeight: 500 }}>
                        {isRTL ? 'دەستپێکردن لە' : 'Starting from'}
                      </div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1, color: '#38BDF8' }}>$150</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ──────────────── TAB 2: ڕاوێژکاری (DWY) ──────────────── */}
          {activeTab === 'dwy' && (
            <div>
              {/* Header inside Panel */}
              <div style={{ maxWidth: 840, marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(192, 132, 252, 0.12)',
                    color: '#C084FC',
                    border: '1px solid rgba(192, 132, 252, 0.28)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.85rem',
                    borderRadius: '100px',
                    marginBottom: '0.85rem',
                    letterSpacing: '0.04em',
                    fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                  }}
                >
                  {isRTL ? 'ڕاوێژکاری و هاوکاری ٢ بە ٢ (Done-With-You)' : '1-on-1 Strategic Consulting (Done-With-You)'}
                </span>

                <h3
                  style={{
                    fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                    fontSize: 'clamp(1.5rem, 3.8vw, 2.4rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {t('packages.dwy_title', 'ڕاوێژکاری: ڕاوێژکاریت پێدەدەین و لەگەڵت دەبین خۆت بیکەیت تا ئاستێکی باش')}
                </h3>

                <p
                  style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                    fontWeight: 600,
                    color: '#C084FC',
                    marginBottom: '0.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t('packages.dwy_lead', 'ڕاوێژت پێدەدەین و ٢ بە ٢ لەگەڵ شارەزای تایبەت بە بوارەکە فێرت دەکەین چۆن بزنسەکەت بەرەو پێشەوە ببەیت لە سۆشیاڵ میدیا و فێری سپۆنسەرکردن ببیت بە تایبەت بۆ بزنسەکەی خۆت')}
                </p>

                <p
                  style={{
                    fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: '0.9rem',
                    color: '#94A3B8',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {t('packages.dwy_intro', 'لە پرۆگرامی ڕاوێژکاری تایبەتی ٢ بە ٢ چی بەدەست دەهێنیت؟')}
                </p>
              </div>

              {/* Split Layout: Consulting Pillars + Meeting Preview Card */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                  gap: 'clamp(2rem, 5vw, 3.5rem)',
                  alignItems: 'center',
                }}
              >
                {/* Features List */}
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {safeDwyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.035)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '1rem',
                          padding: '0.85rem 1rem',
                          transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.transform = isRTL ? 'translateX(-3px)' : 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.035)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: 'rgba(192, 132, 252, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '0.15rem',
                          }}
                        >
                          <Check size={13} style={{ color: '#C084FC', strokeWidth: 3 }} />
                        </div>

                        <span
                          style={{
                            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                            fontSize: 'clamp(0.85rem, 1.8vw, 0.94rem)',
                            color: '#E2E8F0',
                            fontWeight: 500,
                            lineHeight: 1.6,
                          }}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Vibrant Orange CTA Action */}
                  <div style={{ marginTop: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                    <button
                      onClick={openSchedule}
                      style={{
                        padding: '0.95rem 2.4rem',
                        fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
                        background: 'linear-gradient(135deg, #FF4D2D 0%, #FF3815 100%)',
                        color: '#FFFFFF',
                        boxShadow: '0 12px 36px rgba(255, 77, 45, 0.45)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.65rem',
                        width: '100%',
                        maxWidth: 380,
                        borderRadius: '100px',
                        fontWeight: 800,
                        fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 16px 45px rgba(255, 77, 45, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 12px 36px rgba(255, 77, 45, 0.45)';
                      }}
                    >
                      <Calendar size={18} style={{ flexShrink: 0 }} />
                      <span>{t('packages.dwy_cta', 'کاتێک دیاریبکە بۆ پەیوەندیکردن لەگەڵمان')}</span>
                      {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </button>
                    <p
                      style={{
                        fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '0.8rem',
                        color: '#94A3B8',
                        marginTop: '0.6rem',
                        maxWidth: 380,
                        textAlign: 'center',
                      }}
                    >
                      {t('packages.dwy_cta_sub', 'پەیوەندی لە ڕێگەی واتسئاپ یان دیاریکردنی کاتی دانیشتن لە کالیندەر')}
                    </p>
                  </div>
                </div>

                {/* Right: Consulting Preview Card */}
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <div
                    style={{
                      maxWidth: 360,
                      width: '100%',
                      background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%)',
                      borderRadius: '1.5rem',
                      padding: '1.75rem',
                      color: '#FFFFFF',
                      boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(192, 132, 252, 0.2)',
                      border: '1px solid rgba(192, 132, 252, 0.25)',
                      position: 'relative',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: '0.9rem',
                          background: 'rgba(192, 132, 252, 0.18)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#C084FC',
                          boxShadow: '0 4px 15px rgba(192, 132, 252, 0.3)',
                        }}
                      >
                        <Video size={22} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#C084FC', fontWeight: 600 }}>
                          {isRTL ? 'دانیشتنی ڕاستەوخۆ' : 'Live Screen-Share'}
                        </div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                          {isRTL ? 'ڕاوێژکاری ٢ بە ٢' : '1-on-1 Intensive'}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '1rem',
                        padding: '1rem',
                        marginBottom: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.65rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#E2E8F0' }}>
                        <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span>
                        <span>{isRTL ? 'شیکردنەوەی خێرای ئەکاونتی ڕیکلامەکەت' : 'Instant ad account performance audit'}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#E2E8F0' }}>
                        <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span>
                        <span>{isRTL ? 'داڕشتنی ئۆفەری فرۆش بە دەستی پسپۆڕ' : 'Handcrafted conversion offer'}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#E2E8F0' }}>
                        <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span>
                        <span>{isRTL ? 'ڕاهێنانی وەڵامدانەوەی نامەی کڕیار' : 'DM message close rate coaching'}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '0.85rem',
                        background: 'rgba(192, 132, 252, 0.12)',
                        border: '1px solid rgba(192, 132, 252, 0.25)',
                        fontSize: '0.8rem',
                        color: '#E9D5FF',
                        textAlign: 'center',
                        lineHeight: 1.5,
                      }}
                    >
                      {isRTL ? 'دانیشتنەکە بە تەواوی تۆمار دەکرێت و دەدرێتەوە پێت' : 'Full call recording + action notes provided'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ──────────────── TAB 3: کۆرس و کتێب (DIY) ──────────────── */}
          {activeTab === 'diy' && (
            <div>
              {/* Header inside Panel */}
              <div style={{ maxWidth: 840, marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(252, 211, 77, 0.12)',
                    color: '#FCD34D',
                    border: '1px solid rgba(252, 211, 77, 0.28)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.85rem',
                    borderRadius: '100px',
                    marginBottom: '0.85rem',
                    letterSpacing: '0.04em',
                    fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                  }}
                >
                  {isRTL ? 'فێرکاری و کتێبی دیجیتاڵی (Do-It-Yourself)' : 'Self-Paced Courses & Digital Blueprints'}
                </span>

                <h3
                  style={{
                    fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                    fontSize: 'clamp(1.5rem, 3.8vw, 2.4rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {t('packages.diy_title', 'کۆرس و کتێب: فێرکاری و کۆرسیت پێدەدەین تا خۆت لە سفرەوە بیانکەیت')}
                </h3>

                <p
                  style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                    fontWeight: 600,
                    color: '#FCD34D',
                    marginBottom: '0.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t('packages.diy_lead', 'فێرکاری و کۆرسیت پێدەدەین تا خۆت لە سفرەوە بیانکەیت. هەموو زانیاری، ستراتیژی و ئەزموونی ڕاستەقینەی خۆمان لە فرۆشگای مۆزان بۆ ئامادە کردوویت.')}
                </p>

                <p
                  style={{
                    fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: '0.9rem',
                    color: '#94A3B8',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {t('packages.diy_intro', 'تایبەتمەندییە سەرەکییەکانی فرۆشگای کۆرس و پەرتووکەکانی HBgrow:')}
                </p>
              </div>

              {/* Split Layout: Course Pillars + Mozan Store Card */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                  gap: 'clamp(2rem, 5vw, 3.5rem)',
                  alignItems: 'center',
                }}
              >
                {/* Features List */}
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {safeDiyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.035)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '1rem',
                          padding: '0.85rem 1rem',
                          transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(252, 211, 77, 0.4)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.transform = isRTL ? 'translateX(-3px)' : 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.035)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: 'rgba(252, 211, 77, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '0.15rem',
                          }}
                        >
                          <Check size={13} style={{ color: '#FCD34D', strokeWidth: 3 }} />
                        </div>

                        <span
                          style={{
                            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                            fontSize: 'clamp(0.85rem, 1.8vw, 0.94rem)',
                            color: '#E2E8F0',
                            fontWeight: 500,
                            lineHeight: 1.6,
                          }}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action: Opens Store with Vibrant Button */}
                  <div style={{ marginTop: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                    <a
                      href="https://hbgrow.mozan.store"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.95rem 2.4rem',
                        fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
                        background: 'linear-gradient(135deg, #FF4D2D 0%, #FF3815 100%)',
                        boxShadow: '0 12px 36px rgba(255, 77, 45, 0.45)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.65rem',
                        width: '100%',
                        maxWidth: 420,
                        borderRadius: '100px',
                        boxSizing: 'border-box',
                        textDecoration: 'none',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontFamily: "'Inter', 'Noto Kufi Arabic', sans-serif",
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 16px 45px rgba(255, 77, 45, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 12px 36px rgba(255, 77, 45, 0.45)';
                      }}
                    >
                      <BookOpen size={18} style={{ flexShrink: 0 }} />
                      <span>{t('packages.diy_cta', 'سەردانی فرۆشگای کۆرسەکان بکە (hbgrow.mozan.store)')}</span>
                      <ExternalLink size={15} style={{ flexShrink: 0 }} />
                    </a>
                    <p
                      style={{
                        fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '0.8rem',
                        color: '#94A3B8',
                        marginTop: '0.6rem',
                        maxWidth: 420,
                        textAlign: 'center',
                      }}
                    >
                      {t('packages.diy_cta_sub', 'ڕاستەوخۆ لە فرۆشگای مۆزان لە تابی نوێ دەکرێتەوە')}
                    </p>
                  </div>
                </div>

                {/* Right: Mozan Store Showcase Card */}
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <a
                    href="https://hbgrow.mozan.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      maxWidth: 360,
                      width: '100%',
                      background: 'linear-gradient(145deg, rgba(42, 23, 5, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%)',
                      borderRadius: '1.5rem',
                      padding: '1.75rem',
                      color: '#FFFFFF',
                      boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(252, 211, 77, 0.2)',
                      border: '1px solid rgba(252, 211, 77, 0.3)',
                      position: 'relative',
                      boxSizing: 'border-box',
                      textDecoration: 'none',
                      display: 'block',
                      transition: 'transform 0.25s ease, border-color 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.borderColor = 'rgba(252, 211, 77, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'rgba(252, 211, 77, 0.3)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <span
                        style={{
                          background: 'rgba(252, 211, 77, 0.15)',
                          color: '#FCD34D',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '100px',
                          border: '1px solid rgba(252, 211, 77, 0.3)',
                        }}
                      >
                        Mozan Store
                      </span>
                      <ExternalLink size={16} style={{ color: '#FCD34D' }} />
                    </div>

                    <h4
                      style={{
                        fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        marginBottom: '0.6rem',
                        color: '#FFFFFF',
                        lineHeight: 1.3,
                      }}
                    >
                      {isRTL ? 'فرۆشگای فەرمی HBgrow' : 'HBgrow Official Academy'}
                    </h4>

                    <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {isRTL
                        ? 'تەواوی کۆرسە تۆمارکراوەکان، کتێبی ئەلیکترۆنی و سکریپتەکان لە فرۆشگای مۆزان دەستدەکەوێت.'
                        : 'Explore recorded masterclasses, frameworks, and plug-and-play DM sales scripts on Mozan store.'}
                    </p>

                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        padding: '0.85rem 1rem',
                        borderRadius: '0.85rem',
                        fontSize: '0.82rem',
                        color: '#FDE68A',
                        fontWeight: 600,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <span>hbgrow.mozan.store</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── 14-Day Performance Guarantee Card (Obsidian Dark Glass) ── */}
        <div
          style={{
            padding: 'clamp(1.75rem, 4.5vw, 2.75rem) clamp(1.25rem, 4vw, 2.75rem)',
            borderRadius: '1.75rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: 960,
            margin: '0 auto',
            boxSizing: 'border-box',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Subtle dot grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
            }}
          />
          {/* Top shine */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.25) 50%, transparent 90%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexDirection: 'row', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '0.9rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={22} style={{ color: '#38BDF8' }} />
              </div>
              <span
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                {t('packages.guarantee_badge', 'گەرەنتی مسۆگەر')}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Outfit', 'Sarchia Bokan', serif",
                fontSize: 'clamp(1.25rem, 3.2vw, 1.95rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.3,
              }}
            >
              {t('packages.guarantee_title', 'گەرەنتی ١٤ ڕۆژ ئەنجام — ئێمە بە داتا کار دەکەین نەک بە قسە')}
            </h3>

            <p
              style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: 'clamp(0.88rem, 2vw, 0.98rem)',
                color: '#94A3B8',
                lineHeight: 1.85,
                maxWidth: 720,
              }}
            >
              {t('packages.guarantee_desc', 'ئەگەر لە ١٤ ڕۆژی یەکەمدا نەگەینە ئامانجی پێشتر دیاریکراوی لیدی کڕیار، بەردەوام دەبین بێ هیچ کرێیەکی زیادە تاوەکو دەگەین بە ئامانجەکە.')}
            </p>

            <button
              onClick={openSchedule}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.22)',
                color: '#FFFFFF',
                padding: 'clamp(0.75rem, 2vw, 0.85rem) clamp(1.25rem, 3.5vw, 1.75rem)',
                borderRadius: '100px',
                fontSize: 'clamp(0.82rem, 2vw, 0.92rem)',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                alignSelf: 'flex-start',
                transition: 'all 0.25s ease',
                flexDirection: 'row',
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <Phone size={16} style={{ flexShrink: 0 }} />
              <span>{t('packages.guarantee_btn', 'داوای دانیشتنی خۆڕایی بکە')}</span>
              {isRTL ? <ArrowLeft size={14} style={{ flexShrink: 0 }} /> : <ArrowRight size={14} style={{ flexShrink: 0 }} />}
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeInPanel {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
