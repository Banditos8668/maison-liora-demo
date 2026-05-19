// Services.tsx — Rada-exact card structure. Rebuilt from scratch.
// Images applied as inline styles to guarantee rendering regardless of CSS cascade.
// Class prefix: ls- (zero overlap with any other class in the project).

import { services } from '../../data/services';
import { useLang } from '../../context/LanguageContext';

// Direct image map — bypasses all CSS cascade conflicts
const IMG: Record<string, string> = {
  'img-manicure':  '/images/manicure-service.webp',
  'img-nails-2':   '/images/pedicure-service.webp',
  'img-waxing':    '/images/waxing-service.webp',
  'img-facial':    '/images/facial-mask-treatment.webp',
  'img-body':      '/images/body-service.webp',
  'img-lash':      '/images/eyebrow-service.webp',
};

interface Props {
  onBook: () => void;
}

export function Services({ onBook }: Props) {
  const { t } = useLang();
  const s = t.services;

  return (
    <section className="ls" id="behandlungen" aria-labelledby="ls-heading">
      <div className="container">

        {/* ── Section header ── */}
        <div className="ls__head">
          <div className="ls__head-left">
            <p className="ls__eyebrow">{s.label}</p>
            <span className="ls__rule" aria-hidden="true" />
            <h2 id="ls-heading" className="ls__h2">{s.heading}</h2>
          </div>
          <button
            className="ls__all-btn"
            onClick={() => {
              const el = document.getElementById('preise-online-buchen');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            type="button"
          >
            {s.allPrices} &rarr;
          </button>
        </div>

        {/* ── 3-col card grid ── */}
        <div className="ls__grid">
          {services.map((svc, i) => {
            const card = t.serviceCards[svc.id] ?? { name: svc.name, description: svc.description };
            const imgUrl = IMG[svc.imagePlaceholder] ?? '';

            return (
              <article key={svc.id} className="ls-card" style={{ animationDelay: `${i * 0.07}s` }}>

                {/* Image — inline backgroundImage guarantees it loads */}
                <div
                  className="ls-card__img"
                  role="img"
                  aria-label={card.name}
                  style={{
                    backgroundImage: `url('${imgUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {svc.popular && (
                    <span className="ls-card__badge">{s.popular}</span>
                  )}
                </div>

                {/* Body */}
                <div className="ls-card__body">

                  {/* Name + Price */}
                  <div className="ls-card__top">
                    <h3 className="ls-card__name">{card.name}</h3>
                    <span className="ls-card__price">{svc.startingPrice}</span>
                  </div>

                  {/* Duration */}
                  <p className="ls-card__dur">{svc.duration}</p>

                  {/* Description */}
                  <p className="ls-card__desc">{card.description}</p>

                  {/* Chips */}
                  <div className="ls-card__tags">
                    {svc.tags.map(tag => (
                      <span key={tag} className="ls-card__tag">{tag}</span>
                    ))}
                  </div>

                  {/* Full-width CTA */}
                  <button className="ls-card__cta" onClick={onBook} type="button">
                    {s.cardCta}
                  </button>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
