import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PanelTop, Fence, Grid3X3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: PanelTop,
    iconBg: 'bg-cyan-100 text-cyan-600',
    title: 'Umycie jednego okna',
    subtitle: 'Szyba + rama + parapet',
    price: '30',
    unit: 'za sztukę',
  },
  {
    icon: Fence,
    iconBg: 'bg-mint-100 text-mint-600',
    title: 'Umycie obudowy balkonu',
    subtitle: 'Szyby balkonowe + ramy',
    price: '20',
    unit: 'za sztukę',
  },
  {
    icon: Grid3X3,
    iconBg: 'bg-lemon-100 text-lemon-600',
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
              Proste i przejrzyste ceny — płacisz tylko za to, co potrzebujesz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 border-border hover:border-mint-400 transition-colors rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center space-y-5">
                    <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mx-auto`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-heading font-bold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>
                    <div>
                      <span className="text-4xl font-bold text-mint-600">{service.price}</span>
                      <span className="text-lg text-mint-600 ml-1">zł</span>
                      <p className="text-sm text-muted-foreground mt-1">{service.unit}</p>
                    </div>
                    <Button onClick={handleOrderClick} className="w-full hover-lift">
                      Zamów
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 text-center space-y-4">
            <div className="inline-block bg-lemon-100 text-foreground px-6 py-3 rounded-full text-sm font-semibold">
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
