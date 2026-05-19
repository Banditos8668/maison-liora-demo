import { useState } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { LanguageProvider } from './context/LanguageContext';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { BookingMockup } from './components/sections/BookingMockup';
import { Services } from './components/sections/Services';
import { PricingSection } from './components/sections/PricingSection';
import { FeaturedTreatments } from './components/sections/FeaturedTreatments';
import { Founder } from './components/sections/Founder';
import { Testimonials } from './components/sections/Testimonials';
import { Gallery } from './components/sections/Gallery';
import { PersonalCallback } from './components/sections/PersonalCallback';
import { FAQ } from './components/sections/FAQ';
import { ContactCTA } from './components/sections/ContactCTA';

import { StickyMobileCTA } from './components/ui/StickyMobileCTA';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { BackToTop } from './components/ui/BackToTop';

function AppInner() {
  useScrollAnimation();

  // Treatment preselected via PricingSection "Auswählen" → passed into BookingMockup
  const [preselectedTreatment, setPreselectedTreatment] = useState('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectTreatment = (id: string) => {
    setPreselectedTreatment(id);
    // Small tick to let React apply the state before scrolling
    setTimeout(scrollToBooking, 30);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>

      <Header onBook={scrollToBooking} />

      <main id="main-content">
        {/* 1 · Hero */}
        <Hero onBook={scrollToBooking} />

        {/* 2 · Trust bar — stat + 3 points + metrics */}
        <TrustBar />

        {/* 3 · Booking module — 2-col with time pills */}
        <BookingMockup selectedTreatmentId={preselectedTreatment} />

        {/* 4 · Services — 6 operational cards */}
        <Services onBook={scrollToBooking} />

        {/* 5 · Preise & Online buchen — category nav + full treatment list */}
        <PricingSection onSelectTreatment={handleSelectTreatment} />

        {/* 6 · Signature Treatments — 4 featured premium treatments */}
        <FeaturedTreatments onBook={scrollToBooking} />

        {/* 6 · About the specialist */}
        <Founder onBook={scrollToBooking} />

        {/* 7 · Client experiences */}
        <Testimonials />

        {/* 8 · Gallery */}
        <Gallery />

        {/* 9 · Callback / "Erreichbarkeit" */}
        <PersonalCallback />

        {/* 10 · FAQ */}
        <FAQ />

        {/* 11 · Contact / map / hours + CTA */}
        <ContactCTA onBook={scrollToBooking} />
      </main>

      <Footer />

      <StickyMobileCTA onBook={scrollToBooking} />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
