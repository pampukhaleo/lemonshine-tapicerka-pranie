import React from 'react';

const stats = [
  { value: '1500+', label: 'Wykonanych usług' },
  { value: '100%', label: 'Zadowolonych klientów' },
  { value: '5★', label: 'Ocen Google' },
];

const StatsBar = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-lemon-100 to-mint-100 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-mint-600 mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
