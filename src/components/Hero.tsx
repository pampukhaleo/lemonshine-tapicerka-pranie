import React from 'react';
import { Button } from '@/components/ui/button';
import { trackPhoneClick } from '@/lib/analytics';
import heroBgAsset from '@/assets/pranie-tapicerki-hero.webp.asset.json';
import heroBgMobileAsset from '@/assets/pranie-tapicerki-hero-mobile.jpg.asset.json';

const Hero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-44 md:pt-56 pb-28 md:pb-36 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${heroBgMobileAsset.url})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-right-top hidden md:block"
        style={{ backgroundImage: `url(${heroBgAsset.url})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-lemon-200/95 via-mint-200/50 to-transparent" />




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
