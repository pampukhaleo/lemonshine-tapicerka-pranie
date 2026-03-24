import React from 'react';
import { ShieldCheck, SprayCan, Clock, Sparkles } from 'lucide-react';

const indicators = [
  {
    icon: ShieldCheck,
    title: '0% Ryzyka',
    description: 'Płatność dopiero po wykonaniu usługi.',
  },
  {
    icon: SprayCan,
    title: 'Własny sprzęt i chemia',
    description: 'Przyjeżdżamy z pełnym wyposażeniem.',
  },
  {
    icon: Clock,
    title: 'Terminowość',
    description: 'Zawsze na czas, zgodnie z ustaleniami.',
  },
  {
    icon: Sparkles,
    title: 'Zrobimy to za Ciebie',
    description: 'Przyjeżdżamy, robimy swoje i zostawiamy porządek.',
  },
];

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {indicators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6"
              >
                <div className="w-14 h-14 rounded-full bg-lemon-100 flex items-center justify-center mb-3">
                  <IconComponent className="w-7 h-7 text-lemon-600" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm md:text-base mb-2 flex-1 flex items-end justify-center">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
