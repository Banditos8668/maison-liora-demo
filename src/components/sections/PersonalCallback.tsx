// PersonalCallback.tsx — "Erreichbarkeit" callback section.
// Rada Beauty style: label + headline + body + compact form + phone CTA.

import { useState } from 'react';
import { business } from '../../data/business';
import { treatments } from '../../data/treatments';
import { useLang } from '../../context/LanguageContext';

const timeOptions = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];

function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

/** Format ISO date string (YYYY-MM-DD) → German display (DD.MM.YYYY) */
function formatDateDE(iso: string): string {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}

export function PersonalCallback() {
  const { t } = useLang();
  const cb = t.callback;

  const [treatment, setTreatment] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = phone.trim().length > 4;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 900);
  };

  return (
    <section className="callback2 section-pad" aria-labelledby="callback2-heading">
      <div className="container callback2__inner">

        {/* Left: editorial */}
        <div className="callback2__left fade-up">
          <p className="section-label">{cb.label}</p>
          <div className="divider" />
          <h2 id="callback2-heading" className="callback2__heading">{cb.heading}</h2>
          <p className="callback2__body">{cb.body}</p>

          {/* Phone CTA */}
          <a
            href={`tel:${business.contact.phoneRaw}`}
            className="callback2__phone-cta btn btn-ghost"
            aria-label={`${cb.orCall}: ${business.contact.phone}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {cb.orCall}: {business.contact.phone}
          </a>
        </div>

        {/* Right: form */}
        <div className="callback2__right fade-up delay-1">
          {submitted ? (
            <div className="callback2__success">
              <div className="callback2__success-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3>{cb.successTitle}</h3>
              <p>{cb.successText}</p>
            </div>
          ) : (
            <form className="callback2__form" onSubmit={handleSubmit} noValidate>

              <div className="callback2__field">
                <label className="callback2__label" htmlFor="cb2-treatment">{cb.treatmentLabel}</label>
                <select
                  id="cb2-treatment"
                  className="callback2__select"
                  value={treatment}
                  onChange={e => setTreatment(e.target.value)}
                >
                  <option value="">{cb.treatmentDefault}</option>
                  {treatments.map(tr => (
                    <option key={tr.id} value={tr.id}>
                      {t.treatmentCards[tr.id]?.name ?? tr.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="callback2__row">
                <div className="callback2__field">
                  <label className="callback2__label" htmlFor="cb2-date">{cb.dateLabel}</label>
                  {/* Custom display + native date picker overlay — works on iOS/Android/desktop */}
                  <div className="callback2__date-wrap">
                    {/* Visible formatted display (aria-hidden; the real input is the accessible element) */}
                    <span
                      className={`callback2__date-display${date ? '' : ' callback2__date-display--empty'}`}
                      aria-hidden="true"
                    >
                      {date ? formatDateDE(date) : 'dd.mm.yyyy'}
                    </span>
                    {/* Calendar icon */}
                    <svg
                      className="callback2__date-icon"
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {/* Native date input: covers the entire field, opacity 0, triggers the system picker */}
                    <input
                      id="cb2-date"
                      type="date"
                      className="callback2__date-native"
                      value={date}
                      min={getMinDate()}
                      onChange={e => setDate(e.target.value)}
                      aria-label={cb.dateLabel}
                    />
                  </div>
                </div>
                <div className="callback2__field">
                  <label className="callback2__label" htmlFor="cb2-time">{cb.timeLabel}</label>
                  <select
                    id="cb2-time"
                    className="callback2__select"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                  >
                    <option value="">{cb.timeDefault}</option>
                    {timeOptions.map(to => (
                      <option key={to} value={to}>{to}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="callback2__field">
                <label className="callback2__label" htmlFor="cb2-phone">
                  {cb.phoneLabel}
                  <span className="callback2__required" aria-hidden="true"> *</span>
                </label>
                <input
                  id="cb2-phone"
                  type="tel"
                  className="callback2__input"
                  placeholder={cb.phonePlaceholder}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  autoComplete="tel"
                  aria-required="true"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary callback2__submit"
                disabled={!canSubmit || submitting}
              >
                {submitting ? cb.submitting : cb.submit}
              </button>
              <p className="callback2__submit-note">{cb.submitNote}</p>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
