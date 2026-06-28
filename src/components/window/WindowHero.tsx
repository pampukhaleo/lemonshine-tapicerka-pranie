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
    <section className="pt-28 md:pt-36 pb-16 gradient-hero relative overflow-hidden">
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
                Mycie okien
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Dokładnie myjemy okna w mieszkaniach, domach i obiektach firmowych
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
                <Link to="/cennik/?tab=windows">Zobacz zakres usług</Link>
              </Button>

            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <img
              src="/heroImg-window.png"
              alt="Profesjonalne mycie okien - czyste okna w kuchni"
              className="w-full max-w-md rounded-2xl object-cover shadow-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowHero;
