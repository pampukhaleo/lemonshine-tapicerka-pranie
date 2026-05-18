
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import OrderForm from '@/components/OrderForm';
import Results from '@/components/Results';
import Equipment from '@/components/Equipment';
import { Button } from '@/components/ui/button';
import { Phone, Check, Building2, Hotel, UtensilsCrossed, Stethoscope, Users, FileText, Clock, Shield } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

const Biznes = () => {
  const handleOrderClick = () => {
    const element = document.getElementById('zamow');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Building2,
      title: 'Biura i przestrzenie coworkingowe',
      description: 'Regularne czyszczenie krzeseł biurowych, kanap w strefach relaksu i wykładzin.'
    },
    {
      icon: Hotel,
      title: 'Hotele i apartamenty',
      description: 'Kompleksowa obsługa materacy, tapicerki i dywanów w pokojach hotelowych.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Restauracje i kawiarnie',
      description: 'Czyszczenie tapicerowanych krzeseł, kanap i sof w lokalach gastronomicznych.'
    },
    {
      icon: Stethoscope,
      title: 'Placówki medyczne',
      description: 'Dezynfekcja i czyszczenie mebli tapicerowanych w przychodniach i gabinetach.'
    }
  ];

  const benefits = [
    { icon: FileText, text: 'Faktura VAT' },
    { icon: Users, text: 'Rabat do 20% dla firm' },
    { icon: Clock, text: 'Elastyczne godziny pracy' },
    { icon: Shield, text: 'Umowa na stałą współpracę' }
  ];

  const faqItems = [
    {
      question: 'Czy wystawiacie faktury VAT?',
      answer: 'Tak, dla wszystkich klientów biznesowych wystawiamy pełne faktury VAT.'
    },
    {
      question: 'Czy możecie pracować poza godzinami pracy biura?',
      answer: 'Oczywiście! Oferujemy elastyczne godziny pracy - możemy przyjechać wieczorem lub w weekend, aby nie zakłócać pracy Twojego zespołu.'
    },
    {
      question: 'Czy oferujecie umowy na stałą współpracę?',
      answer: 'Tak, dla firm oferujemy atrakcyjne warunki długoterminowej współpracy z rabatami do 20%.'
    },
    {
      question: 'Jak szybko możecie obsłużyć duży obiekt?',
      answer: 'Dysponujemy zespołem, który może obsłużyć nawet duże obiekty w krótkim czasie. Szczegóły ustalamy indywidualnie.'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Profesjonalne czyszczenie tapicerki dla firm - Lemonshine",
    "description": "Kompleksowe usługi czyszczenia tapicerki meblowej dla biur, hoteli, restauracji i obiektów komercyjnych w Opolu i Wrocławiu.",
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
      { "@type": "ListItem", "position": 2, "name": "Dla firm", "item": "https://lemonshine.pl/biznes/" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Czyszczenie Tapicerki dla Firm B2B | Lemonshine Opole, Wrocław"
        description="Profesjonalne usługi czyszczenia tapicerki meblowej dla firm. Biura, hotele, restauracje. Faktura VAT, rabaty do 20%, elastyczne godziny."
        canonical="https://lemonshine.pl/biznes/"
        jsonLd={[jsonLd, faqJsonLd, breadcrumbJsonLd]}
      />
      <Header variant="biznes" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-mint-100 text-mint-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Dla firm i obiektów komercyjnych
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Profesjonalne czyszczenie
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mint-500 to-mint-700">
                  dla Twojej firmy
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Kompleksowa obsługa biur, hoteli, restauracji i innych obiektów komercyjnych. 
                Zadbaj o czystość i higienę w miejscu pracy.
              </p>

              {/* Benefits badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm">
                      <IconComponent className="w-4 h-4 text-mint-600" />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleOrderClick} className="hover-lift">
                  Zamów wycenę
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift"
                  asChild
                >
                  <a href="tel:+48662117886" onClick={() => trackPhoneClick('biznes_hero')}>
                    <Phone className="w-5 h-5 mr-2" />
                    +48 662 117 886
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Kogo obsługujemy?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nasze usługi są dostosowane do potrzeb różnych branż i typów obiektów
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint-500 to-mint-700 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Dlaczego firmy wybierają Lemonshine?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Rabaty do 20% dla stałych klientów biznesowych',
                    'Elastyczne godziny pracy - również wieczorem i w weekendy',
                    'Faktura VAT dla każdej usługi',
                    'Możliwość podpisania umowy na stałą współpracę',
                    'Profesjonalny sprzęt i certyfikowana chemia',
                    'Szybka realizacja nawet dużych zleceń'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-mint-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" onClick={handleOrderClick} className="mt-8 hover-lift">
                  Poproś o wycenę
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/furniture/wykladzina.jpg"
                  alt="Czyszczenie wykładzin w biurze"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <Results />

        {/* Equipment */}
        <Equipment />

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
        <OrderForm source="biznes" />
      </main>

      <Footer />
    </div>
  );
};

export default Biznes;
