
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingItems } from '@/data/pricing';

const Services = () => {
  const popularItems = pricingItems.filter(item => item.popular).slice(0, 4);

  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mb-8 items-stretch">
          { popularItems.map((item, index) => (
            <div
              key={ index }
              className="bg-white rounded-2xl shadow-lg p-3 md:p-6 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-3 md:mb-6">
                <img
                  src={ item.image }
                  alt={ item.name }
                  className="w-full h-28 md:h-48 object-cover rounded-xl mb-2 md:mb-4"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                  { item.name }
                </h3>
                { item.subtitle && (
                  <p className="text-muted-foreground text-xs md:text-sm">
                    { item.subtitle }
                  </p>
                ) }
              </div>

              <div className="mt-auto space-y-2">
                <div className="text-lg md:text-2xl font-bold text-mint-600 leading-none">
                  { item.price }
                </div>

                <Button
                  onClick={ handleOrderClick }
                  size="sm"
                  className="w-full text-xs md:text-sm hover:opacity-90"
                >
                  Zamów
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1"/>
                </Button>
              </div>
            </div>
          )) }
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
