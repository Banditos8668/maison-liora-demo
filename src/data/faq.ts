// ─────────────────────────────────────────────────────────────
// FAQ DATA — answers are short and useful
// ─────────────────────────────────────────────────────────────

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book an appointment?',
    answer:
      'You can book directly on this page using the booking form, or call us at +41 44 123 45 67. We also accept booking requests via WhatsApp.',
  },
  {
    id: 'faq-2',
    question: 'Can I reschedule or cancel?',
    answer:
      'Yes. Please let us know at least 24 hours in advance by phone, WhatsApp, or by replying to your booking confirmation.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer a consultation before treatments?',
    answer:
      'Yes. Every appointment begins with a short personal consultation so we can tailor the treatment to your skin type, preferences and goals.',
  },
  {
    id: 'faq-4',
    question: 'Which payment methods do you accept?',
    answer:
      'We accept cash, Twint, and all major debit and credit cards. Payment is made at the studio after your appointment.',
  },
  {
    id: 'faq-5',
    question: 'Where exactly is the studio located?',
    answer:
      'We are at Schaffhauserstrasse 48, 8006 Zürich. Easily reachable by tram lines 10 and 14, stop Schaffhauserplatz.',
  },
  {
    id: 'faq-6',
    question: 'What if I cannot reach you by phone?',
    answer:
      'If we are with a client, send a WhatsApp message or use the contact form on this page. We will reply as soon as the treatment is finished.',
  },
];
