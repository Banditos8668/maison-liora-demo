# Maison Liora — Beauty Studio Demo Website

A premium, mobile-first, conversion-focused demo website for a fictional Zürich beauty studio. Built as a sales tool for walk-in demos with local beauty and wellness businesses.

**Stack:** Vite · React · TypeScript · Pure CSS (no Tailwind)

---

## Run locally

```bash
cd 04_Demo_Websites/maison-liora
npm install
npm run dev
```

Open `http://localhost:5173`

---

## How to change business data

All client-specific content lives in `src/data/`. You never touch a component to rebrand.

| File | What it controls |
|---|---|
| `src/data/business.ts` | Name, tagline, phone, email, WhatsApp, address, hours, rating |
| `src/data/services.ts` | 6 service categories, descriptions, starting prices |
| `src/data/treatments.ts` | 4 featured treatments with duration, price, benefit |
| `src/data/testimonials.ts` | 3 client reviews |
| `src/data/faq.ts` | 6 FAQ questions and answers |
| `src/data/gallery.ts` | 8 gallery items with labels and alt text |

---

## How to change services and prices

Open `src/data/services.ts`. Each service has:

```ts
{
  id: 'manicure-pedicure',
  name: 'Manicure & Pedicure',
  shortDescription: '...',
  startingPrice: 'CHF 55',
  duration: 'from 45 min',
  icon: '✦',
  accent: '#C9A882',
}
```

Edit `name`, `startingPrice`, `duration`, and `shortDescription`. Repeat for `treatments.ts` for the featured treatment cards.

---

## How to replace images

The demo uses CSS gradient placeholders. Each placeholder has a class like `img-manicure`, `img-facial`, `img-lash`, etc., defined in `src/index.css`.

To replace with real images:

1. Add the image file to `src/assets/`
2. Import it in the relevant component: `import heroImg from '../../assets/hero.jpg'`
3. Replace the `div` placeholder with an `<img>` tag using the import

Or use an external image URL directly in the `src` attribute.

Image locations by section:
- **Hero** → `src/components/sections/Hero.tsx` — replace the `.img-hero` div
- **Gallery** → `src/components/sections/Gallery.tsx` — replace `.img-placeholder` divs using `gallery.ts` entries
- **Treatments** → `src/components/ui/TreatmentCard.tsx` — each card uses `treatment.imagePlaceholder`
- **Founder** → `src/components/sections/Founder.tsx` — replace the `.img-founder` div

---

## How to change phone number and WhatsApp link

Open `src/data/business.ts`:

```ts
contact: {
  phone: '+41 44 123 45 67',       // displayed number
  phoneRaw: '+41441234567',         // used in tel: links (no spaces)
  email: 'hello@maisonliora.ch',
  whatsapp: '+41791234567',
  whatsappUrl: 'https://wa.me/41791234567?text=...',
},
```

Change all four fields. The `whatsappUrl` message can be customised — it's URL-encoded text that pre-fills the WhatsApp chat.

---

## How to change address and opening hours

In `src/data/business.ts`:

```ts
address: {
  street: 'Schaffhauserstrasse 48',
  city: 'Zürich',
  postal: '8006',
  country: 'Switzerland',
  full: 'Schaffhauserstrasse 48, 8006 Zürich',
  googleMapsUrl: 'https://maps.google.com/?q=...',
},

hours: [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '09:00 – 19:00' },
  // ...
],
```

The `full` field is used in several places — keep it in sync with `street`, `postal`, and `city`.

---

## How to deploy

**Netlify Drop (fastest — no account needed):**
1. Run `npm run build`
2. Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Get a live URL instantly

**Netlify with CI:**
1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

**Vercel:**
```bash
npm i -g vercel
vercel --prod
```

---

## What components are reusable

| Component | Reusable for |
|---|---|
| `ServiceCard.tsx` | Any service-based business |
| `TreatmentCard.tsx` | Any product or treatment menu |
| `BookingMockup.tsx` | Any appointment-based business |
| `CallbackRecovery.tsx` | Any business that misses calls |
| `TrustBar.tsx` | Any local business with trust signals |
| `FAQ.tsx` | Universal — just swap `faq.ts` |
| `Testimonials.tsx` | Universal — just swap `testimonials.ts` |
| `StickyMobileCTA.tsx` | Any mobile conversion page |
| `WhatsAppButton.tsx` | Any business with WhatsApp |
| `Footer.tsx` | Any local business site |

---

## How to duplicate this demo for a real client

1. Copy the entire `maison-liora/` folder and rename it (e.g. `studio-nova/`)
2. Update all 6 files in `src/data/`
3. Replace image placeholders with real photos
4. Update `src/theme/theme.ts` if the brand uses different colors
5. Run `npm run build` and deploy

No component files need to be touched for a standard rebrand.

---

## What is mock vs real functionality

| Feature | Status | Notes |
|---|---|---|
| Booking widget | **MOCK** | Visually functional, 4-step flow, confirmation state. No real booking API connected. |
| Callback request form | **MOCK** | Shows a confirmation state. No data is sent anywhere. |
| WhatsApp button | **REAL** | Opens WhatsApp with a pre-written message. |
| Click-to-call button | **REAL** | Triggers a phone call on mobile. |
| Google Maps link | **REAL** | Opens Google Maps in new tab. |
| Contact email | **PLACEHOLDER** | Replace `hello@maisonliora.ch` with real address. |
| Google Reviews link | **PLACEHOLDER** | Update the URL in `Testimonials.tsx` with a real Google search URL. |

To connect real booking: replace `BookingMockup.tsx` with a Calendly embed, Fresha widget, or any iframe-based system. The surrounding layout stays the same.

---

## 60-second iPad walkthrough for walk-ins

Use this script during live demos. Scroll slowly and narrate as you go.

**[0–10 sec] — Show the hero**

> "This is the first thing someone sees when they find you on Google or click your Instagram link. Within five seconds they know: premium beauty studio, Zürich, direct booking. No confusion."

**[10–22 sec] — Scroll to Services**

> "Every treatment is listed clearly — with a short description, starting price, and a direct booking button. No PDF menu. No 'DM for prices.' People can decide immediately."

**[22–38 sec] — Tap the booking widget**

> "This is where it gets interesting. A client picks a treatment, picks a time, enters their number — and confirms. No Treatwell account, no commission, no dependency. The booking comes straight to you."

Walk through the 4 steps.

**[38–48 sec] — Show the Callback section**

> "This is the part most studios don't have. If you miss a call during a treatment, the client can request a callback right here. You call them back when you're done. No lost booking."

**[48–55 sec] — Show the mobile sticky CTA**

> "On mobile, the 'Book appointment' button is always visible at the bottom. Wherever they scroll, the action is one tap away. Most studios lose bookings because this path just doesn't exist."

**[55–60 sec] — Show About + Testimonials**

> "And this is what builds trust before someone even walks through the door. A real face, a clear story, and honest reviews. That is how you convert a Google visitor into a paying client."

---

*Demo concept by LumaFlow*
