
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sofa, Home, Car, Building } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <Button className="w-full gradient-lemon text-white hover:opacity-90">
                      Zamów usługę
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16 bg-gradient-to-r from-lemon-100 to-mint-100 rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Wyjątkowa Oferta
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Przy zamówieniu prania kanapy + dwóch foteli otrzymasz <strong>20% zniżki</strong> na całość! 
              Dodatkowo dorzucamy bezpłatną impregnację.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-3xl font-bold text-mint-500">
                Oszczędź do 200 zł!
              </div>
              <Button size="lg" className="gradient-lemon text-white hover:opacity-90">
                Skorzystaj z oferty
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
