import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
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
                  {service.price}
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
