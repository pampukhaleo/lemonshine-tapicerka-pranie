
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="lemonshine.png" alt="lemonshine logo" className="h-8 object-contain rounded-2xl"/>
              <span className="text-2xl font-heading font-bold">
                <span className="text-lemon-400">Lemon</span>shine
              </span>
            </div>
            <p className="text-muted-foreground">
              Profesjonalne pranie tapicerki w Opolu i okolicach. 
              Przywracamy świeżość Twoim meblom z gwarancją najwyższej jakości.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576970773440" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-lemon-600 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/lemonshine_pl/" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-lemon-600 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold">Nasze Usługi</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Pranie kanap</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Czyszczenie foteli</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Pranie dywanów</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Czyszczenie materacy</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Tapicerka samochodowa</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Usługi dla firm</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold">Szybkie Linki</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#oferta" className="hover:text-lemon-400 transition-colors">Oferta</a></li>
              <li><a href="#cennik" className="hover:text-lemon-400 transition-colors">Cennik</a></li>
              <li><a href="#blog" className="hover:text-lemon-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">O nas</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Realizacje</a></li>
              <li><a href="#" className="hover:text-lemon-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold">Kontakt</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-lemon-400 mt-0.5" />
                <div>
                  <a href="tel:+48662117886" className="font-medium text-background">+48 662 117 886</a>
                  <div className="text-sm">Poniedziałek - Piątek</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-lemon-400 mt-0.5" />
                <div>
                  <a href="mailto:kontakt.lemonshine@gmail.com" className="font-medium text-background">kontakt.lemonshine@gmail.com</a>
                  <div className="text-sm">Odpowiadamy w 24h</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-lemon-400 mt-0.5" />
                <div>
                  <div className="font-medium text-background">Opole i okolice</div>
                  <div className="text-sm">Promień 30 km</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-lemon-400 mt-0.5" />
                <div>
                  <div className="font-medium text-background">Pn-Pt: 8:00-20:00</div>
                  <div className="text-sm">Sb: 9:00-16:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-muted-foreground/20" />

        {/* SEO Text */}
        <div className="space-y-6 mb-12">
          <h4 className="text-lg font-heading font-semibold">
            Profesjonalne Pranie Tapicerki w Opolu - Lemonshine
          </h4>
          <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
            <p>
              <strong>Pranie tapicerki Opole</strong> - Lemonshine to wiodąca firma specjalizująca się w 
              profesjonalnym praniu tapicerki, kanap, foteli i dywanów w Opolu i okolicach. Nasze usługi 
              prania tapicerki obejmują wszystkie rodzaje materiałów - od delikatnych tkanin po skórę naturalną.
            </p>
            <p>
              <strong>Pranie kanapy</strong> wykonujemy przy użyciu najnowocześniejszego sprzętu i bezpiecznych 
              środków czyszczących. Specializujemy się w usuwaniu trudnych plam, neutralizacji zapachów oraz 
              przywracaniu świeżości tapicerce. Pranie kanapy w Opolu nigdy nie było tak skuteczne i bezpieczne.
            </p>
            <p>
              Oferujemy kompleksowe usługi czyszczenia tapicerki dla klientów indywidualnych oraz firm. 
              Nasze pranie tapicerki gwarantuje najwyższą jakość wykonania przy konkurencyjnych cenach.
              Skontaktuj się z nami już dziś i przekonaj się, dlaczego jesteśmy liderem w branży 
              prania kanap w Opolu.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-muted-foreground/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <div>
            © 2025 Lemonshine. Wszystkie prawa zastrzeże.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-lemon-400 transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-lemon-400 transition-colors">Regulamin</a>
            <a href="#" className="hover:text-lemon-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
