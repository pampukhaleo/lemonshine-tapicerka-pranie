
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import OrderForm from '@/components/OrderForm';
import { Button } from '@/components/ui/button';
import { Phone, Check, Handshake, Building, Home, Briefcase, GraduationCap, Shield, Percent, HeartHandshake } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

const Outsourcing = () => {
  const handleOrderClick = () => {
    const element = document.getElementById('zamow');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const targetAudience = [
    {
      icon: Building,
      title: 'Firmy sprzątające',
      description: 'Rozszerz swoją ofertę o profesjonalne pranie tapicerki bez inwestycji w sprzęt.'
    },
    {
      icon: Home,
      title: 'Zarządcy nieruchomości',
      description: 'Oferuj kompleksowe usługi czyszczenia najemcom i właścicielom mieszkań.'
    },
    {
      icon: Briefcase,
      title: 'Agencje nieruchomości',
      description: 'Przygotowuj mieszkania do sprzedaży lub wynajmu z profesjonalnym czyszczeniem.'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Usługi White-Label',
      description: 'Działamy pod Twoją marką. Twoi klienci nie muszą wiedzieć, że korzystasz z naszych usług.'
    },
    {
      icon: Percent,
      title: 'Atrakcyjne ceny partnerskie',
      description: 'Specjalne stawki dla partnerów, które pozwalają Ci zarabiać na każdym zleceniu.'
    },
    {
      icon: HeartHandshake,
      title: 'Pełne wsparcie',
      description: 'Pomagamy w wycenach, doradzamy i wspieramy na każdym etapie współpracy.'
    },
    {
      icon: GraduationCap,
      title: 'Szkolenia i know-how',
      description: 'Dzielimy się wiedzą o materiałach, plamach i metodach czyszczenia.'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Nawiąż kontakt',
      description: 'Skontaktuj się z nami, aby omówić warunki współpracy.'
    },
    {
      step: 2,
      title: 'Ustal warunki',
      description: 'Określamy ceny partnerskie, obszar działania i zakres usług.'
    },
    {
      step: 3,
      title: 'Przyjmuj zlecenia',
      description: 'Oferujesz usługi prania tapicerki swoim klientom.'
    },
    {
      step: 4,
      title: 'My wykonujemy',
      description: 'Realizujemy zlecenia profesjonalnie, pod Twoją marką lub naszą.'
    }
  ];

  const faqItems = [
    {
      question: 'Czy muszę mieć własny sprzęt?',
      answer: 'Nie! To właśnie przewaga outsourcingu - my przywozimy cały sprzęt i chemię. Ty tylko pozyskujesz klientów.'
    },
    {
      question: 'Jak wygląda rozliczenie?',
      answer: 'Rozliczamy się na podstawie faktury. Możemy ustalić płatność po każdym zleceniu lub miesięczne rozliczenia zbiorcze.'
    },
    {
      question: 'Czy klienci dowiedzą się, że korzystam z podwykonawcy?',
      answer: 'Tylko jeśli chcesz! Oferujemy usługi white-label - możemy działać całkowicie pod Twoją marką.'
    },
    {
      question: 'Jaki jest minimalny próg współpracy?',
      answer: 'Nie ma minimalnej ilości zleceń. Możemy zacząć od pojedynczych usług i rozwijać współpracę.'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Outsourcing usług czyszczenia tapicerki - Lemonshine",
    "description": "Partnerstwo dla firm chcących oferować usługi profesjonalnego czyszczenia tapicerki swoim klientom. White-label, atrakcyjne ceny partnerskie.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lemonshine",
      "telephone": "+48 662 117 886"
    },
    "areaServed": ["Opole", "Wrocław", "Brzeg", "Nysa", "Kędzierzyn-Koźle"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://lemonshine.pl/" },
      { "@type": "ListItem", "position": 2, "name": "Outsourcing", "item": "https://lemonshine.pl/outsourcing/" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Outsourcing Usług Czyszczenia Tapicerki | Lemonshine Partner"
        description="Rozszerz ofertę swojej firmy o profesjonalne pranie tapicerki. Usługi white-label, atrakcyjne ceny partnerskie, pełne wsparcie."
        canonical="https://lemonshine.pl/outsourcing/"
        jsonLd={[jsonLd, faqJsonLd, breadcrumbJsonLd]}
      />
      <Header variant="outsourcing" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-lemon-100 text-lemon-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                Program partnerski
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Outsourcing usług
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lemon-500 to-mint-500">
                  czyszczenia tapicerki
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rozszerz ofertę swojej firmy bez inwestycji w sprzęt i szkolenia. 
                My zajmujemy się wykonaniem - Ty zarabiasz na marży.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleOrderClick} className="hover-lift">
                  Zostań partnerem
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift"
                  asChild
                >
                  <a href="tel:+48662117886" onClick={() => trackPhoneClick('outsourcing_hero')}>
                    <Phone className="w-5 h-5 mr-2" />
                    +48 662 117 886
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For Whom Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Dla kogo jest outsourcing?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nasze partnerstwo jest idealne dla firm, które chcą poszerzyć swoją ofertę
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudience.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lemon-400 to-mint-500 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Co zyskujesz jako partner?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lemon-400 to-lemon-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Jak to działa?
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mint-500 to-mint-700 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Dlaczego warto z nami współpracować?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Brak inwestycji w sprzęt i szkolenia',
                    'Profesjonalne wykonanie każdego zlecenia',
                    'Elastyczne warunki rozliczeń',
                    'Wsparcie przy wycenach i konsultacjach',
                    'Możliwość pracy pod Twoją marką (white-label)',
                    'Gwarancja jakości naszych usług'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-mint-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" onClick={handleOrderClick} className="mt-8 hover-lift">
                  Skontaktuj się z nami
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/furniture/31.jpg"
                  alt="Profesjonalne czyszczenie tapicerki"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Często zadawane pytania
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Form */}
        <OrderForm source="outsourcing" />
      </main>

      <Footer />
    </div>
  );
};

export default Outsourcing;
