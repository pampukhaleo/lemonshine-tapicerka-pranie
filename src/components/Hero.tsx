import React from 'react';
import { Button } from '@/components/ui/button';
import { trackPhoneClick } from '@/lib/analytics';

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
      style={{
        background: 'linear-gradient(100deg, #f9f5a8 0%, #d4f5d4 45%, #e0f7ff 100%)',
      }}
    >
      {/* Decorative cloud */}
      <svg
        className="absolute top-8 md:top-12 right-8 md:right-20 w-20 h-12 md:w-28 md:h-16 opacity-90 pointer-events-none"
        viewBox="0 0 120 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="35" cy="45" rx="25" ry="20" fill="white" />
        <ellipse cx="65" cy="35" rx="30" ry="25" fill="white" />
        <ellipse cx="90" cy="45" rx="22" ry="18" fill="white" />
      </svg>

      {/* Bottom wave / hills */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c8d84a" />
            <stop offset="50%" stopColor="#a8c832" />
            <stop offset="100%" stopColor="#8cb814" />
          </linearGradient>
        </defs>
        <path
          d="M0 120 C240 180 480 60 720 100 C960 140 1200 40 1440 100 V200 H0 Z"
          fill="url(#heroWaveGradient)"
          opacity="0.85"
        />
        <path
          d="M0 150 C360 190 600 110 960 150 C1200 180 1320 130 1440 160 V200 H0 Z"
          fill="#9ebf2a"
          opacity="0.5"
        />
      </svg>

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
