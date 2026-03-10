import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackPhoneClick } from '@/lib/analytics';

const WindowHero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-400 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-mint-400 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-cyan-300 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                Profesjonalne{' '}
                <span className="text-cyan-600">mycie okien</span>
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Dokładnie myjemy okna w mieszkaniach, domach i obiektach firmowych.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleOrderClick}
                size="lg"
                className="w-full sm:flex-1 hover-lift"
              >
                Zamów Mycie Okien
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:flex-1 border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift"
                asChild
              >
                <Link to="/cennik/">Zobacz zakres usług</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="md:hidden w-full border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift"
                asChild
              >
                <a href="tel:+48662117886" onClick={() => trackPhoneClick('hero_mobile_window')} className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+48 662 117 886</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-cyan-100 to-mint-100 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-cyan-200 flex items-center justify-center">
                  <span className="text-5xl">🪟</span>
                </div>
                <p className="text-lg font-heading font-semibold text-foreground">Lśniące okna bez smug</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowHero;
