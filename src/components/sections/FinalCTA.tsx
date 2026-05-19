// FinalCTA.tsx — Visually distinct final CTA before footer.
// Warm cream/rose background — clearly different from the dark footer.

import { business } from '../../data/business';
import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

export function FinalCTA({ onBook }: Props) {
  const { t } = useLang();
  const f = t.finalCta;

  return (
    <section className="final-cta" aria-label={f.heading}>
      <div className="container final-cta__inner fade-up">
        <div className="final-cta__text">
          <h2 className="final-cta__heading">{f.heading}</h2>
          <p className="final-cta__body">{f.body}</p>
        </div>
        <div className="final-cta__actions">
          <button className="btn btn-primary" onClick={onBook} type="button">
            {f.cta}
          </button>
          <a
            href={`tel:${business.contact.phoneRaw}`}
            className="btn btn-ghost final-cta__phone"
            aria-label={`${f.phone}: ${business.contact.phone}`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {business.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
