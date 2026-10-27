import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Sparkles, ShieldCheck, ArrowRight, ArrowLeft, Star, AlertCircle } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function Packages() {
  const { openSchedule } = useSchedule();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  const rawPackages = t('packages.items', { returnObjects: true });
  const packagesList = Array.isArray(rawPackages) ? rawPackages : [];

  return (
    <section id="packages" style={{ padding: 'clamp(5rem, 12vw, 9rem) 0', position: 'relative' }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 'min(900px, 95vw)', height: 450,
        background: 'radial-gradient(ellipse, rgba(3, 20, 43, 0.03) 0%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />

      <div className="section-wrap">

        {/* ── Section Header ── */}
        <div data-reveal style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto clamp(3rem, 7vw, 5rem)' }}>
          <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <Sparkles size={12} className="text-[#0B3275]" />
            {t('packages.badge')}
          </span>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
            fontWeight: 700, lineHeight: 1.25,
            color: '#0A0A0C', marginBottom: '1rem',
          }}>
            {t('packages.title')}
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: '#52525B', lineHeight: 1.9,
          }}>
            {t('packages.subtitle')}
          </p>
        </div>

        {/* ── 3 Pricing Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
        }}>
          {packagesList.map((pkg, i) => {
            const isFeatured = pkg.isPopular;
            return (
              <div
                key={pkg.id || i}
                data-reveal
                className={isFeatured ? "glass-card-featured" : "glass-card"}
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '1.5rem',
                  backgroundColor: '#FFFFFF',
                  border: isFeatured ? '2px solid #03142B' : '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: isFeatured
                    ? '0 20px 50px -10px rgba(3, 20, 43, 0.16), 0 0 0 1px rgba(3, 20, 43, 0.1)'
                    : '0 8px 25px -5px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  transform: isFeatured ? 'scale(1.02)' : 'none',
                  zIndex: isFeatured ? 2 : 1,
                  transition: 'all 0.35s ease',
                }}
              >
                {/* Popular or Tier Badge */}
                {pkg.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-0.75rem',
                    [isRTL ? 'left' : 'right']: '1.5rem',
                    background: isFeatured ? 'linear-gradient(135deg, #020C1B 0%, #041E42 50%, #0A2E66 100%)' : 'rgba(3, 20, 43, 0.08)',
                    color: isFeatured ? '#FFFFFF' : '#03142B',
                    padding: '0.25rem 0.85rem',
                    borderRadius: '100px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    boxShadow: isFeatured ? '0 4px 15px rgba(3, 20, 43, 0.25)' : 'none',
                    border: isFeatured ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(3, 20, 43, 0.15)',
                    whiteSpace: 'nowrap',
                  }}>
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Tagline & Name */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: isFeatured ? '#0B3275' : '#64748B',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}>
                      {pkg.tagline}
                    </span>
                    <h3 style={{
                      fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#0A0A0C',
                    }}>
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div style={{
                    paddingBottom: '1.25rem',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                      <span style={{
                        fontFamily: "'Outfit', monospace",
                        fontSize: 'clamp(2.2rem, 5vw, 2.85rem)',
                        fontWeight: 900,
                        color: '#0A0A0C',
                        lineHeight: 1,
                      }}>
                        {pkg.price}
                      </span>
                      <span style={{
                        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#64748B',
                      }}>
                        · {pkg.period}
                      </span>
                    </div>
                    <p style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.85rem',
                      color: '#52525B',
                      marginTop: '0.85rem',
                      lineHeight: 1.8,
                    }}>
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                  }}>
                    {Array.isArray(pkg.features) && pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.875rem',
                        color: '#334155',
                        lineHeight: 1.6,
                        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      }}>
                        <div style={{
                          width: 20, height: 20,
                          borderRadius: '50%',
                          background: isFeatured ? '#03142B' : 'rgba(3, 20, 43, 0.08)',
                          color: isFeatured ? '#FFFFFF' : '#03142B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 2,
                        }}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Special Incentive Offer (e.g. on Sales Launch) */}
                  {pkg.specialOffer && (
                    <div style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '0.85rem',
                      backgroundColor: 'rgba(3, 20, 43, 0.04)',
                      border: '1px solid rgba(3, 20, 43, 0.1)',
                      marginBottom: '1.5rem',
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                      color: '#03142B',
                      fontWeight: 600,
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    }}>
                      {pkg.specialOffer}
                    </div>
                  )}
                </div>

                {/* Card CTA Button */}
                <div style={{ paddingTop: '1rem' }}>
                  <button
                    onClick={openSchedule}
                    className={isFeatured ? "btn-primary" : "btn-ghost"}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.92rem',
                      padding: '0.95rem 1.5rem',
                      border: isFeatured ? 'none' : '1px solid rgba(0, 0, 0, 0.15)',
                      cursor: 'pointer',
                    }}
                  >
                    <WhatsAppIcon size={16} />
                    <span>{pkg.cta}</span>
                    {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Important Notice Banner (تێبینی گرنگ) ── */}
        <div data-reveal style={{
          padding: '1.5rem 2rem',
          borderRadius: '1.25rem',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          marginBottom: 'clamp(3rem, 7vw, 5rem)',
          maxWidth: 960,
          margin: '0 auto clamp(3rem, 7vw, 5rem)',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(217, 119, 6, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#D97706', flexShrink: 0, marginTop: 2,
          }}>
            <AlertCircle size={20} />
          </div>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: '0.9rem',
            color: '#475569',
            lineHeight: 1.85,
            margin: 0,
            fontWeight: 500,
          }}>
            {t('packages.notice')}
          </p>
        </div>

        {/* ── Section 5: 14-Day Performance Guarantee Card (گەرەنتی) ── */}
        <div data-reveal style={{
          padding: 'clamp(2rem, 6vw, 3.5rem) clamp(1.5rem, 5vw, 3.5rem)',
          borderRadius: '1.75rem',
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
          border: '1px solid rgba(0, 0, 0, 0.09)',
          boxShadow: '0 20px 60px -15px rgba(3, 20, 43, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)',
          position: 'relative',
          overflow: 'hidden',
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {/* Top subtle shine line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, transparent 10%, rgba(3, 20, 43, 0.3) 50%, transparent 90%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '0.85rem',
                background: 'rgba(3, 20, 43, 0.06)',
                border: '1px solid rgba(3, 20, 43, 0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#0B3275', flexShrink: 0,
              }}>
                <ShieldCheck size={24} />
              </div>
              <span className="badge" style={{ padding: '0.35rem 0.9rem' }}>
                {t('packages.guarantee_badge')}
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Sarchia Bokan', serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              fontWeight: 700,
              color: '#0A0A0C',
              lineHeight: 1.3,
            }}>
              {t('packages.guarantee_title')}
            </h3>

            <p style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: 'clamp(0.95rem, 2vw, 1.08rem)',
              color: '#334155',
              lineHeight: 2,
              fontWeight: 500,
            }}>
              {t('packages.guarantee_desc')}
            </p>

            <p style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: '0.85rem',
              color: '#64748B',
              lineHeight: 1.7,
              margin: 0,
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              paddingTop: '1rem',
            }}>
              {t('packages.guarantee_condition')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
