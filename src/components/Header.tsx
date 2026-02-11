import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackPhoneClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export type HeaderVariant = 'home' | 'klient' | 'biznes' | 'outsourcing';

interface HeaderProps {
  variant?: HeaderVariant;
}

const serviceTabs = [
  { label: 'Sprzątanie', to: '/' },
  { label: 'Pranie tapicerki', to: '/pranie-tapicerki/' },
  { label: 'Mycie okien', to: '#', disabled: true },
];

const Header = ({ variant = 'home' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to.replace(/\/$/, ''));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-lemon-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2">
            <img src="/104933_LemonShine_Flat_HP_R_01.png" alt="lemonshine logo" className="h-8 object-contain rounded-2xl" />
          </Link>

          {/* Desktop Navigation - Service Tabs */}
          <nav className="hidden md:flex items-center space-x-6">
            {serviceTabs.map((tab) => (
              <Link
                key={tab.label}
                to={tab.disabled ? '#' : tab.to}
                onClick={tab.disabled ? (e) => e.preventDefault() : undefined}
                className={cn(
                  "text-sm font-medium transition-colors pb-1 border-b-2",
                  tab.disabled
                    ? "text-muted-foreground/50 cursor-not-allowed border-transparent"
                    : isActive(tab.to)
                      ? "text-foreground border-lemon-500"
                      : "text-muted-foreground hover:text-foreground border-transparent hover:border-lemon-300"
                )}
              >
                {tab.label}
                {tab.disabled && <span className="ml-1 text-xs">(wkrótce)</span>}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
              <a href="tel:+48662117886" onClick={() => trackPhoneClick('header')}>
                <Phone className="w-4 h-4 mr-2" />
                +48 662 117 886
              </a>
            </Button>
            <Button asChild className="hover:opacity-90" size="sm">
              <a href="#zamow">Zamów nasze usługi</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-lemon-200">
            <nav className="flex flex-col space-y-3">
              {serviceTabs.map((tab) => (
                <Link
                  key={tab.label}
                  to={tab.disabled ? '#' : tab.to}
                  onClick={(e) => {
                    if (tab.disabled) { e.preventDefault(); return; }
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-3 py-2 rounded-lg font-medium transition-colors",
                    tab.disabled
                      ? "text-muted-foreground/50"
                      : isActive(tab.to)
                        ? "bg-lemon-100 text-foreground"
                        : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {tab.label}
                  {tab.disabled && <span className="ml-1 text-xs">(wkrótce)</span>}
                </Link>
              ))}

              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
                  <a href="tel:+48662117886" onClick={() => trackPhoneClick('header_mobile')}>
                    <Phone className="w-4 h-4 mr-2" />
                    +48 662 117 886
                  </a>
                </Button>
                <Button asChild className="hover:opacity-90" size="sm">
                  <a href="#zamow" onClick={() => setIsMenuOpen(false)}>Zamów nasze usługi</a>
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
