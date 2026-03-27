import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const services = [
  {
    image: '/window/window-1.jpg',
    title: 'Umycie jednego okna',
    subtitle: 'Szyba + rama + parapet',
    price: '30',
    unit: 'za sztukę',
  },
  {
    image: '/window/window-2.jpg',
    title: 'Umycie obudowy balkonu',
    subtitle: 'Szyby balkonowe + ramy',
    price: '20',
    unit: 'za sztukę',
  },
  {
    image: '/window/window-3.jpg',
    title: 'Mycie paneli szklanych',
    subtitle: 'Balustrady, ścianki szklane',
    price: '10',
    unit: 'za 1 m²',
  },
];

const WindowPricing = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Cennik Mycia Okien
            </h2>
            <p className="text-lg text-muted-foreground">
              Sprawdź cennik na mycie okien i zamów usługę już teraz!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl">
                <div className="aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardContent className="p-3 md:p-4">
                  <h3 className="font-heading font-semibold text-foreground text-xs md:text-sm mb-0.5">
                    {service.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground mb-2">
                    {service.subtitle}
                  </p>
                  <p className="text-sm md:text-lg font-bold text-mint-600 mb-2">
                    {service.price} zł <span className="text-[10px] md:text-xs font-normal text-muted-foreground">{service.unit}</span>
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
      </div>
    </section>
  );
};

export default WindowPricing;
