import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sofa, Home, Car, Building } from 'lucide-react';

const Services = () => {
  const scrollToOrderForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Sofa,
      title: 'Pranie kanap i foteli',
      description: 'Profesjonalne czyszczenie wszystkich rodzajów tapicerki meblowej',
      features: ['Usuwanie plam', 'Neutralizacja zapachów', 'Odkurzanie głębokie', 'Impregnacja'],
      price: 'od 130 zł'
    },
    {
      icon: Home,
      title: 'Czyszczenie dywanów',
      description: 'Kompleksowe pranie dywanów i wykładzin dywanowych',
      features: ['Pranie głębokie', 'Suszenie profesjonalne', 'Usuwanie roztoczy', 'Odświeżanie kolorów'],
      price: 'od 15 zł/m²'
    },
    {
      icon: Car,
      title: 'Tapicerka samochodowa',
      description: 'Specjalistyczne czyszczenie wnętrz samochodowych',
      features: ['Fotele samochodowe', 'Deski rozdzielcze', 'Czyszczenie skóry', 'Usuwanie zapachów'],
      price: 'od 200 zł'
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
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie 3-osobowej kanapy',
      subtitle: '1,7-2.5 m.',
      price: '150 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie średniego naróżnika',
      subtitle: 'do 2,5×1,5 m.',
      price: '170 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie dużego narożnika',
      subtitle: 'od 2,5×1,5 m.',
      price: 'od 200 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie dużego fotela',
      subtitle: '',
      price: '60 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie elementu rozkładanego',
      subtitle: 'kanapy',
      price: '50 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie materaca',
      subtitle: 'z jednej strony',
      price: '130 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie poduszki',
      subtitle: 'od kanapy',
      price: '20 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie krzesła konferencyjnego',
      subtitle: '',
      price: '30 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie krzesła tapicerowanego',
      subtitle: 'siedzenie',
      price: '20 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie fotela małego',
      subtitle: 'bez oparć tapicerowanych',
      price: '50 zł',
      image: '/placeholder.svg'
    },
    {
      name: 'Pranie krzesła biurowego',
      subtitle: '',
      price: '40 zł',
      image: '/placeholder.svg'
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover-lift bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full gradient-fresh flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-mint-400 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-lemon-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mint-500 mb-2">
                      {service.price}
                    </div>
                    <Button className="w-full gradient-lemon text-white hover:opacity-90" onClick={scrollToOrderForm}>
                      Zamów usługę
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Wyjątkowa Oferta - Furniture Price List */}
        <div className="bg-gradient-to-br from-lemon-50 to-mint-50 rounded-3xl p-8 md:p-12" id="cennik">
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
            {furnitureItems.map((item, index) => (
              <Card key={index} className="bg-white shadow-md hover-lift border-0 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-lemon-100 to-mint-100 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {item.name}
                  </h4>
                  {item.subtitle && (
                    <p className="text-xs text-muted-foreground mb-3">
                      {item.subtitle}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-mint-600">
                      {item.price}
                    </span>
                    <Button size="sm" className="gradient-lemon text-white text-xs px-3 py-1" onClick={scrollToOrderForm}>
                      Zamów
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Potrzebujesz wyceny dla większego zlecenia?
            </p>
            <Button size="lg" className="gradient-fresh text-white hover:opacity-90" onClick={scrollToOrderForm}>
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
