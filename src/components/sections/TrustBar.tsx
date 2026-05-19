// TrustBar.tsx — Rada-inspired trust section.
// Left: large stat. Right: 3 trust points. Bottom: metric row.

import { useLang } from '../../context/LanguageContext';

export function TrustBar() {
  const { t } = useLang();
  const tb = t.trustBar;

  return (
    <section className="trust2 section-pad--sm" aria-label="Vertrauen und Qualität">
      <div className="container">

        {/* Main row: stat + points */}
        <div className="trust2__main fade-up">

          {/* Left: large stat */}
          <div className="trust2__stat">
            <span className="trust2__stat-num">{tb.statNum}</span>
            <span className="trust2__stat-label">{tb.statLabel}</span>
          </div>

          <div className="trust2__divider" aria-hidden="true" />

          {/* Right: trust points */}
          <div className="trust2__points">
            {tb.points.map((p, i) => (
              <div key={i} className="trust2__point">
                <p className="trust2__point-title">{p.title}</p>
                <p className="trust2__point-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom metric row */}
        <div className="trust2__metrics fade-up delay-1">
          {tb.metrics.map((m, i) => (
            <div key={i} className="trust2__metric">
              <span className="trust2__metric-dot" aria-hidden="true" />
              {m}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
