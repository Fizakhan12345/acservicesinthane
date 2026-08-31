import React from 'react';
import { Shield } from 'lucide-react';

export const BrandSlider: React.FC = () => {
  const brands = [
    { name: 'Voltas', type: 'All Models & Inverter' },
    { name: 'Daikin', type: 'FTKF / FTKM / Inverter' },
    { name: 'LG', type: 'Dual Inverter / Smart' },
    { name: 'Bluestar', type: 'Residential & Commercial' },
    { name: 'Samsung', type: 'WindFree / Triple Inverter' },
    { name: 'Hitachi', type: 'Kashikoi / Expandable' },
    { name: 'Carrier', type: 'Ester / Durafresh' },
    { name: 'Panasonic', type: 'Miraie IoT / Inverter' },
    { name: 'Godrej', type: 'Heavy Duty 5-Star' },
    { name: 'Mitsubishi', type: 'Heavy & Electric' },
    { name: 'Lloyd', type: 'Grande / Inverter' },
    { name: 'O General', type: 'Hyper Tropical / VRF' },
    { name: 'Haier', type: 'Self-Clean Inverter' },
    { name: 'Toshiba', type: 'Hi-Wall & Inverter' }
  ];

  return (
    <section id="brands-supported" className="py-12 bg-white border-b border-[#E3EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0B72E7] mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Universal Brand Compatibility</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#172033]">
              Multiple AC Brands Serviced & Repaired in Thane
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#5B6472] max-w-md">
            Our technicians carry diagnostic instruments and authentic components compatible with all leading air conditioner manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {brands.map((b, idx) => (
            <div
              key={idx}
              className="bg-[#F7FAFC] hover:bg-[#EAF6FF] border border-[#E3EAF2] hover:border-[#0B72E7]/30 rounded-xl p-3.5 text-center transition-all group"
            >
              <span className="block font-bold text-sm text-[#172033] group-hover:text-[#0B72E7] transition-colors">
                {b.name}
              </span>
              <span className="block text-[10px] font-medium text-[#5B6472] mt-0.5">
                {b.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
