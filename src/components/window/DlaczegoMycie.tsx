import React from 'react';
import dlaczegoImg from '@/assets/dlaczego-mycie-okien.jpg.asset.json';

const DlaczegoMycie = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Dlaczego LemonShine?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dokładność to nasz standard. Woda demineralizowana, czyste narzędzia, każdy
              centymetr szyby — ramy, uszczelki, parapet. Pracujemy tak przy każdym wyjeździe,
              bo stawiamy na stałą współpracę, nie jednorazowe zlecenia.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-muted">
            <img
              src={dlaczegoImg.url}
              alt="Pracownik LemonShine myjący okno"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <svg
        className="block w-full h-auto mt-10 pointer-events-none"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dlaczegoWaveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c8d84a" />
            <stop offset="50%" stopColor="#a8c832" />
            <stop offset="100%" stopColor="#8cb814" />
          </linearGradient>
        </defs>
        <path
          d="M0 80 C240 130 480 30 720 70 C960 110 1200 20 1440 70 V140 H0 Z"
          fill="url(#dlaczegoWaveGradient)"
          opacity="0.7"
        />
        <path
          d="M0 100 C360 130 600 70 960 100 C1200 120 1320 90 1440 110 V140 H0 Z"
          fill="#9ebf2a"
          opacity="0.4"
        />
      </svg>
    </section>
  );
};

export default DlaczegoMycie;
