import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles, Clock, Shield } from 'lucide-react';

const Hero = () => {
  const handleOrderClick = () => {
    // Ждем немного для полной загрузки DOM
    setTimeout(() => {
      const orderSection = document.getElementById('zamow');
      console.log('Looking for element with id="zamow":', orderSection);
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Element with id="zamow" not found');
      }
    }, 100);
  };

  return (
    <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-lemon-400 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-mint-400 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-lemon-300 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Profesjonalne{' '}
                <span className="text-mint-500">Pranie Tapicerki meblowej</span>{' '}
                w Opolu
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Usuwamy plamy, alergeny i nieprzyjemny zapach z kanap i materacy. Gwarancja widocznego efektu już po
                pierwszym praniu.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-mint-500"/>
                <span className="text-foreground font-medium">Bezpieczne środki</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-mint-500"/>
                <span className="text-foreground font-medium">Szybkie wysychanie</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-mint-500"/>
                <span className="text-foreground font-medium">Skuteczne odplamianie</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-mint-500"/>
                <span className="text-foreground font-medium">Gwarancja jakości</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleOrderClick} size="lg" className="gradient-lemon text-white hover:opacity-90 hover-lift">
                Zamów Pranie Tapicerki
              </Button>
              <Button size="lg" variant="outline" className="border-mint-500 text-mint-500 hover:bg-mint-50 hover-lift">
                Zobacz Cennik
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-mint-500">500+</div>
                <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mint-500">5★</div>
                <div className="text-sm text-muted-foreground">Średnia ocen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mint-500">100%</div>
                <div className="text-sm text-muted-foreground">Gwarancja satysfakcji</div>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder - Will generate image */}
          <div className="text-center text-white">
            <img
              src="lemonshine_big.png"
              alt="Profesjonalne pranie tapicerki"
              className="mx-auto mb-4 object-contain rounded-2xl"
            />
            <p className="text-lg font-medium text-black">Profesjonalne pranie tapicerki</p>
            <p className="text-sm opacity-80 text-black">Najwyższa jakość usług</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
