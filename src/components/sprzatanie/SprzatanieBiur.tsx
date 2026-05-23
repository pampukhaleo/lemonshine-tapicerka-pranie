import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, FileText, Lock } from 'lucide-react';

const badges = [
  { icon: CalendarDays, label: 'Stały grafik' },
  { icon: FileText, label: 'Faktura VAT' },
  { icon: Lock, label: 'Umowa i poufność' },
];

const SprzatanieBiur = () => {
  const handleScrollToOrder = () => {
    const el = document.getElementById('zamow');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl border border-border p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Sprzątanie biur i obiektów komercyjnych Wrocław
          </h2>
          <p className="text-muted-foreground mb-6">
            Obsługujemy biura, lokale usługowe, szkoły, magazyny i obiekty
            przemysłowe. Ustalamy stały grafik - codzienny, tygodniowy,
            dwutygodniowy, miesięczny lub inny, dostosowany pod Twoje potrzeby.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-mint-600 text-mint-700 bg-card"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{b.label}</span>
                </div>
              );
            })}
          </div>

          <Button
            onClick={handleScrollToOrder}
            className="bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold px-8"
          >
            Zapytaj o ofertę dla firmy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SprzatanieBiur;
