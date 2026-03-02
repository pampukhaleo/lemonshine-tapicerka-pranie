import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

const faqs = [
  {
    question: 'Jak często warto myć okna?',
    answer: 'Zalecamy mycie okien co 2–3 miesiące. W przypadku mieszkań przy ruchliwych ulicach lub w pobliżu budowy — nawet częściej.',
  },
  {
    question: 'Czy myjecie okna na wysokości?',
    answer: 'Tak, obsługujemy mieszkania i domy na każdym piętrze. Mamy odpowiedni sprzęt do pracy na wysokości.',
  },
  {
    question: 'Co wchodzi w cenę mycia jednego okna?',
    answer: 'W cenę wliczone jest mycie obu stron szyby, ramy okiennej oraz parapetu wewnętrznego i zewnętrznego.',
  },
  {
    question: 'Ile czasu trwa mycie okien w mieszkaniu?',
    answer: 'Dla standardowego mieszkania (5–8 okien) mycie trwa zwykle 1–2 godziny.',
  },
  {
    question: 'Czy używacie swoich środków?',
    answer: 'Tak, przyjeżdżamy z pełnym wyposażeniem — profesjonalne środki do mycia szyb, ściągaczki i ściereczki z mikrofibry.',
  },
  {
    question: 'Czy myjecie też rolety i żaluzje?',
    answer: 'Tak, oferujemy dodatkową usługę czyszczenia rolet i żaluzji. Szczegóły i cenę ustalamy indywidualnie.',
  },
];

const WindowFAQ = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Często Zadawane Pytania
            </h2>
            <p className="text-xl text-muted-foreground">
              Znajdź odpowiedzi na najczęściej zadawane pytania o myciu okien
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-lemon-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-mint-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center space-y-6">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h3>
            <p className="text-muted-foreground">
              Skontaktuj się z nami bezpośrednio - chętnie udzielimy szczegółowych informacji
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleOrderClick} size="lg" className="hover:opacity-90">
                <MessageCircle className="w-5 h-5 mr-2" />
                Zadaj pytanie
              </Button>
              <Button size="lg" variant="outline" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
                <a href="tel:+48662117886" onClick={() => trackPhoneClick('faq_window')}>Zadzwoń: +48 662 117 886</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowFAQ;
