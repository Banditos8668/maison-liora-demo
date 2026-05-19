// ContactCTA.tsx — Final CTA + contact details above footer.
// Dark banner (espresso) on cream section. 2-col details: address + hours.
// No map placeholder — clean and professional.

import { business } from '../../data/business';
import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

export function ContactCTA({ onBook }: Props) {
  const { t } = useLang();
  const c = t.contact;

  const todayName = new Date().toLocaleDateString('en-GB', { weekday: 'long' });
  const todayHours = business.hours.find(h => h.day === todayName);
  const isOpen = todayHours && todayHours.time !== 'Closed';

  return (
    <section className="contact section-pad" id="kontakt" aria-labelledby="contact-heading">
      <div className="container">

        {/* ── Dark CTA banner ── */}
        <div className="contact__banner fade-up">
          <div className="contact__banner-text">
            <h2 id="contact-heading">{c.banner}</h2>
            <p>{c.bannerSub}</p>
          </div>
          <div className="contact__banner-ctas">
            <button className="btn btn-primary" onClick={onBook} type="button">
              {c.reserve}
            </button>
            <a
              href={`tel:${business.contact.phoneRaw}`}
              className="btn btn-ghost contact__banner-phone"
              aria-label={`Anrufen: ${business.contact.phone}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {business.contact.phone}
            </a>
            <a
              href={business.contact.whatsappUrl}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp öffnen"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
              </svg>
              {c.whatsapp}
            </a>
          </div>
        </div>

        {/* ── Details: address + hours ── */}
        <div className="contact__details fade-up delay-1">

          {/* Col 1: Address & status */}
          <div className="contact__info">
            <h3>{c.visitHeading}</h3>
            <address className="contact__address">
              <p>{business.address.street}</p>
              <p>{business.address.postal} {business.address.city}</p>
            </address>
            <p className="contact__transit">{c.transit}</p>
            <div className="contact__status">
              <span className={`contact__status-dot ${isOpen ? 'contact__status-dot--open' : 'contact__status-dot--closed'}`} />
              <span>
                {isOpen
                  ? `${c.openToday} · ${todayHours?.time}`
                  : c.closedToday}
              </span>
            </div>
            <a
              href={business.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm contact__map-link"
            >
              {c.mapsLink}
            </a>
          </div>

          {/* Col 2: Opening hours */}
          <div className="contact__hours">
            <h3>{c.hoursHeading}</h3>
            <ul className="contact__hours-list">
              {business.hours.map((h) => (
                <li
                  key={h.day}
                  className={`contact__hour-row ${h.day === todayName ? 'contact__hour-row--today' : ''}`}
                >
                  <span className="contact__day">{t.days[h.day] ?? h.day}</span>
                  <span className={`contact__time ${h.time === 'Closed' ? 'contact__time--closed' : ''}`}>
                    {h.time === 'Closed' ? c.closed : h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Google Maps embed ── */}
        <div className="contact__map-section fade-up delay-2">
          <p className="contact__map-demo-note">Beispielstandort Zürich · Demo</p>
          <div className="contact__map-frame-wrap">
            <iframe
              className="contact__map-frame"
              src={business.address.googleMapsEmbed}
              title={`Lage von ${business.name} — ${business.address.full}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              aria-label={`Google Maps: ${business.address.full}`}
            />
          </div>
          <div className="contact__map-footer">
            <span className="contact__map-address">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {business.address.full}
            </span>
            <a
              href={business.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__map-directions"
              aria-label={`Route zu ${business.name} in Google Maps öffnen`}
            >
              {c.directions}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
