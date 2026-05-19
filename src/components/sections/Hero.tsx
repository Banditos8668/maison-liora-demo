// Hero.tsx — Cinematic split hero.
// Primary CTA: "Termin buchen". Secondary: phone number as tel: link.

import { business } from '../../data/business';
import { Stars } from '../ui/Stars';
import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

const todayName = new Date().toLocaleDateString('en-GB', { weekday: 'long' });
const todayEntry = business.hours.find(h => h.day === todayName);
const isOpenToday = todayEntry && todayEntry.time !== 'Closed';
const todayHoursText = todayEntry?.time ?? '';

export function Hero({ onBook }: Props) {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="hero" id="home" aria-label={`Willkommen bei ${business.name}`}>
      <div className="hero__split">

        <div className="hero__left">
          <div className="hero__left-inner">

            <p className="hero__eyebrow fade-up">
              <span className="hero__eyebrow-line" aria-hidden="true" />
              {h.eyebrow}
            </p>

            <h1 className="hero__headline fade-up delay-1">
              {h.line1}<br />
              {h.line2}<br />
              <em>{h.line3em}</em>
            </h1>

            <p className="hero__sub fade-up delay-2">{h.sub}</p>

            {/* CTAs: primary book + secondary phone */}
            <div className="hero__ctas fade-up delay-3">
              <button
                className="btn btn-primary hero__book-btn"
                onClick={onBook}
                type="button"
              >
                {h.cta}
              </button>
              <a
                href={`tel:${business.contact.phoneRaw}`}
                className="btn btn-ghost hero__phone-btn"
                aria-label={`${h.ctaPhone}: ${business.contact.phone}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {business.contact.phone}
              </a>
            </div>

            <div className="hero__trust fade-up delay-4">
              <div className="hero__trust-rating">
                <Stars rating={business.rating} />
                <span>
                  <strong>{business.rating}</strong> · {business.reviewCount} {h.reviews}
                </span>
              </div>
              <span className="hero__trust-sep" aria-hidden="true" />
              {isOpenToday ? (
                <div className="hero__open-today">
                  <span className="hero__open-dot" aria-hidden="true" />
                  {h.openToday} · {todayHoursText}
                </div>
              ) : (
                <div className="hero__open-today hero__open-today--closed">
                  <span className="hero__open-dot hero__open-dot--closed" aria-hidden="true" />
                  {h.closedToday}
                </div>
              )}
            </div>

          </div>
        </div>

        <div className="hero__right" aria-hidden="true">
          <div
            className="hero__img-main img-placeholder img-hero"
            role="img"
            aria-label={`Ruhige, professionelle Behandlungsatmosphäre bei ${business.name}`}
            style={{ backgroundImage: 'url(/images/hero-luxury-facial-treatment.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="hero__img-overlay" />
            <div className="hero__year-mark">
              <span className="hero__year-mark-est">Est.</span>
              <span className="hero__year-mark-year">2019</span>
              <span className="hero__year-mark-city">Zürich</span>
            </div>
            <div className="hero__capsule">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>{h.consultation}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
