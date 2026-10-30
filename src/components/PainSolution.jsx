import { useState } from 'react';
import { 
  XCircle, CheckCircle2, TrendingDown, AlertTriangle, 
  Clock, UserX, Sparkles, BarChart3, Video, MessageSquare, 
  ArrowUpRight, Zap, Check, ArrowRight, ArrowLeft
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function PainSolution() {
  const { openSchedule } = useSchedule();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  // Interactive toggle: 'pains' (The 4 Bottlenecks) | 'solutions' (Our 4-Step Fix)
  const [activeTab, setActiveTab] = useState('pains');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const pains = t('pain_solution.pains', { returnObjects: true });
  const safePains = Array.isArray(pains) ? pains : [];

  const solutions = t('pain_solution.solutions', { returnObjects: true });
  const safeSolutions = Array.isArray(solutions) ? solutions : [];

  // Metadata for Pain points
  const painMeta = [
    {
      icon: TrendingDown,
      color: '#EF4444',
      bg: 'rgba(239, 68, 68, 0.08)',
      border: 'rgba(239, 68, 68, 0.22)',
      badge: isRTL ? 'زیانی بودجەی ڕیکلام' : 'Wasted Ad Spend',
      impact: isRTL ? 'فرۆش لەدەستچوو' : 'Negative ROAS',
      fixHint: isRTL ? 'پێویستی بە ئۆفەری بەهێزە' : 'Requires Strong Offer',
    },
    {
      icon: AlertTriangle,
      color: '#F97316',
      bg: 'rgba(249, 115, 22, 0.08)',
      border: 'rgba(249, 115, 22, 0.22)',
      badge: isRTL ? 'بینەری ناچالاک' : 'Vanity Metrics',
      impact: isRTL ? 'لایک ≠ قازانج' : 'Views ≠ Cashflow',
      fixHint: isRTL ? 'پێویستی بە ڕیکلامی فرۆشە' : 'Requires Conversion Creative',
    },
    {
      icon: Clock,
      color: '#E11D48',
      bg: 'rgba(225, 29, 72, 0.08)',
      border: 'rgba(225, 29, 72, 0.22)',
      badge: isRTL ? 'کاتی بەفیڕۆچوو' : 'Unqualified Leads',
      impact: isRTL ? 'نامەی بێسوود' : 'Dead-End DMs',
      fixHint: isRTL ? 'پێویستی بە فلتەرکردنی کڕیارە' : 'Requires Lead Filtration',
    },
    {
      icon: UserX,
      color: '#DC2626',
      bg: 'rgba(220, 38, 38, 0.08)',
      border: 'rgba(220, 38, 38, 0.22)',
      badge: isRTL ? 'ڕاکردن بۆ ڕکابەر' : 'Lost Conversions',
      impact: isRTL ? 'وەڵامدانەوەی سارد' : 'Cold & Slow Replies',
      fixHint: isRTL ? 'پێویستی بە فەنەڵی کڕینە' : 'Requires Automated WhatsApp Funnel',
    },
  ];

  // Metadata for Solution points
  const solutionMeta = [
    {
      icon: BarChart3,
      color: '#0B3275',
      bg: 'rgba(11, 50, 117, 0.08)',
      border: 'rgba(11, 50, 117, 0.22)',
      badge: isRTL ? 'هەنگاوی یەکەم' : 'Stage 01',
      impact: isRTL ? 'پشکنینی ٣٦٠ پلەی بزنس' : 'Full Ad & Offer Audit',
      fixHint: isRTL ? 'دۆزینەوەی دەرفەتی فرۆش' : 'Identify Profit Levers',
    },
    {
      icon: Sparkles,
      color: '#B8860B',
      bg: 'rgba(212, 175, 55, 0.12)',
      border: 'rgba(212, 175, 55, 0.25)',
      badge: isRTL ? 'هەنگاوی دووەم' : 'Stage 02',
      impact: isRTL ? 'ئۆفەری نەپساو و قازانجدار' : 'Irresistible Value Offer',
      fixHint: isRTL ? 'کڕیار ناتوانێت بڵێت نەخێر' : 'Make Buying a No-Brainer',
    },
    {
      icon: Video,
      color: '#2563EB',
      bg: 'rgba(37, 99, 235, 0.08)',
      border: 'rgba(37, 99, 235, 0.22)',
      badge: isRTL ? 'هەنگاوی سێیەم' : 'Stage 03',
      impact: isRTL ? 'ڕیکلامی ڤیدیۆیی فرۆش (Reels)' : 'Direct-Response Creative',
      fixHint: isRTL ? 'قەناعەتپێکردنی خێرا' : 'Scroll-Stopping Conversions',
    },
    {
      icon: MessageSquare,
      color: '#059669',
      bg: 'rgba(5, 150, 105, 0.08)',
      border: 'rgba(5, 150, 105, 0.22)',
      badge: isRTL ? 'هەنگاوی چوارەم' : 'Stage 04',
      impact: isRTL ? 'فەنەڵی خێرای واتسئاپ و فرۆش' : 'Automated WhatsApp Funnel',
      fixHint: isRTL ? 'کڕیاری ئامادە و فلتەرکراو' : 'Pre-Sold Ready Buyers',
    },
  ];

  const currentCards = activeTab === 'pains' ? safePains : safeSolutions;
  const currentMetas = activeTab === 'pains' ? painMeta : solutionMeta;

  return (
    <section 
      id="about" 
      style={{ 
        padding: 'clamp(4.5rem, 8vw, 7.5rem) 0', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FBFBFD 50%, #FFFFFF 100%)',
      }}
    >
      {/* Subtle architectural ambient lights */}
      <div 
        style={{
          position: 'absolute', 
          top: '10%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: 'min(900px, 90vw)', 
          height: 380, 
          borderRadius: '50%',
          background: activeTab === 'pains' 
            ? 'radial-gradient(circle, rgba(239, 68, 68, 0.035) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(11, 50, 117, 0.04) 0%, transparent 70%)',
          filter: 'blur(60px)', 
          pointerEvents: 'none',
          transition: 'background 0.5s ease',
        }} 
      />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto clamp(2.5rem, 5vw, 3.5rem)' }}>
          {/* Accent badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <span 
              className="badge" 
              style={{
                background: activeTab === 'pains' ? 'rgba(239, 68, 68, 0.08)' : 'rgba(11, 50, 117, 0.08)',
                borderColor: activeTab === 'pains' ? 'rgba(239, 68, 68, 0.22)' : 'rgba(11, 50, 117, 0.22)',
                color: activeTab === 'pains' ? '#DC2626' : '#0B3275',
                transition: 'all 0.3s ease',
              }}
            >
              <span className="dot" style={{ background: activeTab === 'pains' ? '#DC2626' : '#0B3275' }} />
              {activeTab === 'pains' ? t('pain_solution.badge', 'کێشەکە') : t('pain_solution.system_badge', 'سیستەمەکەمان')}
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#0A0A0C',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            {activeTab === 'pains' ? (
              <>
                {t('pain_solution.title_p1')}{' '}
                <span style={{ color: '#DC2626', textShadow: '0 0 30px rgba(220, 38, 38, 0.25)' }}>
                  {t('pain_solution.title_highlight')}
                </span>{' '}
                {t('pain_solution.title_p2')}
              </>
            ) : (
              <>
                {t('pain_solution.system_title_p1')}{' '}
                <span style={{ color: '#0070F3', textShadow: '0 0 30px rgba(0, 112, 243, 0.25)' }}>
                  {t('pain_solution.system_title_highlight')}
                </span>
              </>
            )}
          </h2>

          <p style={{
            fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
            color: '#64748B',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: 600,
          }}>
            {activeTab === 'pains'
              ? (isRTL 
                  ? 'ئەو ٤ هەڵە و لەمپەرە باوەی کە وا دەکەن بوودجەی ڕیکلامەکەت بسووتێت بەبێ گەڕانەوەی فرۆش.'
                  : 'The 4 critical bottlenecks that cause ad spend to burn without generating real sales.')
              : (isRTL
                  ? 'ئەو سیستەمە ٤ قۆناغییەی کە سۆشیاڵ میدیاکەت دەگۆڕێت بۆ ماشینێکی بەرهەمهێنانی کڕیاری ئامادە.'
                  : 'The proven 4-stage architecture turning your social media into a direct-sales revenue engine.')
            }
          </p>
        </div>

        {/* ── HIGH-END SEGMENTED TOGGLE (THE OLD WAY VS THE NEW WAY) ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.35rem',
              background: '#F1F5F9',
              borderRadius: '9999px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.04)',
              gap: '0.35rem',
              maxWidth: '100%',
            }}
          >
            {/* Tab 1: 4 Bottlenecks */}
            <button
              type="button"
              onClick={() => setActiveTab('pains')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.2rem, 2.5vw, 1.75rem)',
                borderRadius: '9999px',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: activeTab === 'pains' ? '#FFFFFF' : 'transparent',
                color: activeTab === 'pains' ? '#DC2626' : '#64748B',
                boxShadow: activeTab === 'pains' ? '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0,0,0,0.04)' : 'none',
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              }}
            >
              <XCircle size={16} style={{ color: activeTab === 'pains' ? '#DC2626' : '#94A3B8' }} />
              <span>{isRTL ? '٤ کێشە سەرەکییەکە' : '4 Core Bottlenecks'}</span>
            </button>

            {/* Tab 2: The Solution System */}
            <button
              type="button"
              onClick={() => setActiveTab('solutions')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.2rem, 2.5vw, 1.75rem)',
                borderRadius: '9999px',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: activeTab === 'solutions' ? '#03142B' : 'transparent',
                color: activeTab === 'solutions' ? '#FFFFFF' : '#64748B',
                boxShadow: activeTab === 'solutions' ? '0 4px 16px rgba(3, 20, 43, 0.2)' : 'none',
                fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              }}
            >
              <CheckCircle2 size={16} style={{ color: activeTab === 'solutions' ? '#0070F3' : '#94A3B8' }} />
              <span>{isRTL ? 'سیستەمی گەشەی HBgrow (چارەسەر)' : 'Our 4-Step Solution'}</span>
            </button>
          </div>
        </div>

        {/* ── 2x2 LUXURY CARDS GRID (IMMEDIATE RENDER, ZERO DELAY) ── */}
        <div
          key={activeTab}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1rem, 2.5vw, 1.75rem)',
            maxWidth: 1100,
            margin: '0 auto clamp(3rem, 6vw, 4.5rem)',
            animation: 'fadeInCards 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {currentCards.map(({ title, desc }, i) => {
            const meta = currentMetas[i] || currentMetas[0];
            const IconComponent = meta.icon;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: 'relative',
                  background: '#FFFFFF',
                  borderRadius: '1.5rem',
                  padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  border: isHovered 
                    ? `1px solid ${meta.color}` 
                    : '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: isHovered 
                    ? `0 20px 45px -10px ${activeTab === 'pains' ? 'rgba(239, 68, 68, 0.14)' : 'rgba(11, 50, 117, 0.16)'}, 0 4px 12px rgba(0, 0, 0, 0.03)` 
                    : '0 4px 20px -2px rgba(3, 20, 43, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle top indicator bar */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: isHovered 
                      ? meta.color 
                      : (activeTab === 'pains' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(11, 50, 117, 0.15)'),
                    transition: 'background 0.3s ease',
                  }} 
                />

                <div>
                  {/* Top Header: Icon + Number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: '1rem',
                        background: meta.bg,
                        border: `1px solid ${meta.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: meta.color,
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      }}
                    >
                      <IconComponent size={22} strokeWidth={2.2} />
                    </div>

                    <div 
                      style={{
                        fontFamily: "'Outfit', monospace",
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        color: isHovered ? meta.color : '#94A3B8',
                        background: '#F8FAFC',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '100px',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Impact Tag Badge */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span 
                      style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: meta.color,
                        background: meta.bg,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '0.5rem',
                        border: `1px solid ${meta.border}`,
                        letterSpacing: '0.02em',
                        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      }}
                    >
                      {meta.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#0A0A0C',
                      marginBottom: '0.75rem',
                      lineHeight: 1.45,
                    }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p 
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.9rem',
                      color: '#52525B',
                      lineHeight: 1.8,
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Bottom Takeaway / Solution Link */}
                <div 
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontWeight: 600,
                    color: isHovered ? meta.color : '#64748B',
                    transition: 'color 0.25s ease',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    {activeTab === 'pains' ? (
                      <TrendingDown size={14} style={{ color: meta.color }} />
                    ) : (
                      <Check size={14} style={{ color: meta.color }} />
                    )}
                    {meta.impact}
                  </span>
                  <ArrowUpRight 
                    size={15} 
                    style={{
                      transform: isHovered ? (isRTL ? 'translate(-2px, -2px)' : 'translate(2px, -2px)') : 'none',
                      transition: 'transform 0.25s ease',
                      color: isHovered ? meta.color : '#94A3B8',
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── PART 2: THE 50/50 REVENUE FORMULA BANNER ── */}
        <div 
          style={{
            maxWidth: 1000,
            margin: '0 auto clamp(2.5rem, 5vw, 4rem)',
            background: '#FFFFFF',
            borderRadius: '2rem',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 20px 50px -12px rgba(3, 20, 43, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
            padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.75rem)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Top subtle jewel line */}
          <div 
            style={{
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              height: '3px',
              background: 'linear-gradient(90deg, transparent 5%, #0B3275 35%, #D4AF37 50%, #0B3275 65%, transparent 95%)',
            }} 
          />

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: 'rgba(3, 20, 43, 0.05)', border: '1px solid rgba(3, 20, 43, 0.08)', marginBottom: '1.25rem' }}>
            <Zap size={14} style={{ color: '#D4AF37' }} />
            <span style={{
              fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#03142B',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {isRTL ? 'هاوکێشەی فرۆشی ڕاستەقینە' : 'The Real Revenue Formula'}
            </span>
          </div>

          {/* Headline quote */}
          <p 
            style={{
              fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
              fontSize: 'clamp(1.35rem, 3vw, 2rem)',
              fontWeight: 700,
              lineHeight: 1.45,
              color: '#0A0A0C',
              maxWidth: 720,
              margin: '0 auto 2rem',
            }}
          >
            {t('pain_solution.shift_p1')}{' '}
            <span 
              style={{
                color: '#0070F3',
                textShadow: '0 0 25px rgba(0, 112, 243, 0.25)',
              }}
            >
              {t('pain_solution.shift_highlight')}
            </span>{' '}
            {t('pain_solution.shift_p2')}
          </p>

          {/* Visual 50% + 50% = 100% Equation */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1rem',
              alignItems: 'center',
              maxWidth: 780,
              margin: '0 auto',
            }}
          >
            {/* 50% Ads */}
            <div 
              style={{
                background: '#F8FAFC',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                borderRadius: '1.25rem',
                padding: '1.25rem 1.5rem',
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.04em' }}>
                  {isRTL ? 'بەشی یەکەم' : 'Pillar 01'}
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#0B3275' }}>
                  50%
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0A0A0C', marginBottom: '0.25rem' }}>
                {isRTL ? 'سپۆنسەر و داتا' : 'Targeted Paid Ads'}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>
                {isRTL ? 'کەمپەینی ورد بۆ کڕیاری ئامادە' : 'Precision targeting on Meta & IG'}
              </div>
            </div>

            {/* Plus Icon */}
            <div 
              style={{
                width: 36,
                height: 36,
                margin: '0 auto',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#0B3275',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}
            >
              +
            </div>

            {/* 50% Offer & Creative */}
            <div 
              style={{
                background: '#F8FAFC',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                borderRadius: '1.25rem',
                padding: '1.25rem 1.5rem',
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.04em' }}>
                  {isRTL ? 'بەشی دووەم' : 'Pillar 02'}
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#D4AF37' }}>
                  50%
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0A0A0C', marginBottom: '0.25rem' }}>
                {isRTL ? 'ئۆفەر و شێوازی قەناعەت' : 'Irresistible Offer & Creative'}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>
                {isRTL ? 'ڤیدیۆی فرۆش، پەڕەی کڕین و فەنەڵ' : 'High-converting creative & funnel'}
              </div>
            </div>
          </div>
        </div>

        {/* ── ACTION CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={openSchedule}
            className="btn-primary"
            style={{
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              padding: 'clamp(0.9rem, 2.5vw, 1.1rem) clamp(1.75rem, 4.5vw, 2.75rem)',
              border: 'none',
              cursor: 'pointer',
              maxWidth: '100%',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 8px 24px -4px rgba(3, 20, 43, 0.25)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            <WhatsAppIcon size={18} />
            <span>{t('pain_solution.cta_btn')}</span>
          </button>
          <p 
            style={{
              marginTop: '1.25rem',
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: '0.82rem',
              color: '#64748B',
            }}
          >
            {t('pain_solution.cta_desc')}
          </p>
        </div>

      </div>

      <style>{`
        @keyframes fadeInCards {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
