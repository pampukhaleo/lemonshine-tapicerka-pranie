
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Home, Building2, Handshake, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackPhoneClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export type HeaderVariant = 'home' | 'klient' | 'biznes' | 'outsourcing';

interface HeaderProps {
  variant?: HeaderVariant;
}

const Header = ({ variant = 'home' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  // Navigation config for each variant
  const navConfig = {
    home: [],
    klient: [
      { label: 'Cennik', to: '/cennik/' },
      { label: 'Blog', to: '/blog/' },
      { label: 'Kontakt', to: '/klient/#zamow' }
    ],
    biznes: [
      { label: 'Oferta', to: '/biznes/#uslugi' },
      { label: 'Blog', to: '/blog/' },
      { label: 'Kontakt', to: '/biznes/#zamow' }
    ],
    outsourcing: [
      { label: 'Jak to działa', to: '/outsourcing/#jak-to-dziala' },
      { label: 'Korzyści', to: '/outsourcing/#korzysci' },
      { label: 'Kontakt', to: '/outsourcing/#zamow' }
    ]
  };

  // CTA config for each variant
  const ctaConfig = {
    home: null,
    klient: { text: 'Zamów usługę', to: '/klient/#zamow' },
    biznes: { text: 'Zamów wycenę', to: '/biznes/#zamow' },
    outsourcing: { text: 'Zostań partnerem', to: '/outsourcing/#zamow' }
  };

  // Client type selector items
  const clientTypes = [
    { id: 'klient', label: 'Dla domu', icon: Home, to: '/klient/' },
    { id: 'biznes', label: 'Dla firm', icon: Building2, to: '/biznes/' },
    { id: 'outsourcing', label: 'Współpraca', icon: Handshake, to: '/outsourcing/' }
  ];

  const currentNav = navConfig[variant];
  const currentCta = ctaConfig[variant];

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
            {/* Kim jesteś? dropdown - always visible */}
            <div className="relative group">
              <span className="text-foreground hover:text-mint-600 transition-colors font-medium cursor-pointer flex items-center gap-1">
                Kim jesteś?
                <ChevronDown className="w-4 h-4" />
              </span>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {clientTypes.map((type) => {
                  const IconComponent = type.icon;
                  const isActive = variant === type.id;
                  return (
                    <Link
                      key={type.id}
                      to={type.to}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg",
                        isActive && "bg-lemon-100 font-semibold"
                      )}
                    >
                      <IconComponent className={cn(
                        "w-5 h-5",
                        isActive ? "text-lemon-600" : "text-muted-foreground"
                      )} />
                      <span>{type.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Variant-specific navigation */}
            {currentNav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-foreground hover:text-mint-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
              <a href="tel:+48662117886" onClick={() => trackPhoneClick('header')}>
                <Phone className="w-4 h-4 mr-2"/>
                +48 662 117 886
              </a>
            </Button>
            {currentCta && (
              <Button asChild className="hover:opacity-90">
                <Link to={currentCta.to}>{currentCta.text}</Link>
              </Button>
            )}
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
              {/* Kim jesteś? section */}
              <div className="pb-4 border-b border-border">
                <span className="text-sm text-muted-foreground mb-2 block">Kim jesteś?</span>
                <div className="flex flex-col space-y-2">
                  {clientTypes.map((type) => {
                    const IconComponent = type.icon;
                    const isActive = variant === type.id;
                    return (
                      <Link
                        key={type.id}
                        to={type.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                          isActive ? "bg-lemon-100 font-semibold" : "hover:bg-muted"
                        )}
                      >
                        <IconComponent className={cn(
                          "w-5 h-5",
                          isActive ? "text-lemon-600" : "text-muted-foreground"
                        )} />
                        <span>{type.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Variant-specific navigation */}
              {currentNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-mint-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
                  <a href="tel:+48662117886" onClick={() => trackPhoneClick('header_mobile')}>
                    <Phone className="w-4 h-4 mr-2" />
                    +48 662 117 886
                  </a>
                </Button>
                {currentCta && (
                  <Button asChild className="hover:opacity-90">
                    <Link to={currentCta.to} onClick={() => setIsMenuOpen(false)}>
                      {currentCta.text}
                    </Link>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
