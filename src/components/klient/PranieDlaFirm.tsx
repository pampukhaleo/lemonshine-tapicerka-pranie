import React from 'react';
import { Button } from '@/components/ui/button';
import biuroImg from '@/assets/zielone-biuro.webp.asset.json';

const PranieDlaFirm = () => {
  const handleOrderClick = () => {
    document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-lemon-50 border border-border rounded-2xl p-6 md:p-10">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Pranie tapicerki dla firm
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Obsługujemy biura, hotele, restauracje i salony samochodowe.
              Fotele konferencyjne, krzesła biurowe, wykładziny na dużej
              powierzchni - ustalamy grafik i przyjeżdżamy poza godzinami pracy,
              żeby nie zakłócać Twojej działalności. Faktura VAT, umowa.
            </p>
            <Button
              onClick={handleOrderClick}
              size="lg"
              className="bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold px-8"
            >
              Zapytaj o ofertę dla firmy
            </Button>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md">
            <img
              src={biuroImg.url}
              alt="Pranie wykładziny w biurze"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PranieDlaFirm;
