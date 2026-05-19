import { useState } from 'react';
import { business } from '../../data/business';

const flowSteps = [
  {
    n: '1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/>
      </svg>
    ),
    title: 'Client calls',
    detail: 'Someone searches for a beauty studio in Zürich and calls directly.',
  },
  {
    n: '2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Studio is with a client',
    detail: 'You are in the middle of a treatment and cannot answer right away.',
  },
  {
    n: '3',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Client requests a callback',
    detail: 'Instead of hanging up and calling a competitor, they leave their number on the website.',
  },
  {
    n: '4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'You follow up — booking confirmed',
    detail: 'When the treatment is done, you call back. The client books. No lost inquiry.',
  },
];

export function CallbackRecovery() {
  const [submitted, setSubmitted] = useState(false);
  const [cbName, setCbName] = useState('');
  const [cbPhone, setCbPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cbName.trim() && cbPhone.trim()) setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setCbName('');
    setCbPhone('');
  };

  return (
    <section className="callback section-pad" aria-labelledby="callback-heading">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header fade-up">
          <p className="section-label">Never miss an inquiry</p>
          <div className="divider" />
          <h2 id="callback-heading">
            Busy with a client?<br />No inquiry gets lost.
          </h2>
          <p className="section-intro">
            When someone calls and you cannot answer, they do not disappear. They request a callback — and you follow up as soon as you are free.
          </p>
        </div>

        {/* ── 4-step visual flow ── */}
        <div className="callback__flow fade-up delay-1" aria-label="How the callback process works">
          {flowSteps.map((s, i) => (
            <div key={s.n} className="callback__flow-step">
              <div className="callback__flow-left">
                <div className={`callback__flow-num ${i === 3 ? 'callback__flow-num--done' : ''}`}>
                  {s.icon}
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="callback__flow-connector" aria-hidden="true" />
                )}
              </div>
              <div className="callback__flow-content">
                <p className="callback__flow-step-num">Step {s.n}</p>
                <p className="callback__flow-title">{s.title}</p>
                <p className="callback__flow-detail">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Two-column: body copy + callback form ── */}
        <div className="callback__bottom">
          <div className="callback__text fade-up">
            <h3 className="callback__text-heading">
              No missed call becomes a lost booking.
            </h3>
            <p className="callback__body">
              Most studios lose clients the moment a call goes unanswered. This feature changes that. Clients feel taken care of — even before they have been to the studio once.
            </p>
            <ul className="callback__list">
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                Works during treatments, lunch breaks, and after hours
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                Clients can also reach you via WhatsApp
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                You reply when you are ready — no pressure, no missed opportunity
              </li>
            </ul>
          </div>

          <div className="callback__widget fade-up delay-2">
            {!submitted ? (
              <form className="callback__form" onSubmit={handleSubmit} noValidate>
                <div className="callback__form-header">
                  <div className="callback__form-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="callback__form-title">Request a callback</p>
                    <p className="callback__form-sub">We will call you back as soon as we are free.</p>
                  </div>
                </div>

                <label className="booking__field">
                  <span className="booking__field-label">Your name</span>
                  <input
                    type="text"
                    className="booking__input"
                    placeholder="Anna Müller"
                    value={cbName}
                    onChange={(e) => setCbName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                </label>
                <label className="booking__field">
                  <span className="booking__field-label">Your phone number</span>
                  <input
                    type="tel"
                    className="booking__input"
                    placeholder="+41 79 123 45 67"
                    value={cbPhone}
                    onChange={(e) => setCbPhone(e.target.value)}
                    required
                    autoComplete="tel"
                  />
                </label>

                <button className="btn btn-primary" type="submit">
                  Request callback
                </button>

                <div className="callback__alternatives">
                  <p className="callback__or-label">Or reach us directly</p>
                  <div className="callback__direct">
                    <a href={`tel:${business.contact.phoneRaw}`} className="callback__direct-link">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                      Call now
                    </a>
                    <a href={business.contact.whatsappUrl} className="callback__direct-link" target="_blank" rel="noopener noreferrer">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </form>
            ) : (
              <div className="callback__success">
                <div className="callback__success-ring" aria-hidden="true">
                  <div className="callback__success-icon">✓</div>
                </div>
                <h3 className="callback__success-title">Request received</h3>
                <p className="callback__success-text">
                  Thank you, <strong>{cbName}</strong>. We will call you back at <strong>{cbPhone}</strong> as soon as we are free.
                </p>
                <p className="booking__mock-note">Demonstration only — no real request was sent.</p>
                <button className="btn btn-ghost btn-sm" onClick={reset} type="button">
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
