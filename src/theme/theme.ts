// ─────────────────────────────────────────────────────────────
// THEME TOKENS — single source of truth for colors, fonts, spacing
// Update here to change the visual identity across the whole site
// ─────────────────────────────────────────────────────────────

export const theme = {
  colors: {
    bg: '#FAF8F5',           // warm off-white background
    surface: '#FFFFFF',      // card surfaces
    border: '#EDE8E1',       // subtle warm border
    textPrimary: '#1A1614',  // near-black, warm undertone
    textSecondary: '#6B5E54',// muted warm brown
    accent: '#C9A882',       // muted gold-rose accent
    accentDark: '#B8956A',   // deeper gold for hover
    ctaBg: '#1A1614',        // CTA button background
    ctaText: '#FAF8F5',      // CTA button text
    stickyCta: '#1A1614',
    whatsapp: '#25D366',
    rating: '#C9A882',
  },
  fonts: {
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
  },
  spacing: {
    sectionY: 'clamp(64px, 10vw, 120px)',
    containerMax: '1160px',
    containerPad: 'clamp(20px, 5vw, 48px)',
  },
  radius: {
    card: '8px',
    button: '4px',
    pill: '50px',
  },
  transition: 'all 0.25s ease',
} as const;
