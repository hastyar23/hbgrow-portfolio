import { MessageSquare, PhoneCall, Sparkles, Rocket, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function Process() {
  const { openSchedule } = useSchedule();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  const steps = [
    { 
      num: t('process.steps.0.num'), 
      icon: <Sparkles size={18} />, 
      title: t('process.steps.0.title'), 
      duration: t('process.steps.0.duration'), 
      desc: t('process.steps.0.desc') 
    },
    { 
      num: t('process.steps.1.num'), 
      icon: <PhoneCall size={18} />, 
      title: t('process.steps.1.title'), 
      duration: t('process.steps.1.duration'), 
      desc: t('process.steps.1.desc') 
    },
    { 
      num: t('process.steps.2.num'), 
      icon: <MessageSquare size={18} />, 
      title: t('process.steps.2.title'), 
      duration: t('process.steps.2.duration'), 
      desc: t('process.steps.2.desc') 
    },
    { 
      num: t('process.steps.3.num'), 
      icon: <Rocket size={18} />, 
      title: t('process.steps.3.title'), 
      duration: t('process.steps.3.duration'), 
      desc: t('process.steps.3.desc') 
    },
  ];

  const paymentLogos = [
    { name: 'First Iraqi Bank (FIB)', src: '/images/fib_official.svg' },
    { name: 'FastPay', src: '/images/fastpay_darkmode.png' },
    { name: 'AsiaPay', src: '/images/asiapay_official.png' },
    { name: 'Qi Card', src: '/images/qi_official.svg' },
  ];

  return (
    <section id="process" style={{ padding: 'clamp(4rem, 10vw, 8rem) 0', position: 'relative' }}>

      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(3, 20, 43, 0.03) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="section-wrap">

        {/* ── Header with Statiq-style Handwritten Micro-Tag ── */}
        <div data-reveal style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto clamp(3rem, 7vw, 5rem)' }}>
          <span className="font-script-accent">
            {isRTL ? 'پرۆسەی دەستپێکردنی خێرا' : 'Frictionless Onboarding'}
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="badge">{t('process.badge')}</span>
          </div>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700, lineHeight: 1.25, color: '#0A0A0C',
            marginBottom: '1rem',
          }}>
            {t('process.title_p1')}{' '}
            <span className="text-gold">{t('process.title_highlight')}</span>
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: '#52525B', lineHeight: 2, fontWeight: 400,
          }}>
            {t('process.subtitle')}
          </p>
        </div>

        {/* ── 4 Steps Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(3rem, 7vw, 5rem)',
        }}>
          {steps.map(({ num, icon, title, duration, desc }, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card"
              style={{
                padding: 'clamp(1.75rem, 4vw, 2.25rem) clamp(1.25rem, 3vw, 1.75rem)',
                position: 'relative',
                overflow: 'hidden',
                transitionDelay: `${i * 80}ms`,
                border: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Large Ghost Number */}
                <span className="step-num">{num}</span>

                {/* Icon badge */}
                <div style={{
                  width: 44, height: 44, borderRadius: '0.875rem',
                  background: 'rgba(3, 20, 43, 0.05)',
                  border: '1px solid rgba(3, 20, 43, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#0B3275',
                  marginBottom: '1.25rem',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 8px rgba(3, 20, 43, 0.04)',
                  position: 'relative', zIndex: 1,
                }}>
                  {icon}
                </div>

                {/* Duration label */}
                <div style={{
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.68rem', textTransform: 'uppercase',
                  color: '#0B3275',
                  marginBottom: '0.65rem', fontWeight: 700,
                  position: 'relative', zIndex: 1,
                }}>
                  {duration}
                </div>

                {/* Step Title */}
                <h3 style={{
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '1rem', fontWeight: 700,
                  color: '#0A0A0C', marginBottom: '0.75rem', lineHeight: 1.45,
                  position: 'relative', zIndex: 1,
                }}>
                  {title}
                </h3>

                {/* Step Description */}
                <p style={{
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  fontSize: '0.85rem', color: '#52525B',
                  lineHeight: 1.85, fontWeight: 400,
                  position: 'relative', zIndex: 1,
                }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Official Iraqi Fintech Payment Trust Section ── */}
        <div data-reveal style={{
          padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3.5vw, 2.5rem)',
          borderRadius: '1.5rem',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          maxWidth: 960,
          margin: '0 auto',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0A0A0C', fontWeight: 700, fontSize: '0.95rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <ShieldCheck size={18} className="text-[#0B3275]" style={{ flexShrink: 0 }} />
            <span>{t('process.payment_title')}</span>
            <span style={{ color: '#52525B', fontWeight: 500, fontSize: '0.85rem' }}>
              {t('process.payment_methods')}
            </span>
          </div>

          {/* Payment Badges Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.6rem, 2vw, 1rem)',
            width: '100%',
          }}>
            {paymentLogos.map((brand) => (
              <div
                key={brand.name}
                style={{
                  height: 44,
                  padding: '0.45rem clamp(0.75rem, 2vw, 1.15rem)',
                  borderRadius: '0.85rem',
                  backgroundColor: '#03142B',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(3, 20, 43, 0.15)',
                  transition: 'transform 0.25s ease',
                  flexShrink: 0,
                }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  style={{
                    height: 22,
                    width: 'auto',
                    maxWidth: 90,
                    objectFit: 'contain',
                  }}
                  loading="lazy"
                />
              </div>
            ))}
            <div style={{
              height: 44,
              padding: '0.45rem clamp(0.75rem, 2vw, 1.15rem)',
              borderRadius: '0.85rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: 'clamp(0.75rem, 2vw, 0.82rem)',
              fontWeight: 700,
              color: '#03142B',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              flexShrink: 0,
            }}>
              🏛️ {isRTL ? 'گواستنەوەی بانکی (Bank Transfer)' : 'Direct Bank Transfer'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
