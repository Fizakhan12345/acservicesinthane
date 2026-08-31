import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, Building, Sparkles } from 'lucide-react';
import { LOCATIONS_DATA, ZONES_LIST, searchLocations } from '../data/locations';
import { PageRoute } from '../types';

interface LocationDirectoryProps {
  navigate: (route: PageRoute) => void;
  showTitle?: boolean;
}

export const LocationDirectory: React.FC<LocationDirectoryProps> = ({ navigate, showTitle = true }) => {
  const [selectedZone, setSelectedZone] = useState<string>('All Localities (59)');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLocations = searchLocations(searchQuery, selectedZone);

  return (
    <section id="service-areas-section" className="py-16 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Thane Service Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
              Service Areas Across Thane & Surrounding Localities
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] mt-2">
              We provide doorstep AC servicing, repair, gas filling, and installation across 59 localities in Thane West, Thane East, Ghodbunder Road, and Kalwa.
            </p>
          </div>
        )}

        {/* Search Bar & Zone Filter */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your Thane locality or township (e.g. Kapurbawdi, Hiranandani, Naupada, Lodha Amara)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E3EAF2] rounded-xl pl-11 pr-4 py-3 text-sm text-[#172033] shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
            />
            <Search className="w-5 h-5 text-[#5B6472] absolute left-3.5 top-3.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3 text-xs text-[#5B6472] hover:text-[#172033] bg-slate-100 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Zone Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center">
            {ZONES_LIST.map(zone => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedZone === zone
                    ? 'bg-[#0B72E7] text-white shadow-xs'
                    : 'bg-white text-[#172033] border border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-[#EAF6FF]'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#5B6472] mb-4 px-1">
          <span>Showing <strong>{filteredLocations.length}</strong> service localities</span>
          <span>Doorstep Technician Coverage</span>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredLocations.map(loc => (
            <div
              key={loc.slug}
              id={`loc-card-${loc.slug}`}
              onClick={() => {
                navigate({ type: 'location', slug: loc.slug });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-xl p-4 border border-[#E3EAF2] hover:border-[#0B72E7] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-md bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shrink-0 group-hover:bg-[#0B72E7] group-hover:text-white transition-colors">
                      <MapPin className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-sm font-bold text-[#172033] group-hover:text-[#0B72E7] transition-colors leading-tight">
                      AC Service in {loc.name}
                    </h3>
                  </div>
                </div>

                <p className="text-[11px] text-[#5B6472] line-clamp-2 leading-relaxed mb-3">
                  {loc.description}
                </p>

                <div className="flex items-center gap-1.5 text-[10px] text-[#5B6472] mb-2 font-medium">
                  <span className="px-2 py-0.5 rounded-sm bg-[#F7FAFC] border border-[#E3EAF2]">
                    {loc.zone}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>{loc.pincode}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E3EAF2] flex items-center justify-between text-xs font-bold text-[#0B72E7] group-hover:translate-x-0.5 transition-transform">
                <span>View Local Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E3EAF2] p-8">
            <Building className="w-12 h-12 text-[#5B6472] mx-auto mb-3" />
            <h4 className="text-base font-bold text-[#172033]">No locality found matching "{searchQuery}"</h4>
            <p className="text-xs text-[#5B6472] mt-1 max-w-sm mx-auto">
              We service all 59 approved localities in Thane West, East, Ghodbunder Road, and Kalwa.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedZone('All Localities (59)');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#0B72E7] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
