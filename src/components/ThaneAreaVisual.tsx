import React from 'react';
import { MapPin, ArrowRight, Phone, Calendar, Building2, Home } from 'lucide-react';
import { PageRoute } from '../types';

interface ThaneAreaVisualProps {
  navigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string, locationName?: string) => void;
}

export const ThaneAreaVisual: React.FC<ThaneAreaVisualProps> = ({ navigate, onOpenBooking }) => {
  const prominentLocations = [
    { name: 'Thane West', slug: 'thane-west', pincode: '400601', tag: 'Central Hub' },
    { name: 'Thane East', slug: 'thane-east', pincode: '400603', tag: 'Station Area' },
    { name: 'Ghodbunder Road', slug: 'ghodbunder-road', pincode: '400607', tag: 'High-Rise Belt' },
    { name: 'Naupada', slug: 'naupada', pincode: '400602', tag: 'Residential' },
    { name: 'Manpada', slug: 'manpada', pincode: '400607', tag: 'Townships' },
    { name: 'Majiwada', slug: 'majiwada', pincode: '400601', tag: 'Junction Hub' },
    { name: 'Kapurbawdi', slug: 'kapurbawdi', pincode: '400607', tag: 'Commercial' },
    { name: 'Vartak Nagar', slug: 'vartak-nagar', pincode: '400606', tag: 'Prime Local' },
    { name: 'Wagle Estate', slug: 'wagle-estate', pincode: '400604', tag: 'IT & Corporate' },
    { name: 'Kolshet Road', slug: 'kolshet-road', pincode: '400607', tag: 'Townships' },
    { name: 'Brahmand', slug: 'brahmand', pincode: '400607', tag: 'Residential' },
    { name: 'Kasarvadavali', slug: 'kasarvadavali', pincode: '400615', tag: 'North Corridor' },
    { name: 'Kalwa', slug: 'kalwa', pincode: '400605', tag: 'Fast Doorstep' },
    { name: 'Hiranandani Estate', slug: 'hiranandani-estate', pincode: '400607', tag: 'Premium Estate' }
  ];

  return (
    <section id="thane-service-areas-visual" className="py-16 lg:py-20 bg-[#F7FAFC] border-b border-[#E3EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Thane-Wide Presence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
            AC Service Across <span className="text-[#0B72E7]">Thane</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B6472] mt-2">
            Our certified mobile technicians are stationed across 59 key localities in Thane West, Thane East, Ghodbunder Road, and Kalwa for fast same-day doorstep service.
          </p>
        </div>

        {/* 14 Prominent Location Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 mb-10">
          {prominentLocations.map(loc => (
            <button
              key={loc.slug}
              onClick={() => {
                navigate({ type: 'location', slug: loc.slug });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-xl p-3.5 border border-[#E3EAF2] hover:border-[#0B72E7] hover:bg-[#EAF6FF]/40 text-left transition-all group cursor-pointer shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-[#0B72E7] uppercase tracking-wider block mb-1">
                  {loc.tag}
                </span>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#172033] group-hover:text-[#0B72E7] transition-colors leading-tight">
                  {loc.name}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E3EAF2]/60 text-[11px] text-[#5B6472]">
                <span>{loc.pincode}</span>
                <ArrowRight className="w-3 h-3 text-[#CAD5E2] group-hover:text-[#0B72E7] group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          ))}
        </div>

        {/* Premium Location Visual Panel */}
        <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-[#0B72E7] to-[#16A9E0] text-white p-6 sm:p-10 shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
                <Building2 className="w-3.5 h-3.5" />
                <span>59 Localities • All Housing Societies & Commercial Parks</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Serving Homes & Businesses Across Thane
              </h3>
              <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                Whether you reside in Lodha Amara, Rustomjee Urbania, Runwal Garden City, Hiranandani Estate, or operate an office in Wagle Estate, our technicians are ready at your service.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto lg:w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-50 text-[#0B72E7] font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book AC Service</span>
              </button>

              <a
                href="tel:+918795496688"
                className="w-full sm:w-auto lg:w-full py-3.5 px-6 rounded-xl bg-[#172033] hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#16A9E0]" />
                <span>+91 8795496688</span>
              </a>
            </div>
          </div>
        </div>

        {/* View All Localities Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              navigate({ type: 'locations-list' });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0B72E7] hover:underline cursor-pointer"
          >
            <span>Explore All 59 Thane Localities & Township Directories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
