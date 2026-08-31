import React from 'react';
import { ShieldCheck, MapPin, Users, Sparkles, CheckCircle2, Phone, MessageCircle, Calendar } from 'lucide-react';
import { PageRoute } from '../types';
import { BrandSlider } from '../components/BrandSlider';

interface AboutPageProps {
  navigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white py-14 border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Our Company</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight">
            About AC Services in Thane
          </h1>
          <p className="text-sm sm:text-base text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
            Delivering dependable, transparent, and prompt doorstep air conditioning services across Thane West, Thane East, Ghodbunder Road, and Kalwa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#172033]">Our Core Mission</h2>
            <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
              At <strong>AC Services in Thane</strong>, our mission is to eliminate the guesswork, delays, and unexpected costs from residential and commercial air conditioner maintenance. We believe Thane homeowners and businesses deserve honest technical diagnostics, clean mess-free workmanship, and fair pricing without hidden extras.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7FAFC] p-6 rounded-2xl border border-[#E3EAF2] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Skilled Technicians</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Trained in modern inverter technology, high-pressure jet cleaning systems, and precise electrical diagnostics for all major brands.
              </p>
            </div>

            <div className="bg-[#F7FAFC] p-6 rounded-2xl border border-[#E3EAF2] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Transparent Pricing</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Clear rate cards, upfront quotes after inspection, and testing of cooling performance before accepting payment.
              </p>
            </div>

            <div className="bg-[#F7FAFC] p-6 rounded-2xl border border-[#E3EAF2] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Thane-Wide Coverage</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Dedicated local coverage across 59 localities including Ghodbunder Road, Naupada, Majiwada, Kapurbawdi, and Kalwa.
              </p>
            </div>
          </div>

          {/* Clean Standards */}
          <div className="bg-[#F7FAFC] p-6 sm:p-8 rounded-2xl border border-[#E3EAF2] space-y-4">
            <h3 className="text-lg font-bold text-[#172033]">Commitment to Cleanliness & Safety</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#172033]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Waterproof catchment jackets prevent wall drips</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Protective floor sheets during indoor unit washing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Standardized safety harness for outdoor unit service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Authentic spare parts with genuine manufacturer specs</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="text-center pt-4 space-y-4">
            <h3 className="text-xl font-bold text-[#172033]">Need AC Service in Thane?</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
              >
                Book Doorstep Visit
              </button>
              <a
                href="tel:+918795496688"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] font-bold text-sm shadow-xs transition-colors"
              >
                Call +91 8795496688
              </a>
            </div>
          </div>
        </div>
      </section>

      <BrandSlider />
    </div>
  );
};
