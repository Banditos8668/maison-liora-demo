// WhatToExpect.tsx — NEW merged section.
// Replaces FeaturedTreatments + ResultsPromise + EasyBooking.
// 4 value cards: Beratung, Behandlung, Produkte, Ergebnisse.

import { type ReactElement } from 'react';
import { useLang } from '../../context/LanguageContext';

// Thin-stroke icons for each card
const icons: Record<string, ReactElement> = {
  person: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7.5" r="3.5"/>
      <path d="M5 21v-1a7 7 0 0 1 14 0v1"/>
    </svg>
  ),
  spa: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  leaf: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  star: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

export function WhatToExpect() {
  const { t } = useLang();
  const w = t.whatToExpect;

  return (
    <section className="wte section-pad" aria-labelledby="wte-heading">
      <div className="container">

        <div className="section-header section-header--centered fade-up">
          <p className="section-label">{w.label}</p>
          <div className="divider" />
          <h2 id="wte-heading">{w.heading}</h2>
          <p className="wte__subline">{w.subline}</p>
        </div>

        <div className="wte__grid">
          {w.cards.map((card, i) => (
            <div
              key={card.title}
              className="wte__card fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="wte__card-icon">
                {icons[card.icon] ?? icons.star}
              </div>
              <h3 className="wte__card-title">{card.title}</h3>
              <p className="wte__card-body">{card.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
