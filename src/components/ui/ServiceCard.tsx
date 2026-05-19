// ServiceCard.tsx — Legacy UI component, no longer used in primary Services section.
// Kept for compatibility; uses current Service interface.

import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

export function ServiceCard({ service, onBook }: ServiceCardProps) {
  return (
    <article className="service-card fade-up">
      <h3 className="service-card__name">{service.name}</h3>
      <p className="service-card__desc">{service.description}</p>
      <div className="service-card__footer">
        <div className="service-card__meta">
          <span className="service-card__price">{service.startingPrice}</span>
          <span className="service-card__duration">{service.duration}</span>
        </div>
        <button className="service-card__cta" onClick={onBook} type="button">
          Online buchen
        </button>
      </div>
    </article>
  );
}
