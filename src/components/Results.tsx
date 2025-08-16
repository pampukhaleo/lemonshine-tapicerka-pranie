
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import BeforeAfter from "@/components/BeforeAfter";

const Results = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mock data for before/after results
  const results = [
    { id: 1, before: "before_after/1.jpg", after: "before_after/1.jpg" },
    { id: 2, before: "before_after/2.jpg", after: "before_after/2.jpg" },
    { id: 3, before: "before_after/3.jpg", after: "before_after/3.jpg" },
    { id: 4, before: "before_after/4.png", after: "before_after/4.png" },
    { id: 5, before: "before_after/5.png", after: "before_after/5.png" },
    { id: 6, before: "before_after/6.png", after: "before_after/6.png" },
    { id: 7, before: "before_after/7.jpeg", after: "before_after/7.jpeg" },
    { id: 8, before: "before_after/8.png", after: "before_after/8.png" },
  ];

  const testimonials = [
    {
      name: 'Anna Kowalska',
      location: 'Opole, Centrum',
      text: 'Niesamowity efekt! Kanapa wygląda jak nowa. Profesjonalna obsługa i terminowość na najwyższym poziomie.',
      rating: 5
    },
    {
      name: 'Piotr Nowak',
      location: 'Opole, Zakrzów',
      text: 'Polecam! Trudne plamy zniknęły bez śladu. Szybko, profesjonalnie i w dobrej cenie.',
      rating: 5
    },
    {
      name: 'Maria Wiśniewska',
      location: 'Brzeg',
      text: 'Fantastyczny serwis! Dywan po czyszczeniu pachnie świeżością. Na pewno będę korzystać ponownie.',
      rating: 5
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
            Nasze realizacje mówią same za siebie. Każdy projekt to transformacja Twoich mebli.
          </p>
        </div>

        {/* Before/After Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          { results.map((r) => (
            <Card key={ r.id } className="border-0 shadow-lg hover-lift overflow-hidden bg-white p-0">
              <BeforeAfter
                before={ r.before }
                after={ r.after }
                altBefore="Przed czyszczeniem"
                altAfter="Po czyszczeniu"
                initial={ 50 }
              />
            </Card>
          )) }
        </div>

        {/* Call to Action */ }
        <div className="text-center mb-16">
          <Button onClick={ handleOrderClick } size="lg"
                  className="gradient-lemon text-white hover:opacity-90 hover-lift">
            Zamów pranie dla swojej tapicerki
            <ArrowRight className="w-5 h-5 ml-2"/>
          </Button>
        </div>

        {/* Testimonials */ }
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground">
            Opinie naszych klientów
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-3 border-t border-lemon-200">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-lemon-100 to-mint-100 rounded-3xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-mint-500 mb-2">500+</div>
              <div className="text-muted-foreground">Wykonanych usług</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint-500 mb-2">98%</div>
              <div className="text-muted-foreground">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint-500 mb-2">24h</div>
              <div className="text-muted-foreground">Czas realizacji</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint-500 mb-2">5★</div>
              <div className="text-muted-foreground">Średnia ocen Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
