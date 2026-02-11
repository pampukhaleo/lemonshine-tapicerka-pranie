import React from 'react';
import {
  Wind, Droplets, Feather, Hand,
  GlassWater, Trash2, Shirt, UtensilsCrossed,
  CookingPot, Refrigerator, Bath, ShowerHead,
} from 'lucide-react';

const checklistItems = [
  { icon: Wind, label: 'Odkurzanie podłóg' },
  { icon: Droplets, label: 'Mycie podłóg' },
  { icon: Feather, label: 'Usuwanie kurzu z mebli' },
  { icon: Hand, label: 'Czyszczenie elementów dotykowych' },
  { icon: GlassWater, label: 'Mycie luster' },
  { icon: Trash2, label: 'Zbieranie i wynoszenie śmieci' },
  { icon: Shirt, label: 'Składanie i rozwieszanie odzieży' },
  { icon: UtensilsCrossed, label: 'Mycie naczyń' },
  { icon: CookingPot, label: 'Czyszczenie kuchni' },
  { icon: Refrigerator, label: 'Przecieranie AGD' },
  { icon: Bath, label: 'Mycie i dezynfekcja toalety' },
  { icon: ShowerHead, label: 'Czyszczenie łazienki' },
];

const CleaningChecklist = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Co obejmuje sprzątanie mieszkania?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklistItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-lemon-100 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-lemon-600" />
                  </div>
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningChecklist;
