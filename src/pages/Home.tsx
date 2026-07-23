import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustIndicators from '@/components/TrustIndicators';
import CleaningPricing from '@/components/CleaningPricing';
import CleaningChecklist from '@/components/CleaningChecklist';
import AdditionalServices from '@/components/AdditionalServices';
import Promotions from '@/components/Promotions';
import Testimonials from '@/components/Testimonials';
import StatsBar from '@/components/StatsBar';
import OrderForm from '@/components/OrderForm';
import FAQ from '@/components/FAQ';
import SprzataniaServices from '@/components/sprzatanie/SprzataniaServices';
import DlaczegoLemonShine from '@/components/sprzatanie/DlaczegoLemonShine';
import JakPracujemy from '@/components/sprzatanie/JakPracujemy';
import SprzatanieBiur from '@/components/sprzatanie/SprzatanieBiur';
import NaszeOpinie from '@/components/shared/NaszeOpinie';
import heroBgAsset from '@/assets/sprzatanie-hero.jpg.asset.json';
import { trackPhoneClick } from '@/lib/analytics';

const Home = () => {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lemonshine.pl/#business",
    "name": "Lemonshine",
    "description": "Profesjonalne usługi sprzątania mieszkań, biur i prania tapicerki meblowej w Opolu, Wrocławiu i okolicach.",
    "url": "https://lemonshine.pl/",
    "logo": "https://lemonshine.pl/lemonshine.png",
    "image": "https://lemonshine.pl/lemonshine.png",
    "telephone": "+48 662 117 886",
    "priceRange": "150-2000 PLN",
    "currenciesAccepted": "PLN",
    "paymentAccepted": "Cash, BLIK, Bank transfer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "areaServed": [
      { "@type": "City", "name": "Wrocław" },
      { "@type": "City", "name": "Opole" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61576970773440",
      "https://www.instagram.com/lemonshine_pl/",
      "https://www.tiktok.com/@lemonshine_pl"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak długo trwa sprzątanie mieszkania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Czas sprzątania zależy od metrażu i stopnia zabrudzenia. Zazwyczaj trwa od 2 do 4 godzin."
        }
      },
      {
        "@type": "Question",
        "name": "Czy muszę być w mieszkaniu podczas sprzątania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie, nie ma takiej potrzeby. Wiele osób przekazuje nam klucze lub udostępnia mieszkanie pod swoją nieobecność."
        }
      },
      {
        "@type": "Question",
        "name": "Czy muszę mieć własny sprzęt i chemię?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie, przyjeżdżamy z własnym sprzętem oraz profesjonalnymi środkami czystości."
        }
      },
      {
        "@type": "Question",
        "name": "Jak wygląda płatność za usługę?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Płatność odbywa się po wykonaniu usługi gotówką, blikiem, lub przelewem."
        }
      },
      {
        "@type": "Question",
        "name": "Jak mogę zamówić sprzątanie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wystarczy skontaktować się z nami telefonicznie lub przez formularz na stronie."
        }
      },
      {
        "@type": "Question",
        "name": "Czy sprzątacie w weekendy lub wieczorami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy elastyczne terminy, również w weekendy i po godzinach pracy."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Lemonshine - Sprzątanie Wrocław | Profesjonalne Usługi"
        description="Profesjonalne sprzątanie mieszkań i obiektów we Wrocławiu i Opolu. Robimy porządki w mieszkaniach i na dużych obiektach. Zamów online!"
        canonical="https://lemonshine.pl/"
        jsonLd={[localBusinessLd, faqLd]}
      />

      <Header variant="home" />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden bg-gradient-to-r from-lemon-100 via-mint-50 to-mint-100">
          <div
            className="hidden md:block absolute right-0 top-0 h-full w-[70%] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBgAsset.url})` }}
          />
          <div className="hidden md:block absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-lemon-100 via-lemon-100/85 to-transparent pointer-events-none" />
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3">
                Sprzątanie Wrocław
              </h1>
              <p className="text-base md:text-lg text-foreground/70 mb-8">
                Robimy porządki w mieszkaniach i na dużych obiektach
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold text-base md:text-xl px-8 py-4 md:px-16 md:py-7 shadow-none border border-lemon-400 hover-lift font-[Poppins] h-auto"
                  asChild
                >
                  <a href="#zamow">Zamów sprzątanie</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-card/80 backdrop-blur-sm border-2 border-mint-600 text-foreground hover:bg-card font-bold text-base md:text-xl px-8 py-4 md:px-16 md:py-7 hover-lift font-[Poppins] h-auto"
                  asChild
                >
                  <a href="tel:+48886344660" onClick={() => trackPhoneClick('home_hero')}>
                    <Phone className="w-5 h-5 mr-2" />
                    Zadzwoń teraz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>




        <SprzataniaServices />

        <DlaczegoLemonShine />

        <JakPracujemy />

        <SprzatanieBiur />


        <NaszeOpinie />

        <OrderForm source="sprzątanie" />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
