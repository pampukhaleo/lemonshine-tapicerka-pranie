import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

const faqs = [
  {
    question: 'Czy potrzebuję mieć własny sprzęt lub chemię?',
    answer: 'Nie, przyjeżdżamy z własnym profesjonalnym sprzętem oraz skutecznymi środkami do mycia szyb i ram.',
  },
  {
    question: 'Czy myjecie okna z obu stron?',
    answer: 'Tak, myjemy okna z obu stron, pod warunkiem że mamy bezpieczny dostęp do zewnętrznej części szyby lub okno otwiera się w sposób umożliwiający jej dokładne umycie.',
  },
  {
    question: 'Czy usuwacie zabrudzenia znajdujące się wewnątrz okna oraz na ramach?',
    answer: 'Tak, czyścimy nie tylko powierzchnię szyb, ale również ramy, uszczelki oraz trudno dostępne miejsca wokół okna, zapewniając kompleksowy efekt.',
  },
  {
    question: 'Jakie są dostępne formy płatności?',
    answer: 'Akceptujemy płatność gotówką, przelewem, BLIK-iem oraz wystawiamy fakturę na życzenie klienta.',
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
