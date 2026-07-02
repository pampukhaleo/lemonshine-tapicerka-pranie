import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import okienZewnetrznych from '@/assets/mycie-okien-zewnetrznych.webp.asset.json';
import witrynSklepowych from '@/assets/mycie-witryn-sklepowych.webp.asset.json';
import paneliFoto from '@/assets/mycie-paneli-fotowoltaicznych.webp.asset.json';

const items = [
  {
    title: 'Mycie okien zewnętrznych',
    description:
      'Mieszkania, domy i biurowce do 4 piętra. Myjemy metodą WFP (woda demineralizowana — bez detergentów). Idealne dla okien bez smug, bez zacieków, bez ryzyka.',
    image: okienZewnetrznych.url,
  },
  {
    title: 'Mycie witryn sklepowych',
    description:
      'Stały grafik — codziennie, co tydzień lub miesięcznie. Czysta witryna to pierwsze wrażenie Twojego sklepu.',
    image: witrynSklepowych.url,
  },
  {
    title: 'Mycie paneli fotowoltaicznych',
    description:
      'Brudne panele tracą nawet 30% wydajności. Myjemy wodą demineralizowaną — panele wracają do pełnej mocy.',
    image: paneliFoto.url,
  },
];

const CoMyjemy = () => {
  const handleOrderClick = () => {
    document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Co myjemy?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <Card
              key={i}
              className="bg-lemon-50 shadow-md hover-lift border-0 overflow-hidden rounded-xl flex flex-col"
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

export default CoMyjemy;
