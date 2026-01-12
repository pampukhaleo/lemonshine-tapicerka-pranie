
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackPhoneClick } from '@/lib/analytics';

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
            <div className="relative group">
              <span className="text-foreground hover:text-mint-600 transition-colors font-medium cursor-pointer flex items-center gap-1">
                Usługi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/klient/" className="block px-4 py-3 hover:bg-muted transition-colors rounded-t-lg">
                  Dla klientów
                </Link>
                <Link to="/biznes/" className="block px-4 py-3 hover:bg-muted transition-colors">
                  Dla firm (B2B)
                </Link>
                <Link to="/outsourcing/" className="block px-4 py-3 hover:bg-muted transition-colors rounded-b-lg">
                  Outsourcing
                </Link>
              </div>
            </div>
            <Link to="/cennik/" className="text-foreground hover:text-mint-600 transition-colors font-medium">
              Cennik
            </Link>
            <Link to="/blog/" className="text-foreground hover:text-mint-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/klient/#zamow" className="text-foreground hover:text-mint-600 transition-colors font-medium">
              Kontakt
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
              <a href="tel:+48662117886" onClick={() => trackPhoneClick('header')}>
                <Phone className="w-4 h-4 mr-2"/>
                +48 662 117 886
              </a>
            </Button>
            <Button asChild className="hover:opacity-90">
              <Link to="/klient/#zamow">Zamów Nasze Usługi</Link>
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
              <Link to="/klient/" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Dla klientów
              </Link>
              <Link to="/biznes/" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Dla firm (B2B)
              </Link>
              <Link to="/outsourcing/" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Outsourcing
              </Link>
              <Link to="/cennik/" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Cennik
              </Link>
              <Link to="/blog/" className="text-foreground hover:text-mint-600 transition-colors font-medium">
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
                  <a href="tel:+48662117886" onClick={() => trackPhoneClick('header_mobile')}>
                    <Phone className="w-4 h-4 mr-2" />
                    +48 662 117 886
                  </a>
                </Button>
                <Button asChild className="hover:opacity-90">
                  <Link to="/klient/#zamow">Zamów Nasze Usługi</Link>
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
