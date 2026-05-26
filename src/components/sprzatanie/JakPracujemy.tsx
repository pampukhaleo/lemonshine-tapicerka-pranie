import React from 'react';
import { MessageCircle, Calculator, Truck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Kontakt',
    description: 'Piszesz lub dzwonisz, ustalamy szczegóły zlecenia i Twoje oczekiwania.',
  },
  {
    icon: Calculator,
    title: 'Wycena',
    description:
      'Zazwyczaj przez telefon. Przy większych obiektach przyjeżdżamy na miejsce, aby przygotować dokładną ofertę.',
  },
  {
    icon: Truck,
    title: 'Przyjeżdżamy',
    description: 'Punktualnie, z własnym sprzętem i profesjonalną chemią — nie musisz nic przygotowywać.',
  },
  {
    icon: Sparkles,
    title: 'Sprzątamy',
    description: 'Dokładnie, według ustalonego protokołu. Na koniec wspólnie sprawdzamy efekt.',
  },
];

const JakPracujemy = () => {
  return (
    <section className="py-16 md:py-20 bg-mint-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Jak pracujemy
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cztery proste kroki — od pierwszego kontaktu do błyszczących efektów.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lemon-400 via-mint-400 to-lemon-400 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Number badge on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-lemon-400 border-4 border-mint-50 text-foreground font-heading font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="bg-card rounded-2xl p-5 md:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-11 h-11 rounded-xl bg-mint-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-mint-700" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-foreground">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JakPracujemy;
