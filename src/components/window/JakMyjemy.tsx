import React from 'react';
import { Droplets, Ruler, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Droplets,
    title: 'Metoda WFP — czysta woda, zero detergentów',
    description:
      'Używamy systemu filtracji wody. Czysta woda nie zostawia kamienia, osadu ani smug. Bez chemii, bezpiecznie dla roślin i elewacji.',
  },
  {
    icon: Ruler,
    title: 'Zasięg do 11,5 metra',
    description:
      'Teleskopowy drążek sięga do 4 piętra. Pracujemy bezpiecznie z ziemi — szybciej, taniej i bez ryzyka wypadku.',
  },
  {
    icon: Wrench,
    title: 'Tradycyjne mycie wewnątrz',
    description:
      'Szyby od wewnątrz myjemy klasyczną metodą — profesjonalny efekt bez smug na każdej powierzchni.',
  },
];

const JakMyjemy = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Jak myjemy?
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-mint-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JakMyjemy;
