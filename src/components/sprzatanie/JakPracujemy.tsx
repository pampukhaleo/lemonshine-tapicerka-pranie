import React from 'react';

const steps = [
  {
    title: 'Kontakt',
    description: 'Piszesz lub dzwonisz, ustalamy szczegóły.',
  },
  {
    title: 'Wycena',
    description: 'Telefonicznie lub na miejscu przy większych obiektach.',
  },
  {
    title: 'Przyjeżdżamy',
    description: 'Punktualnie, z własnym sprzętem i chemią.',
  },
  {
    title: 'Sprzątamy',
    description: 'Dokładnie, według ustalonego protokołu.',
  },
];

const JakPracujemy = () => {
  return (
    <section className="py-12 md:py-16 bg-mint-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Jak pracujemy
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-lemon-400 via-mint-400 to-lemon-400"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-12 h-12 rounded-full bg-lemon-400 border-4 border-mint-50 text-foreground font-heading font-bold flex items-center justify-center shadow-md z-10">
                  {i + 1}
                </div>
                <h3 className="font-heading font-bold text-foreground mt-3 mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JakPracujemy;
