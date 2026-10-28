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

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.packages'), href: '#packages' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.testimonials'), href: '#testimonials' },
  ];

  const langs = [
    { code: 'ku', label: 'KU' },
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <header className={`navbar-pill${scrolled ? ' scrolled' : ''}`}>
        <nav
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(0.5rem, 1.5vw, 0.65rem) clamp(0.75rem, 2.5vw, 1.1rem)',
            gap: '0.75rem',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', flexShrink: 0 }}
          >
            <img
              src="/images/optimized/U9X57gP.avif"
              alt="HBgrow Agency Logo"
              style={{
                height: 34, width: 34, objectFit: 'contain', borderRadius: '50%',
                border: '1px solid rgba(3, 20, 43, 0.15)',
                boxShadow: '0 0 12px rgba(3, 20, 43, 0.10)',
              }}
            />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              color: '#0A0A0C',
              display: 'inline-flex',
              alignItems: 'center',
            }}>
              HB<span style={{ color: '#0B3275' }}>grow</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul
            className="hidden md:flex"
            style={{ gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
          >
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link"
                  style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right: Language + CTA */}
          <div className="hidden md:flex items-center" style={{ gap: '0.75rem' }}>
            {/* Language Switcher */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              background: 'rgba(0, 0, 0, 0.04)',
              padding: '0.3rem 0.6rem',
              borderRadius: '100px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
            }}>
              <Globe size={12} color="#0B3275" />
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    localStorage.setItem('userSetLang', 'true');
                    i18n.changeLanguage(lang.code);
                  }}
                  style={{
                    background: i18n.language.startsWith(lang.code) ? 'rgba(3, 20, 43, 0.08)' : 'none',
                    border: i18n.language.startsWith(lang.code) ? '1px solid rgba(3, 20, 43, 0.25)' : '1px solid transparent',
                    color: i18n.language.startsWith(lang.code) ? '#03142B' : '#64748B',
                    boxShadow: i18n.language.startsWith(lang.code) ? '0 0 8px rgba(3, 20, 43, 0.08)' : 'none',
                    fontSize: '0.68rem',
                    fontWeight: i18n.language.startsWith(lang.code) ? 700 : 500,
                    cursor: 'pointer',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '100px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.78rem' }}
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
              background: open ? 'rgba(3, 20, 43, 0.08)' : 'rgba(0, 0, 0, 0.04)',
              border: `1px solid ${open ? 'rgba(3, 20, 43, 0.2)' : 'rgba(0, 0, 0, 0.08)'}`,
              color: '#0A0A0C',
              cursor: 'pointer',
              padding: '0.45rem',
              borderRadius: '0.625rem',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              flexShrink: 0,
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {open && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 190,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            display: 'flex', flexDirection: 'column',
            padding: '5.5rem clamp(1.25rem, 4vw, 2rem) 2.5rem',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            animation: 'fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          {/* Mobile Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
            {links.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '1.5rem', fontWeight: 600,
                  color: '#475569',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
                  display: 'block',
                  transition: 'color 0.25s, padding-right 0.3s',
                  animationDelay: `${i * 60}ms`,
                }}
                onMouseEnter={e => { e.target.style.color = '#03142B'; e.target.style.paddingRight = '0.5rem'; }}
                onMouseLeave={e => { e.target.style.color = '#475569'; e.target.style.paddingRight = '0'; }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                style={{
                  background: i18n.language.startsWith(lang.code) ? 'rgba(3, 20, 43, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  border: i18n.language.startsWith(lang.code) ? '1px solid rgba(3, 20, 43, 0.25)' : '1px solid rgba(0, 0, 0, 0.08)',
                  color: i18n.language.startsWith(lang.code) ? '#03142B' : '#64748B',
                  boxShadow: i18n.language.startsWith(lang.code) ? '0 0 10px rgba(3, 20, 43, 0.1)' : 'none',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  fontWeight: i18n.language.startsWith(lang.code) ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
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
            style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', width: '100%', fontSize: '1rem', padding: '1rem 2rem' }}
          >
            {t('nav.cta')}
          </a>
        </div>
      )}
    </>
  );
}
