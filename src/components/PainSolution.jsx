import { useState, useRef } from 'react';
import { 
  XCircle, CheckCircle2, TrendingDown, AlertTriangle, 
  Clock, UserX, Sparkles, BarChart3, Video, MessageSquare, 
  ArrowUpRight, ArrowLeft, ArrowRight, Zap, Check, ShieldCheck
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function PainSolution() {
  const { openSchedule } = useSchedule();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'pains' | 'solutions'
  const [hoveredPain, setHoveredPain] = useState(null);
  const [hoveredSolution, setHoveredSolution] = useState(null);

  const pains = t('pain_solution.pains', { returnObjects: true });
  const safePains = Array.isArray(pains) ? pains : [];

  const solutions = t('pain_solution.solutions', { returnObjects: true });
  const safeSolutions = Array.isArray(solutions) ? solutions : [];

  // Rich metadata for Pain points
  const painMeta = [
    {
      icon: TrendingDown,
      color: '#EF4444',
      bg: 'rgba(239, 68, 68, 0.08)',
      border: 'rgba(239, 68, 68, 0.2)',
      badge: isRTL ? 'زیانی بودجەی ڕیکلام' : 'Wasted Ad Spend',
      impact: isRTL ? 'فرۆش لەدەستچوو' : 'Negative ROAS',
      fixHint: isRTL ? 'پێویستی بە ئۆفەری بەهێزە' : 'Requires strong offer architecture',
    },
    {
      icon: AlertTriangle,
      color: '#F97316',
      bg: 'rgba(249, 115, 22, 0.08)',
      border: 'rgba(249, 115, 22, 0.2)',
      badge: isRTL ? 'بینەری ناچالاک' : 'Vanity Metrics',
      impact: isRTL ? 'لایک ≠ قازانج' : 'Views ≠ Cashflow',
      fixHint: isRTL ? 'پێویستی بە ڕیکلامی فرۆشە' : 'Requires conversion creatives',
    },
    {
      icon: Clock,
      color: '#E11D48',
      bg: 'rgba(225, 29, 72, 0.08)',
      border: 'rgba(225, 29, 72, 0.2)',
      badge: isRTL ? 'کاتی بەفیڕۆچوو' : 'Unqualified Leads',
      impact: isRTL ? 'نامەی بێسوود' : 'Dead-End DMs',
      fixHint: isRTL ? 'پێویستی بە فلتەرکردنی کڕیارە' : 'Requires lead filtration',
    },
    {
      icon: UserX,
      color: '#DC2626',
      bg: 'rgba(220, 38, 38, 0.08)',
      border: 'rgba(220, 38, 38, 0.2)',
      badge: isRTL ? 'ڕاکردن بۆ ڕکابەر' : 'Lost Conversions',
      impact: isRTL ? 'وەڵامدانەوەی سارد' : 'Cold & Slow Replies',
      fixHint: isRTL ? 'پێویستی بە سیستەمی کڕینە' : 'Requires automated checkout flow',
    },
  ];

  // Rich metadata for Solution points
  const solutionMeta = [
    {
      icon: BarChart3,
      color: '#0B3275',
      bg: 'rgba(11, 50, 117, 0.08)',
      border: 'rgba(11, 50, 117, 0.2)',
      badge: isRTL ? 'هەنگاوی یەکەم' : 'Stage 01',
      outcome: isRTL ? 'پشکنینی ٣٦٠ پلەی بزنس' : 'Full Ad & Offer Audit',
      action: isRTL ? 'دۆزینەوەی دەرفەتی فرۆش' : 'Identify profit levers',
    },
    {
      icon: Sparkles,
      color: '#D4AF37',
      bg: 'rgba(212, 175, 55, 0.12)',
      border: 'rgba(212, 175, 55, 0.25)',
      badge: isRTL ? 'هەنگاوی دووەم' : 'Stage 02',
      outcome: isRTL ? 'ئۆفەری نەپساو و قازانجدار' : 'Irresistible Value Offer',
      action: isRTL ? 'کڕیار ناتوانێت بڵێت نەخێر' : 'Make buying a no-brainer',
    },
    {
      icon: Video,
      color: '#2563EB',
      bg: 'rgba(37, 99, 235, 0.08)',
      border: 'rgba(37, 99, 235, 0.2)',
      badge: isRTL ? 'هەنگاوی سێیەم' : 'Stage 03',
      outcome: isRTL ? 'ڕیکلامی ڤیدیۆیی فرۆش (Reels)' : 'Direct-Response Creative',
      action: isRTL ? 'قەناعەتپێکردنی خێرا' : 'Scroll-stopping conversions',
    },
    {
      icon: MessageSquare,
      color: '#059669',
      bg: 'rgba(5, 150, 105, 0.08)',
      border: 'rgba(5, 150, 105, 0.2)',
      badge: isRTL ? 'هەنگاوی چوارەم' : 'Stage 04',
      outcome: isRTL ? 'فەنەڵی خێرای واتسئاپ و فرۆش' : 'Automated WhatsApp Funnel',
      action: isRTL ? 'کڕیاری ئامادە و فلتەرکراو' : 'Pre-sold ready buyers',
    },
  ];

  // Helper for mouse tracking spotlight on cards
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
    e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <section id="about" style={{ padding: 'clamp(4.5rem, 10vw, 8.5rem) 0', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient background glows */}
      <div style={{
        position: 'absolute', top: '8%', left: '4%',
        width: 550, height: 550, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(3, 20, 43, 0.03) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '45%', right: '3%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(11, 50, 117, 0.035) 0%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.025) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>

        {/* ── INTERACTIVE TAB SELECTOR ── */}
        <div data-reveal style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '9999px',
            boxShadow: '0 4px 20px -2px rgba(3, 20, 43, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)',
            backdropFilter: 'blur(16px)',
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              style={{
                padding: '0.5rem 1.15rem',
                borderRadius: '9999px',
                fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                background: activeTab === 'all' ? '#03142B' : 'transparent',
                color: activeTab === 'all' ? '#FFFFFF' : '#64748B',
                boxShadow: activeTab === 'all' ? '0 2px 8px rgba(3, 20, 43, 0.2)' : 'none',
              }}
            >
              {isRTL ? 'هەموو قۆناغەکان' : 'Complete Breakdown'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pains')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.15rem',
                borderRadius: '9999px',
                fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                background: activeTab === 'pains' ? 'rgba(239, 68, 68, 0.12)' : 'transparent',
                color: activeTab === 'pains' ? '#DC2626' : '#64748B',
                boxShadow: activeTab === 'pains' ? '0 2px 8px rgba(239, 68, 68, 0.15)' : 'none',
              }}
            >
              <XCircle size={14} style={{ color: activeTab === 'pains' ? '#DC2626' : 'currentColor' }} />
              {isRTL ? '٤ کێشە سەرەکییەکە' : '4 Bottlenecks'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('solutions')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.15rem',
                borderRadius: '9999px',
                fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                background: activeTab === 'solutions' ? 'rgba(11, 50, 117, 0.12)' : 'transparent',
                color: activeTab === 'solutions' ? '#0B3275' : '#64748B',
                boxShadow: activeTab === 'solutions' ? '0 2px 8px rgba(11, 50, 117, 0.15)' : 'none',
              }}
            >
              <CheckCircle2 size={14} style={{ color: activeTab === 'solutions' ? '#0B3275' : 'currentColor' }} />
              {isRTL ? 'سیستەمی گەشە (چارەسەر)' : 'Our 4-Step Fix'}
            </button>
          </div>
        </div>

        {/* ── PART 1: THE PAIN POINTS (BOTTLENECKS) ── */}
        {(activeTab === 'all' || activeTab === 'pains') && (
          <div style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
            {/* Header */}
            <div data-reveal style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)', textAlign: 'center' }}>
              <span className="font-script-accent">
                {isRTL ? 'دەستنیشانکردنی کێشە سەرەکییەکان' : 'The Core Bottlenecks'}
              </span>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <span className="badge" style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  borderColor: 'rgba(239, 68, 68, 0.2)',
                  color: '#DC2626',
                }}>
                  {t('pain_solution.badge')}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Sarchia Bokan', serif",
                fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)',
                fontWeight: 700, lineHeight: 1.25,
                color: '#0A0A0C', maxWidth: 640, margin: '0 auto',
              }}>
                {t('pain_solution.title_p1')}{' '}
                <span className="text-gold">{t('pain_solution.title_highlight')}</span>{' '}
                {t('pain_solution.title_p2')}
              </h2>
            </div>

            {/* Pain Grid with Interactive Spotlight Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
              gap: '1.5rem',
            }}>
              {safePains.map(({ title, desc }, i) => {
                const meta = painMeta[i] || painMeta[0];
                const IconComponent = meta.icon;
                const isHovered = hoveredPain === i;

                return (
                  <div
                    key={i}
                    data-reveal
                    onMouseEnter={() => setHoveredPain(i)}
                    onMouseLeave={() => setHoveredPain(null)}
                    onMouseMove={handleCardMouseMove}
                    style={{
                      position: 'relative',
                      background: '#FFFFFF',
                      borderRadius: '1.5rem',
                      padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                      border: isHovered ? `1px solid ${meta.color}` : '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: isHovered 
                        ? '0 24px 48px -12px rgba(220, 38, 38, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)' 
                        : '0 4px 20px -2px rgba(3, 20, 43, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
                      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'default',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* Top luxury shine line */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                      background: isHovered 
                        ? `linear-gradient(90deg, transparent, ${meta.color}, transparent)` 
                        : 'linear-gradient(90deg, transparent 10%, rgba(0,0,0,0.06) 50%, transparent 90%)',
                      transition: 'background 0.3s ease',
                    }} />

                    {/* Interactive Cursor Spotlight Glow */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'radial-gradient(350px circle at var(--spotlight-x, -200px) var(--spotlight-y, -200px), rgba(239, 68, 68, 0.04), transparent 70%)',
                      pointerEvents: 'none',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.25s ease',
                    }} />

                    <div>
                      {/* Top Bar: Icon Squircle + Number Jewel Badge */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.5rem',
                        position: 'relative',
                        zIndex: 2,
                      }}>
                        {/* Jewel Icon */}
                        <div style={{
                          width: 44, height: 44,
                          borderRadius: '1rem',
                          background: isHovered ? meta.bg : 'rgba(3, 20, 43, 0.04)',
                          border: isHovered ? `1px solid ${meta.border}` : '1px solid rgba(0, 0, 0, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        }}>
                          <IconComponent size={20} style={{ color: isHovered ? meta.color : '#03142B', transition: 'color 0.3s ease' }} />
                        </div>

                        {/* Number Badge */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: isHovered ? 'rgba(239, 68, 68, 0.08)' : '#F8FAFC',
                          border: isHovered ? '1px solid rgba(239, 68, 68, 0.15)' : '1px solid rgba(0, 0, 0, 0.06)',
                          transition: 'all 0.3s ease',
                        }}>
                          <span style={{
                            fontFamily: "'Inter', monospace",
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: isHovered ? meta.color : '#64748B',
                          }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Impact Tag */}
                      <div style={{ marginBottom: '0.75rem', position: 'relative', zIndex: 2 }}>
                        <span style={{
                          display: 'inline-block',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: meta.color,
                          background: meta.bg,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '0.5rem',
                          border: `1px solid ${meta.border}`,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        }}>
                          {meta.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 style={{
                        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '1.08rem',
                        fontWeight: 700,
                        color: '#0A0A0C',
                        marginBottom: '0.85rem',
                        lineHeight: 1.45,
                        position: 'relative',
                        zIndex: 2,
                      }}>
                        {title}
                      </h3>

                      {/* Card Description */}
                      <p style={{
                        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '0.88rem',
                        color: '#52525B',
                        lineHeight: 1.85,
                        fontWeight: 400,
                        position: 'relative',
                        zIndex: 2,
                      }}>
                        {desc}
                      </p>
                    </div>

                    {/* Bottom Deliverable Fix Hint */}
                    <div style={{
                      marginTop: '1.5rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      color: isHovered ? '#0A0A0C' : '#94A3B8',
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontWeight: 600,
                      position: 'relative',
                      zIndex: 2,
                      transition: 'color 0.25s ease',
                    }}>
                      <span>{meta.fixHint}</span>
                      <ArrowUpRight size={14} style={{
                        transform: isHovered ? 'translate(2px, -2px)' : 'none',
                        transition: 'transform 0.25s ease',
                        color: isHovered ? meta.color : '#94A3B8',
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── PART 2: THE SHIFT BANNER (THE 50/50 REVENUE FORMULA) ── */}
        <div data-reveal style={{ marginBottom: 'clamp(4rem, 9vw, 6.5rem)' }}>
          <div
            onMouseMove={handleCardMouseMove}
            style={{
              padding: 'clamp(2.25rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)',
              backgroundColor: '#FFFFFF',
              borderRadius: '2rem',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 24px 60px -12px rgba(3, 20, 43, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            {/* Top gold/blue accent beam */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: 'linear-gradient(90deg, transparent 5%, #0B3275 30%, #D4AF37 50%, #0B3275 70%, transparent 95%)',
            }} />

            {/* Interactive Cursor Spotlight */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(500px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(212, 175, 55, 0.04), transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Pill Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: 'rgba(3, 20, 43, 0.05)', border: '1px solid rgba(3, 20, 43, 0.08)', marginBottom: '1.25rem' }}>
              <Zap size={13} style={{ color: '#D4AF37' }} />
              <span style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#03142B',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {isRTL ? 'هاوکێشەی فرۆشی ڕاستەقینە' : 'The Revenue Formula'}
              </span>
            </div>

            {/* Quote Typography */}
            <p style={{
              fontFamily: "'Sarchia Bokan', serif",
              fontSize: 'clamp(1.45rem, 3.2vw, 2.35rem)',
              fontWeight: 700,
              lineHeight: 1.4,
              color: '#0A0A0C',
              maxWidth: 780,
              margin: '0 auto 2.5rem',
              position: 'relative',
              zIndex: 1,
            }}>
              {t('pain_solution.shift_p1')}{' '}
              <span className="text-gold" style={{
                background: 'linear-gradient(135deg, #0B3275 0%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {t('pain_solution.shift_highlight')}
              </span>
              {' '}{t('pain_solution.shift_p2')}
            </p>

            {/* Interactive Visual 50 / 50 Split Equation */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1rem',
              maxWidth: 820,
              margin: '0 auto',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}>
              {/* Box 1: 50% Ads Engine */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '1.25rem',
                padding: '1.25rem 1.5rem',
                textAlign: isRTL ? 'right' : 'left',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(11, 50, 117, 0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.06em' }}>
                    {isRTL ? 'بەشی یەکەم' : 'Pillar 01'}
                  </span>
                  <span style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    fontFamily: "'Inter', sans-serif",
                    color: '#0B3275',
                  }}>
                    50%
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0A0C', marginBottom: '0.2rem' }}>
                  {isRTL ? 'سپۆنسەر و داتا' : 'Targeted Paid Ads'}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5 }}>
                  {isRTL ? 'کەمپەینی ورد بۆ کڕیاری ئامادە' : 'Targeting buyers on Meta & IG'}
                </div>
              </div>

              {/* Plus Sign */}
              <div style={{
                width: 36, height: 36,
                margin: '0 auto',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#D4AF37',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              }}>
                +
              </div>

              {/* Box 2: 50% Offer & Conversion */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '1.25rem',
                padding: '1.25rem 1.5rem',
                textAlign: isRTL ? 'right' : 'left',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.06em' }}>
                    {isRTL ? 'بەشی دووەم' : 'Pillar 02'}
                  </span>
                  <span style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    fontFamily: "'Inter', sans-serif",
                    color: '#B8860B',
                  }}>
                    50%
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0A0C', marginBottom: '0.2rem' }}>
                  {isRTL ? 'ئۆفەر و شێوازی قەناعەت' : 'Irresistible Offer & Funnel'}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5 }}>
                  {isRTL ? 'ڤیدیۆی فرۆش، پەڕەی کڕین و وەڵامی خێرا' : 'High-converting creative & funnel'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PART 3: THE SOLUTION SYSTEM (OUR 4-STEP REVENUE SYSTEM) ── */}
        {(activeTab === 'all' || activeTab === 'solutions') && (
          <div style={{ marginBottom: 'clamp(3rem, 7vw, 5rem)' }}>
            {/* Header */}
            <div data-reveal style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)', textAlign: 'center' }}>
              <span className="font-script-accent">
                {isRTL ? 'سیستەمی گەشەی ٤ هەنگاوی' : 'Our 4-Step Revenue Architecture'}
              </span>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <span className="badge" style={{
                  background: 'rgba(11, 50, 117, 0.08)',
                  borderColor: 'rgba(11, 50, 117, 0.2)',
                  color: '#0B3275',
                }}>
                  {t('pain_solution.system_badge')}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Sarchia Bokan', serif",
                fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)',
                fontWeight: 700, lineHeight: 1.25,
                color: '#0A0A0C', maxWidth: 640, margin: '0 auto',
              }}>
                {t('pain_solution.system_title_p1')}{' '}
                <span className="text-gold">{t('pain_solution.system_title_highlight')}</span>
              </h2>
            </div>

            {/* Solutions Grid with Interactive Luxury Blue/Gold Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
              gap: '1.5rem',
            }}>
              {safeSolutions.map(({ title, desc }, i) => {
                const meta = solutionMeta[i] || solutionMeta[0];
                const IconComponent = meta.icon;
                const isHovered = hoveredSolution === i;

                return (
                  <div
                    key={i}
                    data-reveal
                    onMouseEnter={() => setHoveredSolution(i)}
                    onMouseLeave={() => setHoveredSolution(null)}
                    onMouseMove={handleCardMouseMove}
                    style={{
                      position: 'relative',
                      background: '#FFFFFF',
                      borderRadius: '1.5rem',
                      padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                      border: isHovered ? `1px solid ${meta.color}` : '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: isHovered 
                        ? '0 24px 48px -12px rgba(11, 50, 117, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.04)' 
                        : '0 4px 20px -2px rgba(3, 20, 43, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
                      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'default',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* Top luxury shine line */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                      background: isHovered 
                        ? `linear-gradient(90deg, transparent, ${meta.color}, transparent)` 
                        : 'linear-gradient(90deg, transparent 10%, rgba(11, 50, 117, 0.15) 50%, transparent 90%)',
                      transition: 'background 0.3s ease',
                    }} />

                    {/* Interactive Cursor Spotlight Glow */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'radial-gradient(350px circle at var(--spotlight-x, -200px) var(--spotlight-y, -200px), rgba(11, 50, 117, 0.06), transparent 70%)',
                      pointerEvents: 'none',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.25s ease',
                    }} />

                    <div>
                      {/* Top Bar: Icon Squircle + Number Jewel Badge */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.5rem',
                        position: 'relative',
                        zIndex: 2,
                      }}>
                        {/* Jewel Icon */}
                        <div style={{
                          width: 44, height: 44,
                          borderRadius: '1rem',
                          background: isHovered ? meta.bg : 'rgba(11, 50, 117, 0.04)',
                          border: isHovered ? `1px solid ${meta.border}` : '1px solid rgba(11, 50, 117, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        }}>
                          <IconComponent size={20} style={{ color: isHovered ? meta.color : '#0B3275', transition: 'color 0.3s ease' }} />
                        </div>

                        {/* Number Badge */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: isHovered ? 'rgba(11, 50, 117, 0.08)' : '#F8FAFC',
                          border: isHovered ? '1px solid rgba(11, 50, 117, 0.2)' : '1px solid rgba(0, 0, 0, 0.06)',
                          transition: 'all 0.3s ease',
                        }}>
                          <span style={{
                            fontFamily: "'Inter', monospace",
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: isHovered ? meta.color : '#0B3275',
                          }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Stage Tag */}
                      <div style={{ marginBottom: '0.75rem', position: 'relative', zIndex: 2 }}>
                        <span style={{
                          display: 'inline-block',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: meta.color,
                          background: meta.bg,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '0.5rem',
                          border: `1px solid ${meta.border}`,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        }}>
                          {meta.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 style={{
                        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '1.08rem',
                        fontWeight: 700,
                        color: '#0A0A0C',
                        marginBottom: '0.85rem',
                        lineHeight: 1.45,
                        position: 'relative',
                        zIndex: 2,
                      }}>
                        {title}
                      </h3>

                      {/* Card Description */}
                      <p style={{
                        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '0.88rem',
                        color: '#52525B',
                        lineHeight: 1.85,
                        fontWeight: 400,
                        position: 'relative',
                        zIndex: 2,
                      }}>
                        {desc}
                      </p>
                    </div>

                    {/* Bottom Deliverable Outcome */}
                    <div style={{
                      marginTop: '1.5rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      color: isHovered ? meta.color : '#0B3275',
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontWeight: 600,
                      position: 'relative',
                      zIndex: 2,
                      transition: 'color 0.25s ease',
                    }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Check size={13} style={{ color: meta.color }} />
                        {meta.outcome}
                      </span>
                      <ArrowUpRight size={14} style={{
                        transform: isHovered ? 'translate(2px, -2px)' : 'none',
                        transition: 'transform 0.25s ease',
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── CALL TO ACTION ── */}
        <div data-reveal style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 6vw, 4rem)' }}>
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
            {t('pain_solution.cta_btn')}
          </button>
          <p style={{
            marginTop: '1.25rem',
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: '0.82rem',
            color: '#64748B',
          }}>
            {t('pain_solution.cta_desc')}
          </p>
        </div>

      </div>
    </section>
  );
}
