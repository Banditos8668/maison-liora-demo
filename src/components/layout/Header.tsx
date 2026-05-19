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

      {/* Mobile menu */}
      <div
        id="ml-mobile-menu"
        className={`ml-header__mobile ${menuOpen ? 'ml-header__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile Navigation">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="ml-header__mobile-link"
              onClick={e => { e.preventDefault(); handleNavClick(link.id); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-header__mobile-footer">
          <div className="ml-header__mobile-lang">
            <LanguageToggle />
          </div>
          <button
            className="btn btn-primary ml-header__mobile-cta"
            onClick={handleBook}
            type="button"
          >
            {t.nav.book}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="ml-header__overlay" onClick={close} aria-hidden="true" />
      )}
    </header>
  );
}
