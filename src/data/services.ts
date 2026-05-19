// ─────────────────────────────────────────────────────────────
// SERVICES DATA — 6 bookable treatment categories
// Names + descriptions come from i18n.serviceCards per language.
// Tags are German treatment chips (shown on service cards).
// ─────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  name: string;          // Fallback name (shown if i18n lookup fails)
  startingPrice: string; // e.g. "ab CHF 55"
  duration: string;      // e.g. "ab 45 Min."
  description: string;   // Fallback description
  tags: string[];        // Treatment chips shown on card
  imagePlaceholder: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'manicure',
    name: 'Maniküre',
    startingPrice: 'ab CHF 55',
    duration: 'ab 45 Min.',
    description: 'Gepflegte Hände für jeden Anlass. Sorgfältig ausgeführt und auf Ihre Bedürfnisse abgestimmt.',
    tags: ['Classic Maniküre', 'Gel / Shellac', 'Nagelpflege & Lack'],
    imagePlaceholder: 'img-manicure',
    popular: true,
  },
  {
    id: 'pedicure',
    name: 'Pediküre',
    startingPrice: 'ab CHF 70',
    duration: 'ab 60 Min.',
    description: 'Gönnen Sie Ihren Füssen eine gründliche und entspannende Pflege. Für spürbar gepflegte Ergebnisse.',
    tags: ['Classic Pediküre', 'Spa Pediküre', 'Shellac Pediküre'],
    imagePlaceholder: 'img-nails-2',
  },
  {
    id: 'haarentfernung',
    name: 'Haarentfernung',
    startingPrice: 'ab CHF 15',
    duration: 'ab 10 Min.',
    description: 'Sanfte Haarentfernung mit Warmwachs. Schonend, gründlich und mit langanhaltenden Ergebnissen.',
    tags: ['Beine', 'Achseln', 'Bikinizone'],
    imagePlaceholder: 'img-waxing',
  },
  {
    id: 'gesichtsbehandlung',
    name: 'Gesichtsbehandlung',
    startingPrice: 'ab CHF 85',
    duration: 'ab 60 Min.',
    description: 'Individuelle Gesichtsbehandlungen für Ihren Hauttyp. Von der klassischen Reinigung bis zur modernen Pflege.',
    tags: ['Tiefenreinigung', 'Anti-Aging', 'Hydration Boost'],
    imagePlaceholder: 'img-facial',
  },
  {
    id: 'bodyforming',
    name: 'Bodyforming (DiViNiA)',
    startingPrice: 'ab CHF 80',
    duration: 'ab 45 Min.',
    description: 'Gezielte Körperpflege mit dem DiViNiA Gerät. Sichtbare Ergebnisse, abgestimmt auf Ihre Wünsche.',
    tags: ['Erstbehandlung', 'Folgebehandlung', 'Ser Paket'],
    imagePlaceholder: 'img-body',
  },
  {
    id: 'augenbrauen-wimpern',
    name: 'Augenbrauen & Wimpern',
    startingPrice: 'ab CHF 22',
    duration: 'ab 15 Min.',
    description: 'Formen, Färben und Stylen für einen ausdrucksstarken und gepflegten Blick.',
    tags: ['Augenbrauenforming', 'Wimpernlifting', 'Kombi-Paket'],
    imagePlaceholder: 'img-lash',
  },
];
