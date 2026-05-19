// Gallery.tsx — Dark editorial gallery, 6 equal tiles, 3×2 grid.
// Labels from i18n.

import { gallery } from '../../data/gallery';
import { useLang } from '../../context/LanguageContext';

const featured = gallery.slice(0, 6);

export function Gallery() {
  const { t } = useLang();
  const g = t.gallery;

  return (
    <section className="gallery gallery--dark section-pad" aria-labelledby="gallery-heading">
      <div className="container">

        <div className="section-header section-header--light fade-up">
          <p className="section-label section-label--light">{g.label}</p>
          <div className="divider divider--light" />
          <h2 id="gallery-heading" className="gallery__heading">{g.heading}</h2>
          <p className="gallery__intro">{g.intro}</p>
        </div>

        <div className="gallery__grid">
          {featured.map((item, i) => (
            <figure
              key={item.id}
              className="gallery__tile fade-up"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div
                className={`gallery__tile-image img-placeholder ${item.imagePlaceholder}`}
                role="img"
                aria-label={item.imageAlt}
                style={{ backgroundImage: `url(${item.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <figcaption className="gallery__tile-label">
                {t.galleryLabels[item.id] ?? item.label}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
