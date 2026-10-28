import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function FAQ() {
  const { openSchedule } = useSchedule();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  const rawFaqs = t('faq.items', { returnObjects: true });
  const faqList = Array.isArray(rawFaqs) ? rawFaqs : [];

  // Active accordion item index (first item open by default)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" style={{ padding: 'clamp(4rem, 10vw, 8rem) 0', position: 'relative' }}>
      
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)',
        width: 'min(850px, 95%)', height: 400,
        background: 'radial-gradient(ellipse, rgba(3, 20, 43, 0.02) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="section-wrap" style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* ── Section Header with Statiq-style Handwritten Micro-Tag ── */}
        <div data-reveal style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <span className="font-script-accent">
            {isRTL ? 'پرسیارەکانت، وەڵامە ڕوونەکانمان' : 'You asked. We answered.'}
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="badge">
              <HelpCircle size={12} className="text-[#0B3275]" />
              {t('faq.badge')}
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Sarchia Bokan', serif",
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700, lineHeight: 1.25,
            color: '#0A0A0C', marginBottom: '0.85rem',
          }}>
            {t('faq.title')}
          </h2>
        </div>

        {/* ── Accordion List ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                data-reveal
                style={{
                  backgroundColor: '#FFFFFF',
                  border: isOpen ? '1px solid #03142B' : '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isOpen 
                    ? '0 12px 35px -8px rgba(3, 20, 43, 0.08)' 
                    : '0 2px 10px rgba(0, 0, 0, 0.02)',
                }}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleItem(idx)}
                  style={{
                    width: '100%',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                    fontSize: 'clamp(0.92rem, 2.2vw, 1.1rem)',
                    fontWeight: 700,
                    color: isOpen ? '#0A0A0C' : '#1E293B',
                    lineHeight: 1.5,
                  }}>
                    {item.q}
                  </span>
                  <div style={{
                    width: 32, height: 32,
                    borderRadius: '50%',
                    backgroundColor: isOpen ? '#03142B' : 'rgba(0, 0, 0, 0.04)',
                    color: isOpen ? '#FFFFFF' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease, background-color 0.2s ease',
                  }}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div style={{
                    padding: '0 clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 1.5rem)',
                    borderTop: '1px solid rgba(0, 0, 0, 0.04)',
                    paddingTop: '0.85rem',
                    animation: 'fadeInUp 0.25s ease-out',
                  }}>
                    <p style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                      color: '#475569',
                      lineHeight: 1.95,
                      fontWeight: 400,
                      margin: 0,
                    }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
