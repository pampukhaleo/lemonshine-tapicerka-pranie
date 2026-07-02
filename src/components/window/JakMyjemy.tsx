import React from 'react';
import metodaWfp from '@/assets/metoda-wfp.webp.asset.json';
import tradycyjne from '@/assets/tradycyjne-mycie.webp.asset.json';
import zasieg from '@/assets/zasieg-11-5m.webp.asset.json';

const steps = [
  {
    image: metodaWfp.url,
    title: 'Metoda WFP — czysta woda, zero detergentów',
    description:
      'Używamy systemu filtracji wody. Czysta woda nie zostawia kamienia, osadu ani smug. Bez chemii, bezpiecznie dla roślin i elewacji.',
  },
  {
    image: tradycyjne.url,
    title: 'Tradycyjne mycie wewnątrz',
    description:
      'Szyby od wewnątrz myjemy klasyczną metodą — profesjonalny efekt bez smug na każdej powierzchni.',
  },
  {
    image: zasieg.url,
    title: 'Zasięg do 11,5 metra',
    description:
      'Teleskopowy drążek sięga do 4 piętra. Pracujemy bezpiecznie z ziemi — szybciej, taniej i bez ryzyka wypadku.',
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
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="shrink-0 w-16 h-16 flex items-center justify-center">
                <img src={step.image} alt={step.title} className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JakMyjemy;
