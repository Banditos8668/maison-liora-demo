// LanguageContext.tsx
// Global DE/EN language state. Default: German.
// Wrap <App> in <LanguageProvider>. Consume with useLang().

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../data/i18n';
import type { Lang } from '../data/i18n';

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.de;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: 'de',
  setLang: () => {},
  t: translations.de,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
