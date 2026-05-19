// FeaturedTreatments.tsx
// 4 signature treatment cards — equal height grid.
// All copy from i18n. Image overlay text also translated.

import { treatments } from '../../data/treatments';
import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

export function FeaturedTreatments({ onBook }: Props) {
  const { t } = useLang();
  const r = t.rituals;

  return (
    <section className="rituals section-pad" id="rituals" aria-labelledby="rituals-heading">
      <div className="container">

        <div className="section-header fade-up">
          <p className="section-label">{r.label}</p>
          <div className="divider" />
          <h2 id="rituals-heading">
            {r.heading1}<br /><em>{r.heading2em}</em>
          </h2>
          <p className="section-intro">{r.intro}</p>
        </div>

        <div className="rituals__grid">
          {treatments.map((tr, i) => {
            const card = t.treatmentCards[tr.id] ?? {
              name: tr.name,
              category: tr.category,
              benefit: tr.benefit,
              description: tr.description,
            };
            return (
              <article
                key={tr.id}
                className="ritual-card fade-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Portrait image with overlay text */}
                <div
                  className={`ritual-card__image img-placeholder ${tr.imagePlaceholder}`}
                  style={{ backgroundImage: `url(${tr.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="ritual-card__image-overlay" aria-hidden="true" />
                  <div className="ritual-card__image-text">
                    <span className="ritual-card__category">{card.category}</span>
                    <h3 className="ritual-card__name">{card.name}</h3>
                  </div>
                </div>

                {/* Card body */}
                <div className="ritual-card__body">
                  <p className="ritual-card__benefit">{card.benefit}</p>
                  <p className="ritual-card__desc">{card.description}</p>

                  <div className="ritual-card__footer">
                    <div className="ritual-card__meta">
                      <span className="ritual-card__price">{tr.price}</span>
                      <span className="ritual-card__sep" aria-hidden="true">·</span>
                      <span className="ritual-card__duration">{tr.duration}</span>
                    </div>
                    <button
                      className="btn btn-ghost btn-sm ritual-card__cta"
                      onClick={onBook}
                      type="button"
                      aria-label={`${r.cta}: ${card.name}`}
                    >
                      {r.cta}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
