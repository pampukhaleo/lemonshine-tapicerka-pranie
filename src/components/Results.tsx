
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Results = () => {
  const scrollToOrderForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const results = [
    {
      before: '/placeholder.svg',
      after: '/placeholder.svg',
      title: 'Kanapa 3-osobowa',
      description: 'Usunięcie plam z wina i odświeżenie koloru'
    },
    {
      before: '/placeholder.svg',
      after: '/placeholder.svg',
      title: 'Fotel skórzany',
      description: 'Czyszczenie i impregnacja skóry naturalnej'
    },
    {
      before: '/placeholder.svg',
      after: '/placeholder.svg',
      title: 'Narożnik tkaninowy',
      description: 'Głębokie pranie i usunięcie zapachów'
    }
  ];

  const testimonials = [
    {
      name: 'Anna Kowalska',
      rating: 5,
      text: 'Fantastyczna usługa! Moja kanapa wygląda jak nowa. Profesjonalne podejście i szybka realizacja.'
    },
    {
      name: 'Piotr Nowak',
      rating: 5,
      text: 'Polecam! Usunęli plamy, których się nie spodziewałem, że da się wyczyścić. Bardzo zadowolony.'
    },
    {
      name: 'Maria Wiśniewska',
      rating: 5,
      text: 'Szybko, skutecznie i w dobrej cenie. Na pewno skorzystam ponownie z ich usług.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Zobacz Efekt Prania Tapicerki
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nasze realizacje mówią same za siebie. Przekonaj się, jak wielką różnicę może zrobić profesjonalne pranie.
          </p>
        </div>

        {/* Before/After Results */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <Card key={index} className="border-0 shadow-lg hover-lift overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={result.before} alt="Przed" className="w-full h-48 object-cover" />
                  <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    PRZED
                  </div>
                </div>
                <div className="relative">
                  <img src={result.after} alt="Po" className="w-full h-48 object-cover" />
                  <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    PO
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {result.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {result.description}
                </p>
                <Button className="w-full gradient-lemon text-white hover:opacity-90" onClick={scrollToOrderForm}>
                  Zamów podobną usługę
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-lemon-50 to-mint-50 rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Opinie Naszych Klientów
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="gradient-fresh text-white hover:opacity-90" onClick={scrollToOrderForm}>
              Zamów pranie tapicerki
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
