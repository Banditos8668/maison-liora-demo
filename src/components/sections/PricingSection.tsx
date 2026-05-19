// PricingSection.tsx — "Preise & Online buchen"
// UX: left category nav + right treatment list. Clicking a category fades in its treatments.
// Clicking "Auswählen" preselects that treatment in the booking form and scrolls up to it.
// CSS prefix: ps__ (pricing section) — zero overlap with any other namespace.

import { useState, useCallback } from 'react';
import { pricingCategories, pricingTreatments } from '../../data/pricingData';
import { useLang } from '../../context/LanguageContext';

interface Props {
  onSelectTreatment: (treatmentId: string) => void;
}

export function PricingSection({ onSelectTreatment }: Props) {
  const { t } = useLang();
  const p = t.pricing;

  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id);
  const [animating, setAnimating] = useState(false);

  const switchCategory = useCallback((id: string) => {
    if (id === activeCategory) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(id);
      setAnimating(false);
    }, 160);
  }, [activeCategory]);

  const visibleTreatments = pricingTreatments.filter(tr => tr.categoryId === activeCategory);

  return (
    <section className="ps section-pad" id="preise-online-buchen" aria-labelledby="ps-heading">
      <div className="container">

        {/* ── Section header ── */}
        <div className="ps__head fade-up">
          <p className="section-label">{p.label}</p>
          <div className="divider" />
          <h2 id="ps-heading" className="ps__heading">{p.heading}</h2>
          <p className="ps__subline">{p.subline}</p>
        </div>

        {/* ── Body: two-column layout ── */}
        <div className="ps__body fade-up delay-1">

          {/* ── Left: category nav ── */}
          <nav className="ps__cats" aria-label="Behandlungskategorien">
            {pricingCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`ps__cat-btn ${activeCategory === cat.id ? 'ps__cat-btn--active' : ''}`}
                onClick={() => switchCategory(cat.id)}
                aria-current={activeCategory === cat.id ? 'true' : undefined}
              >
                <span className="ps__cat-label">{cat.label}</span>
                <svg
                  className="ps__cat-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
          </nav>

          {/* ── Right: treatment list ── */}
          <div
            className={`ps__content ${animating ? 'ps__content--hidden' : ''}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <ul className="ps__list" role="list">
              {visibleTreatments.map(tr => (
                <li key={tr.id} className="ps__item">
                  <div className="ps__item-main">
                    <div className="ps__item-top">
                      <h3 className="ps__item-name">{tr.name}</h3>
                      <span className="ps__item-duration">{tr.duration}</span>
                    </div>
                    <p className="ps__item-desc">{tr.description}</p>
                  </div>
                  <div className="ps__item-footer">
                    <span className="ps__item-price">{tr.price}</span>
                    <button
                      type="button"
                      className="ps__item-cta"
                      onClick={() => onSelectTreatment(tr.id)}
                      aria-label={`${tr.name} auswählen und Termin buchen`}
                    >
                      {p.selectCta}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="ps__price-note">{p.allPrices}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
