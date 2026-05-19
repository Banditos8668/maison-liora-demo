// BookingMockup.tsx — 2-col Rada-style booking section.
// Left: editorial copy + benefits | Right: interactive booking form with time pills.
// Date selector: 7-day sliding window. Prev/next chevrons advance by 7 days.
// Month label updates to reflect the first visible day's month.
// Accepts optional selectedTreatmentId prop from PricingSection for deep-link preselection.

import { useState, useMemo, useEffect } from 'react';
import { pricingTreatments } from '../../data/pricingData';
import { business } from '../../data/business';
import { useLang } from '../../context/LanguageContext';

// ── Helpers ──────────────────────────────────────────────────

const ALL_TIMES = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
const DATE_WINDOW = 7;   // pills visible at once
const DATE_HORIZON = 90; // days ahead to pre-generate

/** Mock: deterministic unavailability based on date + treatment so it feels real */
function getSlots(dateStr: string, treatmentId: string) {
  const day = dateStr ? parseInt(dateStr.slice(-2), 10) : 0;
  const seed = treatmentId.length + day;
  return ALL_TIMES.map((time, i) => ({
    time,
    available: (i + seed) % 4 !== 0,
  }));
}

/** Format date into pill-friendly object */
function formatDatePill(d: Date, lang: string) {
  return {
    weekday: d.toLocaleDateString(lang === 'de' ? 'de-CH' : 'en-GB', { weekday: 'short' }),
    day: d.getDate(),
    month: d.toLocaleDateString(lang === 'de' ? 'de-CH' : 'en-GB', { month: 'short' }),
    iso: d.toISOString().split('T')[0],
  };
}

/** Find the globally next available slot (searches up to 60 days ahead) */
function findGlobalNextFree(treatmentId: string, lang: string): string | null {
  const today = new Date();
  for (let i = 1; i <= 60; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const pill = formatDatePill(d, lang);
    const slots = getSlots(pill.iso, treatmentId);
    const first = slots.find(s => s.available);
    if (first) return `${pill.weekday}, ${pill.day}. ${pill.month} · ${first.time}`;
  }
  return null;
}

// ─────────────────────────────────────────────────────────────

interface BookingMockupProps {
  /** Optional: preselect a treatment by id (from PricingSection "Auswählen") */
  selectedTreatmentId?: string;
}

export function BookingMockup({ selectedTreatmentId }: BookingMockupProps) {
  const { t, lang } = useLang();
  const b = t.booking;

  const [treatment, setTreatment] = useState('');
  const [dateIso, setDateIso] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  // External preselection from PricingSection
  useEffect(() => {
    if (selectedTreatmentId) {
      setTreatment(selectedTreatmentId);
      setDateIso('');
      setTime('');
    }
  }, [selectedTreatmentId]);

  // Index of the first visible date pill (advances by DATE_WINDOW)
  const [dateWindowStart, setDateWindowStart] = useState(0);

  // All future dates for the next DATE_HORIZON days
  const allDates = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days: ReturnType<typeof formatDatePill>[] = [];
    for (let i = 1; i <= DATE_HORIZON; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(formatDatePill(d, lang));
    }
    return days;
  }, [lang]);

  // The 7 dates currently shown
  const visibleDates = useMemo(
    () => allDates.slice(dateWindowStart, dateWindowStart + DATE_WINDOW),
    [allDates, dateWindowStart],
  );

  // Month label — reflects the first visible day's month
  const monthLabel = useMemo(() => {
    if (visibleDates.length === 0) return '';
    const first = new Date(visibleDates[0].iso);
    return first.toLocaleDateString(lang === 'de' ? 'de-CH' : 'en-GB', {
      month: 'long',
      year: 'numeric',
    });
  }, [visibleDates, lang]);

  const canGoPrev = dateWindowStart > 0;
  const canGoNext = dateWindowStart + DATE_WINDOW < allDates.length;

  const goNext = () => {
    setDateWindowStart(s => Math.min(s + DATE_WINDOW, allDates.length - DATE_WINDOW));
    setDateIso('');
    setTime('');
  };

  const goPrev = () => {
    setDateWindowStart(s => Math.max(0, s - DATE_WINDOW));
    setDateIso('');
    setTime('');
  };

  // Time slots for selected date + treatment
  const slots = useMemo(() => {
    if (!dateIso || !treatment) return [];
    return getSlots(dateIso, treatment);
  }, [dateIso, treatment]);

  // Globally next free appointment (independent of visible window)
  const nextFreeStr = useMemo(() => {
    if (!treatment) return null;
    return findGlobalNextFree(treatment, lang);
  }, [treatment, lang]);

  const canSubmit = treatment && dateIso && time && name.trim() && phone.trim();
  const selectedT = pricingTreatments.find(tr => tr.id === treatment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = b.nameError;
    if (!phone.trim()) newErrors.phone = b.phoneError;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    if (!canSubmit) return;
    setErrors({});
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 900);
  };

  const reset = () => {
    setDateWindowStart(0);
    setTreatment(''); setDateIso(''); setTime('');
    setName(''); setPhone(''); setSubmitted(false); setErrors({});
  };

  return (
    <section className="booking section-pad" id="booking" aria-labelledby="booking-heading">
      <div className="container">
        <div className="booking2__layout">

          {/* ── Left: Editorial copy ── */}
          <div className="booking2__copy fade-up">
            <p className="section-label">{b.label}</p>
            <div className="divider" />
            <h2 id="booking-heading" className="booking2__copy-heading">{b.heading}</h2>
            <p className="booking2__copy-paragraph">{b.copyParagraph}</p>
            <ul className="booking2__copy-benefits">
              {b.benefits.map((benefit, i) => (
                <li key={i} className="booking2__copy-benefit">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Booking card ── */}
          <div className="booking2__card fade-up delay-1">
            {submitted ? (
              /* ── Success ── */
              <div className="booking2__success">
                <div className="booking2__success-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>{b.confirmTitle}</h3>
                <p>{b.confirmText.replace('{name}', name)}</p>
                <div className="booking2__success-rows">
                  <div className="booking2__success-row">
                    <span>{b.summaryTreatment}</span>
                    <strong>{selectedT?.name ?? treatment}</strong>
                  </div>
                  <div className="booking2__success-row">
                    <span>{b.summaryDateTime}</span>
                    <strong>{dateIso} · {time}</strong>
                  </div>
                  <div className="booking2__success-row">
                    <span>{b.summaryStudio}</span>
                    <strong>{business.address.street}</strong>
                  </div>
                </div>
                <p className="booking2__mock-note">{b.confirmNote}</p>
                <button className="btn btn-ghost btn-sm" onClick={reset} type="button">{b.newBooking}</button>
              </div>
            ) : (
              <form className="booking2__form" onSubmit={handleSubmit} noValidate>

                {/* Row 1: Treatment */}
                <div className="booking2__row booking2__row--full">
                  <label className="booking2__label" htmlFor="b2-treatment">{b.treatmentLabel}</label>
                  <select
                    id="b2-treatment"
                    className="booking2__select"
                    value={treatment}
                    onChange={e => { setTreatment(e.target.value); setDateIso(''); setTime(''); }}
                    required
                  >
                    <option value="">{b.treatmentDefault}</option>
                    {pricingTreatments.map(tr => (
                      <option key={tr.id} value={tr.id}>
                        {tr.name} · {tr.duration} · {tr.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 2: Month label + 7-day window with prev/next */}
                <div className="booking2__row booking2__row--full">
                  <label className="booking2__label">{b.dateLabel}</label>

                  {/* Month + navigation */}
                  <div className="booking2__month-nav">
                    <button
                      type="button"
                      className="booking2__month-btn"
                      onClick={goPrev}
                      disabled={!canGoPrev}
                      aria-label="Vorherige Woche"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                    </button>
                    <span className="booking2__month-label">{monthLabel}</span>
                    <button
                      type="button"
                      className="booking2__month-btn"
                      onClick={goNext}
                      disabled={!canGoNext}
                      aria-label="Nächste Woche"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </button>
                  </div>

                  {/* 7 date pills — always exactly DATE_WINDOW items */}
                  <div className="booking2__date-pills" role="radiogroup" aria-label={b.dateLabel}>
                    {visibleDates.map(d => (
                      <button
                        key={d.iso}
                        type="button"
                        className={`booking2__date-pill ${dateIso === d.iso ? 'booking2__date-pill--selected' : ''}`}
                        onClick={() => { setDateIso(d.iso); setTime(''); }}
                        aria-pressed={dateIso === d.iso}
                      >
                        <span className="booking2__date-wd">{d.weekday}</span>
                        <span className="booking2__date-day">{d.day}</span>
                        <span className="booking2__date-mo">{d.month}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 3: Time pills (appear after treatment + date selected) */}
                {treatment && dateIso && (
                  <div className="booking2__row booking2__row--full">
                    {nextFreeStr && (
                      <p className="booking2__next-free">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {b.nextFree}: {nextFreeStr}
                      </p>
                    )}
                    <label className="booking2__label">{b.timeLabel}</label>
                    <div className="booking2__time-pills" role="radiogroup" aria-label={b.timeLabel}>
                      {slots.map(s => (
                        <button
                          key={s.time}
                          type="button"
                          className={[
                            'booking2__time-pill',
                            s.available ? 'booking2__time-pill--available' : 'booking2__time-pill--unavailable',
                            time === s.time ? 'booking2__time-pill--selected' : '',
                          ].join(' ')}
                          onClick={() => s.available && setTime(s.time)}
                          disabled={!s.available}
                          aria-pressed={time === s.time}
                          aria-label={s.available ? s.time : `${s.time} nicht verfügbar`}
                        >
                          {s.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Row 4: Name + Phone */}
                <div className="booking2__row booking2__row--split">
                  <div className="booking2__field">
                    <label className="booking2__label" htmlFor="b2-name">
                      {b.nameLabel}
                      <span className="booking2__required" aria-hidden="true"> *</span>
                    </label>
                    <input
                      id="b2-name"
                      type="text"
                      className={`booking2__input ${errors.name ? 'booking2__input--error' : ''}`}
                      placeholder={b.namePlaceholder}
                      value={name}
                      onChange={e => { setName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: undefined })); }}
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'b2-name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="b2-name-error" className="booking2__field-error" role="alert">{errors.name}</span>
                    )}
                  </div>
                  <div className="booking2__field">
                    <label className="booking2__label" htmlFor="b2-phone">
                      {b.phoneLabel}
                      <span className="booking2__required" aria-hidden="true"> *</span>
                    </label>
                    <input
                      id="b2-phone"
                      type="tel"
                      className={`booking2__input ${errors.phone ? 'booking2__input--error' : ''}`}
                      placeholder={b.phonePlaceholder}
                      value={phone}
                      onChange={e => { setPhone(e.target.value); if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined })); }}
                      autoComplete="tel"
                      aria-required="true"
                      aria-describedby={errors.phone ? 'b2-phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="b2-phone-error" className="booking2__field-error" role="alert">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* CTA — button + footnote in a centred flex column */}
                <div className="booking2__row booking2__row--full">
                  <div className="booking2__cta-wrap">
                    <button
                      type="submit"
                      className="btn btn-primary booking2__submit"
                      disabled={!canSubmit || submitting}
                    >
                      {submitting ? b.submitting : b.submit}
                    </button>
                    <p className="booking2__reply-note">{b.replyNote}</p>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
