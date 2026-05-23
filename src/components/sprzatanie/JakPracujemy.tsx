import React from 'react';
import { MessageCircle, Calculator, Truck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Kontakt',
    description: 'Piszesz lub dzwonisz, ustalamy szczegóły.',
  },
  {
    icon: Calculator,
    title: 'Wycena',
    description:
      'Zazwyczaj przez telefon. Przy większych obiektach przyjeżdżamy na miejsce.',
  },
  {
    icon: Truck,
    title: 'Przyjeżdżamy',
    description: 'Punktualnie, z własnym sprzętem i chemią.',
  },
  {
    icon: Sparkles,
    title: 'Sprzątamy',
    description: 'Dokładnie, według ustalonego protokołu.',
  },
];

const JakPracujemy = () => {
  return (
    <section className="py-16 bg-mint-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Jak pracujemy
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border relative"
              >
                <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-lemon-400 text-foreground font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-mint-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-mint-700" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JakPracujemy;
