import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    { label: 'دەربارەمان', href: '#about' },
    { label: 'کارەکانمان', href: '#portfolio' },
    { label: 'پرۆسەکەمان', href: '#process' },
    { label: 'بەڵگەنامەکان', href: '#testimonials' },
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
              src="https://i.imgur.com/U9X57gP.png"
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '0.7rem 1.4rem', fontSize: '0.8rem' }}
          >
            کاتێک دیاریبکە
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'داخستنی مینیو' : 'کردنەوەی مینیو'}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.9)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
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
            <a
              href="#contact"
              className="btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              کاتێک دیاریبکە
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
