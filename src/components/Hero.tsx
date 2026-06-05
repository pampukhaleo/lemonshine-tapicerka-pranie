
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles, Clock, Shield, Phone } from 'lucide-react';
import { Link } from "react-router-dom";
import { trackPhoneClick } from '@/lib/analytics';
import heroImg from '@/assets/pranie-tapicerki-4.webp.asset.json';

const Hero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 md:pt-36 pb-16 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-lemon-400 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-mint-400 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-lemon-300 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-0 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                <span className="text-mint-600">Pranie Tapicerki</span>{ ' ' }
                Wrocław
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Meblowej, samochodowej i wykładzin - profesjonalnie, bez ryzyka uszkodzeń.
              </p>
            </div>

            {/* CTA Buttons */ }
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={ handleOrderClick }
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

          {/* Hero Image */ }
          <div className="block text-center">
            <img
              src={heroImg.url}
              alt="Profesjonalne pranie tapicerki - nowoczesny sprzęt i bezpieczne środki"
              className="mx-auto w-full max-w-md lg:max-w-xl object-contain"
              loading="eager"
              fetchPriority="high"
              width="600"
              height="400"
              decoding="sync"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
