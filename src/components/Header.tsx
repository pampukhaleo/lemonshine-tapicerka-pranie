
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-lemon-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2">
            <img src="lemonshine.png" alt="lemonshine logo" className="h-8 mx-auto object-contain rounded-2xl"/>
            <span className="text-2xl font-heading font-bold text-foreground">
              Lemon<span className="text-mint-500">shine</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#oferta" className="text-foreground hover:text-mint-500 transition-colors font-medium">
              Oferta
            </a>
            <Link to="/cennik" className="text-foreground hover:text-mint-500 transition-colors font-medium">
              Cennik
            </Link>
            <Link to="/blog" className="text-foreground hover:text-mint-500 transition-colors font-medium">
              Blog
            </Link>
            <a href="#kontakt" className="text-foreground hover:text-mint-500 transition-colors font-medium">
              Kontakt
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-mint-500 text-mint-500 hover:bg-mint-50">
              <Phone className="w-4 h-4 mr-2"/>
              <a href="tel:+48662117886">+48 662 117 886</a>
            </Button>
            <Button asChild className="gradient-lemon text-white hover:opacity-90">
              <Link to="/#zamow">Zamów Nasze Usługi</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-lemon-200">
            <nav className="flex flex-col space-y-4">
              <a href="#oferta" className="text-foreground hover:text-mint-500 transition-colors font-medium">
                Oferta
              </a>
              <Link to="/cennik" className="text-foreground hover:text-mint-500 transition-colors font-medium">
                Cennik
              </Link>
              <a href="#blog" className="text-foreground hover:text-mint-500 transition-colors font-medium">
                Blog
              </a>
              <a href="#kontakt" className="text-foreground hover:text-mint-500 transition-colors font-medium">
                Kontakt
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-mint-500 text-mint-500 hover:bg-mint-50">
                  <Phone className="w-4 h-4 mr-2" />
                  +48 123 456 789
                </Button>
                <Button asChild className="gradient-lemon text-white hover:opacity-90">
                  <Link to="/#zamow">Zamów Nasze Usługi</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
