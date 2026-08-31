import React from 'react';
import { 
  MapPin, 
  Users, 
  Building2, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  Layers,
  ArrowRight,
  ClipboardList,
  Wrench,
  Clock,
  Sparkles
} from 'lucide-react';

interface TrustSectionProps {
  onOpenBooking: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenBooking }) => {
  const whyPoints = [
    {
      icon: MapPin,
      title: 'Local Thane Service Coverage',
      desc: 'Technicians stationed across Thane West, Thane East, Ghodbunder Road, and Kalwa for responsive doorstep service.'
    },
    {
      icon: Users,
      title: 'Skilled AC Technicians',
      desc: 'Trained professionals equipped with digital manifold gauges, high-pressure jet pumps, and electrical multi-meters.'
    },
    {
      icon: Building2,
      title: 'Residential & Commercial Services',
      desc: 'From 1BHK high-rise apartments to sprawling corporate IT parks and retail shops in Thane.'
    },
    {
      icon: PhoneCall,
      title: 'Convenient Booking',
      desc: 'Instant booking by phone, WhatsApp, or online form with flexible morning, afternoon, and evening slots.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      desc: 'Honest pre-repair diagnosis, clear explanation of part defects, and upfront quotes before starting work.'
    },
    {
      icon: Layers,
      title: 'Multiple AC Types Supported',
      desc: 'Expertise across Split ACs, Window units, Inverter ACs, Cassette systems, and Multi-splits.'
    },
    {
      icon: ShieldCheck,
      title: 'Service Across 59 Thane Localities',
      desc: 'Dedicated service coverage across Naupada, Majiwada, Kolshet, Hiranandani, Brahmand, Pokhran Road & beyond.'
    },
    {
      icon: CheckCircle,
      title: 'Customer-Focused Service',
      desc: 'Clean, tidy service delivery with protective floor sheets and mess-free jet wash bibs.'
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'Call or WhatsApp',
      desc: 'Reach us at +91 8795496688 or send a quick WhatsApp message with your locality and convenient time.',
      icon: PhoneCall
    },
    {
      step: '2',
      title: 'Tell Us Your AC Problem',
      desc: 'Describe what your AC is experiencing—not cooling, water leaking, foul odor, or routine seasonal jet cleaning.',
      icon: ClipboardList
    },
    {
      step: '3',
      title: 'Technician Visit',
      desc: 'Our technician arrives at your doorstep in Thane on time with specialized tools and protective gear.',
      icon: MapPin
    },
    {
      step: '4',
      title: 'Service / Repair',
      desc: 'Thorough inspection, deep servicing or genuine component repair, followed by cooling delta temperature testing.',
      icon: Wrench
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Why Choose Us */}
      <section id="why-choose-us" className="py-16 lg:py-20 bg-[#F7FAFC] border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reliable & Transparent</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
              Why Choose AC Services in Thane?
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] mt-2">
              We focus on genuine craftsmanship, punctual doorstep visits, and transparent pricing across all Thane neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#E3EAF2] hover:border-[#0B72E7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center mb-3.5 group-hover:bg-[#0B72E7] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#172033] group-hover:text-[#0B72E7] transition-colors mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. How It Works (4-Step Animated Process with connecting line) */}
      <section id="how-it-works" className="py-16 lg:py-20 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Simple 4-Step Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
              How Our AC Service Works in Thane
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] mt-2">
              From your first phone call to chilly room comfort in 4 transparent steps.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-[#0B72E7]/30 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="relative bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 border border-[#E3EAF2] hover:border-[#0B72E7] shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center space-y-3.5 group"
                  >
                    {/* Step Number Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#0B72E7] text-white flex items-center justify-center text-lg font-black mx-auto shadow-md border-4 border-white group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>

                    {/* Step Icon */}
                    <div className="w-9 h-9 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center mx-auto group-hover:bg-[#0B72E7] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-base font-bold text-[#172033] group-hover:text-[#0B72E7] transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book AC Service in Thane</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
