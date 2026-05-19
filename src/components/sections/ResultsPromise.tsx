// ResultsPromise.tsx
// Outcome-focused "What to Expect" section.
// Left-aligned editorial header. Client-centred, never operational.

import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

const outcomes = [
  {
    id: 'facial',
    imagePlaceholder: 'img-facial-1',
    imageAlt: 'Glowing, hydrated skin after a Glow Facial treatment at Maison Lumière',
    treatment: 'Glow Facial',
    duration: '75 min',
    headline: 'Skin that genuinely glows',
    description:
      'Deep-cleansing, brightening, and hydrating. Clients consistently describe their first Glow Facial as the best skin day they have had in months.',
    result: 'Visibly brighter from the first session',
  },
  {
    id: 'lash',
    imagePlaceholder: 'img-lash-1',
    imageAlt: 'Natural, defined lash lift and brow styling result at Maison Lumière',
    treatment: 'Lash Lift & Brow Styling',
    duration: '75 min',
    headline: 'Eyes that open up',
    description:
      'A lash lift that works with your natural lashes. Combined with brow shaping and tinting, the result is polished, natural, and lasts weeks.',
    result: 'Natural definition that lasts 6–8 weeks',
  },
  {
    id: 'manicure',
    imagePlaceholder: 'img-nails-1',
    imageAlt: 'Elegant, long-lasting gel manicure with nail care at Maison Lumière',
    treatment: 'Signature Manicure',
    duration: '60 min',
    headline: 'Nails you notice',
    description:
      'Shaping, cuticle care, hand massage and long-lasting gel colour. Every detail attended to. Clients notice the quality even weeks later.',
    result: 'Lasting colour with genuine nail care',
  },
];

export function ResultsPromise({ onBook }: Props) {
  const { t } = useLang();
  const r = t.results;

  return (
    <section className="results section-pad" aria-labelledby="results-heading">
      <div className="container">

        {/* Left-aligned header */}
        <div className="section-header fade-up">
          <p className="section-label">{r.label}</p>
          <div className="divider" />
          <h2 id="results-heading">
            {r.heading1}<br /><em>{r.heading2em}</em>
          </h2>
          <p className="section-intro">{r.intro}</p>
        </div>

        {/* Outcome panels */}
        <div className="results__grid">
          {outcomes.map((o, i) => (
            <article
              key={o.id}
              className="result-card fade-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div
                className={`result-card__image img-placeholder ${o.imagePlaceholder}`}
                role="img"
                aria-label={o.imageAlt}
              >
                <div className="result-card__treatment-tag">
                  <span>{o.treatment}</span>
                  <span className="result-card__duration">{o.duration}</span>
                </div>
              </div>

              <div className="result-card__body">
                <h3 className="result-card__headline">{o.headline}</h3>
                <p className="result-card__desc">{o.description}</p>

                <div className="result-card__result">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {o.result}
                </div>

                <button
                  className="result-card__cta btn btn-ghost btn-sm"
                  onClick={onBook}
                  type="button"
                >
                  {r.cardCta}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Closing editorial quote — left-aligned */}
        <div className="results__statement fade-up">
          <blockquote className="results__quote">{r.quote}</blockquote>
          <p className="results__attribution">{r.attribution}</p>
        </div>

      </div>
    </section>
  );
}
