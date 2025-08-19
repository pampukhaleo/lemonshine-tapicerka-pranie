
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={`${import.meta.env.BASE_URL}lemonshine.png`} alt="lemonshine logo" className="h-8 object-contain rounded-2xl"/>
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
              <a href="https://www.tiktok.com/@lemonshine_pl" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-lemon-600 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Social media */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold">Znajdziesz nas na:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="https://www.facebook.com/profile.php?id=61576970773440" className="hover:text-lemon-400 transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/lemonshine_pl/" className="hover:text-lemon-400 transition-colors">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@lemonshine_pl" className="hover:text-lemon-400 transition-colors">TikTok</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold">Szybkie Linki</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/#oferta" className="hover:text-lemon-400 transition-colors">Oferta</Link></li>
              <li><Link to="/cennik" className="hover:text-lemon-400 transition-colors">Cennik</Link></li>
              <li><Link to="/blog" className="hover:text-lemon-400 transition-colors">Blog</Link></li>
              <li><Link to="/#onas" className="hover:text-lemon-400 transition-colors">O nas</Link></li>
              <li><Link to="/#realizacje" className="hover:text-lemon-400 transition-colors">Realizacje</Link></li>
              <li><Link to="/#zamow" className="hover:text-lemon-400 transition-colors">Kontakt</Link></li>
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
