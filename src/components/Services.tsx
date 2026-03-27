
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { pricingItems } from '@/data/pricing';

const Services = () => {
  const popularItems = pricingItems.filter(item => item.popular).slice(0, 4);

  const handleOrderClick = () => {
    document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="oferta" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Cennik Prania Tapicerki
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sprawdź cennik na pranie tapicerki meblowej i zamów usługę już teraz!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
          {popularItems.map((item, index) => (
            <Card key={index} className="bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl">
              <div className="aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="font-heading font-semibold text-foreground text-xs md:text-sm mb-0.5">
                  {item.name}
                </h3>
                {item.subtitle && (
                  <p className="text-[10px] md:text-xs text-muted-foreground mb-2">
                    {item.subtitle}
                  </p>
                )}
                <p className="text-sm md:text-lg font-bold text-mint-600 mb-2">
                  {item.price}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs px-3 py-1 bg-lemon-100 border-lemon-200 hover:bg-lemon-200 text-foreground"
                  onClick={handleOrderClick}
                >
                  Zamów →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Minimum Order Notice */}
        <div className="mt-8 text-center space-y-4">
          <div className="inline-block bg-lemon-100 text-foreground px-6 py-3 rounded-lg text-sm font-semibold">
            ⚠️ Minimalna kwota zamówienia: 150 zł
          </div>
          <div>
            <Link to="/cennik/" className="text-mint-600 hover:text-mint-700 font-medium underline underline-offset-4">
              Zobacz pełny cennik →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
