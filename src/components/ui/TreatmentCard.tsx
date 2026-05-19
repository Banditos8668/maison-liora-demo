import type { Treatment } from '../../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  onBook: () => void;
}

export function TreatmentCard({ treatment, onBook }: TreatmentCardProps) {
  return (
    <article className="treatment-card fade-up">
      <div className={`treatment-card__image img-placeholder ${treatment.imagePlaceholder}`}>
        <span className="treatment-card__category">{treatment.category}</span>
      </div>
      <div className="treatment-card__body">
        <h3 className="treatment-card__name">{treatment.name}</h3>
        <p className="treatment-card__benefit">{treatment.benefit}</p>
        <p className="treatment-card__desc">{treatment.description}</p>
        <div className="treatment-card__footer">
          <div className="treatment-card__meta">
            <span className="treatment-card__price">{treatment.price}</span>
            <span className="treatment-card__duration">{treatment.duration}</span>
          </div>
          <button className="btn btn-primary btn-sm" onClick={onBook} type="button">
            Book appointment
          </button>
        </div>
      </div>
    </article>
  );
}
