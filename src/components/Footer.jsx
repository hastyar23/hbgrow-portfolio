import { Mail, MapPin, Phone } from 'lucide-react';
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

const navLinks = [
  { label: 'دەربارەمان', href: '#about' },
  { label: 'کارەکانمان', href: '#portfolio' },
  { label: 'پرۆسەکەمان', href: '#process' },
  { label: 'بەڵگەنامەکان', href: '#testimonials' },
  { label: 'پەیوەندی', href: '#contact' },
];



export default function Footer() {
  const { openSchedule } = useSchedule();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(2,5,10,0.65)',
      backdropFilter: 'blur(12px)',
    }}>
      <div className="section-wrap" style={{ padding: 'clamp(3rem, 8vw, 5.5rem) 1.25rem clamp(2rem, 5vw, 3.5rem)' }}>

        {/* Grid — uses CSS class for responsiveness */}
        <div className="footer-grid" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
              <img
                src="/images/optimized/U9X57gP.avif"
                alt="HBgrow Agency Logo"
                style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: '50%' }}
              />
            </div>
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: '0.82rem', color: 'rgba(203,213,225,0.5)',
              lineHeight: 2, fontWeight: 300, maxWidth: 260,
            }}>
              ئەیجێنسی گلۆباڵی سۆشیاڵ میدیا و مارکێتینگی گەشە. براندەکەت شایەنی کڕیارە.
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
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(203,213,225,0.55)', textDecoration: 'none',
                    transition: 'all 0.3s',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#C5A459';
                    e.currentTarget.style.borderColor = 'rgba(197,164,89,0.3)';
                    e.currentTarget.style.background = 'rgba(197,164,89,0.06)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(203,213,225,0.55)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: '0.65rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(203,213,225,0.45)',
              fontWeight: 700, marginBottom: '1.25rem',
            }}>
              بەستەرەکان
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Noto Kufi Arabic', sans-serif",
                      fontSize: '0.875rem', color: 'rgba(203,213,225,0.55)',
                      textDecoration: 'none', fontWeight: 400,
                      transition: 'color 0.25s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#C5A459'}
                    onMouseLeave={e => e.target.style.color = 'rgba(203,213,225,0.55)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: '0.65rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(203,213,225,0.45)',
              fontWeight: 700, marginBottom: '1.25rem',
            }}>
              پەیوەندی
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
                  boxShadow: '0 0 24px -6px rgba(197,164,89,0.5)',
                  borderRadius: '12px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <WhatsAppIcon size={16} style={{ flexShrink: 0 }} />
                کاتێک دیاریبکە بۆ گفتوگۆکردن
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.75rem', color: 'rgba(203,213,225,0.3)',
            fontWeight: 300,
          }}>
            © {new Date().getFullYear()} HBgrow Agency. هەموو مافەکان پارێزراون.
          </p>
          <p style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: '0.72rem', color: 'rgba(203,213,225,0.1)',
            fontWeight: 300,
          }}>
            دروستکراوە بە ئارەزووی زۆر لەلایەن تیمی HBgrow
          </p>
        </div>
      </div>
    </footer>
  );
}
