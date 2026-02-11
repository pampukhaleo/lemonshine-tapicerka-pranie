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

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lemonshine",
    "description": "Profesjonalne usługi sprzątania i czyszczenia tapicerki w Opolu i Wrocławiu",
    "url": "https://lemonshine.pl",
    "logo": "https://lemonshine.pl/lemonshine.png",
    "telephone": "+48 662 117 886",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "sameAs": [
      "https://www.facebook.com/lemonshine.opole",
      "https://www.instagram.com/lemonshine_opole/"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Lemonshine - Sprzątanie Wrocław | Profesjonalne Usługi"
        description="Profesjonalne sprzątanie mieszkań i obiektów we Wrocławiu i Opolu. Robimy porządki w mieszkaniach i na dużych obiektach. Zamów online!"
        canonical="https://lemonshine.pl/"
        jsonLd={[jsonLd]}
      />

      <Header variant="home" />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/heroImg.webp)' }}
          />
          {/* Warm yellow-green overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-lemon-300/50 via-lemon-200/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3 italic">
                Sprzątanie Wrocław
              </h1>
              <p className="text-base md:text-lg text-foreground/70 mb-8">
                Robimy porządki w mieszkaniach i na dużych obiektach
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold px-8 shadow-none border-2 border-foreground/10"
                  asChild
                >
                  <a href="#zamow">Zamów sprzątanie</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-card/70 backdrop-blur-sm border-2 border-foreground/15 text-foreground hover:bg-card font-semibold px-8"
                  asChild
                >
                  <a href="#cennik">Sprawdź cennik</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustIndicators />

        <div id="cennik">
          <CleaningPricing />
        </div>

        <CleaningChecklist />

        <AdditionalServices />

        <Promotions />

        <Testimonials />

        <StatsBar />

        <OrderForm />

        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
