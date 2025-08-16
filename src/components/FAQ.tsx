
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FAQ = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'Ile schnie tapicerka po praniu?',
      answer: 'Czas schnięcia zależy głównie od rodzaju materiału i warunków w pomieszczeniu. Średnio trwa to od 4 do 12 godzin.\n' +
        'Lepsza wentylacja, ogrzewanie lub wentylator mogą ten proces przyspieszyć.\n' +
        'Dla bezpieczeństwa i czystości, zalecamy nie używać mebla do całkowitego wyschnięcia.'
    },
    {
      question: 'Czy każdą tapicerkę można prać na mokro?',
      answer: 'Większość tapicerek nadaje się do czyszczenia ekstrakcyjnego. Wyjątki to np. antyki, meble z egzotycznym wypełnieniem lub delikatną konstrukcją. Przed praniem sprawdzamy materiał i dobieramy bezpieczną metodę.'
    },
    {
      question: 'Czy pranie tapicerki usuwa nieprzyjemny zapach?',
      answer: 'Tak. W większości przypadków skutecznie eliminujemy nieprzyjemne zapachy, takie jak pot, jedzenie, zwierzęta czy codzienne użytkowanie. Używamy profesjonalnego neutralizatora, który nie maskuje, lecz usuwa źródło zapachu.\n' +
        'Jedynie bardzo silne, długo utrzymujące się zapachy (np. dym papierosowy, mocz, pleśń) mogą wymagać kilku sesji lub nie dać się całkowicie usunąć.'
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Często Zadawane Pytania
            </h2>
            <p className="text-xl text-muted-foreground">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące prania tapicerki
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-lemon-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-mint-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center space-y-6">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h3>
            <p className="text-muted-foreground">
              Skontaktuj się z nami bezpośrednio - chętnie udzielimy szczegółowych informacji
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleOrderClick} size="lg" className="gradient-lemon text-white hover:opacity-90">
                <MessageCircle className="w-5 h-5 mr-2" />
                Zadaj pytanie
              </Button>
              <Button size="lg" variant="outline" className="border-mint-500 text-mint-500 hover:bg-mint-50">
                Zadzwoń: <a href="tel:+48662117886">+48 662 117 886</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
