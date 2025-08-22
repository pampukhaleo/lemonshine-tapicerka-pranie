
import React from 'react';

const Equipment = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: 'url(IMG_6664.JPG)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Profesjonalna chemia i sprzęt od sprawdzonych producentów
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Stosujemy wyłącznie skuteczne i bezpieczne środki czyszczące oraz sprzęt klasy premium, 
            używany przez profesjonalistów w branży prania tapicerki.
          </p>

          {/* Brand logos */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <img 
                src="karcher-logo.png" 
                alt="Kärcher"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <img 
                src="chemspec-logo.png" 
                alt="ChemSpec"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
