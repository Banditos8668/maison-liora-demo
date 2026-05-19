// Header.tsx — Glass navbar. Rada UX structure with Maison Lumière styling.
// Links: Home · Behandlungen · Über uns · Bewertungen · FAQ · Kontakt
// Glass: translucent at top → stronger background + shadow on scroll.
// Smooth scroll with scroll-margin-top offset handled in CSS.

import { useState, useEffect, useCallback } from 'react';
import { business } from '../../data/business';
import { useLang } from '../../context/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';

interface Props {
  onBook: () => void;
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Header({ onBook }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = useCallback(() => setMenuOpen(false), []);

  const navLinks = [
    { label: t.nav.home,       id: 'home' },
    { label: t.nav.treatments, id: 'behandlungen' },
    { label: t.nav.about,      id: 'ueber-uns' },
    { label: t.nav.reviews,    id: 'bewertungen' },
    { label: t.nav.faq,        id: 'faq' },
    { label: t.nav.contact,    id: 'kontakt' },
  ];

  const handleNavClick = (id: string) => {
    close();
    smoothScrollTo(id);
  };

  const handleBook = () => {
    close();
    onBook();
  };

  return (
    <header
      className={`ml-header ${scrolled ? 'ml-header--scrolled' : ''}`}
      role="banner"
    >
      <div className="container ml-header__inner">

        {/* Logo */}
        <a
          href="#home"
          className="ml-header__logo"
          onClick={e => { e.preventDefault(); handleNavClick('home'); }}
          aria-label="Maison Lumière — zur Startseite"
        >
          <span className="ml-header__logo-name">{business.name}</span>
          <span className="ml-header__logo-sub">{business.tagline}</span>
        </a>

        {/* Desktop nav */}
        <nav className="ml-header__nav" aria-label="Hauptnavigation">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="ml-header__nav-link"
              onClick={e => { e.preventDefault(); handleNavClick(link.id); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="ml-header__actions">
          <LanguageToggle />
          <button
            className="btn btn-primary btn-sm ml-header__book-btn"
            onClick={handleBook}
            type="button"
          >
            {t.nav.book}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-header__burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          aria-controls="ml-mobile-menu"
          type="button"
        >
          <span className={`ml-burger ${menuOpen ? 'ml-burger--open' : ''}`} />
        </button>
      </div>

      {/* Mobile menu — full-screen overlay */}
      <div
        id="ml-mobile-menu"
        className={`ml-header__mobile ${menuOpen ? 'ml-header__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Hauptnavigation"
      >

        {/* ── Top bar: brand name + close button ── */}
        <div className="ml-mob__top">
          <span className="ml-mob__brand">{business.name}</span>
          <button
            className="ml-mob__close"
            onClick={close}
            aria-label="Menü schliessen"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Scrollable body: nav links + language toggle ── */}
        <div className="ml-mob__body">
          <nav aria-label="Mobile Navigation">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="ml-header__mobile-link"
                onClick={e => { e.preventDefault(); handleNavClick(link.id); }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-mob__lang">
            <LanguageToggle />
          </div>
        </div>

        {/* ── Pinned bottom: booking CTA + phone ── */}
        <div className="ml-mob__ctas">
          <button
            className="btn btn-primary ml-mob__cta-book"
            onClick={handleBook}
            type="button"
          >
            {t.nav.book}
          </button>
          <a
            href={`tel:${business.contact.phoneRaw}`}
            className="btn btn-ghost ml-mob__cta-phone"
            onClick={close}
          >
            {business.contact.phone}
          </a>
        </div>

      </div>
    </header>
  );
}
