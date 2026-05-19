// ─────────────────────────────────────────────────────────────
// FEATURED TREATMENTS — 4 highlighted treatments shown in detail
// ─────────────────────────────────────────────────────────────

export interface Treatment {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: string;
  benefit: string;
  description: string;
  imagePlaceholder: string; // CSS gradient class — fallback
  imageSrc: string;         // real image path from /public/images/
  imageAlt: string;
}

export const treatments: Treatment[] = [
  {
    id: 'signature-manicure',
    name: 'Signature Manicure',
    category: 'Manicure & Pedicure',
    duration: '60 min',
    price: 'CHF 75',
    benefit: 'Long-lasting gel colour with nail care',
    description:
      'Our most popular manicure. Includes shaping, cuticle care, hand massage and long-lasting gel polish in your chosen shade.',
    imagePlaceholder: 'img-manicure',
    imageSrc: '/images/manicure-service.webp',
    imageAlt: 'Close-up of elegant manicured nails on a neutral background',
  },
  {
    id: 'glow-facial',
    name: 'Glow Facial',
    category: 'Facial Treatments',
    duration: '75 min',
    price: 'CHF 120',
    benefit: 'Deep cleanse, brightening and hydration',
    description:
      'A deep-cleansing and brightening facial for all skin types. Includes a personalised skin consultation, exfoliation, mask and hydrating finish.',
    imagePlaceholder: 'img-facial',
    imageSrc: '/images/spa-facial-application.webp',
    imageAlt: 'Calm facial treatment in a clean, well-lit studio',
  },
  {
    id: 'lash-lift-brow',
    name: 'Lash Lift & Brow Styling',
    category: 'Lash & Brow',
    duration: '75 min',
    price: 'CHF 110',
    benefit: 'Defined lashes and shaped brows, naturally',
    description:
      'A lash lift that curls and defines your natural lashes, combined with brow styling and tinting for a polished, natural look.',
    imagePlaceholder: 'img-lash',
    imageSrc: '/images/eyebrow-service.webp',
    imageAlt: 'Close-up of lifted lashes and shaped brows, natural look',
  },
  {
    id: 'body-ritual',
    name: 'Relaxing Body Treatment',
    category: 'Massage & Wellness',
    duration: '90 min',
    price: 'CHF 145',
    benefit: 'Full reset — exfoliation, massage, calm mind',
    description:
      'Combines a full-body exfoliating scrub with a relaxing massage. Ideal for a complete wellness reset. Includes a herbal compress and body oil finish.',
    imagePlaceholder: 'img-wellness',
    imageSrc: '/images/relaxing-spa-massage.webp',
    imageAlt: 'Calm wellness treatment room with soft towels and warm lighting',
  },
];
