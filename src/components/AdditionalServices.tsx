import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Pranie kanapy',
    subtitle: 'Profesjonalne czyszczenie kanap metodą ekstrakcyjną',
    price: 'od 200 zł',
    image: '/furniture/23.jpg',
  },
  {
    title: 'Pranie narożnika',
    subtitle: 'Głębokie pranie narożników z usuwaniem plam',
    price: 'od 250 zł',
    image: '/furniture/34.jpg',
  },
  {
    title: 'Pranie materaca',
    subtitle: 'Czyszczenie i dezynfekcja materacy',
    price: 'od 200 zł',
    image: '/furniture/35.jpg',
  },
  {
    title: 'Pranie wykładziny',
    subtitle: 'Czyszczenie wykładzin i dywanów',
    price: '15-20 zł/m²',
    image: '/furniture/wykladzina.jpg',
  },
];

const AdditionalServices = () => {
  const handleOrderClick = () => {
    document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Dodatkowe usługi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesjonalne pranie tapicerki meblowej i wykładzin w przystępnych cenach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full border border-border"
            >
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.subtitle}
                </p>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-2xl font-bold text-mint-600 leading-none">
                  {service.price}
                </div>
                <Button
                  onClick={handleOrderClick}
                  className="w-full sm:w-auto hover:opacity-90"
                >
                  Zamów
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
            <Link to="/cennik/">Zobacz pełny cennik<ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
