import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anna K.',
    location: 'Wrocław',
    text: 'Jestem bardzo zadowolona z usługi. Panowie przyjechali punktualnie, pracowali szybko i dokładnie. Kanapa wygląda jak nowa!',
    rating: 5,
  },
  {
    name: 'Piotr N.',
    location: 'Wrocław',
    text: 'Profesjonalne podejście do klienta. Sprzątanie mieszkania wykonane perfekcyjnie, wrócę na pewno.',
    rating: 5,
  },
  {
    name: 'Maria W.',
    location: 'Opole',
    text: 'Polecam serdecznie! Świetna komunikacja, uczciwa cena i doskonały efekt końcowy. Na pewno skorzystam ponownie.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            Opinie naszych klientów
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{t.text}"
                  </p>
                  <div className="pt-3 border-t border-lemon-200">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
