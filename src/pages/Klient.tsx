
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Promotions from '@/components/Promotions';
import OrderForm from '@/components/OrderForm';
import Results from '@/components/Results';
import Equipment from "@/components/Equipment.tsx";
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Klient = () => {
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

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Profesjonalne pranie tapicerki meblowej",
    "description": "Pełny proces profesjonalnego czyszczenia tapicerki metodą ekstrakcyjną",
    "totalTime": "PT2H",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Profesjonalny ekstraktor"
      },
      {
        "@type": "HowToSupply", 
        "name": "Certyfikowana chemia czyszcząca"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Przegląd mebla",
        "text": "Na początku dokładnie sprawdzamy rodzaj materiału, oceniamy stan tapicerki i lokalizujemy plamy. To pozwala dobrać najbezpieczniejsze i najskuteczniejsze środki czyszczące."
      },
      {
        "@type": "HowToStep",
        "name": "Usuwanie plam nierozpuszczalnych w wodzie",
        "text": "Zanim rozpoczniemy pranie właściwe, usuwamy najtrudniejsze plamy – np. tłuszcz, wosk, gumę czy zaschnięte resztki jedzenia – aby nie pozostawić po nich żadnego śladu."
      },
      {
        "@type": "HowToStep",
        "name": "Nanoszenie presprayu",
        "text": "Dobieramy prespray odpowiedni do materiału i rodzaju zabrudzeń. Dzięki temu brud zostaje rozpuszczony i przygotowany do skutecznego wypłukania."
      },
      {
        "@type": "HowToStep",
        "name": "Ekstrakcja",
        "text": "Za pomocą profesjonalnego ekstraktora dokładnie płuczemy materiał i usuwamy 90% zanieczyszczeń oraz resztek środków czyszczących."
      },
      {
        "@type": "HowToStep",
        "name": "Neutralizacja chemii",
        "text": "Stabilizujemy pH tkaniny i wypłukujemy pozostałości agresywnych środków, dzięki czemu materiał jest miękki, bezpieczny i ma przyjemny, świeży zapach."
      },
      {
        "@type": "HowToStep",
        "name": "Suszenie ekstraktorem",
        "text": "Odciągamy jak najwięcej wilgoci z wnętrza mebla, aby skrócić czas schnięcia i zapobiec rozwojowi niepożądanych zapachów."
      },
      {
        "@type": "HowToStep",
        "name": "Suszenie wentylatorem (opcjonalnie)",
        "text": "Na życzenie możemy całkowicie wysuszyć mebel, aby był gotowy do użytku od razu po czyszczeniu. Przy praniu materaca szczególnie zalecamy tę usługę - szybkie wysuszenie materiału pomaga uniknąć powstawania plam i nieprzyjemnych zapachów. Koszt tej opcji to 30% ceny prania mebla."
      }
    ]
  };

  const offersJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Rabat 10% na usługi powyżej 300zł",
        "description": "Na czyszczenie powyżej 300zł - 10% rabatu na całą usługę",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31",
        "seller": {
          "@type": "LocalBusiness",
          "name": "Lemonshine"
        }
      },
      {
        "@type": "Offer",
        "name": "Bezpłatny dojazd",
        "description": "Bezpłatny dojazd do klienta",
        "validFrom": "2025-01-01", 
        "validThrough": "2025-12-31",
        "seller": {
          "@type": "LocalBusiness",
          "name": "Lemonshine"
        }
      },
      {
        "@type": "Offer",
        "name": "Rabat dla sąsiadów 10%",
        "description": "Zamów pranie tapicerki z sąsiadem, a oba dostaniecie zniżke 10% rabatu na całą usługę",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31", 
        "seller": {
          "@type": "LocalBusiness",
          "name": "Lemonshine"
        }
      },
      {
        "@type": "Offer",
        "name": "Rabat dla firm do 20%",
        "description": "Oferujemy zniżkę dla firm i dużych obiektów aż do 20% rabatu od ceny zamówienia",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31",
        "seller": {
          "@type": "LocalBusiness", 
          "name": "Lemonshine"
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
      "https://www.facebook.com/profile.php?id=61576970773440",
      "https://www.instagram.com/lemonshine_pl/",
      "https://www.tiktok.com/@lemonshine_pl"
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://lemonshine.pl/" },
      { "@type": "ListItem", "position": 2, "name": "Pranie tapicerki", "item": "https://lemonshine.pl/pranie-tapicerki/" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Pranie Tapicerki dla Klientów Indywidualnych | Lemonshine Opole, Wrocław"
        description="Profesjonalne pranie kanap, foteli, materacy i dywanów w Twoim domu. Bezpieczna chemia, szybkie schnięcie, gwarancja jakości."
        canonical="https://lemonshine.pl/pranie-tapicerki/"
        jsonLd={[faqJsonLd, localBusinessJsonLd, howToJsonLd, offersJsonLd, breadcrumbJsonLd]}
      />
      <Header variant="klient" />
      <main>
        <Hero />
        <About />
        <Services />
        <Promotions />
        <Results />
        <OrderForm source="pranie-tapicerki" />
        <Equipment />
        <Blog />
        <FAQ />
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default Klient;
