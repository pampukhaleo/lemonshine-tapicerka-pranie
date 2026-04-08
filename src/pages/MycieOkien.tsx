import React from 'react';
import Header from '@/components/Header';
import WindowHero from '@/components/window/WindowHero';
import TrustIndicators from '@/components/TrustIndicators';
import WindowPricing from '@/components/window/WindowPricing';
import Promotions from '@/components/Promotions';
import OrderForm from '@/components/OrderForm';
import Testimonials from '@/components/Testimonials';
import StatsBar from '@/components/StatsBar';
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
        "name": "Czy potrzebuję mieć własny sprzęt lub chemię?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie, przyjeżdżamy z własnym profesjonalnym sprzętem oraz skutecznymi środkami do mycia szyb i ram."
        }
      },
      {
        "@type": "Question",
        "name": "Czy myjecie okna z obu stron?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, myjemy okna z obu stron, pod warunkiem że mamy bezpieczny dostęp do zewnętrznej części szyby lub okno otwiera się w sposób umożliwiający jej dokładne umycie."
        }
      },
      {
        "@type": "Question",
        "name": "Czy usuwacie zabrudzenia znajdujące się wewnątrz okna oraz na ramach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, czyścimy nie tylko powierzchnię szyb, ale również ramy, uszczelki oraz trudno dostępne miejsca wokół okna, zapewniając kompleksowy efekt."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie są dostępne formy płatności?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Akceptujemy płatność gotówką, przelewem, BLIK-iem oraz wystawiamy fakturę na życzenie klienta."
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
        <OrderForm source="mycie-okien" />
        <Testimonials />
        <StatsBar />
        <WindowFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default MycieOkien;
