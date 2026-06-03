import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
    { id: 1, before: "/before_after/9.jpg", after: "/before_after/10.jpg" },
    { id: 2, before: "/before_after/11.jpg", after: "/before_after/12.jpg" },
    { id: 3, before: "/before_after/13.jpg", after: "/before_after/14.jpg" },
    { id: 4, before: "/before_after/15.jpg", after: "/before_after/16.jpg" },
    { id: 5, before: "/before_after/17.jpg", after: "/before_after/18.jpg" },
    { id: 6, before: "/before_after/19.jpg", after: "/before_after/20.jpg" },
    { id: 7, before: "/before_after/21.jpg", after: "/before_after/22.jpg" },
    { id: 8, before: "/before_after/24.jpg", after: "/before_after/23.jpg" },
  ];


  return (
    <section id="realizacje" className="py-16 bg-background scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Efekty naszej pracy
          </h2>
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

      </div>
    </section>
  );
};

export default Results;
