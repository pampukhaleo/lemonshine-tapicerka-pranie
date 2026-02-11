import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Cennik sprzątania mieszkania
            </h2>
            <p className="text-muted-foreground text-lg">
              Wybierz częstotliwość i sprawdź cenę
            </p>
          </div>

          {/* Frequency Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {frequencyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFrequency(tab.id)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                  selectedFrequency === tab.id
                    ? "bg-lemon-500 text-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-lemon-100"
                )}
              >
                {tab.label}
                {tab.badge && (
                  <span className="ml-1.5 text-xs font-bold">{tab.badge}</span>
                )}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {apartmentPlans.map((plan) => {
              const price = calculatePrice(plan.basePrice, currentTab.discount);
              return (
                <div
                  key={plan.id}
                  className={cn(
                    "relative bg-card rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl",
                    plan.popular
                      ? "border-lemon-500 shadow-lg scale-[1.02]"
                      : "border-border"
                  )}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lemon-500 text-foreground font-bold">
                      Najpopularniejszy
                    </Badge>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{plan.area} · {plan.duration}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-heading font-bold text-foreground">
                      {price} <span className="text-lg font-normal text-muted-foreground">zł</span>
                    </div>
                    {currentTab.discount > 0 && (
                      <p className="text-sm text-muted-foreground mt-1 line-through">
                        {calculatePrice(plan.basePrice, 0)} zł
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-mint-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToOrder}
                    className={cn(
                      "w-full",
                      plan.popular ? "bg-lemon-500 hover:bg-lemon-600 text-foreground" : ""
                    )}
                  >
                    Zamów sprzątanie
                    <ArrowRight className="w-4 h-4 ml-2" />
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
