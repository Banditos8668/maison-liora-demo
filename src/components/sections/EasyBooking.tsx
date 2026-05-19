// EasyBooking.tsx
// Client-focused booking experience section.
// Left-aligned editorial header. Communicates convenience, care, and confidence.

import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

const icons = [
  // Calendar
  <svg key="cal" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>,
  // Person
  <svg key="person" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="7.5" r="3.5"/>
    <path d="M5 21v-1a7 7 0 0 1 14 0v1"/>
  </svg>,
  // Shield / results
  <svg key="shield" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  // Chat / flexible
  <svg key="chat" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>,
];

export function EasyBooking({ onBook }: Props) {
  const { t } = useLang();
  const eb = t.easyBooking;

  return (
    <section className="easy-booking section-pad" aria-labelledby="easy-booking-heading">
      <div className="container">

        {/* Left-aligned header */}
        <div className="section-header fade-up">
          <p className="section-label">{eb.label}</p>
          <div className="divider" />
          <h2 id="easy-booking-heading">{eb.heading}</h2>
          <p className="section-intro">{eb.intro}</p>
        </div>

        {/* Benefit cards */}
        <div className="easy-booking__grid">
          {eb.benefits.map((b, i) => (
            <div
              key={b.title}
              className="easy-booking__card fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="easy-booking__card-icon">{icons[i]}</div>
              <h3 className="easy-booking__card-title">{b.title}</h3>
              <p className="easy-booking__card-body">{b.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="easy-booking__cta fade-up">
          <button className="btn btn-primary" onClick={onBook} type="button">
            {eb.cta}
          </button>
          <p className="easy-booking__cta-sub">{eb.hours}</p>
        </div>

      </div>
    </section>
  );
}
