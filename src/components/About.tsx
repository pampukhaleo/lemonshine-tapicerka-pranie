
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, DollarSign, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Gwarancja Jakości',
      description: 'Zwrócimy do 100% kosztów, jeśli wynik prania będzie inny, niż zapowiedziany.'
    },
    {
      icon: Users,
      title: 'Zrobimy wszystko za Ciebie',
      description: 'Przyjeżdżamy na miejsce, wnosimy sprzęt, wykonujemy usługę i zostawiamy po sobie porządek.'
    },
    {
      icon: DollarSign,
      title: 'Konkurencyjne Ceny',
      description: 'Profesjonalne pranie tapicerki w uczciwej cenie - bez kompromisów w jakości.'
    },
    {
      icon: Zap,
      title: 'Sprzęt Klasy Premium',
      description: 'Korzystamy z zaawansowanego sprzętu i profesjonaljych środków czyszczących.'
    }
  ];

  return (
    <section className="py-16 bg-lemon-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Kilka słów o nas
          </h2>
          <p className="text-xl text-muted-foreground mx-auto max-w-[48rem] text-balance leading-snug">
            Jesteśmy liderem w dziedzinie profesjonalnego prania tapicerki. Nasze doświadczenie i pasja do czystości gwarantują najwyższą jakość usług.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          { features.map((feature, index) => (
            <Card key={ index } className="h-full border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm">
              <CardContent className="h-full p-6">
                <div className="flex h-full flex-col items-center text-center">
                  <div className="w-16 h-16 mb-2 rounded-full gradient-fresh flex items-center justify-center shrink-0">
                    <feature.icon className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="mt-2 text-xl font-heading font-semibold text-foreground leading-7 min-h-14 overflow-hidden"
                  >
                    { feature.title }
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-6 min-h-[72px] overflow-hidden">
                    { feature.description }
                  </p>
                  <div className="mt-auto"/>
                </div>
              </CardContent>
            </Card>
          )) }
        </div>

        {/* Story Section */ }
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-10">
            <div className="space-y-6 max-w-[38rem]">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Nasza historia i misja
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  W Lemonshine stawiamy na indywidualne podejście i dokładność. Nie jesteśmy korporacją - każde zlecenie traktujemy z pełnym zaangażowaniem. Korzystamy z profesjonalnych środków i sprzętu, dbając o komfort, bezpieczeństwo i zadowolenie klienta. Naszym celem jest świeżość, czystość i przyjemna atmosfera w domu naszych klientów.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full gradient-lemon flex items-center justify-center">
                  <span className="text-white font-bold">2+</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Lat doświadczenia</div>
                  <div className="text-sm text-muted-foreground">w branży czyszczenia tapicerki</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl gradient-hero p-8 max-h-[440px] min-h-[380px]">
              <img
                src="history.jpg"
                alt="Profesjonalne pranie tapicerki"
                className="mx-auto h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
