// ─────────────────────────────────────────────────────────────
// TESTIMONIALS — authentic, local, German
// ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  neighbourhood: string;
  text: string;
  rating: number;
  treatment: string;
  outcome: string; // specific visible result — shown as a chip on the card
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Silvia R.',
    neighbourhood: 'Zürich Oerlikon',
    text: 'Ich wollte definierte, natürliche Brauen. Liora hat sofort verstanden, was ich mir vorstelle. Das Ergebnis war genau richtig. Meine Haut hat sich von Anfang an gut aufgehoben angefühlt.',
    rating: 5,
    treatment: 'Lash Lift und Brow Styling',
    outcome: 'Natürliche Definition nach einer Behandlung',
  },
  {
    id: 't2',
    name: 'Martina K.',
    neighbourhood: 'Zürich Wipkingen',
    text: 'Meine Haut war nach dem Glow Facial völlig verändert. Strahlender, glatter, wirklich hydratisiert. Die Beratung davor hat den Unterschied gemacht. Ich habe das Studio entspannt und zufrieden verlassen.',
    rating: 5,
    treatment: 'Glow Facial',
    outcome: 'Sichtbar strahlendere Haut nach einer Behandlung',
  },
  {
    id: 't3',
    name: 'Laura B.',
    neighbourhood: 'Zürich Hürlimann',
    text: 'Das Studio ist ruhig, sauber und wirklich persönlich. Ich habe mich sofort wohl gefühlt. Zwei Wochen später denke ich noch daran, wie erholt ich danach war. Meinen nächsten Termin habe ich bereits gebucht.',
    rating: 5,
    treatment: 'Entspannende Körperpflege',
    outcome: 'Noch nach zwei Wochen spürbar',
  },
];
