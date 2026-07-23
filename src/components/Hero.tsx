import React from 'react';
import { Button } from '@/components/ui/button';
import { trackPhoneClick } from '@/lib/analytics';
import heroBgAsset from '@/assets/pranie-tapicerki-hero.jpg.asset.json';

const Hero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-44 md:pt-56 pb-28 md:pb-36 relative overflow-hidden bg-gradient-to-r from-lemon-200 via-mint-200 to-mint-100"
    >
      <div
        className="hidden md:block absolute right-0 top-0 h-full w-[70%] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgAsset.url})` }}
      />
      <div className="hidden md:block absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-lemon-200 via-lemon-200/85 to-transparent pointer-events-none" />





      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              <span className="text-foreground">Pranie Tapicerki</span>
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Meblowej, samochodowej i wykładzin - profesjonalnie, bez ryzyka uszkodzeń.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleOrderClick}
              className="w-full sm:flex-1 hover-lift h-10 text-sm md:h-11 md:text-base md:px-8"
            >
              Zapytaj o wycenę
            </Button>

            <Button
              variant="outline"
              className="w-full sm:flex-1 border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift h-10 text-sm md:h-11 md:text-base md:px-8"
              asChild
            >
              <a href="tel:+48662117886">Zadzwoń teraz</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
