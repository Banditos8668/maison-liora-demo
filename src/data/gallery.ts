// ─────────────────────────────────────────────────────────────
// GALLERY DATA
// ─────────────────────────────────────────────────────────────

export interface GalleryItem {
  id: string;
  label: string;
  imageAlt: string;
  imagePlaceholder: string; // CSS class key — fallback gradient
  imageSrc: string;         // real image path from /public/images/
  category: 'nails' | 'lash-brow' | 'facial' | 'wellness' | 'studio' | 'products';
}

export const gallery: GalleryItem[] = [
  {
    id: 'g1',
    label: 'Nail Detail',
    imageAlt: 'Elegant manicured nails with natural gel polish on a neutral background',
    imagePlaceholder: 'img-nails-1',
    imageSrc: '/images/manicure-service.webp',
    category: 'nails',
  },
  {
    id: 'g2',
    label: 'Facial Treatment',
    imageAlt: 'Client relaxing during a facial treatment in a calm, well-lit studio',
    imagePlaceholder: 'img-facial-1',
    imageSrc: '/images/facial-mask-treatment.webp',
    category: 'facial',
  },
  {
    id: 'g3',
    label: 'Lash Lift Result',
    imageAlt: 'Natural lash lift result, close-up, no filter',
    imagePlaceholder: 'img-lash-1',
    imageSrc: '/images/eyebrow-service.webp',
    category: 'lash-brow',
  },
  {
    id: 'g4',
    label: 'Studio Interior',
    imageAlt: 'Clean, warm treatment room at Maison Lumière with soft lighting and white surfaces',
    imagePlaceholder: 'img-studio-1',
    imageSrc: '/images/luxury-spa-interior.webp',
    category: 'studio',
  },
  {
    id: 'g5',
    label: 'Wellness Treatment',
    imageAlt: 'Relaxing body massage with herbal compress and soft towels',
    imagePlaceholder: 'img-wellness-1',
    imageSrc: '/images/relaxing-spa-massage.webp',
    category: 'wellness',
  },
  {
    id: 'g6',
    label: 'Premium Products',
    imageAlt: 'High-quality skincare and nail products used at Maison Lumière',
    imagePlaceholder: 'img-products-1',
    imageSrc: '/images/natural-beauty-closeup.webp',
    category: 'products',
  },
  {
    id: 'g7',
    label: 'Pedicure Detail',
    imageAlt: 'Luxurious pedicure treatment in progress, clean and professional',
    imagePlaceholder: 'img-nails-2',
    imageSrc: '/images/pedicure-service.webp',
    category: 'nails',
  },
  {
    id: 'g8',
    label: 'Brow Styling',
    imageAlt: 'Precisely shaped and tinted brows, natural result',
    imagePlaceholder: 'img-lash-2',
    imageSrc: '/images/spa-beauty-portrait.webp',
    category: 'lash-brow',
  },
];
