// ─────────────────────────────────────────────────────────────
// PRICING DATA — Categories + full treatment list
// Used by: PricingSection (category nav + treatment cards)
//          BookingMockup (treatment dropdown)
// ─────────────────────────────────────────────────────────────

export interface PricingCategory {
  id: string;
  label: string;
}

export interface PricingTreatment {
  id: string;
  categoryId: string;
  name: string;
  duration: string;
  description: string;
  price: string;
}

export const pricingCategories: PricingCategory[] = [
  { id: 'manicure',      label: 'Maniküre' },
  { id: 'pedicure',      label: 'Pediküre' },
  { id: 'damen-waxing',  label: 'Damen Waxing' },
  { id: 'herren-waxing', label: 'Herren Waxing' },
  { id: 'gesicht',       label: 'Gesichtsbehandlungen' },
  { id: 'bodyforming',   label: 'Bodyforming' },
  { id: 'augen',         label: 'Augenbrauen & Wimpern' },
];

export const pricingTreatments: PricingTreatment[] = [

  // ── Maniküre ─────────────────────────────────────────────
  {
    id: 'classic-mani',
    categoryId: 'manicure',
    name: 'Classic Maniküre',
    duration: '45 Min.',
    description: 'Klassische Handpflege mit Formgebung, Nagelhautpflege und Lackanwendung nach Wahl.',
    price: 'CHF 55',
  },
  {
    id: 'gel-mani',
    categoryId: 'manicure',
    name: 'Gel Maniküre',
    duration: '60 Min.',
    description: 'Langanhaltender Gel-Lack mit professioneller Formgebung und Nagelhautpflege.',
    price: 'CHF 75',
  },
  {
    id: 'shellac-mani',
    categoryId: 'manicure',
    name: 'Shellac Maniküre',
    duration: '60 Min.',
    description: 'Shellac-Lack für bis zu drei Wochen Haltbarkeit mit natürlichem, hochwertigem Finish.',
    price: 'CHF 70',
  },
  {
    id: 'nail-art',
    categoryId: 'manicure',
    name: 'Nail Art',
    duration: 'ab 15 Min.',
    description: 'Individuelle Nagelkunst als elegante Ergänzung zu jeder Maniküre.',
    price: 'ab CHF 15',
  },

  // ── Pediküre ──────────────────────────────────────────────
  {
    id: 'classic-pedi',
    categoryId: 'pedicure',
    name: 'Classic Pediküre',
    duration: '60 Min.',
    description: 'Gründliche Fußpflege mit Formgebung, Hornhautentfernung und Lackanwendung.',
    price: 'CHF 70',
  },
  {
    id: 'spa-pedi',
    categoryId: 'pedicure',
    name: 'Spa Pediküre',
    duration: '75 Min.',
    description: 'Verwöhnende Fußpflege mit Peeling, Maske, entspannender Massage und Lack.',
    price: 'CHF 90',
  },
  {
    id: 'shellac-pedi',
    categoryId: 'pedicure',
    name: 'Shellac Pediküre',
    duration: '75 Min.',
    description: 'Spa Pediküre mit langhaltendem Shellac-Lack für gepflegte Füße bis zu vier Wochen.',
    price: 'CHF 85',
  },

  // ── Damen Waxing ─────────────────────────────────────────
  {
    id: 'beine-ganz',
    categoryId: 'damen-waxing',
    name: 'Beine ganz',
    duration: '45 Min.',
    description: 'Professionelle Wachsepilation der ganzen Beine für ein langanhaltend glattes Ergebnis.',
    price: 'CHF 55',
  },
  {
    id: 'beine-halb',
    categoryId: 'damen-waxing',
    name: 'Beine halb',
    duration: '30 Min.',
    description: 'Wachsepilation Ober- oder Unterschenkel, schonend und präzise ausgeführt.',
    price: 'CHF 35',
  },
  {
    id: 'achseln-d',
    categoryId: 'damen-waxing',
    name: 'Achseln',
    duration: '15 Min.',
    description: 'Sanfte und gründliche Wachsepilation der Achseln mit hautpflegenden Produkten.',
    price: 'CHF 20',
  },
  {
    id: 'bikini',
    categoryId: 'damen-waxing',
    name: 'Bikinizone',
    duration: '20 Min.',
    description: 'Sorgfältige Wachsepilation der Bikinizone für ein gepflegtes, sicheres Gefühl.',
    price: 'CHF 25',
  },
  {
    id: 'brazilian',
    categoryId: 'damen-waxing',
    name: 'Brazilian',
    duration: '30 Min.',
    description: 'Vollständige Wachsepilation, gründlich und schonend mit Warmwachs ausgeführt.',
    price: 'CHF 45',
  },
  {
    id: 'oberlippe',
    categoryId: 'damen-waxing',
    name: 'Oberlippe',
    duration: '10 Min.',
    description: 'Präzise Wachsepilation des Oberlippenbereichs für ein gepflegtes Erscheinungsbild.',
    price: 'CHF 15',
  },

  // ── Herren Waxing ─────────────────────────────────────────
  {
    id: 'herren-ruecken',
    categoryId: 'herren-waxing',
    name: 'Rücken',
    duration: '30 Min.',
    description: 'Effektive und schonende Wachsepilation des Rückens mit professionellem Warmwachs.',
    price: 'CHF 40',
  },
  {
    id: 'herren-brust',
    categoryId: 'herren-waxing',
    name: 'Brust',
    duration: '20 Min.',
    description: 'Professionelle Wachsepilation der Brust, präzise und hautschonend ausgeführt.',
    price: 'CHF 30',
  },
  {
    id: 'herren-augenbrauen',
    categoryId: 'herren-waxing',
    name: 'Augenbrauen',
    duration: '10 Min.',
    description: 'Formgebung und Epilation der Augenbrauen für ein gepflegtes, natürliches Bild.',
    price: 'CHF 15',
  },

  // ── Gesichtsbehandlungen ──────────────────────────────────
  {
    id: 'glow-facial',
    categoryId: 'gesicht',
    name: 'Glow Facial',
    duration: '60 Min.',
    description: 'Tiefenreinigung, Peeling und Aufhellung für strahlend klare, gepflegte Haut.',
    price: 'CHF 85',
  },
  {
    id: 'anti-aging',
    categoryId: 'gesicht',
    name: 'Anti-Aging Behandlung',
    duration: '75 Min.',
    description: 'Revitalisierende Behandlung gegen Falten und Spannungsverlust für sichtbar jüngere Haut.',
    price: 'CHF 110',
  },
  {
    id: 'tiefenreinigung',
    categoryId: 'gesicht',
    name: 'Tiefenreinigung',
    duration: '60 Min.',
    description: 'Intensive Tiefenreinigung und Porenverfeinerung für ein reines, frisches Hautbild.',
    price: 'CHF 90',
  },
  {
    id: 'hydration-boost',
    categoryId: 'gesicht',
    name: 'Hydration Boost',
    duration: '45 Min.',
    description: 'Intensive Feuchtigkeitspflege für sofort spürbar weiche, strahlende Haut.',
    price: 'CHF 75',
  },

  // ── Bodyforming ───────────────────────────────────────────
  {
    id: 'bodyforming-erst',
    categoryId: 'bodyforming',
    name: 'DiViNiA Erstbehandlung',
    duration: '60 Min.',
    description: 'Einführung in die DiViNiA Methode mit persönlicher Analyse und erster gezielter Behandlung.',
    price: 'CHF 80',
  },
  {
    id: 'bodyforming-folge',
    categoryId: 'bodyforming',
    name: 'DiViNiA Folgebehandlung',
    duration: '45 Min.',
    description: 'Gezielte Folgebehandlung zur Konturierung, Straffung und Modellierung des Körpers.',
    price: 'CHF 65',
  },
  {
    id: 'bodyforming-paket',
    categoryId: 'bodyforming',
    name: '5er Paket',
    duration: '5 × 45 Min.',
    description: 'Fünf Folgebehandlungen zum Vorzugspreis für optimale und nachhaltige Ergebnisse.',
    price: 'CHF 290',
  },

  // ── Augenbrauen & Wimpern ─────────────────────────────────
  {
    id: 'brauen-forming',
    categoryId: 'augen',
    name: 'Augenbrauenforming',
    duration: '20 Min.',
    description: 'Professionelle Formgebung für ausdrucksstarke, perfekt gerahmte Augenbrauen.',
    price: 'CHF 28',
  },
  {
    id: 'brauen-farbe',
    categoryId: 'augen',
    name: 'Augenbrauen färben',
    duration: '15 Min.',
    description: 'Natürliche Färbung für sichtbar betonte, klarer definierte Augenbrauen.',
    price: 'CHF 18',
  },
  {
    id: 'wimpern-lift',
    categoryId: 'augen',
    name: 'Wimpernlifting',
    duration: '60 Min.',
    description: 'Dauerhafter Curl für aufgefächerte, natürlich geöffnete Wimpern ohne Wimpernzange.',
    price: 'CHF 85',
  },
  {
    id: 'wimpern-farbe',
    categoryId: 'augen',
    name: 'Wimpern färben',
    duration: '15 Min.',
    description: 'Intensive Färbung für ausdrucksstarke, tief definierte Wimpern ohne tägliches Mascara.',
    price: 'CHF 20',
  },
  {
    id: 'kombi-paket',
    categoryId: 'augen',
    name: 'Kombi-Paket',
    duration: '75 Min.',
    description: 'Augenbrauenforming kombiniert mit Wimpernlifting — das perfekt abgestimmte Duo.',
    price: 'CHF 95',
  },
];
