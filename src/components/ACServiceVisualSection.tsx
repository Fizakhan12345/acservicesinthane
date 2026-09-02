import React from 'react';
import { Sparkles, CheckCircle2, Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface ACServiceVisualSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ACServiceVisualSection: React.FC<ACServiceVisualSectionProps> = ({ onOpenBooking }) => {
  const serviceFeatures = [
    { title: 'AC Cleaning', desc: 'High-pressure water jet wash for indoor cooling coils & filters' },
    { title: 'Filter Cleaning', desc: 'Antibacterial sanitization of mesh filters and dust traps' },
    { title: 'Cooling Performance Check', desc: 'Digital delta temperature measurement across supply & return air' },
    { title: 'Indoor Unit Inspection', desc: 'Blower fan balancing, drain tray unclogging & sensor calibration' },
    { title: 'Outdoor Unit Inspection', desc: 'Condenser fin straightening, fan motor lubrication & debris removal' },
    { title: 'General AC Maintenance', desc: 'Electrical wiring terminal check, capacitor testing & amperage verification' }
  ];

  return (
    <section id="professional-ac-service-section" className="py-16 lg:py-20 bg-white border-b border-[#E3EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Technician Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <img
                src="/images/ac-cleaning.jpg"
                alt="Certified Indian AC technician servicing Split AC in Thane"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#172033]/80 via-[#172033]/20 to-transparent" />
              
              {/* Overlay Content Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center font-black">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#172033]">100% Mess-Free Service</h4>
                    <p className="text-xs text-[#5B6472]">Waterproof jacket & clean floor protection</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs font-extrabold text-[#16A34A] block">Verified Staff</span>
                  <span className="text-[10px] text-[#5B6472]">Thane Local Base</span>
                </div>
              </div>
            </div>

            {/* Experience Highlight Pill */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#0B72E7] text-white px-4 py-2 rounded-xl shadow-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doorstep AC Care</span>
            </div>
          </div>

          {/* Right Column: Detailed Service Explanation & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Thane AC Excellence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight leading-tight">
                Professional AC Service in <span className="text-[#0B72E7]">Thane</span>
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
                Regular air conditioning servicing is essential in Thane’s humid climate to maintain energy efficiency, prevent sudden compressor failures, and eliminate accumulated mold, bacteria, and dust allergens.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {serviceFeatures.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-[#F7FAFC] border border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-[#EAF6FF]/40 transition-all"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#172033]">{item.title}</h3>
                      <p className="text-[11px] text-[#5B6472] mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('AC Jet Cleaning Service')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white text-sm sm:text-base font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book AC Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+917021455426"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] text-sm font-bold shadow-xs hover:border-[#0B72E7]/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0B72E7]" />
                <span>+91 7021455426</span>
              </a>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
};
