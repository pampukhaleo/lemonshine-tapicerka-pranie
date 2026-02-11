import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anna Kowalska',
    city: 'Opole',
    text: 'Jestem bardzo zadowolona z usługi. Panowie przyjechali punktualnie, pracowali szybko i dokładnie. Kanapa wygląda jak nowa!',
    rating: 5,
  },
  {
    name: 'Piotr Nowak',
    city: 'Opole',
    text: 'Profesjonalne podejście do klienta. Sprzątanie mieszkania wykonane perfekcyjnie, wrócę na pewno.',
    rating: 5,
  },
  {
    name: 'Maria Wiśniewska',
    city: 'Brzeg',
    text: 'Polecam serdecznie! Świetna komunikacja, uczciwa cena i doskonały efekt końcowy. Na pewno skorzystam ponownie.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Opinie naszych klientów
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-lemon-500 text-lemon-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{t.text}"
                </p>
                <div className="text-sm font-semibold text-foreground">
                  {t.name}
                  <span className="text-muted-foreground font-normal"> · {t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
