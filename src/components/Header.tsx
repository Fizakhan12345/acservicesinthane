import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, Wrench, Shield, Droplets, Gauge, MapPin, Sparkles, Wind } from 'lucide-react';
import { PageRoute } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNav = (route: PageRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E3EAF2] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-2 lg:gap-4">
          {/* Brand Logo */}
          <div 
            id="brand-logo"
            onClick={() => handleNav({ type: 'home' })}
            className="flex items-center cursor-pointer group shrink-0"
          >
            <img
              src="/ACServicesLogo.png"
              alt="AC Services in Thane"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => handleNav({ type: 'home' })}
              className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                currentRoute.type === 'home'
                  ? 'text-[#0B72E7] bg-[#EAF6FF]'
                  : 'text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav({ type: 'about' })}
              className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                currentRoute.type === 'about'
                  ? 'text-[#0B72E7] bg-[#EAF6FF]'
                  : 'text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav({ type: 'services-list' })}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  currentRoute.type === 'service' || currentRoute.type === 'services-list'
                    ? 'text-[#0B72E7] bg-[#EAF6FF]'
                    : 'text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#0B72E7]' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#E3EAF2] py-2 px-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav({ type: 'service', slug: 'ac-service' })}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7] rounded-lg transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#0B72E7] shrink-0" />
                    <span>Deep Jet Cleaning & Wash</span>
                  </button>
                  <button
                    onClick={() => handleNav({ type: 'service', slug: 'ac-repair' })}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7] rounded-lg transition-colors cursor-pointer"
                  >
                    <Wrench className="w-4 h-4 text-[#0B72E7] shrink-0" />
                    <span>General Repair & Diagnostics</span>
                  </button>
                  <button
                    onClick={() => handleNav({ type: 'service', slug: 'ac-installation' })}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7] rounded-lg transition-colors cursor-pointer"
                  >
                    <Wind className="w-4 h-4 text-[#0B72E7] shrink-0" />
                    <span>AC Installation & Uninstallation</span>
                  </button>
                  <button
                    onClick={() => handleNav({ type: 'service', slug: 'ac-gas-filling' })}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7] rounded-lg transition-colors cursor-pointer"
                  >
                    <Gauge className="w-4 h-4 text-[#0B72E7] shrink-0" />
                    <span>Gas Refilling & Leak Test</span>
                  </button>
                  <button
                    onClick={() => handleNav({ type: 'service', slug: 'ac-not-cooling-repair' })}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7] rounded-lg transition-colors cursor-pointer"
                  >
                    <Shield className="w-4 h-4 text-[#0B72E7] shrink-0" />
                    <span>Not Cooling / Low Airflow</span>
                  </button>
                  <button
                    onClick={() => handleNav({ type: 'service', slug: 'ac-water-leakage-repair' })}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7] rounded-lg transition-colors cursor-pointer"
                  >
                    <Droplets className="w-4 h-4 text-[#0B72E7] shrink-0" />
                    <span>Water Leakage Resolution</span>
                  </button>
                  <div className="border-t border-[#E3EAF2] my-1 pt-1">
                    <button
                      onClick={() => handleNav({ type: 'services-list' })}
                      className="w-full px-3 py-2 text-center text-xs font-bold text-[#0B72E7] hover:underline cursor-pointer"
                    >
                      View All 14 Services →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav({ type: 'locations-list' })}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                currentRoute.type === 'location' || currentRoute.type === 'locations-list'
                  ? 'text-[#0B72E7] bg-[#EAF6FF]'
                  : 'text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#0B72E7]" />
              <span>Service Areas</span>
            </button>

            <button
              onClick={() => handleNav({ type: 'service', slug: 'ac-repair' })}
              className="px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Repair
            </button>

            <button
              onClick={() => handleNav({ type: 'service', slug: 'ac-installation' })}
              className="px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Installation
            </button>

            <button
              onClick={() => handleNav({ type: 'service', slug: 'ac-maintenance' })}
              className="px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Maintenance
            </button>

            <button
              onClick={() => handleNav({ type: 'service', slug: 'ac-gas-filling' })}
              className="px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Gas Filling
            </button>

            <button
              onClick={() => handleNav({ type: 'contact' })}
              className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                currentRoute.type === 'contact'
                  ? 'text-[#0B72E7] bg-[#EAF6FF]'
                  : 'text-[#172033] hover:text-[#0B72E7] hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              id="header-call-btn"
              href="tel:+917021455426"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-sm font-bold text-[#0B72E7] hover:bg-[#EAF6FF] transition-colors border border-transparent hover:border-[#0B72E7]/20 whitespace-nowrap"
            >
              <span className="w-8 h-8 rounded-lg bg-[#EAF6FF] flex items-center justify-center text-[#0B72E7] shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <div className="text-left leading-tight hidden lg:block">
                <span className="block text-[10px] font-medium text-[#5B6472]">Call Technician</span>
                <span className="block text-xs font-black text-[#172033] tracking-tight">+91 7021455426</span>
              </div>
            </a>

            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 sm:py-2.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Book Service
            </button>
          </div>

          {/* Mobile / Tablet Hamburger & Quick Action Buttons */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <a
              href="tel:+917021455426"
              className="p-2 rounded-lg bg-[#EAF6FF] text-[#0B72E7] hover:bg-[#0B72E7] hover:text-white transition-colors"
              aria-label="Call Technician"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/917021455426?text=Hi%2C%20I%20need%20AC%20service%20in%20Thane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
              aria-label="WhatsApp Support"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#172033] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E3EAF2] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNav({ type: 'home' })}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold cursor-pointer ${
              currentRoute.type === 'home' ? 'bg-[#EAF6FF] text-[#0B72E7]' : 'text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7]'
            }`}
          >
            Home
          </button>

          <div className="py-2 border-y border-[#E3EAF2] my-1">
            <p className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5B6472]">Popular Services</p>
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <button
                onClick={() => handleNav({ type: 'service', slug: 'ac-service' })}
                className="text-left px-3 py-2 rounded-lg bg-[#F7FAFC] text-xs font-bold text-[#172033] hover:text-[#0B72E7] hover:bg-[#EAF6FF] cursor-pointer"
              >
                Deep Jet Cleaning
              </button>
              <button
                onClick={() => handleNav({ type: 'service', slug: 'ac-repair' })}
                className="text-left px-3 py-2 rounded-lg bg-[#F7FAFC] text-xs font-bold text-[#172033] hover:text-[#0B72E7] hover:bg-[#EAF6FF] cursor-pointer"
              >
                General Repair
              </button>
              <button
                onClick={() => handleNav({ type: 'service', slug: 'ac-installation' })}
                className="text-left px-3 py-2 rounded-lg bg-[#F7FAFC] text-xs font-bold text-[#172033] hover:text-[#0B72E7] hover:bg-[#EAF6FF] cursor-pointer"
              >
                Installation
              </button>
              <button
                onClick={() => handleNav({ type: 'service', slug: 'ac-maintenance' })}
                className="text-left px-3 py-2 rounded-lg bg-[#F7FAFC] text-xs font-bold text-[#172033] hover:text-[#0B72E7] hover:bg-[#EAF6FF] cursor-pointer"
              >
                Maintenance & AMC
              </button>
              <button
                onClick={() => handleNav({ type: 'service', slug: 'ac-gas-filling' })}
                className="text-left px-3 py-2 rounded-lg bg-[#F7FAFC] text-xs font-bold text-[#172033] hover:text-[#0B72E7] hover:bg-[#EAF6FF] cursor-pointer"
              >
                Gas Filling
              </button>
              <button
                onClick={() => handleNav({ type: 'service', slug: 'ac-not-cooling-repair' })}
                className="text-left px-3 py-2 rounded-lg bg-[#F7FAFC] text-xs font-bold text-[#172033] hover:text-[#0B72E7] hover:bg-[#EAF6FF] cursor-pointer"
              >
                Not Cooling Fix
              </button>
            </div>
            <button
              onClick={() => handleNav({ type: 'services-list' })}
              className="w-full text-left px-3 py-2 mt-1 text-xs font-bold text-[#0B72E7] hover:underline cursor-pointer"
            >
              View All 14 Services →
            </button>
          </div>

          <button
            onClick={() => handleNav({ type: 'locations-list' })}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold cursor-pointer flex items-center justify-between ${
              currentRoute.type === 'location' || currentRoute.type === 'locations-list'
                ? 'bg-[#EAF6FF] text-[#0B72E7]'
                : 'text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7]'
            }`}
          >
            <span>Service Areas (59 Localities)</span>
            <span className="text-xs bg-[#EAF6FF] text-[#0B72E7] px-2 py-0.5 rounded-full font-bold">59</span>
          </button>

          <button
            onClick={() => handleNav({ type: 'blog-list' })}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold cursor-pointer ${
              currentRoute.type === 'blog-list' || currentRoute.type === 'blog-post'
                ? 'bg-[#EAF6FF] text-[#0B72E7]'
                : 'text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7]'
            }`}
          >
            Maintenance Guides & Blog
          </button>

          <button
            onClick={() => handleNav({ type: 'about' })}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold cursor-pointer ${
              currentRoute.type === 'about' ? 'bg-[#EAF6FF] text-[#0B72E7]' : 'text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7]'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNav({ type: 'contact' })}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold cursor-pointer ${
              currentRoute.type === 'contact' ? 'bg-[#EAF6FF] text-[#0B72E7]' : 'text-[#172033] hover:bg-[#EAF6FF] hover:text-[#0B72E7]'
            }`}
          >
            Contact & Support
          </button>

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-[#0B72E7] text-white text-base font-bold text-center shadow-xs cursor-pointer hover:bg-[#0856B2] transition-colors"
            >
              Book Doorstep Service
            </button>
            <a
              href="tel:+917021455426"
              className="w-full py-3 rounded-lg bg-[#EAF6FF] text-[#0B72E7] text-base font-bold text-center flex items-center justify-center gap-2 hover:bg-[#0B72E7] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 7021455426</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};