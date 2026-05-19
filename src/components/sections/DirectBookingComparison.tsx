// DirectBookingComparison.tsx
// Shows the difference between platform-dependent and direct-booking approach.
// Styled as editorial studio content — not an agency case study.

const beforeItems = [
  'Instagram DMs as the main booking channel',
  'Dependent on Treatwell or Fresha commissions',
  'Missed calls with no follow-up option',
  'No visible prices — clients have to ask',
  'Weak or no Google presence',
  'No consistent brand experience online',
];

const afterItems = [
  'Premium website as the main booking surface',
  'Direct booking — zero commission, zero dependency',
  'Missed-call callback so no inquiry is lost',
  'Clear services, durations and prices',
  'Structured local content for Google visibility',
  'Consistent brand experience from first click to door',
];

export function DirectBookingComparison() {
  return (
    <section className="comparison section-pad" aria-labelledby="comparison-heading">
      <div className="container">

        <div className="section-header fade-up">
          <p className="section-label">Why direct booking matters</p>
          <div className="divider" />
          <h2 id="comparison-heading">
            From Instagram-only<br />to direct booking
          </h2>
          <p className="section-intro">
            Many great local studios are harder to find and book than they should be. A clear online presence changes that — for both the studio and its clients.
          </p>
        </div>

        <div className="comparison__grid fade-up delay-1">

          {/* Before column */}
          <div className="comparison__col comparison__col--before">
            <div className="comparison__col-header">
              <span className="comparison__col-tag comparison__col-tag--before">Without a website</span>
              <h3 className="comparison__col-title">The status quo</h3>
            </div>
            <ul className="comparison__list comparison__list--before" aria-label="Challenges without a dedicated website">
              {beforeItems.map((item) => (
                <li key={item} className="comparison__item">
                  <span className="comparison__item-icon comparison__item-icon--before" aria-hidden="true">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow bridge */}
          <div className="comparison__bridge" aria-hidden="true">
            <div className="comparison__bridge-line" />
            <div className="comparison__bridge-arrow">→</div>
          </div>

          {/* After column */}
          <div className="comparison__col comparison__col--after">
            <div className="comparison__col-header">
              <span className="comparison__col-tag comparison__col-tag--after">With a booking website</span>
              <h3 className="comparison__col-title">The Maison Liora experience</h3>
            </div>
            <ul className="comparison__list comparison__list--after" aria-label="Benefits of a direct booking website">
              {afterItems.map((item) => (
                <li key={item} className="comparison__item">
                  <span className="comparison__item-icon comparison__item-icon--after" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Closing trust note */}
        <div className="comparison__note fade-up delay-2">
          <p>
            A direct booking website does not replace great treatments or personal service. It simply ensures that great work is visible — and that every inquiry has a clear path to becoming a booking.
          </p>
        </div>

      </div>
    </section>
  );
}
