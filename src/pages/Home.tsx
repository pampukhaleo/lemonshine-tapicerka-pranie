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
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/heroImg.webp)' }}
          />
          <div className="absolute inset-0 bg-lemon-500/30" />
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Sprzątanie Wrocław
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
                Robimy porządki w mieszkaniach i na dużych obiektach
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-lemon-500 hover:bg-lemon-600 text-foreground font-semibold px-8"
                  asChild
                >
                  <a href="#zamow">
                    Zamów sprzątanie
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-card/80 backdrop-blur-sm border-border text-foreground hover:bg-card font-semibold px-8"
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
