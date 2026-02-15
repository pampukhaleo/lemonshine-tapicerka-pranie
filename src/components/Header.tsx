import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, SprayCan, Sofa, PanelTop } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackPhoneClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export type HeaderVariant = 'home' | 'klient' | 'biznes' | 'outsourcing';

interface HeaderProps {
  variant?: HeaderVariant;
}

const serviceTabs = [
  { label: 'Sprzątanie', to: '/', icon: SprayCan, iconBg: 'bg-blue-100 text-blue-600' },
  { label: 'Pranie tapicerki', to: '/pranie-tapicerki/', icon: Sofa, iconBg: 'bg-orange-100 text-orange-600' },
  { label: 'Mycie okien', to: '#', disabled: true, icon: PanelTop, iconBg: 'bg-cyan-100 text-cyan-600' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <img src="/104933_LemonShine_Flat_HP_R_01.png" alt="lemonshine logo" className="h-10 object-contain rounded-2xl" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {serviceTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.label}
                  to={tab.disabled ? '#' : tab.to}
                  onClick={tab.disabled ? (e) => e.preventDefault() : undefined}
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2 rounded-full text-base font-medium transition-colors",
                    tab.disabled
                      ? "text-muted-foreground/50 cursor-not-allowed"
                      : isActive(tab.to)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className={cn("w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0", tab.disabled ? "bg-muted text-muted-foreground/40" : tab.iconBg)}>
                    <Icon className="w-4 h-4" />
                  </span>
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+48662117886"
              onClick={() => trackPhoneClick('header')}
              className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4 text-mint-500" />
              +48 662 117 883
            </a>
            <Button asChild className="rounded-full bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold px-6 shadow-none border-none h-10">
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
              {serviceTabs.map((tab) => {
                const Icon = tab.icon;
                return (
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
                    <span className={cn("w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0", tab.disabled ? "bg-muted text-muted-foreground/40" : tab.iconBg)}>
                      <Icon className="w-4 h-4" />
                    </span>
                    {tab.label}
                  </Link>
                );
              })}

              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <a
                  href="tel:+48662117886"
                  onClick={() => trackPhoneClick('header_mobile')}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground"
                >
                  <Phone className="w-4 h-4 text-mint-500" />
                  +48 662 117 883
                </a>
                <Button asChild className="rounded-full bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold border-none">
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
