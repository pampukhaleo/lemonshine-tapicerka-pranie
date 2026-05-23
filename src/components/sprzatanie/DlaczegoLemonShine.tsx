import React from 'react';

const DlaczegoLemonShine = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Dlaczego LemonShine?
            </h2>
            <p className="text-foreground mb-4 font-medium">
              Czyścimy tam, gdzie inni nie zaglądają.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Odpływ prysznica, wnętrze piekarnika, filtr okapu, przestrzeń za
              toaletą. Nie dlatego, że tak wypada - ale dlatego, że tam właśnie
              jest brud. Efekt czuć od razu: czystsze powietrze, brak zapachów,
              powierzchnie, które naprawdę wyglądają jak nowe.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-muted">
            <img
              src="/IMG_6660.JPG"
              alt="Pracownik LemonShine"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DlaczegoLemonShine;
