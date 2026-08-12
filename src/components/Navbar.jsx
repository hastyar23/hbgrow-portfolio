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
      {/* ── Floating Pill Navbar ── */}
      <header className={`navbar-pill${scrolled ? ' scrolled' : ''}`}>
        <nav
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.65rem 1.1rem',
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
              style={{
                height: 34, width: 34, objectFit: 'contain', borderRadius: '50%',
                border: '1px solid rgba(197,164,89,0.25)',
                boxShadow: '0 0 12px rgba(197,164,89,0.12)',
              }}
            />
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
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
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
              background: 'rgba(255,255,255,0.04)',
              padding: '0.3rem 0.6rem',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <Globe size={12} color="rgba(203,213,225,0.45)" />
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    localStorage.setItem('userSetLang', 'true');
                    i18n.changeLanguage(lang.code);
                  }}
                  style={{
                    background: i18n.language.startsWith(lang.code) ? 'rgba(197,164,89,0.15)' : 'none',
                    border: i18n.language.startsWith(lang.code) ? '1px solid rgba(197,164,89,0.3)' : '1px solid transparent',
                    color: i18n.language.startsWith(lang.code) ? '#C5A459' : 'rgba(203,213,225,0.5)',
                    fontSize: '0.68rem',
                    fontWeight: i18n.language.startsWith(lang.code) ? 700 : 500,
                    cursor: 'pointer',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '100px',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.05em',
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
              background: open ? 'rgba(197,164,89,0.1)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${open ? 'rgba(197,164,89,0.3)' : 'rgba(255,255,255,0.09)'}`,
              color: open ? '#C5A459' : 'rgba(255,255,255,0.85)',
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
            background: 'rgba(2,5,10,0.98)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            display: 'flex', flexDirection: 'column',
            padding: '5.5rem 1.5rem 2.5rem',
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
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  display: 'block',
                  transition: 'color 0.25s, padding-right 0.3s',
                  animationDelay: `${i * 60}ms`,
                }}
                onMouseEnter={e => { e.target.style.color = '#C5A459'; e.target.style.paddingRight = '0.5rem'; }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.85)'; e.target.style.paddingRight = '0'; }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                style={{
                  background: i18n.language.startsWith(lang.code) ? 'rgba(197,164,89,0.15)' : 'rgba(255,255,255,0.04)',
                  border: i18n.language.startsWith(lang.code) ? '1px solid rgba(197,164,89,0.35)' : '1px solid rgba(255,255,255,0.07)',
                  color: i18n.language.startsWith(lang.code) ? '#C5A459' : 'rgba(203,213,225,0.65)',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  fontWeight: i18n.language.startsWith(lang.code) ? 700 : 400,
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
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
