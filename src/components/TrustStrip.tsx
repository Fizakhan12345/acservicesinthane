import React from 'react';
import { Clock, ShieldCheck, Building2, Layers, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: Clock,
      title: 'Fast Local Service',
      desc: 'Prompt doorstep arrival across Thane'
    },
    {
      icon: ShieldCheck,
      title: 'Experienced Technicians',
      desc: 'Certified professionals & tools'
    },
    {
      icon: Building2,
      title: 'Residential & Commercial',
      desc: 'Flats, villas, offices & retail'
    },
    {
      icon: Layers,
      title: 'Multiple AC Types',
      desc: 'Split, Window, Inverter & Cassette'
    },
    {
      icon: MapPin,
      title: 'Thane-Wide Coverage',
      desc: '59 approved local neighborhoods'
    }
  ];

  return (
    <div className="bg-white border-b border-[#E3EAF2] py-5 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FAFC] border border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-[#EAF6FF]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white text-[#0B72E7] flex items-center justify-center border border-[#E3EAF2] shadow-2xs group-hover:scale-105 group-hover:bg-[#0B72E7] group-hover:text-white transition-all shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#172033] leading-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#5B6472] leading-tight mt-0.5 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
