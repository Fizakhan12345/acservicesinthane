import React from 'react';
import { Sparkles, Wrench, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { PageRoute } from '../types';
import { BrandSlider } from '../components/BrandSlider';

interface ServicesListPageProps {
  navigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesListPage: React.FC<ServicesListPageProps> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="space-y-0">
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white py-14 border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Complete AC Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight">
            Air Conditioning Services in Thane
          </h1>
          <p className="text-sm sm:text-base text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
            Explore our complete suite of 14 specialized air conditioning services—from deep jet pump coil cleaning to complex inverter PCB board repairs across Thane.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map(srv => (
              <div
                key={srv.slug}
                className="bg-white rounded-2xl p-6 border border-[#E3EAF2] hover:border-[#0B72E7] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7]">
                      {srv.category}
                    </span>
                    <span className="text-sm font-extrabold text-[#0B72E7]">
                      Starting From ₹{srv.priceStarting.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#172033] mb-2">{srv.title}</h2>
                  <p className="text-xs text-[#5B6472] leading-relaxed mb-4">{srv.shortDesc}</p>

                  <div className="space-y-1.5 mb-4">
                    {srv.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-[#172033]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3EAF2] flex items-center gap-2">
                  <button
                    onClick={() => {
                      navigate({ type: 'service', slug: srv.slug });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 py-2 rounded-lg bg-[#F7FAFC] hover:bg-[#EAF6FF] text-[#172033] hover:text-[#0B72E7] font-bold text-xs border border-[#E3EAF2] text-center transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(srv.title)}
                    className="px-4 py-2 rounded-lg bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandSlider />
    </div>
  );
};
