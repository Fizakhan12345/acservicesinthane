import React from 'react';
import { Phone, Mail, MapPin, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { PageRoute } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  navigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (route: PageRoute) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topLocations = [
    { name: 'Thane West', slug: 'ac-service-in-thane-west' },
    { name: 'Thane East', slug: 'ac-service-in-thane-east' },
    { name: 'Ghodbunder Road', slug: 'ac-service-in-ghodbunder-road' },
    { name: 'Naupada', slug: 'ac-service-in-naupada' },
    { name: 'Panch Pakhadi', slug: 'ac-service-in-panch-pakhadi' },
    { name: 'Majiwada', slug: 'ac-service-in-majiwada' },
    { name: 'Kapurbawdi', slug: 'ac-service-in-kapurbawdi' },
    { name: 'Manpada', slug: 'ac-service-in-manpada' },
    { name: 'Vartak Nagar', slug: 'ac-service-in-vartak-nagar' },
    { name: 'Wagle Estate', slug: 'ac-service-in-wagle-estate' },
    { name: 'Kolshet', slug: 'ac-service-in-kolshet' },
    { name: 'Brahmand', slug: 'ac-service-in-brahmand' },
    { name: 'Hiranandani Estate', slug: 'ac-service-in-hiranandani-estate' },
    { name: 'Hiranandani Meadows', slug: 'ac-service-in-hiranandani-meadows' },
    { name: 'Kasarvadavali', slug: 'ac-service-in-kasarvadavali' },
    { name: 'Kalwa', slug: 'ac-service-in-kalwa' },
    { name: 'Lodha Amara', slug: 'ac-service-in-lodha-amara' },
    { name: 'Rustomjee Urbania', slug: 'ac-service-in-rustomjee-urbania' },
    { name: 'Runwal Garden', slug: 'ac-service-in-runwal-garden' }
  ];

  return (
    <footer className="bg-[#172033] text-white pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 items-start mb-12">
          {/* Column 1: Brand & NAP */}
          <div className="space-y-4">
            <div 
              id="footer-brand-logo"
              onClick={() => handleNav({ type: 'home' })}
              className="cursor-pointer group inline-block"
            >
              <img
                src="/logo.svg"
                alt="AC Services in Thane"
                className="h-11 sm:h-12 w-auto object-contain bg-white/95 px-3 py-1.5 rounded-lg transition-transform group-hover:scale-105 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Professional, transparent doorstep AC repair, jet cleaning, gas filling, and installation services across Thane West, East, Ghodbunder Road, and Kalwa.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-200">
              <a
                href="tel:+918795496688"
                className="flex items-center gap-2.5 hover:text-[#16A9E0] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0B72E7] shrink-0" />
                <span className="font-bold">+91 8795496688</span>
              </a>

              <a
                href="mailto:acservicesinthane@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#16A9E0] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0B72E7] shrink-0" />
                <span>acservicesinthane@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0B72E7] shrink-0 mt-0.5" />
                <span>Thane West, Mumbai, Maharashtra 400606</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/918795496688?text=Hi%2C%20I%20need%20AC%20service%20in%20Thane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>
          </div>

          {/* Column 2: AC Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#16A9E0] mb-4">
              AC Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'ac-service' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC Jet Deep Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'ac-repair' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC General Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'ac-not-cooling-repair' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC Not Cooling Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'ac-water-leakage-repair' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC Water Leakage Fix
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'ac-gas-filling' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC Gas Filling & Leak Test
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'ac-installation' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC Installation & Relocation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'ac-maintenance' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC Maintenance & AMC
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'split-ac-service' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Split AC Servicing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'window-ac-service' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Window AC Servicing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'service', slug: 'commercial-ac-service' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Commercial AC & Cassette Units
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: AC Services Thane Locations */}
          <div>
            <div className="mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#16A9E0] mb-1.5">
                AC Services Thane Locations
              </h4>
              <button
                onClick={() => handleNav({ type: 'locations-list' })}
                className="inline-flex items-center gap-1 text-xs text-[#0B72E7] hover:text-[#16A9E0] font-bold hover:underline transition-colors cursor-pointer"
              >
                <span>View All 59 Areas →</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-300">
              {topLocations.map(loc => (
                <button
                  key={loc.slug}
                  onClick={() => handleNav({ type: 'location', slug: loc.slug })}
                  className="hover:text-white hover:underline transition-colors text-left truncate cursor-pointer py-0.5"
                  title={`AC Service in ${loc.name}`}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Quick Links & Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#16A9E0] mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav({ type: 'home' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'about' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  About AC Services in Thane
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'blog-list' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  AC Maintenance Guides & Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'faq' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'contact' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'privacy' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'terms' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'disclaimer' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav({ type: 'sitemap' })}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  HTML Sitemap
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} AC Services in Thane (acservicesinthane.com). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Verified Local Service Provider</span>
            </span>
            <span>Thane, Maharashtra 400606</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
