// Testimonials.tsx
// Light cream section — white cards, rose outcome chips, gold stars.
// Left-aligned editorial header. Grid of client reviews.

import { testimonials } from '../../data/testimonials';
import { Stars } from '../ui/Stars';
import { business } from '../../data/business';
import { useLang } from '../../context/LanguageContext';

export function Testimonials() {
  const { t } = useLang();
  const tm = t.testimonials;

  return (
    <section className="testimonials section-pad" id="bewertungen" aria-labelledby="testimonials-heading">
      <div className="container">

        <div className="section-header fade-up">
          <p className="section-label">{tm.label}</p>
          <div className="divider" />
          <h2 id="testimonials-heading">
            {tm.heading1}<br /><em>{tm.heading2em}</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.id}
              className="testimonial-card fade-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Outcome chip — rose accent */}
              <span className="testimonial-card__outcome">{t.outcome}</span>

              <Stars rating={t.rating} />

              <p className="testimonial-card__text">"{t.text}"</p>

              <footer className="testimonial-card__footer">
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__detail">
                  {t.neighbourhood} · {t.treatment}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="testimonials__cta fade-up">
          <div className="testimonials__cta-rating">
            <Stars rating={business.rating} />
            <p>
              <strong>{business.rating} {tm.ratingAvg}</strong> · {business.reviewCount} {tm.reviewsLabel}
            </p>
          </div>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(business.fullName + ' ' + business.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            {tm.google}
          </a>
        </div>

      </div>
    </section>
  );
}
