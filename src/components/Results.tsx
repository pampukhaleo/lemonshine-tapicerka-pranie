import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const Results = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const results = [
    { id: 1, before: "before_after/9.jpg", after: "before_after/10.jpg" },
    { id: 2, before: "before_after/11.jpg", after: "before_after/12.jpg" },
    { id: 3, before: "before_after/13.jpg", after: "before_after/14.jpg" },
    { id: 4, before: "before_after/15.jpg", after: "before_after/16.jpg" },
    { id: 5, before: "before_after/17.jpg", after: "before_after/18.jpg" },
    { id: 6, before: "before_after/19.jpg", after: "before_after/20.jpg" },
    { id: 7, before: "before_after/21.jpg", after: "before_after/22.jpg" },
    { id: 8, before: "before_after/24.jpg", after: "before_after/23.jpg" },
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
    <section id="realizacje" className="py-16 bg-background scroll-mt-28">
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
              <ReactBeforeSliderComponent
                firstImage={ { imageUrl: r.before, alt: 'Przed czyszczeniem' } }
                secondImage={ { imageUrl: r.after, alt: 'Po czyszczeniu' } }
                currentPercentPosition={ 50 }       // стартовая позиция (0..100)
                delimiterColor="#ffffff"          // цвет вертикальной линии (опц.)
                className="w-full"                // тянем по ширине карточки
              />
            </Card>
          )) }
        </div>

        {/* Call to Action */ }
        <div className="text-center mb-16">
          <Button onClick={ handleOrderClick } size="lg"
                  className="hover:opacity-90 hover-lift">
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
              <div className="text-3xl font-bold text-mint-600 mb-2">500+</div>
              <div className="text-muted-foreground">Wykonanych usług</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint-600 mb-2">98%</div>
              <div className="text-muted-foreground">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint-600 mb-2">24h</div>
              <div className="text-muted-foreground">Czas realizacji</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint-600 mb-2">5★</div>
              <div className="text-muted-foreground">Średnia ocen Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
