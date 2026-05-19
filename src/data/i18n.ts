// ─────────────────────────────────────────────────────────────
// MAISON LUMIÈRE — Translation strings (DE default · EN)
// All visible UI copy lives here. No em dashes anywhere.
// ─────────────────────────────────────────────────────────────

export type Lang = 'de' | 'en';

const de = {
  nav: {
    home: 'Home',
    treatments: 'Behandlungen',
    about: 'Über uns',
    reviews: 'Bewertungen',
    faq: 'FAQ',
    contact: 'Kontakt',
    rituals: 'Rituale',
    book: 'Termin buchen',
  },

  hero: {
    eyebrow: 'Maison Lumière · Beauty Studio Zürich',
    line1: 'Das Ritual,',
    line2: 'sich selbst',
    line3em: 'wieder zu spüren.',
    sub: 'Hautpflege, Lash & Brow, Maniküre und Wellness in einem ruhigen Zürcher Studio. Jede Behandlung beginnt mit einer persönlichen Beratung.',
    cta: 'Termin buchen',
    ctaPhone: 'Jetzt anrufen',
    reviews: 'Bewertungen',
    openToday: 'Heute geöffnet',
    closedToday: 'Heute geschlossen',
    consultation: 'Persönliche Beratung bei jedem Besuch inklusive',
  },

  trustBar: {
    statNum: '20+',
    statLabel: 'Jahre Erfahrung',
    points: [
      { title: 'Jede Behandlung individuell', body: 'Ich nehme mir Zeit für Sie. Keine Massenabfertigung.' },
      { title: 'Geprüfte Qualität', body: 'Nur hochwertige, hautfreundliche Produkte.' },
      { title: 'Gut erreichbar', body: 'Zentral in Zürich. Tram und Parkplätze in der Nähe.' },
    ],
    metrics: ['100% Persönliche Betreuung', '6 Behandlungsbereiche', 'Mo bis Sa Termine möglich'],
  },

  booking: {
    label: 'Direkt buchen',
    heading: 'Ihren Termin buchen',
    intro: 'Behandlung wählen, Datum und Zeit bestimmen, fertig.',
    copyParagraph: 'Wählen Sie eine Behandlung, Ihren Wunschtermin und hinterlassen Sie Ihre Kontaktdaten. Wir bestätigen Ihren Termin persönlich.',
    benefits: [
      'Persönliche Beratung inklusive',
      'In 60 Sekunden buchen',
      'Montag bis Samstag · 09:00 bis 20:00',
    ],
    treatmentLabel: 'Behandlung',
    treatmentDefault: 'Behandlung wählen',
    dateLabel: 'Datum',
    timeLabel: 'Uhrzeit',
    timeDefault: 'Zeit wählen',
    nextFree: 'Nächster freier Termin',
    nameLabel: 'Ihr Name',
    namePlaceholder: 'Anna Müller',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+41 79 000 00 00',
    submit: 'Termin buchen',
    submitting: 'Wird gesendet ...',
    replyNote: '* Pflichtfelder',
    nameError: 'Bitte geben Sie Ihren Namen ein.',
    phoneError: 'Bitte geben Sie Ihre Telefonnummer ein.',
    confirmTitle: 'Anfrage erhalten',
    confirmText: 'Vielen Dank, {name}. Wir freuen uns, Sie bei Maison Lumière willkommen zu heissen.',
    confirmNote: 'Dies ist eine visuelle Demo. Kein echter Termin wurde gebucht.',
    newBooking: 'Neue Buchung starten',
    summaryTreatment: 'Behandlung',
    summaryDateTime: 'Datum und Zeit',
    summaryStudio: 'Studio',
    badge: 'Sofortige Bestätigung',
    badgeSub: 'Ihr Termin ist in Sekunden gesichert.',
    steps: ['Behandlung', 'Datum und Zeit', 'Details', 'Bestätigt'],
    step1title: 'Behandlung auswählen',
    step2title: 'Datum auswählen',
    step2times: 'Verfügbare Zeiten',
    step3title: 'Ihre Kontaktdaten',
    step3note: 'Ihre Bestätigung wird per SMS gesendet.',
    summaryLabel: 'Buchungsübersicht',
    summaryDuration: 'Dauer',
    summaryPrice: 'Preis',
    back: 'Zurück',
    nextDateTime: 'Weiter',
    nextDetails: 'Weiter',
    confirm: 'Termin bestätigen',
    booked: 'Gebucht',
    contextCategory: 'Kategorie',
    contextBenefit: 'Wirkung',
    metaRating: 'Bewertung',
  },

  services: {
    label: 'Unsere Leistungen',
    heading: 'Behandlungen',
    intro: 'Sechs Behandlungskategorien, jede gewählt für das, was sie leistet. Jede Behandlung beginnt mit einer persönlichen Beratung.',
    footer: 'Alle Preise beinhalten persönliche Beratung und Pflegehinweise.',
    allPrices: 'Alle Preise & Online buchen',
    cta: 'Termin buchen',
    cardCta: 'Online buchen',
    popular: 'Beliebteste',
    from: 'ab',
    min: 'Min.',
  },

  whatToExpect: {
    label: 'Ihre Erfahrung',
    heading: 'Was Sie erwartet',
    subline: 'Ruhige Behandlungen, ehrliche Beratung und sichtbare Ergebnisse.',
    cards: [
      { icon: 'person', title: 'Persönliche Beratung', body: 'Jeder Termin beginnt mit einem Gespräch über Ihre Wünsche und Hautbedürfnisse.' },
      { icon: 'spa', title: 'Ruhige Behandlung', body: 'Ein ruhiges, privates Studio ohne Hektik. Ihre Zeit gehört Ihnen allein.' },
      { icon: 'leaf', title: 'Hochwertige Produkte', body: 'Nur geprüfte Produkte von Dermalogica, OPI und Environ.' },
      { icon: 'star', title: 'Sichtbare Ergebnisse', body: 'Behandlungen, die wirklich wirken. Spürbar nach dem ersten Besuch.' },
    ],
  },

  rituals: {
    label: 'Signature Treatments',
    heading1: 'Vier Behandlungen,',
    heading2em: 'für die Kundinnen gerne wiederkommen.',
    intro: 'Diese vier wurden für die Ergebnisse ausgewählt, die sie konsequent liefern, und für die Sorgfalt, die in jede einzelne einfließt.',
    cta: 'Dieses Treatment buchen',
  },

  gallery: {
    label: 'Studio und Ergebnisse',
    heading: 'Unsere Arbeit',
    intro: 'Eine ruhige Umgebung, erfahrene Hände und natürlich wirkende Ergebnisse. Das erwartet Sie bei Maison Lumière.',
  },

  founder: {
    label: 'Ihre Spezialistin',
    heading: 'Liora Meier',
    role: 'Beauty-Spezialistin und Hautberaterin',
    certsLabel: 'Zertifikate und Expertise',
    cta: 'Termin buchen',
    yearsLabel: 'Jahre Erfahrung',
    reviewsLabel: 'Verifizierte Bewertungen',
    ratingLabel: 'Durchschnittsbewertung',
    yearsNum: '10+',
    imageBadgeTop: '10+',
    imageBadgeBottom: 'Jahre Erfahrung',
  },

  testimonials: {
    label: 'Kundenerfahrungen',
    heading1: 'Was Kundinnen fühlen,',
    heading2em: 'nach ihrem Besuch',
    google: 'Alle Bewertungen auf Google lesen',
    ratingAvg: 'Durchschnitt',
    reviewsLabel: 'verifizierte Google-Bewertungen',
  },

  results: {
    label: 'Was Sie erwartet',
    heading1: 'Ergebnisse,',
    heading2em: 'die für sich sprechen',
    intro: 'Jede Behandlung bei Maison Lumière wird für ihre Wirkung ausgewählt, nicht für ihr Aussehen auf einer Menükarte.',
    cardCta: 'Behandlung buchen',
    quote: '„Natürlich wirkende Ergebnisse sind kein Zufall. Sie entstehen durch die richtige Behandlung, die richtigen Produkte und jemanden, der zuhört."',
    attribution: 'Liora Meier, Gründerin, Maison Lumière',
  },

  easyBooking: {
    label: 'Ihre Erfahrung',
    heading: 'Schönheit, die einfach ist',
    intro: 'Vom ersten Klick bis zum Moment, wenn Sie gehen. Jeder Schritt ist darauf ausgelegt, persönlich, ruhig und ganz Ihnen zu gehören.',
    benefits: [
      { title: 'In 60 Sekunden buchen', body: 'Jederzeit online reservieren. Ihr Termin wird sofort bestätigt.' },
      { title: 'Beratung inklusive', body: 'Jeder Termin beginnt mit einer persönlichen Beratung. Ihr Hauttyp, Ihre Ziele und Wünsche bestimmen die Behandlung.' },
      { title: 'Sichtbare Ergebnisse', body: 'Behandlungen für Resultate, nicht Trends. Nach dem ersten Besuch spüren und sehen Sie den Unterschied.' },
      { title: 'Flexible Terminplanung', body: 'Manchmal ändert sich Ihr Plan. Umbuchungen sind unkompliziert, per Telefon oder WhatsApp.' },
    ],
    cta: 'Termin reservieren',
    hours: 'Montag bis Samstag, 09:00 bis 20:00',
  },

  callback: {
    label: 'Erreichbarkeit',
    heading: 'Falls Sie mich nicht erreichen, melde ich mich zurück.',
    body: 'Wenn ich gerade in einer Behandlung bin und Ihren Anruf verpasse, senden Sie mir einfach eine Anfrage. Ich melde mich so bald wie möglich zurück.',
    treatmentLabel: 'Behandlung',
    treatmentDefault: 'Behandlung wählen',
    dateLabel: 'Wunschdatum',
    timeLabel: 'Wunschzeit',
    timeDefault: 'Zeit wählen',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+41 79 000 00 00',
    submit: 'Rückruf anfragen',
    submitting: 'Wird gesendet ...',
    successTitle: 'Anfrage erhalten.',
    successText: 'Ich melde mich so bald wie möglich persönlich bei Ihnen zurück.',
    orCall: 'Oder direkt anrufen',
    // Legacy fields (PersonalCallback.tsx)
    heading1: 'Falls Sie mich nicht erreichen,',
    heading2em: 'melde ich mich zurück.',
    intro: 'Wenn ich gerade in einer Behandlung bin und Ihren Anruf verpasse, senden Sie mir einfach eine Anfrage. Ich melde mich so bald wie möglich zurück.',
    namePlaceholder: 'Ihr Name',
    note: 'In der Regel innerhalb von 1 bis 2 Stunden.',
    submitNote: '* Pflichtfelder',
    signature: 'Liora Meier · Maison Lumière',
  },

  faq: {
    label: 'Häufige Fragen',
    heading: 'Fragen und Antworten',
  },

  contact: {
    banner: 'Ihre nächste Behandlung wartet.',
    bannerSub: 'Online reservieren, sofort bestätigt erhalten und entspannt ankommen.',
    reserve: 'Jetzt buchen',
    whatsapp: 'WhatsApp',
    visitHeading: 'Studio besuchen',
    hoursHeading: 'Öffnungszeiten',
    mapHeading: 'Anfahrt',
    transit: 'Tram 10 und 14, Haltestelle Schaffhauserplatz',
    openToday: 'Heute geöffnet',
    closedToday: 'Heute geschlossen',
    mapsLink: 'In Google Maps öffnen',
    closed: 'Geschlossen',
    directions: 'Route berechnen',
  },

  finalCta: {
    heading: 'Ihre nächste Behandlung wartet.',
    body: 'Online reservieren, sofort bestätigt erhalten und entspannt ankommen.',
    cta: 'Jetzt buchen',
    phone: 'Jetzt anrufen',
  },

  footer: {
    tagline: 'Premium Beauty-Behandlungen in Zürich. Jede Behandlung beginnt mit einer persönlichen Beratung.',
    servicesHeading: 'Behandlungen',
    contactHeading: 'Kontakt',
    hoursHeading: 'Öffnungszeiten',
    privacy: 'Datenschutz',
    imprint: 'Impressum',
    cookies: 'Cookie-Einstellungen',
    rights: 'Alle Rechte vorbehalten.',
    closed: 'Geschlossen',
  },

  days: {
    Monday: 'Montag',
    Tuesday: 'Dienstag',
    Wednesday: 'Mittwoch',
    Thursday: 'Donnerstag',
    Friday: 'Freitag',
    Saturday: 'Samstag',
    Sunday: 'Sonntag',
  } as Record<string, string>,

  serviceCards: {
    'manicure': {
      name: 'Maniküre',
      description: 'Gepflegte Hände für jeden Anlass. Sorgfältig ausgeführt und auf Ihre Bedürfnisse abgestimmt.',
    },
    'pedicure': {
      name: 'Pediküre',
      description: 'Gönnen Sie Ihren Füssen eine gründliche und entspannende Pflege. Für spürbar gepflegte Ergebnisse.',
    },
    'haarentfernung': {
      name: 'Haarentfernung',
      description: 'Sanfte Haarentfernung mit Warmwachs. Schonend, gründlich und mit langanhaltenden Ergebnissen.',
    },
    'gesichtsbehandlung': {
      name: 'Gesichtsbehandlung',
      description: 'Individuelle Gesichtsbehandlungen für Ihren Hauttyp. Von der klassischen Reinigung bis zur modernen Pflege.',
    },
    'bodyforming': {
      name: 'Bodyforming (DiViNiA)',
      description: 'Gezielte Körperpflege mit dem DiViNiA Gerät. Sichtbare Ergebnisse, abgestimmt auf Ihre Wünsche.',
    },
    'augenbrauen-wimpern': {
      name: 'Augenbrauen & Wimpern',
      description: 'Formen, Färben und Stylen für einen ausdrucksstarken und gepflegten Blick.',
    },
  } as Record<string, { name: string; description: string }>,

  treatmentCards: {
    'signature-manicure': {
      name: 'Signature Maniküre',
      category: 'Maniküre und Pediküre',
      benefit: 'Langanhaltender Gel-Lack mit professioneller Nagelpflege',
      description: 'Unsere meistgebuchte Maniküre. Mit Formen, Nagelhautpflege, Handmassage und langanhaltenden Gel-Lack in Ihrer Wunschfarbe.',
    },
    'glow-facial': {
      name: 'Glow Facial',
      category: 'Gesichtsbehandlung',
      benefit: 'Tiefenreinigung, Aufhellung und intensive Hydration',
      description: 'Tiefenreinigendes und aufhellendes Facial für alle Hauttypen. Mit persönlicher Hautberatung, Peeling, Maske und feuchtigkeitsspendender Pflege.',
    },
    'lash-lift-brow': {
      name: 'Lash Lift und Brow Styling',
      category: 'Lash und Brow',
      benefit: 'Definierte Wimpern und geformte Brauen, ganz natürlich',
      description: 'Lash Lift für natürlich geschwungene Wimpern, kombiniert mit Brow Shaping und Tinting für einen frischen, gepflegten Look.',
    },
    'body-ritual': {
      name: 'Entspannende Körperpflege',
      category: 'Massage und Wellness',
      benefit: 'Vollständige Erholung, Peeling, Massage, Wohlbefinden',
      description: 'Ganzkörperpeeling kombiniert mit einer entspannenden Massage. Inklusive Kräuterkompresse und Körperoil-Abschluss.',
    },
  } as Record<string, { name: string; category: string; benefit: string; description: string }>,

  galleryLabels: {
    g1: 'Nagelpflege',
    g2: 'Gesichtsbehandlung',
    g3: 'Lash Lift Ergebnis',
    g4: 'Studio Interieur',
    g5: 'Wellness Treatment',
    g6: 'Premium Produkte',
    g7: 'Pediküre Detail',
    g8: 'Brow Styling',
  } as Record<string, string>,

  faqItems: [
    {
      id: 'faq-1',
      question: 'Wie buche ich einen Termin?',
      answer: 'Sie können direkt über das Buchungsformular auf dieser Seite buchen oder uns unter +41 44 123 45 67 anrufen. Buchungsanfragen nehmen wir auch gerne per WhatsApp entgegen.',
    },
    {
      id: 'faq-2',
      question: 'Kann ich einen Termin verschieben oder stornieren?',
      answer: 'Selbstverständlich. Bitte geben Sie uns mindestens 24 Stunden vorher Bescheid, per Telefon, WhatsApp oder durch Antwort auf Ihre Buchungsbestätigung.',
    },
    {
      id: 'faq-3',
      question: 'Gibt es eine Beratung vor der Behandlung?',
      answer: 'Ja. Jeder Termin beginnt mit einer kurzen persönlichen Beratung, damit wir die Behandlung optimal auf Ihren Hauttyp, Ihre Wünsche und Ziele abstimmen können.',
    },
    {
      id: 'faq-4',
      question: 'Welche Zahlungsmethoden werden akzeptiert?',
      answer: 'Wir akzeptieren Bargeld, Twint sowie alle gängigen Debit- und Kreditkarten. Die Bezahlung erfolgt nach dem Termin direkt im Studio.',
    },
    {
      id: 'faq-5',
      question: 'Wo befindet sich das Studio?',
      answer: 'Wir befinden uns an der Schaffhauserstrasse 48, 8006 Zürich. Gut erreichbar mit den Tramlinien 10 und 14, Haltestelle Schaffhauserplatz.',
    },
    {
      id: 'faq-6',
      question: 'Was, wenn ich Sie telefonisch nicht erreiche?',
      answer: 'Wenn wir gerade in einer Behandlung sind, senden Sie uns einfach eine WhatsApp-Nachricht oder nutzen Sie das Rückruf-Formular auf dieser Seite. Wir melden uns, sobald der Termin abgeschlossen ist.',
    },
  ],

  founderBio: [
    'Mit über zehn Jahren Erfahrung in der Hautpflege und ästhetischen Behandlungen habe ich meine Karriere damit verbracht, zu verstehen, was wirklich wirkt und was Kundinnen von innen heraus strahlen lässt.',
    'Jeder Termin beginnt mit einem Gespräch über Ihre Haut, Ihren Alltag und Ihre Ziele. Die Behandlung, die folgt, wird genau für Sie gewählt, nicht für eine Menükarte.',
    'Mein Studio ist bewusst klein gehalten. Das bedeutet: volle Aufmerksamkeit, sorgfältige Produktauswahl und Ergebnisse, die sich mit der Zeit aufbauen.',
  ],

  certifications: [
    'Dermalogica Expert Zertifizierung',
    'Advanced Lash und Brow Spezialistin',
    'Swiss Beauty Professional Network',
    'Hautanalyse und Behandlungsplanung',
  ],

  pricing: {
    label: 'Terminbuchung',
    heading: 'Preise & Online buchen',
    subline: 'Wählen Sie eine Behandlung und wünschen Sie sich einen Termin — kein Login erforderlich.',
    selectCta: 'Auswählen',
    allPrices: 'Alle Preise inklusive persönlicher Beratung.',
  },

  sticky: {
    call: 'Anrufen',
    book: 'Termin buchen',
  },
};

const en: typeof de = {
  nav: {
    home: 'Home',
    treatments: 'Treatments',
    about: 'About',
    reviews: 'Reviews',
    faq: 'FAQ',
    contact: 'Contact',
    rituals: 'Rituals',
    book: 'Book appointment',
  },

  hero: {
    eyebrow: 'Maison Lumière · Beauty Studio Zürich',
    line1: 'The ritual',
    line2: 'of feeling',
    line3em: 'like yourself.',
    sub: 'Skin care, lash & brow, manicure and wellness in a calm Zürich studio. Every treatment begins with a personal consultation.',
    cta: 'Book appointment',
    ctaPhone: 'Call now',
    reviews: 'reviews',
    openToday: 'Open today',
    closedToday: 'Closed today',
    consultation: 'Personal consultation included with every visit',
  },

  trustBar: {
    statNum: '20+',
    statLabel: 'Years experience',
    points: [
      { title: 'Every treatment personal', body: 'I take time for you. No conveyor belt service.' },
      { title: 'Tested quality', body: 'Only high-quality, skin-friendly products.' },
      { title: 'Easy to reach', body: 'Central Zürich. Tram and parking nearby.' },
    ],
    metrics: ['100% Personal care', '6 treatment areas', 'Mon to Sat available'],
  },

  booking: {
    label: 'Direct booking',
    heading: 'Book your appointment',
    intro: 'Choose treatment, pick date and time, done.',
    copyParagraph: 'Choose a treatment, select your preferred date and time, and leave your contact details. We confirm your appointment personally.',
    benefits: [
      'Personal consultation included',
      'Book in 60 seconds',
      'Monday to Saturday · 09:00 to 20:00',
    ],
    treatmentLabel: 'Treatment',
    treatmentDefault: 'Choose a treatment',
    dateLabel: 'Date',
    timeLabel: 'Time',
    timeDefault: 'Choose a time',
    nextFree: 'Next available appointment',
    nameLabel: 'Your name',
    namePlaceholder: 'Anna Müller',
    phoneLabel: 'Phone',
    phonePlaceholder: '+41 79 000 00 00',
    submit: 'Book appointment',
    submitting: 'Sending ...',
    replyNote: '* Required fields',
    nameError: 'Please enter your name.',
    phoneError: 'Please enter your phone number.',
    confirmTitle: 'Request received',
    confirmText: 'Thank you, {name}. We look forward to welcoming you at Maison Lumière.',
    confirmNote: 'This is a visual demo. No real appointment has been made.',
    newBooking: 'Start a new booking',
    summaryTreatment: 'Treatment',
    summaryDateTime: 'Date and time',
    summaryStudio: 'Studio',
    badge: 'Instant confirmation',
    badgeSub: 'Your appointment is secured in seconds.',
    steps: ['Treatment', 'Date & Time', 'Details', 'Confirmed'],
    step1title: 'Choose a treatment',
    step2title: 'Select a date',
    step2times: 'Available times',
    step3title: 'Your contact details',
    step3note: 'Your confirmation will be sent via SMS.',
    summaryLabel: 'Booking summary',
    summaryDuration: 'Duration',
    summaryPrice: 'Price',
    back: 'Back',
    nextDateTime: 'Next',
    nextDetails: 'Next',
    confirm: 'Confirm appointment',
    booked: 'Booked',
    contextCategory: 'Category',
    contextBenefit: 'Benefit',
    metaRating: 'Rating',
  },

  services: {
    label: 'Our services',
    heading: 'Treatments',
    intro: 'Six categories of treatments, each chosen for what it delivers. Every service begins with a personal consultation.',
    footer: 'All prices include a personal consultation and aftercare advice.',
    allPrices: 'All prices & book online',
    cta: 'Book appointment',
    cardCta: 'Book online',
    popular: 'Most popular',
    from: 'from',
    min: 'min',
  },

  whatToExpect: {
    label: 'Your experience',
    heading: 'What to expect',
    subline: 'Calm treatments, honest advice and visible results.',
    cards: [
      { icon: 'person', title: 'Personal consultation', body: 'Every appointment begins with a conversation about your wishes and skin needs.' },
      { icon: 'spa', title: 'Calm treatment', body: 'A quiet, private studio without rush. Your time belongs entirely to you.' },
      { icon: 'leaf', title: 'Premium products', body: 'Only tested products from Dermalogica, OPI and Environ.' },
      { icon: 'star', title: 'Visible results', body: 'Treatments that truly work. Noticeable after the very first visit.' },
    ],
  },

  rituals: {
    label: 'Signature treatments',
    heading1: 'Four treatments',
    heading2em: 'worth coming back for.',
    intro: 'Not every treatment is equal. These four have been chosen for the results they consistently deliver.',
    cta: 'Reserve this treatment',
  },

  gallery: {
    label: 'Studio and results',
    heading: 'Our work',
    intro: 'A calm environment, skilled hands, and natural-looking results. This is what to expect at Maison Lumière.',
  },

  founder: {
    label: 'Your specialist',
    heading: 'Liora Meier',
    role: 'Beauty Specialist and Skin Consultant',
    certsLabel: 'Certifications and expertise',
    cta: 'Book appointment',
    yearsLabel: 'Years experience',
    reviewsLabel: 'Verified reviews',
    ratingLabel: 'Average rating',
    yearsNum: '10+',
    imageBadgeTop: '10+',
    imageBadgeBottom: 'years expertise',
  },

  testimonials: {
    label: 'Client experiences',
    heading1: 'How clients feel',
    heading2em: 'after their visit',
    google: 'Read all reviews on Google',
    ratingAvg: 'average',
    reviewsLabel: 'verified Google reviews',
  },

  results: {
    label: 'What to expect',
    heading1: 'Results that',
    heading2em: 'speak for themselves',
    intro: 'Every treatment at Maison Lumière is chosen for what it delivers, not how it looks on a menu.',
    cardCta: 'Book this treatment',
    quote: '"Natural-looking results are not an accident. They are the product of the right treatment, the right products, and someone who listens."',
    attribution: 'Liora Meier, Founder, Maison Lumière',
  },

  easyBooking: {
    label: 'Your experience',
    heading: 'Beauty, made effortless',
    intro: 'From your first click to the moment you leave. Every step is designed to feel personal, calm, and entirely yours.',
    benefits: [
      { title: 'Book in 60 seconds', body: 'Reserve your treatment online at any time. Your appointment is confirmed immediately.' },
      { title: 'Consultation included', body: 'Every appointment begins with a personal consultation. Your skin type, goals, and preferences guide the entire treatment.' },
      { title: 'Visible results', body: 'Treatments selected for outcomes, not trend. You will feel the difference after your first visit.' },
      { title: 'Flexible scheduling', body: 'Your schedule changes. Rescheduling your appointment is straightforward by phone or WhatsApp.' },
    ],
    cta: 'Reserve your treatment',
    hours: 'Available Monday to Saturday, 09:00 to 20:00',
  },

  callback: {
    label: 'Availability',
    heading: 'If I cannot be reached, I will call you back.',
    body: 'If I am in a treatment and miss your call, simply send a request. I will get back to you as soon as possible.',
    treatmentLabel: 'Treatment',
    treatmentDefault: 'Choose a treatment',
    dateLabel: 'Preferred date',
    timeLabel: 'Preferred time',
    timeDefault: 'Choose a time',
    phoneLabel: 'Phone',
    phonePlaceholder: '+41 79 000 00 00',
    submit: 'Request callback',
    submitting: 'Sending ...',
    successTitle: 'Request received.',
    successText: 'I will personally get back to you as soon as I am free.',
    orCall: 'Or call directly',
    heading1: 'If I cannot be reached,',
    heading2em: 'I will call you back.',
    intro: 'If I am in a treatment and miss your call, simply send a request. I will get back to you as soon as possible.',
    namePlaceholder: 'Your name',
    note: 'Usually within 1 to 2 hours.',
    submitNote: '* Required fields',
    signature: 'Liora Meier · Maison Lumière',
  },

  faq: {
    label: 'Frequently asked',
    heading: 'Questions and answers',
  },

  contact: {
    banner: 'Your next treatment is waiting.',
    bannerSub: 'Reserve online, get confirmed immediately, and arrive knowing exactly what to expect.',
    reserve: 'Book now',
    whatsapp: 'WhatsApp',
    visitHeading: 'Visit the studio',
    hoursHeading: 'Opening hours',
    mapHeading: 'Find us',
    transit: 'Tram 10 and 14, stop Schaffhauserplatz',
    openToday: 'Open today',
    closedToday: 'Closed today',
    mapsLink: 'Open in Google Maps',
    closed: 'Closed',
    directions: 'Get directions',
  },

  finalCta: {
    heading: 'Your next treatment is waiting.',
    body: 'Reserve online, get confirmed immediately, and arrive knowing exactly what to expect.',
    cta: 'Book now',
    phone: 'Call now',
  },

  footer: {
    tagline: 'Premium beauty treatments in Zürich. Every visit begins with a personal consultation.',
    servicesHeading: 'Treatments',
    contactHeading: 'Contact',
    hoursHeading: 'Opening hours',
    privacy: 'Privacy Policy',
    imprint: 'Impressum',
    cookies: 'Cookie settings',
    rights: 'All rights reserved.',
    closed: 'Closed',
  },

  days: {
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
  } as Record<string, string>,

  serviceCards: {
    'manicure': { name: 'Manicure', description: 'Well-groomed hands for every occasion. Carefully executed and tailored to your needs.' },
    'pedicure': { name: 'Pedicure', description: 'Treat your feet to a thorough and relaxing care. For noticeably well-groomed results.' },
    'haarentfernung': { name: 'Hair Removal', description: 'Gentle hair removal with warm wax. Careful, thorough and long-lasting results.' },
    'gesichtsbehandlung': { name: 'Facial Treatment', description: 'Individual facial treatments for your skin type. From classic cleansing to modern skincare.' },
    'bodyforming': { name: 'Bodyforming (DiViNiA)', description: 'Targeted body care with the DiViNiA device. Visible results tailored to your wishes.' },
    'augenbrauen-wimpern': { name: 'Brows & Lashes', description: 'Shaping, tinting and styling for an expressive and well-groomed look.' },
  } as Record<string, { name: string; description: string }>,

  treatmentCards: {
    'signature-manicure': { name: 'Signature Manicure', category: 'Manicure and Pedicure', benefit: 'Long-lasting gel colour with genuine nail care', description: 'Our most popular manicure. Includes shaping, cuticle care, hand massage and long-lasting gel polish.' },
    'glow-facial': { name: 'Glow Facial', category: 'Facial Treatments', benefit: 'Deep cleanse, brightening and hydration', description: 'A deep-cleansing and brightening facial for all skin types. Includes personalised skin consultation, exfoliation, mask and hydrating finish.' },
    'lash-lift-brow': { name: 'Lash Lift and Brow Styling', category: 'Lash and Brow', benefit: 'Defined lashes and shaped brows, naturally', description: 'A lash lift that curls and defines your natural lashes, combined with brow styling and tinting for a polished look.' },
    'body-ritual': { name: 'Relaxing Body Treatment', category: 'Massage and Wellness', benefit: 'Full reset, exfoliation, massage, calm mind', description: 'Full-body exfoliating scrub with a relaxing massage. Includes herbal compress and body oil finish.' },
  } as Record<string, { name: string; category: string; benefit: string; description: string }>,

  pricing: {
    label: 'Appointments',
    heading: 'Prices & Book Online',
    subline: 'Choose a treatment and request an appointment — no login required.',
    selectCta: 'Select',
    allPrices: 'All prices include a personal consultation.',
  },

  galleryLabels: {
    g1: 'Nail Detail', g2: 'Facial Treatment', g3: 'Lash Lift Result',
    g4: 'Studio Interior', g5: 'Wellness Treatment', g6: 'Premium Products',
    g7: 'Pedicure Detail', g8: 'Brow Styling',
  } as Record<string, string>,

  faqItems: [
    { id: 'faq-1', question: 'How do I book an appointment?', answer: 'You can book directly on this page using the booking form, or call us at +41 44 123 45 67. We also accept booking requests via WhatsApp.' },
    { id: 'faq-2', question: 'Can I reschedule or cancel?', answer: 'Yes. Please let us know at least 24 hours in advance by phone, WhatsApp, or by replying to your booking confirmation.' },
    { id: 'faq-3', question: 'Do you offer a consultation before treatments?', answer: 'Yes. Every appointment begins with a short personal consultation so we can tailor the treatment to your skin type, preferences and goals.' },
    { id: 'faq-4', question: 'Which payment methods do you accept?', answer: 'We accept cash, Twint, and all major debit and credit cards. Payment is made at the studio after your appointment.' },
    { id: 'faq-5', question: 'Where exactly is the studio located?', answer: 'We are at Schaffhauserstrasse 48, 8006 Zürich. Easily reachable by tram lines 10 and 14, stop Schaffhauserplatz.' },
    { id: 'faq-6', question: 'What if I cannot reach you by phone?', answer: 'If we are with a client, send a WhatsApp message or use the callback form on this page. We will reply as soon as the treatment is finished.' },
  ],

  founderBio: [
    'With over ten years of experience in skin care and aesthetic treatments, I have spent my career studying what genuinely works and what makes clients feel confident from the inside out.',
    'Every appointment begins with a conversation about your skin, your lifestyle, and what you want to achieve. The treatment that follows is chosen for you, not for a menu.',
    'My studio is intentionally small. That means you always have my full attention, thoughtful product choices, and results that build over time.',
  ],

  certifications: [
    'Dermalogica Expert Certification',
    'Advanced Lash and Brow Specialist',
    'Swiss Beauty Professional Network',
    'Skin Analysis and Treatment Planning',
  ],

  sticky: {
    call: 'Call',
    book: 'Book appointment',
  },
};

export const translations: Record<Lang, typeof de> = { de, en };
