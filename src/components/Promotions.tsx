import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Percent, Star, Users } from 'lucide-react';

const Promotions = () => {
  const promotions = [
    {
      icon: <Percent className="w-7 h-7 text-card" />,
      title: "Zamówienie powyżej 300zł",
      description: "Na czyszczenie powyżej 300zł - 10% rabatu na całą usługę.",
      badges: ["10% RABATU"],
    },
    {
      icon: <Star className="w-7 h-7 text-card" />,
      title: "Zostaw opinię, dostań zniżkę",
      description: "Napisz opinię ze zdjęciem na google, a dostaniesz 10% zniżki!",
      badges: ["10% RABATU"],
    },
    {
      icon: <Users className="w-7 h-7 text-card" />,
      title: "Razem z sąsiadem",
      description: "Zamów sprzątanie z sąsiadem, a oboje otrzymacie 20% rabatu!",
      badges: ["20% RABATU"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Aktualne Promocje
            </h2>
            <p className="text-muted-foreground">
              Skorzystaj z naszych wyjątkowych ofert i oszczędź na sprzątaniu mieszkania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className="relative border-2 border-mint-400 rounded-2xl p-6 pt-10 bg-card"
              >
                {/* Badges */}
                <div className="absolute -top-4 left-6 flex gap-2">
                  {promo.badges.map((badge, i) => (
                    <Badge
                      key={i}
                      className={`px-3 py-1 font-bold text-xs rounded-full border-none ${
                        i === 0 && promo.badges.length > 1
                          ? "bg-lemon-400 text-foreground"
                          : "bg-lemon-400 text-foreground"
                      }`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-mint-500 flex items-center justify-center mb-4">
                  {promo.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                  {promo.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {promo.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
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
