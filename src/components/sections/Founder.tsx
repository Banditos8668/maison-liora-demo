// Founder.tsx — Liora Meier specialist section. Fully i18n.

import { business } from '../../data/business';
import { useLang } from '../../context/LanguageContext';

interface Props {
  onBook: () => void;
}

export function Founder({ onBook }: Props) {
  const { t } = useLang();
  const f = t.founder;

  return (
    <section className="founder section-pad" id="ueber-uns" aria-labelledby="founder-heading">
      <div className="container founder__inner">

        <div className="founder__image-col fade-up">
          <div
            className="img-placeholder img-founder founder__image"
            role="img"
            aria-label={`Portrait von ${f.heading}, Spezialistin bei Maison Lumière`}
            style={{ backgroundImage: 'url(/images/lumiere-founder-portrait.webp)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
          >
            <div className="founder__image-badge">
              <span>{f.imageBadgeTop}</span>
              <span>{f.imageBadgeBottom}</span>
            </div>
          </div>
        </div>

        <div className="founder__text-col fade-up delay-2">
          <p className="section-label">{f.label}</p>
          <div className="divider" />
          <h2 id="founder-heading">{f.heading}</h2>
          <p className="founder__role">{f.role}</p>

          {t.founderBio.map((para, i) => (
            <p key={i} className="founder__bio">{para}</p>
          ))}

          <div className="founder__certs">
            <p className="founder__certs-label">{f.certsLabel}</p>
            <ul className="founder__certs-list">
              {t.certifications.map((c) => (
                <li key={c} className="founder__cert-item">
                  <span className="founder__cert-dot" aria-hidden="true">✦</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="founder__credentials">
            <div className="founder__credential">
              <span className="founder__credential-num">{f.yearsNum}</span>
              <span className="founder__credential-label">{f.yearsLabel}</span>
            </div>
            <div className="founder__credential">
              <span className="founder__credential-num">{business.reviewCount}</span>
              <span className="founder__credential-label">{f.reviewsLabel}</span>
            </div>
            <div className="founder__credential">
              <span className="founder__credential-num">{business.rating}</span>
              <span className="founder__credential-label">{f.ratingLabel}</span>
            </div>
          </div>

          <button className="btn btn-primary" onClick={onBook} type="button">
            {f.cta}
          </button>
        </div>

      </div>
    </section>
  );
}
