import React from 'react';

const stats = [
  { value: '1500+', label: 'Wykonanych usług' },
  { value: '500+', label: 'Zadowolonych klientów' },
  { value: '98%', label: 'Pozytywnych opinii' },
  { value: '24h', label: 'Czas reakcji' },
  { value: '5.0', label: 'Średnia ocen Google' },
];

const StatsBar = () => {
  return (
    <section className="py-12 bg-lemon-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/80 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
