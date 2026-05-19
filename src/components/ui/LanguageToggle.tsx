// LanguageToggle.tsx
// Minimal DE | EN switcher for header and footer.
// Active language is highlighted; separator is a thin vertical rule.

import { useLang } from '../../context/LanguageContext';
import type { Lang } from '../../data/i18n';

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  const choose = (l: Lang) => (e: React.MouseEvent) => {
    e.preventDefault();
    setLang(l);
  };

  return (
    <div className="lang-toggle" aria-label="Language selection">
      <button
        type="button"
        className={`lang-btn${lang === 'de' ? ' lang-btn--active' : ''}`}
        onClick={choose('de')}
        aria-pressed={lang === 'de'}
        aria-label="Deutsch"
      >
        DE
      </button>
      <span className="lang-sep" aria-hidden="true">|</span>
      <button
        type="button"
        className={`lang-btn${lang === 'en' ? ' lang-btn--active' : ''}`}
        onClick={choose('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
