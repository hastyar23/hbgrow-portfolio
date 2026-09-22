import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Globe, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const socialLinks = [
  { href: 'https://www.instagram.com/hbgrow.agency/', icon: <InstagramIcon />, label: 'Instagram' },
  { href: 'https://www.facebook.com/hbgrowagency', icon: <FacebookIcon />, label: 'Facebook' },
];

const navLinksKeys = [
  { labelKey: 'footer.nav_about', href: '#about' },
  { labelKey: 'footer.nav_portfolio', href: '#portfolio' },
  { labelKey: 'footer.nav_process', href: '#process' },
  { labelKey: 'footer.nav_testimonials', href: '#testimonials' },
  { labelKey: 'footer.nav_contact', href: '#contact' },
];

function useWorldClocks() {
  const [times, setTimes] = useState({ erbil: '', dubai: '', london: '' });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimes({
        erbil: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Baghdad', hour: '2-digit', minute: '2-digit', hour12: true }),
        dubai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', hour12: true }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: true }),
      });
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  return times;
}

export default function Footer() {
  const { openSchedule } = useSchedule();
  const { t } = useTranslation();
  const clocks = useWorldClocks();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'linear-gradient(180deg, rgba(4,7,17,0.7) 0%, rgba(2,3,7,0.98) 100%)',
      backdropFilter: 'blur(36px)',
      position: 'relative',
    }}>
      <div className="section-wrap" style={{ padding: 'clamp(3.5rem, 8vw, 6rem) 1.25rem clamp(2rem, 5vw, 3.5rem)' }}>

        {/* 2026 World Clocks Agency Banner */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
          padding: '1.25rem 1.75rem',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '1.25rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="radar-emerald" />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#34D399', letterSpacing: '0.03em' }}>
              {t('footer.status') || 'All Systems Operational'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="world-clock-badge">
              <span>📍 Erbil</span>
              <span style={{ color: '#F2E5BC', fontWeight: 700 }}>{clocks.erbil || '12:00 PM'}</span>
            </div>
            <div className="world-clock-badge">
              <span>📍 Dubai</span>
              <span style={{ color: '#F2E5BC', fontWeight: 700 }}>{clocks.dubai || '01:00 PM'}</span>
            </div>
            <div className="world-clock-badge">
              <span>📍 London</span>
              <span style={{ color: '#F2E5BC', fontWeight: 700 }}>{clocks.london || '09:00 AM'}</span>
            </div>
          </div>
        </div>

        {/* Grid — uses CSS class for responsiveness */}
        <div className="footer-grid" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
              <img
                src="/images/optimized/U9X57gP.avif"
                alt="HBgrow Agency Logo"
                style={{
                  height: 46, width: 46, objectFit: 'contain', borderRadius: '50%',
                  border: '1px solid rgba(197,164,89,0.3)',
                  boxShadow: '0 0 20px rgba(197,164,89,0.2)',
                }}
              />
              <span style={{ fontFamily: "'Outfit', 'Sarchia Bokan', serif", fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                HBgrow<span className="text-gold">.</span>
              </span>
            </div>
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: '0.84rem', color: 'rgba(203,213,225,0.6)',
              lineHeight: 2, fontWeight: 300, maxWidth: 280,
            }}>
              {t('footer.brand_desc')}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: '0.75rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(203,213,225,0.7)', textDecoration: 'none',
                    transition: 'all 0.3s',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#F2E5BC';
                    e.currentTarget.style.borderColor = 'rgba(197,164,89,0.5)';
                    e.currentTarget.style.background = 'rgba(197,164,89,0.12)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(203,213,225,0.7)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: '0.68rem',
              textTransform: 'uppercase', color: 'rgba(203,213,225,0.5)',
              fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em',
            }}>
              {t('footer.links_title')}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {navLinksKeys.map(({ labelKey, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.875rem', color: 'rgba(203,213,225,0.65)',
                      textDecoration: 'none', fontWeight: 400,
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => { e.target.style.color = '#F2E5BC'; e.target.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(203,213,225,0.65)'; e.target.style.paddingLeft = '0'; }}
                  >
                    {t(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: '0.68rem',
              textTransform: 'uppercase', color: 'rgba(203,213,225,0.5)',
              fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em',
            }}>
              {t('footer.contact_title')}
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <button 
                onClick={openSchedule} 
                className="btn-primary" 
                style={{ 
                  fontSize: '0.88rem', 
                  padding: '0.85rem 1.5rem', 
                  border: 'none', 
                  cursor: 'pointer', 
                  width: '100%',
                  maxWidth: '280px',
                  justifyContent: 'center',
                  boxShadow: '0 0 32px -4px rgba(197,164,89,0.45)',
                  borderRadius: '100px',
                }}
              >
                <WhatsAppIcon size={16} style={{ flexShrink: 0 }} />
                {t('footer.btn_schedule')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.75rem', color: 'rgba(203,213,225,0.4)',
            fontWeight: 300,
          }}>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.75rem', color: 'rgba(203,213,225,0.3)',
            fontWeight: 300,
          }}>
            {t('footer.made_by')}
          </p>
        </div>
      </div>
    </footer>
  );
}
