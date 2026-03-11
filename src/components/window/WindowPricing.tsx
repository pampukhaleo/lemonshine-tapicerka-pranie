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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 items-stretch">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.subtitle}</p>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-2xl font-bold text-mint-600 leading-none">
                    {service.price} zł <span className="text-sm font-normal text-muted-foreground">{service.unit}</span>
                  </div>
                  <Button onClick={handleOrderClick} className="w-full sm:w-auto hover:opacity-90">
                    Zamów
                  </Button>
                </div>
              </div>
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
