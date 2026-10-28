import { Mail, MapPin, Phone } from 'lucide-react';
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



export default function Footer() {
  const { openSchedule } = useSchedule();
  const { t } = useTranslation();

  return (
    <footer style={{
      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      background: '#F8F9FA',
      backdropFilter: 'blur(12px)',
      padding: 'clamp(3rem, 7vw, 5rem) 0 clamp(2rem, 5vw, 3.5rem)',
    }}>
      <div className="section-wrap">

        {/* Grid — uses CSS class for responsiveness */}
        <div className="footer-grid" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
              <img
                src="/images/optimized/U9X57gP.avif"
                alt="HBgrow Agency Logo"
                style={{
                  height: 44, width: 44,
                  objectFit: 'contain',
                  borderRadius: '50%',
                  border: '1px solid rgba(3, 20, 43, 0.15)',
                  boxShadow: '0 0 12px rgba(3, 20, 43, 0.10)'
                }}
              />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#0A0A0C',
                letterSpacing: '-0.02em',
              }}>
                HB<span style={{ color: '#0B3275' }}>grow</span>
              </span>
            </div>
            <p style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: '0.82rem', color: '#52525B',
              lineHeight: 2, fontWeight: 400, maxWidth: 260,
            }}>
              {t('footer.brand_desc')}
            </p>
            <div style={{ display: 'flex', gap: '0.625rem', marginTop: '1.5rem' }}>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 34, height: 34, borderRadius: '0.5rem',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#475569', textDecoration: 'none',
                    transition: 'all 0.3s',
                    background: '#FFFFFF',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#03142B';
                    e.currentTarget.style.borderColor = '#03142B';
                    e.currentTarget.style.background = '#F1F5F9';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.background = '#FFFFFF';
                  }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: '0.65rem',
              textTransform: 'uppercase', color: '#64748B',
              fontWeight: 700, marginBottom: '1.25rem',
            }}>
              {t('footer.links_title')}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {navLinksKeys.map(({ labelKey, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.875rem', color: '#475569',
                      textDecoration: 'none', fontWeight: 400,
                      transition: 'color 0.25s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#03142B'}
                    onMouseLeave={e => e.target.style.color = '#475569'}
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
              fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: '0.65rem',
              textTransform: 'uppercase', color: '#64748B',
              fontWeight: 700, marginBottom: '1.25rem',
            }}>
              {t('footer.contact_title')}
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <button 
                onClick={openSchedule} 
                className="btn-primary" 
                style={{ 
                  fontSize: '0.82rem', 
                  padding: '0.75rem 1.25rem', 
                  border: 'none', 
                  cursor: 'pointer', 
                  width: '100%',
                  maxWidth: '280px',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(3, 20, 43, 0.25)',
                  borderRadius: '12px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <WhatsAppIcon size={16} style={{ flexShrink: 0 }} />
                {t('footer.btn_schedule')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: '0.75rem', color: '#64748B',
            fontWeight: 400,
          }}>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
            fontSize: '0.72rem', color: '#94A3B8',
            fontWeight: 400,
          }}>
            {t('footer.made_by')}
          </p>
        </div>
      </div>
    </footer>
  );
}
