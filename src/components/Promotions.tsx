import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Percent, Car, Users } from 'lucide-react';

const Promotions = () => {
  const promotions = [
    {
      icon: <Percent className="w-8 h-8 text-lemon-600" />,
      title: "Zamówienie powyżej 300 zł",
      subtitle: "Na sprzątanie",
      description: "Na czyszczenie powyżej 300zł - 10% rabatu na całą usługę.",
      badge: "10% RABATU",
      color: "bg-lemon-100 border-lemon-300"
    },
    {
      icon: <Car className="w-8 h-8 text-mint-600" />,
      title: "Bezpłatny dojazd",
      subtitle: "Zostaw opinię",
      description: "Napisz opinię ze zdjęciem na google, a dostaniesz 10% zniżki!",
      badge: "10% RABATU",
      color: "bg-mint-100 border-mint-300"
    },
    {
      icon: <Users className="w-8 h-8 text-lemon-600" />,
      title: "Dla sąsiadów",
      subtitle: "Zamów sprzątanie z sąsiadem",
      description: "Zamów pranie tapicerki z sąsiadem, a oboje dostaniecie zniżkę 10% rabatu na całą usługę!",
      badge: "10% RABATU",
      color: "bg-lemon-100 border-lemon-300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-lemon-50/30 to-mint-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Aktualne Promocje
            </h2>
            <p className="text-xl text-muted-foreground">
              Skorzystaj z naszych wyjątkowych ofert i oszczędź na sprzątaniu mieszkania
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-3xl border-2 ${promo.color} transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                <div className="absolute -top-4 left-8">
                  <Badge className="px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-full">
                    {promo.badge}
                  </Badge>
                </div>
                
                <div className="flex items-start gap-6 mt-2">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-white/80">
                    {promo.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-mint-600 mb-1">{promo.subtitle}</p>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {promo.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {promo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              * Promocje nie łączą się ze sobą. Szczegóły u konsultanta telefonicznego.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
