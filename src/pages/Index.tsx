
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Promotions from '@/components/Promotions';
import OrderForm from '@/components/OrderForm';
import Results from '@/components/Results';
import Equipment from "@/components/Equipment.tsx";
import Comparison from '@/components/Comparison';
import Blog from '@/components/Blog';
import CleaningProcess from '@/components/CleaningProcess';
import FAQ from '@/components/FAQ';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  // FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak często warto prać tapicerkę meblową?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zalecamy pranie co 6–12 miesięcy, w zależności od intensywności użytkowania mebla. Regularne pranie pozwala utrzymać tkaninę w dobrym stanie i zapobiega gromadzeniu się alergenów."
        }
      },
      {
        "@type": "Question",
        "name": "Czy metoda ekstrakcyjna naprawdę działa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Pranie ekstrakcyjne to jedna z najskuteczniejszych metod – usuwa brud, kurz, alergeny i większość plam, docierając głęboko w strukturę materiału."
        }
      },
      {
        "@type": "Question",
        "name": "Od czego zależy cena czyszczenia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Koszt usługi zależy od rodzaju mebla, jego wielkości, stopnia zabrudzenia oraz rodzaju tkaniny. Dodatkowe opcje, takie pełne suszenie, czy usuwanie gum, kleju, cieżkich plam również wpływają na cenę."
        }
      },
      {
        "@type": "Question",
        "name": "Ile czasu trwa pranie mebli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Czas zależy od liczby i wielkości mebli, ale zazwyczaj jedna kanapa jest gotowa w ciągu 1–2 godzin."
        }
      },
      {
        "@type": "Question",
        "name": "Czy używane środki są bezpieczne dla dzieci i zwierząt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, korzystamy z certyfikowanej, bezpiecznej chemii, która jest delikatna dla materiału, a jednocześnie skutecznie usuwa zabrudzenia. Po wyschnięciu meble są w pełni bezpieczne."
        }
      }
    ]
  };

  // LocalBusiness JSON-LD
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lemonshine",
    "description": "Profesjonalne pranie tapicerki meblowej w Opolu i Wrocławiu",
    "url": "https://lemonshine.pl",
    "telephone": "+48 662 117 886",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie", 
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.1079",
      "longitude": "17.0385"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "08:00",
      "closes": "16:00"
    },
    "sameAs": [
      "https://www.facebook.com/lemonshine.opole",
      "https://www.instagram.com/lemonshine_opole/"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": ["Opole", "Wrocław", "Brzeg", "Nysa", "Kłodzko", "Kędzierzyn-Koźle"]
    },
    "priceRange": "150-500 PLN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi prania tapicerki",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pranie tapicerki meblowej",
            "description": "Profesjonalne czyszczenie kanap, foteli i narożników"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Czyszczenie materacy",
            "description": "Dokładne czyszczenie i dezynfekcja materacy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Pranie dywanów",
            "description": "Skuteczne usuwanie plam z dywanów i wykładzin"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://lemonshine.pl/lemonshine.png"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        canonical="https://lemonshine.pl/"
        jsonLd={[faqJsonLd, localBusinessJsonLd]}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Promotions />
        <OrderForm />
        <Results />
        <Equipment />
        <Comparison />
        <Blog />
        <CleaningProcess />
        <FAQ />
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default Index;
