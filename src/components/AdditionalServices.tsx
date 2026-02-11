import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Pranie kanapy',
    price: 'od 200 zł',
    image: '/furniture/23.jpg',
  },
  {
    title: 'Pranie narożnika',
    price: 'od 250 zł',
    image: '/furniture/34.jpg',
  },
  {
    title: 'Pranie materaca',
    price: 'od 200 zł',
    image: '/furniture/35.jpg',
  },
  {
    title: 'Pranie wykładziny',
    price: '15-20 zł/m²',
    image: '/furniture/wykladzina.jpg',
  },
];

const AdditionalServices = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Dodatkowe usługi
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-foreground text-sm md:text-base mb-1">
                    {service.title}
                  </h3>
                  <p className="text-lemon-600 font-bold text-sm">{service.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild className="border-mint-600 text-mint-600 hover:bg-mint-50">
              <Link to="/cennik/">
                Zobacz pełną listę
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
