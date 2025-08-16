
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
            Wyjątkowa Oferta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Odkryj nasze najlepsze usługi prania tapicerki meblowej. Profesjonalne rezultaty w przystępnych cenach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {popularItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft p-6 hover-lift group">
              <div className="mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                {item.subtitle && (
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.subtitle}
                  </p>
                )}
                <div className="text-2xl font-bold text-mint-500 mb-4">
                  {item.price}
                </div>
              </div>
              <Button 
                onClick={handleOrderClick}
                className="w-full gradient-lemon text-white hover:opacity-90"
              >
                Zamów
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/cennik">
            <Button variant="outline" size="lg" className="border-mint-500 text-mint-500 hover:bg-mint-50">
              Zobacz pełny cennik
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
