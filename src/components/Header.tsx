import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, SprayCan, Sofa, PanelTop, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
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
  { label: 'Mycie okien', to: '/mycie-okien/', icon: PanelTop, iconBg: 'bg-cyan-100 text-cyan-600' },
];

const quickLinks = [
  { label: 'Oferta', to: '/#uslugi' },
  { label: 'Cennik', to: '/cennik/' },
  { label: 'Blog', to: '/blog/' },
  { label: 'Kontakt', to: '/#zamow' },
];

const Header = ({ variant = 'home' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('/#')) return false;
    return location.pathname.startsWith(to.replace(/\/$/, ''));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleQuickLinkClick = (to: string) => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    if (to.startsWith('/#')) {
      const hash = to.slice(1);
      if (location.pathname === '/') {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
          <nav className="hidden md:flex items-center gap-1 bg-mint-50 rounded-full px-2 py-1">
            {serviceTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.label}
                  to={tab.to}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-colors",
                    isActive(tab.to)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className={cn("w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0", tab.iconBg)}>
                    <Icon className="w-4 h-4" />
                  </span>
                  {tab.label}
                </Link>
              );
            })}

            {/* Desktop Dropdown - Szybkie linki */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-full text-base font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                Szybkie linki
                <ChevronDown className={cn("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180")} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-card rounded-xl shadow-lg border border-border py-2 z-50">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => handleQuickLinkClick(link.to)}
                      className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+48662117886"
              onClick={() => trackPhoneClick('header')}
              className="flex items-center gap-2 border-2 border-mint-500 rounded-full px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4 text-mint-500" />
              +48 662 117 883
            </a>
            <Button asChild className="rounded-lg bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold px-6 shadow-none border-none h-10">
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
            <nav className="flex flex-col space-y-1">
              <p className="px-3 pt-1 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nasze usługi</p>
              {serviceTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Link
                    key={tab.label}
                    to={tab.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors",
                      isActive(tab.to)
                        ? "bg-lemon-100 text-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <span className={cn("w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0", tab.iconBg)}>
                      <Icon className="w-4 h-4" />
                    </span>
                    {tab.label}
                  </Link>
                );
              })}

              {/* Mobile Szybkie linki */}
              <div className="pt-3 border-t border-border">
                <p className="px-3 pt-1 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Szybkie linki</p>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => handleQuickLinkClick(link.to)}
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

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
