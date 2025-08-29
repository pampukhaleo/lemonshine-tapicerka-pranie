
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import OrderForm from '@/components/OrderForm';
import Results from '@/components/Results';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';
import Equipment from "@/components/Equipment.tsx";
import SEOHead from '@/components/SEOHead';

const Index = () => {
  // FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy pranie tapicerki jest bezpieczne dla dzieci i zwierząt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, używamy wyłącznie bezpiecznych, certyfikowanych środków czyszczących, które są całkowicie bezpieczne dla dzieci i zwierząt domowych."
        }
      },
      {
        "@type": "Question", 
        "name": "Jak długo schnie tapicerka po praniu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tapicerka zazwyczaj schnie w ciągu 2-4 godzin dzięki naszym profesjonalnym maszynom ekstrakcyjnym."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie gwarancję na usługi?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy 100% gwarancję satysfakcji. Jeśli nie jesteś zadowolony z rezultatów, wrócimy i powtórzymy usługę za darmo."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie rodzaje plam potraficie usunąć?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Usuwamy praktycznie wszystkie rodzaje plam: od kawy, wina, krwi, po plamy organiczne i tłuste. Mamy specjalistyczne środki do każdego typu zabrudzenia."
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
        <OrderForm />
        <Results />
        <Equipment />
        <Blog />
        <FAQ />
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default Index;
