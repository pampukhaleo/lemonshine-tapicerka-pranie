import React from 'react';
import { Button } from '@/components/ui/button';
import biurImg from '@/assets/sprzatanie-biur.webp.asset.json';
import remontImg from '@/assets/sprzatanie-po-remoncie.webp.asset.json';
import generalneImg from '@/assets/sprzatanie-generalne.webp.asset.json';
import regularnaImg from '@/assets/regularna-opieka.webp.asset.json';

const SprzataniaServices = () => {
  const handleScrollToOrder = () => {
    const el = document.getElementById('zamow');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const small = [
    {
      title: 'Regularna opieka nad domem',
      description:
        'Więcej czasu, mniej stresu. Dom, do którego chce się wracać - dbamy o to za Ciebie.',
      img: '/cleaning/sprzatanie_szafek_kuchennych.jpg',
      cta: 'Zapytaj o ofertę',
    },
    {
      title: 'Sprzątanie generalne',
      description:
        'Rozkręcamy piekarnik, odsuwamy lodówkę, myjemy to, czego inni nie dotykają.',
      img: '/cleaning/mycie_piekarnika.jpg',
      cta: 'Zapytaj o ofertę',
    },
    {
      title: 'Sprzątanie po remoncie',
      description:
        'Pył z betonu, resztki farby, klej, folia - usuwamy wszystko. Oddajemy lokal gotowy do użytku.',
      img: '/cleaning/mycie_prysznicuwanny.jpg',
      cta: 'Zapytaj o ofertę',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Usługi sprzątania Wrocław
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Big card */}
          <div className="bg-lemon-50 rounded-2xl overflow-hidden border border-border flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/cleaning/sprzatanie_balkonu.jpg"
                alt="Sprzątanie biur i lokali we Wrocławiu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                Sprzątanie biur i lokali
              </h3>
              <p className="text-muted-foreground mb-6 flex-1">
                Stały grafik, stały zespół, stały standard. Przychodzimy, sprzątamy,
                znikamy - Ty skupiasz się na biznesie.
              </p>
              <Button
                onClick={handleScrollToOrder}
                className="self-start bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold"
              >
                Zapytaj o ofertę dla firmy
              </Button>
            </div>
          </div>

          {/* Small cards stack */}
          <div className="flex flex-col gap-6">
            {small.map((s, i) => (
              <div
                key={i}
                className="bg-lemon-50 rounded-2xl overflow-hidden border border-border flex flex-col sm:flex-row-reverse"
              >
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden flex-shrink-0">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {s.description}
                  </p>
                  <Button
                    onClick={handleScrollToOrder}
                    size="sm"
                    className="self-start bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold"
                  >
                    {s.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SprzataniaServices;
