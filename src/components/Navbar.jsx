import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.testimonials'), href: '#testimonials' },
  ];

  const langs = [
    { code: 'ku', label: 'KU' },
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          background: scrolled ? 'rgba(2,5,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <nav
          className="section-wrap"
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem', paddingBottom: '1rem',
            gap: '1rem',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
          >
            <img
              src="/images/optimized/U9X57gP.avif"
              alt="HBgrow Agency Logo"
              style={{ height: 40, width: 40, objectFit: 'contain', borderRadius: '50%' }}
            />
          </a>

          {/* Desktop Links */}
          <ul
            className="hidden md:flex"
            style={{ gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}
          >
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    fontSize: '0.8rem', fontWeight: 500,
                    color: 'rgba(203,213,225,0.72)',
                    textDecoration: 'none', letterSpacing: '0.04em',
                    transition: 'color 0.3s',
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                  }}
                  onMouseEnter={e => e.target.style.color = '#C5A459'}
                  onMouseLeave={e => e.target.style.color = 'rgba(203,213,225,0.72)'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center" style={{ gap: '0.5rem', background: 'rgba(255,255,255,0.03)', padding: '0.25rem 0.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Globe size={14} color="rgba(203,213,225,0.6)" />
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: i18n.language.startsWith(lang.code) ? '#C5A459' : 'rgba(203,213,225,0.5)',
                  fontSize: '0.75rem',
                  fontWeight: i18n.language.startsWith(lang.code) ? 700 : 500,
                  cursor: 'pointer',
                  padding: '0.25rem',
                  transition: 'all 0.2s'
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.8rem' }}
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? t('nav.close_menu') : t('nav.open_menu')}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.9)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s',
              flexShrink: 0,
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: open ? '500px' : 0,
            transition: 'max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            background: 'rgba(2,5,10,0.97)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            borderTop: open ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          }}
        >
          <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: '1rem', fontWeight: 500,
                    color: 'rgba(203,213,225,0.85)',
                    textDecoration: 'none',
                    padding: '0.875rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    display: 'block',
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#C5A459'}
                  onMouseLeave={e => e.target.style.color = 'rgba(203,213,225,0.85)'}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                  style={{
                    background: i18n.language.startsWith(lang.code) ? 'rgba(197, 164, 89, 0.15)' : 'rgba(255,255,255,0.03)',
                    border: i18n.language.startsWith(lang.code) ? '1px solid rgba(197, 164, 89, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                    color: i18n.language.startsWith(lang.code) ? '#C5A459' : 'rgba(203,213,225,0.7)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: i18n.language.startsWith(lang.code) ? 600 : 400,
                    cursor: 'pointer',
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
