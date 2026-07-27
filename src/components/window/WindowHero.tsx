import React from 'react';
import { Button } from '@/components/ui/button';
import { trackPhoneClick } from '@/lib/analytics';
import heroBgAsset from '@/assets/mycie-okien-hero.webp.asset.json';
import heroBgMobileAsset from '@/assets/mycie-okien-hero-mobile.jpg.asset.json';

const WindowHero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 min-h-[520px] md:min-h-[620px] flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${heroBgMobileAsset.url})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-right hidden md:block"
        style={{ backgroundImage: `url(${heroBgAsset.url})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-lemon-200 via-mint-200/80 to-transparent" />


      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                Mycie okien
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Dokładnie myjemy okna w mieszkaniach, domach i obiektach firmowych
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={handleOrderClick}
                size="lg"
                className="w-full sm:flex-1 hover-lift"
              >
                Zapytaj o wycenę
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:flex-1 border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift"
                asChild
              >
                <a href="tel:+48662117886" onClick={() => trackPhoneClick('window_hero')}>Zadzwoń teraz</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowHero;
