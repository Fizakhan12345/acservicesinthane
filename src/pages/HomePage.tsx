import React from 'react';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Snowflake, 
  Droplets, 
  Gauge, 
  Hammer, 
  Building2, 
  Home, 
  Layers, 
  Box, 
  Cpu, 
  Zap, 
  Flame, 
  ArrowRight,
  MapPin,
  Clock,
  Check
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SERVICES_DATA } from '../data/services';
import { HeroSlider } from '../components/HeroSlider';
import { TrustStrip } from '../components/TrustStrip';
import { ACServiceVisualSection } from '../components/ACServiceVisualSection';
import { BeforeAfterComparison } from '../components/BeforeAfterComparison';
import { ACProblemsSection } from '../components/ACProblemsSection';
import { ThaneAreaVisual } from '../components/ThaneAreaVisual';
import { DiagnosticTool } from '../components/DiagnosticTool';
import { PriceEstimator } from '../components/PriceEstimator';
import { BrandSlider } from '../components/BrandSlider';
import { TrustSection } from '../components/TrustSection';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageRoute } from '../types';

interface HomePageProps {
  navigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string, locationName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenBooking }) => {
  const globalFAQs = [
    {
      question: 'What AC services do you provide in Thane?',
      answer: 'We provide comprehensive residential and commercial AC services across Thane, including high-pressure jet cleaning, general diagnostics and repair, gas leak detection and refilling (R32, R410A, R22), water leakage repair, installation/uninstallation, compressor and PCB circuit repair, and annual maintenance contracts (AMC).'
    },
    {
      question: 'Which areas of Thane do you cover for doorstep service?',
      answer: 'We cover all 59 approved localities across Thane West, Thane East, Ghodbunder Road, and Kalwa—including Naupada, Panch Pakhadi, Majiwada, Kapurbawdi, Manpada, Vartak Nagar, Wagle Estate, Kolshet, Brahmand, Hiranandani Estate, Kasarvadavali, and major residential townships like Lodha Amara, Rustomjee Urbania, and Runwal Garden.'
    },
    {
      question: 'Do you repair Split ACs and Window ACs in Thane?',
      answer: 'Yes, we service and repair all types of Split ACs, Window ACs, 5-Star Inverter ACs, Multi-Split units, and Commercial Cassette/Ductable air conditioners across all major brands.'
    },
    {
      question: 'Can I book an AC technician by phone or WhatsApp?',
      answer: 'Yes! You can call us directly at +91 7021455426, message us on WhatsApp, or use our instant online booking form to schedule a convenient morning, afternoon, or evening visit.'
    },
    {
      question: 'Do you provide AC gas filling and leakage testing in Thane?',
      answer: 'Yes, our technicians conduct nitrogen pressure leak testing to find and weld copper leaks before refilling authentic R32, R410A, or R22 refrigerant with manifold gauge verification.'
    },
    {
      question: 'Do you provide residential as well as commercial AC service?',
      answer: 'Yes, we cater to individual homeowner apartments, housing societies, corporate offices in Wagle Estate, retail shops, clinics in Panch Pakhadi, and restaurants along Ghodbunder Road.'
    },
    {
      question: 'What are your AC service charges in Thane?',
      answer: 'Our standard jet pump deep cleaning starts from ₹549 per unit with transparent pricing, honest part quotes, and zero advance payment required.'
    }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Wrench': return Wrench;
      case 'Hammer': return Hammer;
      case 'ShieldCheck': return ShieldCheck;
      case 'Gauge': return Gauge;
      case 'Flame': return Flame;
      case 'Snowflake': return Snowflake;
      case 'Droplets': return Droplets;
      case 'Zap': return Zap;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Box': return Box;
      case 'Building2': return Building2;
      case 'Home': return Home;
      default: return Wrench;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SLIDER SECTION */}
      <HeroSlider onOpenBooking={onOpenBooking} />

      {/* 2. TRUST STRIP BELOW HERO */}
      <TrustStrip />

      {/* 3. CORE SERVICES SECTION — ANIMATED CARDS */}
      <section id="services-grid-section" className="py-16 lg:py-20 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Full-Scope AC Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
              Complete AC Services Available in Thane
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] mt-2">
              From high-pressure jet foam washing to component-level PCB and compressor repair, our certified technicians cover every air conditioning need.
            </p>
          </div>

          {/* Grid of 14 Services with Hover Lift and Arrow Movement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {SERVICES_DATA.map(srv => {
              const Icon = getServiceIcon(srv.iconName);
              return (
                <div
                  key={srv.slug}
                  id={`service-card-${srv.slug}`}
                  className="bg-[#F7FAFC] rounded-2xl p-5 border border-[#E3EAF2] hover:border-[#0B72E7] hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center mb-4 group-hover:bg-[#0B72E7] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#172033] group-hover:text-[#0B72E7] transition-colors leading-snug mb-2">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-[#5B6472] leading-relaxed mb-4 line-clamp-3">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#E3EAF2]">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] font-medium text-[#5B6472]">Starting From</span>
                      <span className="text-sm font-extrabold text-[#0B72E7]">₹{srv.priceStarting.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          navigate({ type: 'service', slug: srv.slug });
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex-1 py-2 rounded-xl bg-white hover:bg-slate-100 text-[#172033] hover:text-[#0B72E7] border border-[#E3EAF2] text-xs font-extrabold transition-all text-center cursor-pointer flex items-center justify-center gap-1 group/btn"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 text-[#CAD5E2] group-hover/btn:text-[#0B72E7] group-hover/btn:translate-x-0.5 transition-all" />
                      </button>

                      <button
                        onClick={() => onOpenBooking(srv.title)}
                        className="px-3.5 py-2 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white text-xs font-extrabold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL AC SERVICE VISUAL SECTION (SPLIT) */}
      <ACServiceVisualSection onOpenBooking={onOpenBooking} />

      {/* 5. AC PROBLEM SECTION (8 ANIMATED CARDS) */}
      <ACProblemsSection onSelectProblem={(action) => onOpenBooking(action)} />

      {/* 6. BEFORE / AFTER AC CLEANING SECTION */}
      <BeforeAfterComparison onOpenBooking={onOpenBooking} />

      {/* 7. AC SERVICE TYPES DEDICATED SECTION */}
      <section id="ac-types-breakdown" className="py-16 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Specialized Air Conditioning Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
              Tailored AC Care for Every AC Type
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] mt-2">
              Each air conditioner type requires distinct maintenance protocols. Here is how we service Split, Window, Inverter, and Commercial units in Thane.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Split AC */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-white shadow-xs hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shadow-2xs">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Split AC Service</h3>
              <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                Split systems require careful indoor evaporator deep cleaning without dismantling wall mountings. We use waterproof bib jackets and high-pressure jet pumps to remove bacteria, unclog drain pans, and clean outdoor condenser coils.
              </p>
              <ul className="text-xs text-[#5B6472] space-y-1.5 pt-2 border-t border-[#E3EAF2]">
                <li>• Mess-free indoor foam jet wash</li>
                <li>• Cross-flow blower sanitization</li>
                <li>• Condensate drain flush</li>
              </ul>
              <button
                onClick={() => onOpenBooking('Split AC Service')}
                className="w-full py-2.5 rounded-xl bg-[#EAF6FF] hover:bg-[#0B72E7] text-[#0B72E7] hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Book Split AC Service
              </button>
            </div>

            {/* Window AC */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-white shadow-xs hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shadow-2xs">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Window AC Service</h3>
              <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                Window ACs collect heavy dust inside their compact chassis. We slide out the unit to thoroughly clean both front and rear coils, unblock water drain channels, lubricate dual fan motor bearings, and eliminate chassis rattling.
              </p>
              <ul className="text-xs text-[#5B6472] space-y-1.5 pt-2 border-t border-[#E3EAF2]">
                <li>• Slide-out chassis deep washing</li>
                <li>• Base pan rust prevention</li>
                <li>• Fan motor bearing lubrication</li>
              </ul>
              <button
                onClick={() => onOpenBooking('Window AC Service')}
                className="w-full py-2.5 rounded-xl bg-[#EAF6FF] hover:bg-[#0B72E7] text-[#0B72E7] hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Book Window AC Service
              </button>
            </div>

            {/* Inverter AC */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-white shadow-xs hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shadow-2xs">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Inverter AC Service</h3>
              <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                Inverter ACs feature sensitive microcontrollers and variable-speed BLDC compressors. We troubleshoot sensor resistance drifts, IPM circuit boards, communication errors, and precision electronic expansion valves.
              </p>
              <ul className="text-xs text-[#5B6472] space-y-1.5 pt-2 border-t border-[#E3EAF2]">
                <li>• Inverter PCB error diagnosis</li>
                <li>• BLDC fan & compressor testing</li>
                <li>• Precision R32/R410A charging</li>
              </ul>
              <button
                onClick={() => onOpenBooking('Inverter AC Service')}
                className="w-full py-2.5 rounded-xl bg-[#EAF6FF] hover:bg-[#0B72E7] text-[#0B72E7] hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Book Inverter AC Service
              </button>
            </div>

            {/* Commercial AC */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-white shadow-xs hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shadow-2xs">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Commercial AC Service</h3>
              <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                Tailored for IT corporate offices in Wagle Estate, clinics in Panch Pakhadi, retail outlets in Viviana/Korum malls, and restaurants. We service Cassette ACs, Ductables, and VRV/VRF units with flexible off-hours scheduling.
              </p>
              <ul className="text-xs text-[#5B6472] space-y-1.5 pt-2 border-t border-[#E3EAF2]">
                <li>• Cassette drain pump maintenance</li>
                <li>• Server room 24/7 reliability checks</li>
                <li>• Preventive AMC plans with GST bills</li>
              </ul>
              <button
                onClick={() => onOpenBooking('Commercial AC Service')}
                className="w-full py-2.5 rounded-xl bg-[#EAF6FF] hover:bg-[#0B72E7] text-[#0B72E7] hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Book Commercial AC Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE DIAGNOSTIC TROUBLESHOOTER */}
      <DiagnosticTool 
        onSelectFix={(serviceCategory) => onOpenBooking(serviceCategory)} 
      />

      {/* 9. TRANSPARENT PRICE ESTIMATOR */}
      <PriceEstimator 
        onBookService={(serviceName) => onOpenBooking(serviceName)} 
      />

      {/* 10. WHY CHOOSE US & HOW IT WORKS (ANIMATED 4-STEP PROCESS) */}
      <TrustSection onOpenBooking={() => onOpenBooking()} />

      {/* 11. SUPPORTED BRANDS CAROUSEL */}
      <BrandSlider />

      {/* 12. THANE SERVICE AREA VISUAL SECTION & PROMINENT CARDS */}
      <ThaneAreaVisual navigate={navigate} onOpenBooking={onOpenBooking} />

      {/* 13. GLOBAL FAQS ACCORDION */}
      <FAQAccordion items={globalFAQs} />

      {/* 14. FINAL LIGHT BLUE GRADIENT CTA SECTION */}
      <section id="final-cta-section" className="relative bg-linear-to-r from-[#EAF6FF] via-[#F0F9FF] to-[#EAF6FF] py-16 lg:py-20 border-t border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B72E7]/20 text-[#0B72E7] text-xs font-extrabold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#0B72E7]" />
              <span>Doorstep AC Care Across Thane</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight leading-tight">
              Need AC Service in <span className="text-[#0B72E7]">Thane?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
              Book professional AC service or repair for your home or business. Certified technicians, transparent pricing, and same-day doorstep slots available.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                id="final-book-btn"
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book AC Service</span>
              </button>

              <a
                id="final-call-btn"
                href="tel:+917021455426"
                className="px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] hover:border-[#0B72E7]/40 font-bold text-base shadow-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#0B72E7]" />
                <span>Call +91 7021455426</span>
              </a>

              <a
                id="final-whatsapp-btn"
                href="https://wa.me/917021455426?text=Hi%2C%20I%20need%20AC%20service%20in%20Thane"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#5B6472]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>No Advance Payment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>30-Day Service Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Transparent Upfront Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
