// ─────────────────────────────────────────────────────────────
// BUSINESS DATA — swap these fields when duplicating for a real client
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Maison Lumière',
  tagline: 'Beauty Studio',
  fullName: 'Maison Lumière Beauty Studio',
  city: 'Zürich',

  headline: 'Premium beauty treatments in Zürich',
  subheadline:
    'Manicure, facial treatments, lash & brow, waxing and wellness in a calm Zürich studio. Book your appointment directly.',

  address: {
    street: 'Schaffhauserstrasse 48',        // demo address — fictional
    city: 'Zürich',
    postal: '8006',
    country: 'Switzerland',
    full: 'Schaffhauserstrasse 48, 8006 Zürich',
    // Demo: links to Zürich city centre, not a specific salon location
    googleMapsUrl:
      'https://maps.google.com/?q=Bahnhofstrasse+Zürich+Innenstadt',
    // Demo: generic Zürich Bahnhofstrasse embed — no fake business pin
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10804.8!2d8.527!3d47.3737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08cc0e6e41%3A0x4f5c30933f0f8a26!2sBahnhofstrasse%2C+Z%C3%BCrich!5e0!3m2!1sde!2sch!4v1695000000001!5m2!1sde!2sch',
  },

  contact: {
    phone: '+41 44 123 45 67',
    phoneRaw: '+41441234567',
    email: 'hello@maisonlumiere.ch',
    whatsapp: '+41791234567',
    whatsappUrl: 'https://wa.me/41791234567?text=Guten%20Tag%2C%20ich%20m%C3%B6chte%20einen%20Termin%20buchen.',
  },

  hours: [
    { day: 'Monday',    time: '09:00 – 20:00' },
    { day: 'Tuesday',   time: '09:00 – 20:00' },
    { day: 'Wednesday', time: '09:00 – 20:00' },
    { day: 'Thursday',  time: '09:00 – 20:00' },
    { day: 'Friday',    time: '09:00 – 20:00' },
    { day: 'Saturday',  time: '09:00 – 20:00' },
    { day: 'Sunday',    time: 'Closed' },
  ],

  rating: 4.9,
  reviewCount: 87,

  bookingUrl: '#booking', // Replace with real booking link (e.g. Calendly, Fresha, Booksy)

  social: {
    /** Demo placeholder URLs — replace with real handles before launch.
     *  An empty string '' means the icon is suppressed in the UI.    */
    instagram: 'https://instagram.com/maisonlumiere.demo',
    tiktok:    'https://www.tiktok.com/',
    facebook:  'https://www.facebook.com/',
  },
} as const;
