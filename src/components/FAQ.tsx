
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Ile czasu trwa pranie kanapy?',
      answer: 'Standardowe pranie kanapy trwa około 2-3 godzin, w zależności od rozmiaru i stopnia zabrudzenia. Czas wysychania to około 4-6 godzin przy odpowiedniej wentylacji.'
    },
    {
      question: 'Czy używane środki są bezpieczne dla dzieci i zwierząt?',
      answer: 'Tak, używamy wyłącznie ekologicznych środków czyszczących, które są całkowicie bezpieczne dla dzieci, zwierząt domowych i alergików. Wszystkie produkty posiadają odpowiednie certyfikaty.'
    },
    {
      question: 'Jak długo utrzymuje się efekt czyszczenia?',
      answer: 'Przy normalnym użytkowaniu efekt profesjonalnego czyszczenia utrzymuje się 6-12 miesięcy. Rekomendujemy regularne odkurzanie i natychmiastowe usuwanie plam, aby przedłużyć świeżość tapicerki.'
    },
    {
      question: 'Czy przyjezdżacie poza Warszawę?',
      answer: 'Tak, obsługujemy Warszawę i okolice w promieniu 30 km. Za dojazd poza centrum Warszawy może być naliczana dodatkowa opłata, o której informujemy przed wizytą.'
    },
    {
      question: 'Co jeśli plama nie zejdzie całkowicie?',
      answer: 'Przed rozpoczęciem pracy oceniamy możliwość usunięcia plam. W przypadku starych lub głęboko wsiąkniętych plam informujemy o realnych oczekiwaniach. Oferujemy gwarancję satysfakcji - jeśli nie jesteście zadowoleni, powtarzamy usługę bezpłatnie.'
    },
    {
      question: 'Jak przygotować mieszkanie przed przyjazdem ekipy?',
      answer: 'Wystarczy odsunąć drobne przedmioty z tapicerki i zapewnić dostęp do gniazdka elektrycznego. Możecie pozostać w mieszkaniu podczas czyszczenia - nie używamy szkodliwych chemikaliów.'
    },
    {
      question: 'Czy oferujecie gwarancję na wykonane usługi?',
      answer: 'Tak, oferujemy 30-dniową gwarancję satysfakcji. Jeśli w tym czasie pojawią się te same plamy, powtórzymy czyszczenie bezpłatnie. Dodatkowo udzielamy porad dotyczących pielęgnacji tapicerki.'
    },
    {
      question: 'Jakie formy płatności akceptujecie?',
      answer: 'Akceptujemy płatności gotówką po wykonaniu usługi oraz przelewy bankowe. Dla firm wystawiamy faktury VAT. Płatność kartą jest możliwa na życzenie klienta.'
    }
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
              <Button size="lg" className="gradient-lemon text-white hover:opacity-90">
                <MessageCircle className="w-5 h-5 mr-2" />
                Zadaj pytanie
              </Button>
              <Button size="lg" variant="outline" className="border-mint-500 text-mint-500 hover:bg-mint-50">
                Zadzwoń: +48 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
