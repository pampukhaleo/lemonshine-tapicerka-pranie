import React from 'react';
import {
  Wind, Droplets, Feather, Hand,
  GlassWater, Trash2, Shirt, UtensilsCrossed,
  CookingPot, Refrigerator, Bath, ShowerHead,
} from 'lucide-react';

const checklistItems = [
  { icon: Wind, label: 'Odkurzanie podłóg', description: 'Odkurzamy wszystkie dostępne powierzchnie' },
  { icon: Droplets, label: 'Mycie podłóg', description: 'Myjemy wszystkie dostępne powierzchnie' },
  { icon: Feather, label: 'Usuwanie kurzu z mebli', description: 'Przecieramy meble oraz inne dostępne elementy' },
  { icon: Hand, label: 'Czyszczenie elementów dotykowych', description: 'Myjemy poręcze, listwy, drzwi oraz włączniki światła' },
  { icon: GlassWater, label: 'Mycie luster', description: 'Czyścimy lustra, pozostawiając je bez smug' },
  { icon: Trash2, label: 'Zbieranie i wynoszenie śmieci', description: 'Zbieramy odpady i wynosimy je po sprzątaniu' },
  { icon: Shirt, label: 'Składanie i rozwieszanie odzieży', description: 'Porządkujemy odzież pozostawioną w widocznych miejscach' },
  { icon: UtensilsCrossed, label: 'Mycie naczyń', description: 'Myjemy naczynia znajdujące się w zlewie' },
  { icon: CookingPot, label: 'Czyszczenie kuchni', description: 'Myjemy powieszchownie kuchenkę, zlew oraz blat roboczy' },
  { icon: Refrigerator, label: 'Przecieranie AGD', description: 'Przecieramy na zewnątrz sprzęty AGD: lodówkę, mikrofale oraz okap' },
  { icon: Bath, label: 'Mycie i dezynfekcja toalety', description: 'Dokładnie myjemy i dezynfekujemy sedes' },
  { icon: ShowerHead, label: 'Czyszczenie łazienki', description: 'Myjemy umywalne, wannę lub prysznic (przy dużym stopniu zabrudzenia - liczymy osobno)' },
];

const CleaningChecklist = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">
            Co obejmuje<br className="md:hidden" /> sprzątanie mieszkania?
          </h2>

          <div className="bg-card rounded-2xl border border-border p-4 md:p-0 md:border-0 md:bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
              {checklistItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 py-3 md:py-0 md:bg-card md:rounded-xl md:p-4 md:border md:border-border border-b border-border last:border-b-0 md:last:border-b md:border-b-border" py-3 md:py-0 md:bg-card md:rounded-xl md:p-4 md:border md:border-border border-b border-border last:border-b-0 md:last:border-b md:border-b-border"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-lemon-100 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-lemon-600" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold block text-sm md:text-base">{item.label}</span>
                      <span className="text-xs md:text-sm text-muted-foreground">{item.description}</span>
                    </div>
                  </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningChecklist;
