
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';
import { pricingItems } from '@/data/pricing';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Cennik
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sprawdź nasze konkurencyjne ceny dla różnych rodzajów mebli tapicerowanych.
                Gwarantujemy profesjonalne podejście i najwyższą jakość usług.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pricingItems.map((item, index) => (
                <Card key={index} className="bg-white shadow-md hover-lift border-0 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-lemon-100 to-mint-100 p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      {item.name}
                    </h4>
                    {item.subtitle && (
                      <p className="text-xs text-muted-foreground mb-3">
                        {item.subtitle}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-mint-600">
                        {item.price}
                      </span>
                      <Button asChild size="sm"
                              className="gradient-lemon-soft text-white text-xs px-3 py-1">
                        <Link to="/#zamow">Zamów</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Potrzebujesz wyceny dla czegoś innego?
              </p>
              <Button asChild size="lg" className="gradient-lemon text-white hover:opacity-90">
                <Link to="/#zamow">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default Pricing;
