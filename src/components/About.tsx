import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, SprayCan, Waves, Fan, ShieldCheck, Droplets, Wind, Bug, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const problems = [
    {
      icon: Droplets,
      title: 'Widoczne plamy',
      description: 'Plamy, których nie da się usunąć zwykłym odkurzaniem ani domowymi środkami'
    },
    {
      icon: Wind,
      title: 'Nieprzyjemne zapachy',
      description: 'Tapicerka chłonie zapachy zwierząt, dymu lub wilgoci, nawet po sprzątaniu'
    },
    {
      icon: Bug,
      title: 'Kurz i alergeny',
      description: 'W tkaninach gromadzi się kurz i alergeny, niewidoczne na pierwszy rzut oka'
    },
    {
      icon: XCircle,
      title: 'Brak efektu',
      description: 'Samodzielne pranie nie usuwa zabrudzeń, a tapicerka szybko wraca do poprzedniego stanu'
    }
  ];

  const steps = [
    { icon: Search, label: 'Przegląd mebla', color: 'bg-lemon-400 text-foreground' },
    { icon: SprayCan, label: 'Nanoszenie presprayu', color: 'bg-lemon-400 text-foreground' },
    { icon: Waves, label: 'Ekstrakcja', color: 'bg-lemon-400 text-foreground' },
    { icon: Fan, label: 'Suszenie', color: 'bg-mint-500 text-card', badge: 'Opcjonalnie' },
    { icon: ShieldCheck, label: 'Impregnacja', color: 'bg-mint-500 text-card', badge: 'Opcjonalnie' },
  ];

  return (
    <section id="onas" className="py-16 bg-lemon-50/50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Najczęstsze problemy z tapicerką w domu
          </h2>
          <p className="text-xl text-muted-foreground mx-auto max-w-[48rem] text-balance leading-snug">
            Codzienne użytkowanie sprawia, że tapicerka traci świeżość, chłonie zapachy i z czasem przestaje wyglądać tak, jak powinna.
          </p>
        </div>

        {/* Mobile: list layout; Desktop: grid cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {problems.map((problem, index) => (
            <Card key={index} className="h-full border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm">
              <CardContent className="h-full p-6">
                <div className="flex h-full flex-col items-center text-center">
                  <div className="w-16 h-16 mb-2 rounded-full bg-mint-100 flex items-center justify-center shrink-0">
                    <problem.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="mt-2 text-xl font-heading font-semibold text-foreground leading-7 min-h-14 overflow-hidden">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-6 min-h-[72px] overflow-hidden">
                    {problem.description}
                  </p>
                  <div className="mt-auto" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:hidden bg-card rounded-2xl shadow-lg overflow-hidden">
          {problems.map((problem, index) => (
            <div key={index} className={`flex items-start gap-4 p-4 ${index < problems.length - 1 ? 'border-b border-border' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center shrink-0">
                <problem.icon className="w-6 h-6 text-mint-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-heading font-semibold text-foreground">{problem.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-snug">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nasze rozwiązanie */}
        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Nasze rozwiązanie
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferujemy profesjonalne pranie tapicerki meblowej, dopasowane do rodzaju tkaniny i stopnia zabrudzeń.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Usuwamy plamy, zapachy oraz alergeny, bez ryzyka uszkodzeń, gwarantując efekt świeżości na tapicerce. Dzięki odpowiedniej technologii prania meble szybko schną i wracają do codziennego użytkowania.
              </p>
            </div>

            {/* Steps timeline */}
            <div className="flex flex-col items-start gap-0 lg:pl-24">
              {steps.map((step, index) => {
                const IconComp = step.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComp className="w-7 h-7" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground font-semibold text-lg">{step.label}</span>
                        {step.badge && (
                          <Badge variant="outline" className="text-xs font-medium border-border text-muted-foreground">
                            {step.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-0.5 h-6 ml-7 ${index < 2 ? 'bg-lemon-400' : 'bg-mint-500'}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
