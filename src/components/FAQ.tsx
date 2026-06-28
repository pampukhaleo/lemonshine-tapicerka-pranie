import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface FAQProps {
  className?: string;
}

const FAQ = ({ className }: FAQProps) => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'Jak długo trwa sprzątanie mieszkania?',
      answer: 'Czas sprzątania zależy od metrażu i stopnia zabrudzenia. Zazwyczaj trwa od 2 do 4 godzin.'
    },
    {
      question: 'Czy muszę być w mieszkaniu podczas sprzątania?',
      answer: 'Nie, nie ma takiej potrzeby. Wiele osób przekazuje nam klucze lub udostępnia mieszkanie pod swoją nieobecność.'
    },
    {
      question: 'Czy muszę mieć własny sprzęt i chemię?',
      answer: 'Nie, przyjeżdżamy z własnym sprzętem oraz profesjonalnymi środkami czystości.'
    },
    {
      question: 'Jak wygląda płatność za usługę?',
      answer: 'Płatność odbywa się po wykonaniu usługi gotówką, blikiem, lub przelewem.'
    },
    {
      question: 'Jak mogę zamówić sprzątanie?',
      answer: 'Wystarczy skontaktować się z nami telefonicznie lub przez formularz na stronie.'
    },
    {
      question: 'Czy sprzątacie w weekendy lub wieczorami?',
      answer: 'Tak, oferujemy elastyczne terminy, również w weekendy i po godzinach pracy.'
    }
  ];

  return (
    <section className={cn("py-20", className || "bg-background")}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Często Zadawane Pytania
            </h2>
            <p className="text-xl text-muted-foreground">
              Znajdź odpowiedzi na najczęściej zadawane pytania
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
                <a href="tel:+48662117886" onClick={() => trackPhoneClick('faq')}>Zadzwoń: +48 662 117 886</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
