import { useState, useEffect } from 'react';
import { business } from '../../data/business';
import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

export function StickyMobileCTA({ onBook }: Props) {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? 'sticky-cta--visible' : ''}`} role="complementary" aria-label={t.nav.book}>
      <a
        href={`tel:${business.contact.phoneRaw}`}
        className="sticky-cta__call"
        aria-label={t.sticky.call}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        {t.sticky.call}
      </a>
      <button
        className="sticky-cta__book"
        onClick={onBook}
        type="button"
        aria-label={t.sticky.book}
      >
        {t.sticky.book}
      </button>
    </div>
  );
}
