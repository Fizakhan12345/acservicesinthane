import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { LocationDirectory } from '../components/LocationDirectory';
import { PageRoute } from '../types';
import { BrandSlider } from '../components/BrandSlider';

interface LocationsListPageProps {
  navigate: (route: PageRoute) => void;
}

export const LocationsListPage: React.FC<LocationsListPageProps> = ({ navigate }) => {
  return (
    <div className="space-y-0">
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white py-14 border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>59 Thane Localities Covered</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight">
            AC Service Areas Across Thane
          </h1>
          <p className="text-sm sm:text-base text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
            Find certified doorstep AC repair, jet cleaning, gas charging, and installation services across Thane West, Thane East, Ghodbunder Road, and Kalwa.
          </p>
        </div>
      </section>

      <LocationDirectory navigate={navigate} showTitle={false} />

      <BrandSlider />
    </div>
  );
};
