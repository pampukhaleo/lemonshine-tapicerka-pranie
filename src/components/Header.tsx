
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
            <img src="/104933_LemonShine_Flat_HP_R_01.png" alt="lemonshine logo" className="h-8 mx-auto object-contain rounded-2xl"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#oferta" className="text-foreground hover:text-mint-600 transition-colors font-medium">
              Oferta
            </Link>
            <Link to="/cennik" className="text-foreground hover:text-mint-600 transition-colors font-medium">
              Cennik
            </Link>
            <Link to="/blog" className="text-foreground hover:text-mint-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/#zamow" className="text-foreground hover:text-mint-600 transition-colors font-medium">
              Kontakt
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
              <a href="tel:+48662117886">
                <Phone className="w-4 h-4 mr-2"/>
                +48 662 117 886
              </a>
            </Button>
            <Button asChild className="hover:opacity-90">
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
              <Link to="/#oferta" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Oferta
              </Link>
              <Link to="/cennik" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Cennik
              </Link>
              <Link to="/blog" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Blog
              </Link>
              <Link to="/#zamow" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Kontakt
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
                  <a href="tel:+48662117886">
                    <Phone className="w-4 h-4 mr-2" />
                    +48 662 117 886
                  </a>
                </Button>
                <Button asChild className="hover:opacity-90">
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
