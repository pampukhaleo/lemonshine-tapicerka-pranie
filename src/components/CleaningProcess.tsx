import React from 'react';
import { Search, Droplets, Zap, Waves, Beaker, Wind, Fan } from 'lucide-react';

const CleaningProcess = () => {
  const steps = [
    {
      number: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Przegląd mebla",
      description: "Na początku dokładnie sprawdzamy rodzaj materiału, oceniamy stan tapicerki i lokalizujemy plamy. To pozwala dobrać najbezpieczniejsze i najskuteczniejsze środki czyszczące."
    },
    {
      number: 2,
      icon: <Droplets className="w-8 h-8" />,
      title: "Usuwanie plam nierozpuszczalnych w wodzie",
      description: "Zanim rozpoczniemy pranie właściwe, usuwamy najtrudniejsze plamy – np. tłuszcz, wosk, gumę czy zaschnięte resztki jedzenia – aby nie pozostawić po nich żadnego śladu."
    },
    {
      number: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Nanoszenie presprayu",
      description: "Dobieramy prespray odpowiedni do materiału i rodzaju zabrudzeń. Dzięki temu brud zostaje rozpuszczony i przygotowany do skutecznego wypłukania."
    },
    {
      number: 4,
      icon: <Waves className="w-8 h-8" />,
      title: "Ekstrakcja",
      description: "Za pomocą profesjonalnego ekstraktora dokładnie płuczemy materiał i usuwamy 90% zanieczyszczeń oraz resztek środków czyszczących."
    },
    {
      number: 5,
      icon: <Beaker className="w-8 h-8" />,
      title: "Neutralizacja chemii",
      description: "Stabilizujemy pH tkaniny i wypłukujemy pozostałości agresywnych środków, dzięki czemu materiał jest miękki, bezpieczny i ma przyjemny, świeży zapach."
    },
    {
      number: 6,
      icon: <Wind className="w-8 h-8" />,
      title: "Suszenie ekstraktorem",
      description: "Odciągamy jak najwięcej wilgoci z wnętrza mebla, aby skrócić czas schnięcia i zapobiec rozwojowi niepożądanych zapachów."
    },
    {
      number: 7,
      icon: <Fan className="w-8 h-8" />,
      title: "Suszenie wentylatorem (opcjonalnie)",
      description: "Na życzenie możemy całkowicie wysuszyć mebel, aby był gotowy do użytku od razu po czyszczeniu. Przy praniu materaca szczególnie zalecamy tę usługę - szybkie wysuszenie materiału pomaga uniknąć powstawania plam i nieprzyjemnych zapachów.",
      optional: true,
      price: "Koszt tej opcji to 30% ceny prania mebla."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Etapy Czyszczenia Tapicerki
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Poznaj nasz profesjonalny 7-etapowy proces prania tapicerki
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg border-l-4 md:border-l-8 ${
                  step.optional ? 'border-mint-500' : 'border-lemon-500'
                } transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl ${
                    step.optional ? 'bg-mint-500' : 'bg-lemon-500'
                  }`}>
                    {step.number}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className={`p-2 rounded-xl w-fit ${
                        step.optional ? 'bg-mint-100 text-mint-600' : 'bg-lemon-100 text-lemon-600'
                      }`}>
                        {step.icon}
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <h3 className="text-lg md:text-2xl font-heading font-bold text-foreground break-words">
                          {step.title}
                        </h3>
                        {step.optional && (
                          <span className="px-2 py-1 md:px-3 text-xs md:text-sm bg-mint-100 text-mint-700 rounded-full w-fit">
                            Opcjonalnie
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4 break-words">
                      {step.description}
                    </p>
                    
                    {step.price && (
                      <div className="p-3 md:p-4 bg-mint-50 rounded-xl border border-mint-200">
                        <p className="text-sm md:text-base text-mint-700 font-semibold break-words">
                          💰 {step.price}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-lemon-50 to-mint-50 rounded-3xl p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Profesjonalny proces = Najlepsze rezultaty
            </h3>
            <p className="text-muted-foreground">
              Każdy etap naszego procesu ma swoje uzasadnienie i przyczynia się do osiągnięcia najwyższej jakości czyszczenia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;