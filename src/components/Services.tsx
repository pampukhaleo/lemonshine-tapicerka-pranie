import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sofa, Home, Car, Building, MapPin, Percent } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: 'Pranie kanap i foteli',
      description: 'Profesjonalne czyszczenie wszystkich rodzajów tapicerki meblowej',
      features: ['Usuwanie plam', 'Neutralizacja zapachów', 'Odkurzanie głębokie', 'Impregnacja'],
      price: 'od 150 zł'
    },
    {
      icon: Home,
      title: 'Czyszczenie dywanów',
      description: 'Kompleksowe pranie dywanów i wykładzin dywanowych',
      features: ['Pranie głębokie', 'Suszenie profesjonalne', 'Usuwanie roztoczy', 'Odświeżanie kolorów'],
      price: 'od 20 zł/m²'
    },
    {
      icon: Sofa,
      title: 'Czyszczenie materacy',
      description: 'Specjalistyczne czyszczenie wnętrz samochodowych',
      features: ['Fotele samochodowe', 'Deski rozdzielcze', 'Czyszczenie skóry', 'Usuwanie zapachów'],
      price: 'od 150 zł'
    },
    {
      icon: Building,
      title: 'Usługi dla firm',
      description: 'Kompleksowe czyszczenie dla biur, hoteli i restauracji',
      features: ['Meble biurowe', 'Czyszczenie cykliczne', 'Dogodne terminy', 'Faktury VAT'],
      price: 'wycena indywidualna'
    }
  ];

  const furnitureItems = [
    {
      name: 'Pranie 2-osobowej kanapy',
      subtitle: 'do 1,7 m.',
      price: '130 zł',
      image: 'furniture/23.jpg'
    },
    {
      name: 'Pranie 3-osobowej kanapy',
      subtitle: '1,7-2.5 m.',
      price: '150 zł',
      image: 'furniture/25.jpg'
    },
    {
      name: 'Pranie średniego naróżnika',
      subtitle: 'do 2,5×1,5 m.',
      price: '170 zł',
      image: 'furniture/34.jpg'
    },
    {
      name: 'Pranie dużego narożnika',
      subtitle: 'od 2,5×1,5 m.',
      price: 'od 200 zł',
      image: 'furniture/33.jpg'
    },
    {
      name: 'Pranie dużego fotela',
      subtitle: '',
      price: '60 zł',
      image: 'furniture/28.jpg'
    },
    {
      name: 'Pranie elementu rozkładanego',
      subtitle: 'kanapy',
      price: '50 zł',
      image: 'furniture/30.jpg'
    },
    {
      name: 'Pranie materaca',
      subtitle: 'z jednej strony',
      price: '130 zł',
      image: 'furniture/35.jpg'
    },
    {
      name: 'Pranie osobnej poduszki',
      subtitle: 'od kanapy',
      price: '20 zł',
      image: 'furniture/31.jpg'
    },
    {
      name: 'Pranie krzesła konferencyjnego',
      subtitle: '',
      price: '30 zł',
      image: 'furniture/29.jpg'
    },
    {
      name: 'Pranie krzesła tapicerowanego',
      subtitle: 'siedzenie',
      price: '20 zł',
      image: 'furniture/26.jpg'
    },
    {
      name: 'Pranie fotela małego',
      subtitle: 'bez oparć tapicerowanych',
      price: '50 zł',
      image: 'furniture/27.jpg'
    },
    {
      name: 'Pranie krzesła biurowego',
      subtitle: '',
      price: '40 zł',
      image: 'furniture/24.jpg'
    },
    {
      name: 'Pranie krzesła z oparciem',
      subtitle: '',
      price: '40 zł',
      image: 'furniture/22.jpg'
    }
  ];

  const promotions = [
    {
      icon: MapPin,
      title: 'Dojazd - gratis',
      description: 'Nie bierzemy dodatkowej opłaty za dojazd. Działamy po całym Opole +20km',
      highlight: 'GRATIS'
    },
    {
      icon: Percent,
      title: 'Zniżka na kompleksowe czyszczenie',
      description: 'Dajemy 10% zniżki na zamówienia powyżej 300 zł',
      highlight: '10% ZNIŻKI'
    }
  ];

  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="oferta" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Nasze Usługi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferujemy pełen zakres usług prania tapicerki. Każda usługa wykonywana jest 
            z najwyższą starannością i profesjonalizmem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
          { services.map((service, index) => (
            <Card key={ index } className="h-full flex flex-col border-0 shadow-lg hover-lift bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full gradient-fresh flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <CardTitle className="text-xl font-heading text-foreground leading-7 min-h-6 overflow-hidden text-balance">
                  { service.title }
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-center leading-6 min-h-[82px] overflow-hidden">
                  { service.description }
                </p>
                <ul className="mt-3 space-y-2 leading-6 min-h-[120px] overflow-hidden">
                  { service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={ featureIndex } className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-mint-400 mr-3"></div>
                      { feature }
                    </li>
                  )) }
                </ul>

                <div className="mt-auto pt-4 border-t border-lemon-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mint-500 mb-2 leading-7 min-h-7 text-balance">
                      { service.price }
                    </div>
                    <Button onClick={ handleOrderClick }
                            className="w-full gradient-lemon-soft text-white hover:opacity-90">
                      Zamów usługę
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )) }
        </div>


        {/* Wyjątkowa Oferta - Furniture Price List */ }
        <div className="bg-gradient-to-br from-lemon-50 to-mint-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Wyjątkowa Oferta
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sprawdź nasze konkurencyjne ceny dla różnych rodzajów mebli tapicerowanych.
              Gwarantujemy profesjonalne podejście i najwyższą jakość usług.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            { furnitureItems.map((item, index) => (
              <Card key={ index } className="bg-white shadow-md hover-lift border-0 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-lemon-100 to-mint-100 p-4">
                  <img
                    src={ item.image }
                    alt={ item.name }
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                    { item.name }
                  </h4>
                  { item.subtitle && (
                    <p className="text-xs text-muted-foreground mb-3">
                      { item.subtitle }
                    </p>
                  ) }
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-mint-600">
                      { item.price }
                    </span>
                    <Button onClick={ handleOrderClick } size="sm"
                            className="gradient-lemon-soft text-white text-xs px-3 py-1">
                      Zamów
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )) }
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Potrzebujesz wyceny dla czegoś innego?
            </p>
            <Button onClick={ handleOrderClick } size="lg" className="gradient-fresh text-white hover:opacity-90">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>

        {/* Promocje Section */ }
        <div className="bg-gradient-to-r from-mint-500 to-lemon-400 rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Promocje
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Skorzystaj z naszych wyjątkowych ofert i oszczędź na profesjonalnym praniu tapicerki
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            { promotions.map((promotion, i) => (
              <Card key={ i } className="bg-white shadow-xl border-0 overflow-hidden hover-lift h-full">
                <CardContent className="p-8 h-full">
                  <div className="flex gap-4 h-full">
                    <div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-mint-400 to-lemon-400 flex items-center justify-center shrink-0">
                      <promotion.icon className="w-8 h-8 text-white"/>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="relative">
                          <h4
                            className="text-xl font-heading font-bold text-foreground leading-7 min-h-14 overflow-hidden text-balance sm:pr-28">
                            { promotion.title }
                          </h4>
                          <span className="hidden sm:inline absolute top-0 right-0 bg-gradient-to-r from-mint-500 to-lemon-400 text-white px-3 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-sm">
                            { promotion.highlight }
                          </span>
                          <span className="sm:hidden inline-block mt-2 bg-gradient-to-r from-mint-500 to-lemon-400 text-white px-3 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-sm">
                            { promotion.highlight }
                          </span>
                        </div>
                        <p className="mt-3 text-muted-foreground leading-relaxed
                             min-h-[48px] overflow-hidden
                             [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                          { promotion.description }
                        </p>
                      </div>
                      <Button onClick={ handleOrderClick }
                              className="mt-4 w-full gradient-lemon-soft text-white hover:opacity-90 max-w-[162px]">
                        Skorzystaj z oferty
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )) }
          </div>


          <div className="text-center mt-8">
            <p className="text-white/90 mb-4">
              Promocje można łączyć z innymi ofertami. Szczegóły podczas zamawiania.
            </p>
            <Button onClick={ handleOrderClick } size="lg" variant="outline"
                    className="bg-black/50 border-white/30 text-white hover:bg-white/20">
              Zamów teraz i oszczędź
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
