// Footer.tsx
// Brand column: logo · tagline · language toggle · social icons
// Three info columns: services · contact · hours
// Bottom bar: copyright · legal links · LumaFlow credit
// Demo disclosure note below the bottom bar

import { business } from '../../data/business';
import { services } from '../../data/services';
import { useLang } from '../../context/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';

// ─────────────────────────────────────────────────────────────────────────────
// Social icon SVGs — 16 × 16 within a 24 × 24 viewBox, stroke-based (thin, elegant)
// WhatsApp uses fill (official icon is all-fill, stroke version doesn't read well)
// ─────────────────────────────────────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Simplified TikTok note shape */}
      <path d="M9 12a4 4 0 1 0 4 4V4" />
      <path d="M13 4c.3 2.2 2 4.1 5 4.7" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Social link config — driven entirely by business.ts
// An empty string in business.social.* suppresses that icon
// ─────────────────────────────────────────────────────────────────────────────

interface SocialLink {
  href: string
  label: string
  Icon: React.ComponentType
}

function buildSocialLinks(): SocialLink[] {
  const links: SocialLink[] = [];
  if (business.social.instagram)
    links.push({ href: business.social.instagram, label: 'Instagram',  Icon: IconInstagram });
  if (business.social.facebook)
    links.push({ href: business.social.facebook,  label: 'Facebook',   Icon: IconFacebook  });
  if (business.social.tiktok)
    links.push({ href: business.social.tiktok,    label: 'TikTok',     Icon: IconTikTok    });
  // WhatsApp always present (real URL lives in business.contact)
  links.push({ href: business.contact.whatsappUrl, label: 'WhatsApp', Icon: IconWhatsApp  });
  return links;
}

// ─────────────────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear  = new Date().getFullYear();
  const { t }        = useLang();
  const f            = t.footer;
  const socialLinks  = buildSocialLinks();

  return (
    <footer className="footer">

      {/* ── Main grid ─────────────────────────────── */}
      <div className="container footer__inner">

        {/* Brand column */}
        <div className="footer__brand">
          <p className="footer__logo-name">{business.name}</p>
          <p className="footer__logo-sub">{business.tagline} · {business.city}</p>
          <p className="footer__tagline">{f.tagline}</p>

          {/* Language toggle */}
          <div className="footer__lang">
            <LanguageToggle />
          </div>

          {/* Social icons — lives in brand column, below lang toggle */}
          <div className="footer__social" aria-label="Soziale Netzwerke">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="footer__col">
          <p className="footer__col-heading">{f.servicesHeading}</p>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#behandlungen" className="footer__link">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <p className="footer__col-heading">{f.contactHeading}</p>
          <ul className="footer__links">
            <li>
              <a href={`tel:${business.contact.phoneRaw}`} className="footer__link">
                {business.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.contact.email}`} className="footer__link">
                {business.contact.email}
              </a>
            </li>
            <li>
              <a href={business.contact.whatsappUrl} className="footer__link"
                 target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="footer__address">{business.address.full}</li>
          </ul>
        </div>

        {/* Hours */}
        <div className="footer__col">
          <p className="footer__col-heading">{f.hoursHeading}</p>
          <ul className="footer__hours">
            {business.hours.map((h) => (
              <li key={h.day} className="footer__hour-row">
                <span className="footer__day">{t.days[h.day] ?? h.day}</span>
                <span className={`footer__time ${h.time === 'Closed' ? 'footer__time--closed' : ''}`}>
                  {h.time === 'Closed' ? f.closed : h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ────────────────────────────── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">

          <p className="footer__legal">
            © {currentYear} {business.fullName} · {f.rights}
          </p>

          <div className="footer__legal-links">
            <a href="/datenschutz.html" className="footer__link-sm"
               target="_blank" rel="noopener noreferrer">{f.privacy}</a>
            <a href="/impressum.html"   className="footer__link-sm"
               target="_blank" rel="noopener noreferrer">{f.imprint}</a>
          </div>

          <p className="footer__credit">Demo by <strong>LumaFlow</strong></p>

        </div>

        {/* Demo disclosure */}
        <div className="container">
          <p className="footer__demo-note">
            Maison Lumière ist ein fiktives Demo-Konzept eines Beauty Studios, erstellt von{' '}
            <strong>LumaFlow</strong> zur Veranschaulichung. Alle Angaben sind fiktiv.
          </p>
        </div>
      </div>

    </footer>
  );
}
