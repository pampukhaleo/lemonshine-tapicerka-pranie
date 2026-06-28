import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

const KontaktyInfo = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <a
            href="tel:+48662117886"
            onClick={() => trackPhoneClick('window_kontakty')}
            className="bg-lemon-50 rounded-xl p-6 text-center hover-lift transition"
          >
            <Phone className="w-8 h-8 mx-auto mb-3 text-mint-600" />
            <h3 className="font-heading font-bold text-foreground mb-1">Telefon</h3>
            <p className="text-sm text-muted-foreground">+48 662 117 886</p>
          </a>

          <div className="bg-lemon-50 rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-mint-600" />
            <h3 className="font-heading font-bold text-foreground mb-1">Godziny pracy</h3>
            <p className="text-sm text-muted-foreground">Pn–Nd: 8:00–20:00</p>
          </div>

          <div className="bg-lemon-50 rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-mint-600" />
            <h3 className="font-heading font-bold text-foreground mb-1">Obszar działania</h3>
            <p className="text-sm text-muted-foreground">Wrocław (20 km)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontaktyInfo;
