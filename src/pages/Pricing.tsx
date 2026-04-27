
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import OrderForm from '@/components/OrderForm';
import FAQ from '@/components/FAQ';
import { pricingItems, cleaningPricingItems, windowPricingItems, PricingItem } from '@/data/pricing';
import { Ruler, Sparkles, ClipboardList, MapPin } from 'lucide-react';

const tabs = [
  { id: 'cleaning', label: 'Sprzątanie' },
  { id: 'upholstery', label: 'Pranie tapicerki' },
  { id: 'windows', label: 'Mycie okien' },
] as const;

type PricingTab = typeof tabs[number]['id'];

const isPricingTab = (tab: string | null): tab is PricingTab =>
  tabs.some((pricingTab) => pricingTab.id === tab);

const tabData: Record<PricingTab, PricingItem[]> = {
  cleaning: cleaningPricingItems,
  upholstery: pricingItems,
  windows: windowPricingItems,
};

const priceFactors = [
  { icon: Ruler, title: 'Wielkość powierzchni', description: 'Cena zależy od metrażu mieszkania lub liczby mebli do czyszczenia.' },
  { icon: Sparkles, title: 'Stopień zabrudzenia', description: 'Silne zabrudzenia mogą wymagać dodatkowych środków i czasu pracy.' },
  { icon: ClipboardList, title: 'Zakres prac', description: 'Możesz wybrać podstawowe sprzątanie lub rozszerzony pakiet usług.' },
  { icon: MapPin, title: 'Lokalizacja zlecenia', description: 'Dojazd poza Wrocław może wiązać się z dodatkową opłatą.' },
];

const Pricing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<PricingTab>(isPricingTab(initialTab) ? initialTab : 'cleaning');

  const handleTabChange = (tab: PricingTab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const items = tabData[activeTab];

  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Cennik usług sprzątania - Lemonshine",
    "itemListElement": pricingItems.map((item, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Service",
        "name": item.name,
        "description": item.subtitle || `Profesjonalne pranie: ${item.name}`
      },
      "priceCurrency": "PLN",
      "price": item.price.replace(/[^\d]/g, '') || "0",
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cennik Usług Sprzątania - Wrocław | Lemonshine"
        description="Sprawdź cennik usług sprzątania, prania tapicerki i mycia okien we Wrocławiu. Przejrzyste ceny, profesjonalna obsługa."
        keywords="cennik sprzątania wrocław, cennik prania tapicerki, cennik mycia okien, sprzątanie mieszkań ceny"
        canonical="https://lemonshine.pl/cennik/"
        jsonLd={offerCatalogJsonLd}
      />
      <Header variant="klient" />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Cennik na usługi sprzątania we Wrocławiu
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Przejrzysty cennik naszych usług. Ostateczna cena zależy od wielkości powierzchni i stopnia zabrudzenia.
            </p>
          </div>
        </section>

        {/* Tabs + Cards */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-lemon-300 text-foreground shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {items.map((item, index) => (
                <Card key={`${activeTab}-${index}`} className="bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl">
                  <div className="aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-3 md:p-4">
                    <h3 className="font-heading font-semibold text-foreground text-xs md:text-sm mb-0.5">
                      {item.name}
                    </h3>
                    {item.subtitle && (
                      <p className="text-[10px] md:text-xs text-muted-foreground mb-2">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-sm md:text-lg font-bold text-mint-600 mb-2">
                      {item.price}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs px-3 py-1 bg-lemon-100 border-lemon-200 hover:bg-lemon-200 text-foreground"
                      onClick={() => document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Zamów →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Potrzebujesz wyceny dla czegoś innego?
              </p>
              <Button
                size="lg"
                className="hover:opacity-90"
                onClick={() => document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Skontaktuj się z nami
              </Button>
            </div>
          </div>
        </section>

        {/* Co wpływa na cenę */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">
              Co wpływa na cenę?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {priceFactors.map((factor, index) => (
                <Card key={index} className="bg-white border-0 shadow-sm text-center p-6">
                  <factor.icon className="w-10 h-10 mx-auto mb-4 text-mint-600" />
                  <h3 className="font-heading font-semibold text-foreground mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Order Form */}
        <OrderForm source="cennik" />

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">
              Odpowiedzi na częste pytania
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: 'Czy oferujecie rabaty przy większych zleceniach?', a: 'Tak, przy większym zakresie prac możemy zaproponować zniżkę.' },
                { q: 'Czy są zniżki przy stałej współpracy?', a: 'Tak, dla stałych klientów oferujemy korzystniejsze warunki cenowe.' },
                { q: 'Czy dojazd jest wliczony w cenę?', a: 'W większości przypadków tak, przy dalszych lokalizacjach może być doliczony koszt.' },
                { q: 'Jak mogę zapłacić za usługę?', a: 'Akceptujemy płatność gotówką lub przelewem.' },
                { q: 'Czy cena podana na stronie jest ostateczna?', a: 'Nie zawsze - ostateczna cena zależy od wielkości i stopnia zabrudzenia.' },
                { q: 'Czy minimalna kwota zamówienia obowiązuje?', a: 'Tak, przy małych zleceniach obowiązuje minimalna wartość usługi - 150 zł.' },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-lg border-0 shadow-sm px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
