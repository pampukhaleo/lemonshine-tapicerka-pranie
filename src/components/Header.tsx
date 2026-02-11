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
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <img src="/104933_LemonShine_Flat_HP_R_01.png" alt="lemonshine logo" className="h-8 object-contain rounded-2xl" />
          </Link>

          {/* Desktop Navigation - Service Tabs with green dots */}
          <nav className="hidden md:flex items-center gap-1">
            {serviceTabs.map((tab) => (
              <Link
                key={tab.label}
                to={tab.disabled ? '#' : tab.to}
                onClick={tab.disabled ? (e) => e.preventDefault() : undefined}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  tab.disabled
                    ? "text-muted-foreground/50 cursor-not-allowed"
                    : isActive(tab.to)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className={cn(
                  "w-2.5 h-2.5 rounded-full flex-shrink-0",
                  tab.disabled
                    ? "bg-muted-foreground/30"
                    : "bg-mint-500"
                )} />
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+48662117886"
              onClick={() => trackPhoneClick('header')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              +48 662 117 883
            </a>
            <Button asChild size="sm" className="rounded-full bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold px-5 shadow-none">
              <a href="#zamow">Zamów Nasze Usługi</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {serviceTabs.map((tab) => (
                <Link
                  key={tab.label}
                  to={tab.disabled ? '#' : tab.to}
                  onClick={(e) => {
                    if (tab.disabled) { e.preventDefault(); return; }
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors",
                    tab.disabled
                      ? "text-muted-foreground/50"
                      : isActive(tab.to)
                        ? "bg-lemon-100 text-foreground"
                        : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  <span className={cn(
                    "w-2.5 h-2.5 rounded-full flex-shrink-0",
                    tab.disabled ? "bg-muted-foreground/30" : "bg-mint-500"
                  )} />
                  {tab.label}
                </Link>
              ))}

              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <a
                  href="tel:+48662117886"
                  onClick={() => trackPhoneClick('header_mobile')}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  +48 662 117 883
                </a>
                <Button asChild size="sm" className="rounded-full bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold">
                  <a href="#zamow" onClick={() => setIsMenuOpen(false)}>Zamów Nasze Usługi</a>
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
