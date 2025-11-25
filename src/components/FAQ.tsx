import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

const FAQ = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById('zamow');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'Jak często warto prać tapicerkę meblową?',
      answer: 'Zalecamy pranie co 6–12 miesięcy, w zależności od intensywności użytkowania mebla. Regularne pranie pozwala utrzymać tkaninę w dobrym stanie i zapobiega gromadzeniu się alergenów.'
    },
    {
      question: 'Czy metoda ekstrakcyjna naprawdę działa?',
      answer: 'Tak! Pranie ekstrakcyjne to jedna z najskuteczniejszych metod – usuwa brud, kurz, alergeny i większość plam, docierając głęboko w strukturę materiału.'
    },
    {
      question: 'Od czego zależy cena czyszczenia?',
      answer: 'Koszt usługi zależy od rodzaju mebla, jego wielkości, stopnia zabrudzenia oraz rodzaju tkaniny. Dodatkowe opcje, takie pełne suszenie, czy usuwanie gum, kleju, cieżkich plam również wpływają na cenę.'
    },
    {
      question: 'Ile czasu trwa pranie mebli?',
      answer: 'Czas zależy od liczby i wielkości mebli, ale zazwyczaj jedna kanapa jest gotowa w ciągu 1–2 godzin.'
    },
    {
      question: 'Czy używane środki są bezpieczne dla dzieci i zwierząt?',
      answer: 'Tak, korzystamy z certyfikowanej, bezpiecznej chemii, która jest delikatna dla materiału, a jednocześnie skutecznie usuwa zabrudzenia. Po wyschnięciu meble są w pełni bezpieczne.'
    }
  ];

  return (
    <section className="bg-background">
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

          {/* Contact CTA */}
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
