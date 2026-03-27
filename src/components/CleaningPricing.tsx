import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { frequencyTabs, apartmentPlans, calculatePrice } from '@/data/cleaning-pricing';
import { cn } from '@/lib/utils';

const CleaningPricing = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('weekly');

  const currentTab = frequencyTabs.find(t => t.id === selectedFrequency)!;

  const scrollToOrder = () => {
    document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Cennik sprzątania mieszkania
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Sprawdź cenę w zależności od częstotliwości sprzątania
            </p>
          </div>

          {/* Frequency Tabs */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 mb-12">
            {frequencyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFrequency(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 border",
                  selectedFrequency === tab.id
                    ? "bg-lemon-100 border-lemon-400 text-foreground"
                    : "bg-card border-border text-muted-foreground hover:border-lemon-300"
                )}
              >
                {tab.badge && (
                  <Badge className={cn(
                    "rounded-full text-xs font-bold px-2.5 py-0.5",
                    selectedFrequency === tab.id
                      ? "bg-mint-500 text-card"
                      : "bg-mint-400 text-card"
                  )}>
                    {tab.badge}
                  </Badge>
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {apartmentPlans.map((plan) => {
              const price = calculatePrice(plan.basePrice, currentTab.discount);
              return (
                <div
                  key={plan.id}
                  className="bg-card rounded-2xl border border-border p-3 md:p-6 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 right-4 md:right-6 w-6 md:w-8 bg-mint-500 rounded-b-lg" style={{ height: '40px' }} />

                  <div className="mb-2 md:mb-4">
                    <h3 className="text-base md:text-2xl font-heading font-bold text-foreground">
                      {plan.title}
                    </h3>
                  </div>

                  <div className="mb-2 md:mb-4">
                    <span className="text-xl md:text-4xl font-heading font-bold text-foreground">
                      {price} zł
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-6 flex-1">
                    {plan.description}
                  </p>

                  <Button
                    onClick={scrollToOrder}
                    size="sm"
                    className="w-full rounded-xl bg-lemon-300 hover:bg-lemon-400 text-foreground font-semibold shadow-none text-xs md:text-sm"
                  >
                    Zamów sprzątanie
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningPricing;
