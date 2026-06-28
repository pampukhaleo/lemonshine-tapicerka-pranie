import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

const WindowHero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-28 md:pt-36 pb-16 relative overflow-hidden"
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
          <linearGradient id="windowWaveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c8d84a" />
            <stop offset="50%" stopColor="#a8c832" />
            <stop offset="100%" stopColor="#8cb814" />
          </linearGradient>
        </defs>
        <path
          d="M0 120 C240 180 480 60 720 100 C960 140 1200 40 1440 100 V200 H0 Z"
          fill="url(#windowWaveGradient)"
          opacity="0.85"
        />
        <path
          d="M0 150 C360 190 600 110 960 150 C1200 180 1320 130 1440 160 V200 H0 Z"
          fill="#9ebf2a"
          opacity="0.5"
        />
      </svg>

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
