
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Doświadczenie',
      description: 'Ponad 5 lat na rynku usług czyszczenia tapicerki w Warszawie i okolicach.'
    },
    {
      icon: Users,
      title: 'Profesjonalny zespół',
      description: 'Wykwalifikowani specjaliści z certyfikatami i bogatym doświadczeniem.'
    },
    {
      icon: Zap,
      title: 'Nowoczesny sprzęt',
      description: 'Używamy najnowocześniejszych urządzeń i ekologicznych środków czyszczących.'
    },
    {
      icon: Heart,
      title: 'Indywidualne podejście',
      description: 'Każdy zlecenie traktujemy indywidualnie, dostosowując metody do typu tkaniny.'
    }
  ];

  return (
    <section className="py-16 bg-lemon-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Kilka słów o nas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jesteśmy liderem w dziedzinie profesjonalnego prania tapicerki. Nasze doświadczenie i pasja do czystości 
            gwarantują najwyższą jakość usług.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full gradient-fresh flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
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
            <div className="aspect-square rounded-2xl gradient-hero p-8">
              <img
                src="history.jpg"
                alt="Profesjonalne pranie tapicerki"
                className="mx-auto mb-4 object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
