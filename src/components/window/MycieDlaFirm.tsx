import React from 'react';
import { Button } from '@/components/ui/button';
import stalyGrafik from '@/assets/staly-grafik.webp.asset.json';
import fakturaVat from '@/assets/faktura-vat.webp.asset.json';
import umowaPoufnosc from '@/assets/umowa-poufnosc.webp.asset.json';

const badges = [
  { icon: stalyGrafik.url, label: 'Stały grafik' },
  { icon: fakturaVat.url, label: 'Faktura VAT' },
  { icon: umowaPoufnosc.url, label: 'Umowa i poufność' },
];

const MycieDlaFirm = () => {
  const handleScrollToOrder = () => {
    document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl border border-border p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Mycie okien dla firm Wrocław
          </h2>
          <p className="text-muted-foreground mb-6">
            Obsługujemy sklepy, restauracje, biura, hotele, obiekty usługowe i inne obiekty.
            Stały grafik, faktura VAT, umowa. Przyjeżdżamy rano przed otwarciem, wieczorem
            po zamknięciu, lub o innej dogodnej godzinie — bez zakłócania Twojej pracy.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
            {badges.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <img src={b.icon} alt={b.label} className="w-16 h-16" loading="lazy" />
                <span className="text-sm font-medium text-foreground">{b.label}</span>
              </div>
            ))}
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

export default MycieDlaFirm;
