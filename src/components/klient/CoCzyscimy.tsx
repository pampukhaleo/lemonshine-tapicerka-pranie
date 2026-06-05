import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import wykladzinyImg from '@/assets/wykladziny-dywany.webp.asset.json';
import tapicerkaImg from '@/assets/tapicerka-meblowa.webp.asset.json';
import samochodowaImg from '@/assets/samochodowa.webp.asset.json';

const items = [
  {
    title: 'Wykładziny i dywany',
    description:
      'Od małych dywanów po duże wykładziny biurowe i hotelowe. Świeżość w całym pomieszczeniu.',
    image: wykladzinyImg.url,
  },
  {
    title: 'Tapicerka meblowa',
    description:
      'Kanapy, fotele, krzesła, materace. Usuwamy plamy, zapachy i alergeny używając bezpiecznej chemii.',
    image: tapicerkaImg.url,
  },
  {
    title: 'Samochodowa',
    description:
      'Fotele, podsufitka, dywaniki, bagażnik. Przywracamy wnętrzu świeżość.',
    image: samochodowaImg.url,
  },
];

const CoCzyscimy = () => {
  const handleOrderClick = () => {
    document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Co czyścimy?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <Card
              key={i}
              className="bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {item.description}
                </p>
                <Button
                  onClick={handleOrderClick}
                  className="w-full bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold"
                >
                  Zapytaj o ofertę
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoCzyscimy;
