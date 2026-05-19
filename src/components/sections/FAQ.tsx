// FAQ.tsx — Accordion FAQ, fully i18n. Items from t.faqItems.

import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { t } = useLang();
  const f = t.faq;

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section className="faq section-pad" id="faq" aria-labelledby="faq-heading">
      <div className="container faq__inner">
        <div className="section-header fade-up">
          <p className="section-label">{f.label}</p>
          <div className="divider" />
          <h2 id="faq-heading">{f.heading}</h2>
        </div>

        <dl className="faq__list">
          {t.faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq__item fade-up ${isOpen ? 'faq__item--open' : ''}`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <dt>
                  <button
                    id={`faq-btn-${item.id}`}
                    className="faq__question"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    type="button"
                  >
                    {item.question}
                    <span className="faq__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${item.id}`}
                  className="faq__answer"
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  hidden={!isOpen}
                >
                  {item.answer}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
