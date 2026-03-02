import React from 'react';
import Header from '@/components/Header';
import WindowHero from '@/components/window/WindowHero';
import TrustIndicators from '@/components/TrustIndicators';
import WindowPricing from '@/components/window/WindowPricing';
import Promotions from '@/components/Promotions';
import OrderForm from '@/components/OrderForm';
import Testimonials from '@/components/Testimonials';
import WindowFAQ from '@/components/window/WindowFAQ';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const MycieOkien = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak często warto myć okna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zalecamy mycie okien co 2–3 miesiące. W przypadku mieszkań przy ruchliwych ulicach lub w pobliżu budowy — nawet częściej."
        }
      },
      {
        "@type": "Question",
        "name": "Co wchodzi w cenę mycia jednego okna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "W cenę wliczone jest mycie obu stron szyby, ramy okiennej oraz parapetu wewnętrznego i zewnętrznego."
        }
      },
      {
        "@type": "Question",
        "name": "Ile czasu trwa mycie okien w mieszkaniu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla standardowego mieszkania (5–8 okien) mycie trwa zwykle 1–2 godziny."
        }
      }
    ]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lemonshine",
    "description": "Profesjonalne mycie okien we Wrocławiu i Opolu",
    "url": "https://lemonshine.pl/mycie-okien/",
    "telephone": "+48 662 117 886",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "priceRange": "150-500 PLN",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Mycie Okien - Profesjonalne usługi | Lemonshine Wrocław, Opole"
        description="Profesjonalne mycie okien bez smug i zacieków. Szyby, ramy, parapety — szybko i dokładnie. Zamów mycie okien we Wrocławiu i Opolu."
        canonical="https://lemonshine.pl/mycie-okien/"
        jsonLd={[faqJsonLd, localBusinessJsonLd]}
      />
      <Header />
      <main>
        <WindowHero />
        <TrustIndicators />
        <WindowPricing />
        <Promotions />
        <OrderForm />
        <Testimonials />
        <WindowFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default MycieOkien;
