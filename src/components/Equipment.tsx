
import React from 'react';

const Equipment = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/4fbbfb78-218e-4a51-b560-77568a2dff7e.png)',
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
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-bold text-xl tracking-wider">KÄRCHER</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-bold text-xl tracking-wider">CHEMSPEC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
