import React from 'react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Snowflake, 
  Droplets, 
  Gauge, 
  Hammer, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Compass 
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LocationData, PageRoute } from '../types';
import { SERVICES_DATA } from '../data/services';
import { FAQAccordion } from '../components/FAQAccordion';
import { BrandSlider } from '../components/BrandSlider';
import { getLocationBySlug } from '../data/locations';

interface LocationDetailPageProps {
  location: LocationData;
  navigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string, locationName?: string) => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({
  location,
  navigate,
  onOpenBooking,
}) => {
  const commonIssues = [
    {
      title: `AC Not Cooling in ${location.name}`,
      desc: 'Dust accumulation on outdoor coils or capacitor failure causing compressor shutdown under heavy summer heat.',
      icon: Snowflake
    },
    {
      title: `Water Leakage Repair in ${location.name}`,
      desc: 'Algae slime choking internal drain pans and flexible runoff lines, causing indoor water dripping onto walls.',
      icon: Droplets
    },
    {
      title: `AC Gas Leakage & Refilling`,
      desc: 'Nitrogen pressure leak detection, copper flare brazing, and precision R32/R410A refrigerant gas charging.',
      icon: Gauge
    },
    {
      title: `Inverter PCB & Sensor Errors`,
      desc: 'Circuit board diagnostics, thermistor replacement, and communication fault repairs between indoor/outdoor units.',
      icon: Wrench
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white pt-10 pb-14 lg:pt-14 lg:pb-18 border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#5B6472] mb-6">
            <button onClick={() => navigate({ type: 'home' })} className="hover:text-[#0B72E7]">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate({ type: 'locations-list' })} className="hover:text-[#0B72E7]">
              Service Areas
            </button>
            <span>/</span>
            <span className="text-[#0B72E7]">{location.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] border border-[#0B72E7]/20 text-[#0B72E7] text-xs font-extrabold shadow-2xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>Doorstep AC Service in {location.name} ({location.zone})</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight leading-tight">
                AC Service in <span className="text-[#0B72E7]">{location.name}</span>
              </h1>

              {/* Secondary H2 */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#172033]/85">
                AC Repair in {location.name}
              </h2>

              {/* Natural Helpful Intro */}
              <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed max-w-3xl">
                {location.description} Our certified AC technicians provide reliable doorstep air conditioning service, quick breakdown repair, leak-tested gas charging, and precision installation for residential apartments, societies, and commercial premises across {location.name} (Pincode: {location.pincode}).
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
                {location.commonIssues.slice(0, 4).map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#172033] bg-white border border-[#E3EAF2] p-2.5 rounded-lg shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onOpenBooking(undefined, location.name)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span>Book AC Service</span>
                </button>

                <a
                  href="tel:+917021455426"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] font-bold text-base shadow-xs hover:border-[#0B72E7]/40 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-5 h-5 text-[#0B72E7] shrink-0" />
                  <span>Call +91 7021455426</span>
                </a>

                <a
                  href={`https://wa.me/917021455426?text=Hi%2C%20I%20need%20AC%20service%20in%20${encodeURIComponent(location.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-xs transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-[#E3EAF2] shadow-lg p-6 space-y-4">
                <div className="border-b border-[#E3EAF2] pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B72E7] block">
                    Local Service Profile
                  </span>
                  <h3 className="text-lg font-bold text-[#172033] mt-0.5">
                    {location.name}, Thane
                  </h3>
                </div>

                <div className="space-y-2.5 text-xs text-[#5B6472]">
                  <div className="flex justify-between py-1 border-b border-[#E3EAF2]/60">
                    <span>Region / Zone:</span>
                    <strong className="text-[#172033]">{location.zone}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E3EAF2]/60">
                    <span>Postal Code:</span>
                    <strong className="text-[#172033]">{location.pincode}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E3EAF2]/60">
                    <span>Service Availability:</span>
                    <strong className="text-[#16A34A]">All 7 Days (8 AM - 9 PM)</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Technician Visit:</span>
                    <strong className="text-[#172033]">Doorstep at Society / Flat</strong>
                  </div>
                </div>

                <div className="bg-[#F7FAFC] p-3 rounded-xl border border-[#E3EAF2] text-[11px] text-[#5B6472] space-y-1">
                  <strong>Key Landmarks & Societies Covered:</strong>
                  <p>{location.landmarks.join(', ')}</p>
                </div>

                <button
                  onClick={() => onOpenBooking(undefined, location.name)}
                  className="w-full py-3 rounded-lg bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  Schedule Technician to {location.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: PROFESSIONAL AC SERVICE IN [LOCATION] */}
      <section className="py-14 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0B72E7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doorstep AC Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
              Professional AC Service in {location.name}
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
              Air conditioners in {location.name} face heavy daily use during summer and post-monsoon humidity. Routine cleaning ensures your air conditioner cools efficiently, keeps electricity bills under control, and protects the compressor from premature burnout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-[#F7FAFC] p-5 rounded-xl border border-[#E3EAF2] space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Deep Jet Cleaning Wash</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                High-pressure water pump wash using waterproof indoor catchment jackets to clean cooling coils, blower wheels, and drain trays without spilling a single drop of water on your walls.
              </p>
            </div>

            <div className="bg-[#F7FAFC] p-5 rounded-xl border border-[#E3EAF2] space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Refrigerant Gas Check & Top-Up</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Accurate standing and suction pressure testing for R32, R410A, and R22 refrigerants with nitrogen leak detection and copper flare tightening.
              </p>
            </div>

            <div className="bg-[#F7FAFC] p-5 rounded-xl border border-[#E3EAF2] space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Installation & Relocation</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Precision wall plate leveling, core drill sleeve fitting, heavy-duty outdoor bracket mounting with anti-vibration rubber pads, and vacuum pump evacuation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: AC REPAIR IN [LOCATION] & COMMON PROBLEMS */}
      <section className="py-14 bg-[#F7FAFC] border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0B72E7]">
              <Wrench className="w-3.5 h-3.5" />
              <span>Prompt Diagnostics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
              AC Repair in {location.name} — Common Air Conditioner Problems
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
              When your air conditioner malfunctions in {location.name}, our technicians arrive equipped with multimeters, pressure gauges, and authentic replacement capacitors and relays to resolve issues on the first visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonIssues.map((issue, idx) => {
              const Icon = issue.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-xl border border-[#E3EAF2] shadow-2xs space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#172033] leading-snug">{issue.title}</h3>
                  <p className="text-xs text-[#5B6472] leading-relaxed">{issue.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION: AC SERVICES AVAILABLE IN [LOCATION] (CARDS) */}
      <section className="py-14 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0B72E7] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full Menu</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
                AC Services Available in {location.name}
              </h2>
            </div>
            <button
              onClick={() => onOpenBooking(undefined, location.name)}
              className="text-xs font-bold text-[#0B72E7] hover:underline"
            >
              Book Custom Service in {location.name} →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_DATA.slice(0, 8).map(srv => (
              <div
                key={srv.slug}
                className="bg-[#F7FAFC] rounded-xl p-4 border border-[#E3EAF2] hover:border-[#0B72E7] hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#172033] mb-1">{srv.title}</h3>
                  <p className="text-xs text-[#5B6472] line-clamp-2 mb-3">{srv.shortDesc}</p>
                </div>
                <div className="pt-2 border-t border-[#E3EAF2] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B72E7]">Starting From ₹{srv.priceStarting.toLocaleString('en-IN')}</span>
                  <button
                    onClick={() => onOpenBooking(srv.title, location.name)}
                    className="text-xs font-bold text-[#172033] hover:text-[#0B72E7] hover:underline cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: WHY CHOOSE LOCAL AC SERVICE IN [LOCATION]? */}
      <section className="py-14 bg-[#F7FAFC] border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0B72E7]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Locality Expertise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
                Why Choose Local AC Service in {location.name}?
              </h2>
              <p className="text-sm text-[#5B6472] leading-relaxed">
                Choosing a neighborhood technician familiar with {location.name} ensures punctual arrival without traffic delays across Thane junction points. Our technicians understand local residential society security protocols, building riser conduits, and specific power characteristics in {location.zone}.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Familiarity with High-Rise Societies:</strong> Experienced in handling AC outdoor bracket mountings on balcony railings and exterior civil ducts across {location.name}.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Mess-Free Jet Washing:</strong> We use specialized waterproof jackets to ensure no water spills on wooden furniture or freshly painted interior walls.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Transparent Quotes:</strong> Clear explanation of necessary part replacements with upfront cost estimates before commencing repair.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E3EAF2] shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#172033]">
                Book Doorstep Visit in {location.name}
              </h3>
              <p className="text-xs text-[#5B6472]">
                Our local dispatch team will assign the nearest certified AC technician in {location.name}.
              </p>
              
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => onOpenBooking(undefined, location.name)}
                  className="w-full py-3 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                >
                  Schedule AC Service Online
                </button>
                <a
                  href="tel:+917021455426"
                  className="w-full py-2.5 rounded-xl bg-[#F7FAFC] hover:bg-slate-100 text-[#172033] border border-[#E3EAF2] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0B72E7]" />
                  <span>Direct Call: +91 7021455426</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: AREAS WE COVER NEAR [LOCATION] */}
      <section className="py-12 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#0B72E7]" />
            <h3 className="text-lg font-bold text-[#172033]">
              Areas We Cover Near {location.name}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {location.nearbyLocalities.map((nearby, idx) => {
              // Try to find matching location data for slug
              const matched = getLocationBySlug(`ac-service-in-${nearby.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (matched) {
                      navigate({ type: 'location', slug: matched.slug });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`p-3 rounded-lg border text-xs font-semibold transition-all ${
                    matched
                      ? 'bg-[#F7FAFC] hover:bg-[#EAF6FF] text-[#172033] hover:text-[#0B72E7] border-[#E3EAF2] hover:border-[#0B72E7] cursor-pointer'
                      : 'bg-[#F7FAFC] text-[#5B6472] border-[#E3EAF2]'
                  }`}
                >
                  <span className="block truncate">📍 {nearby}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SUPPORTED BRANDS */}
      <BrandSlider />

      {/* 8. LOCATION FAQS ACCORDION */}
      <FAQAccordion
        items={location.faqs}
        title={`Frequently Asked Questions — AC Service in ${location.name}`}
        subtitle={`Real answers about air conditioner servicing, repair turnaround, and gas filling in ${location.name}, Thane.`}
      />

      {/* 9. BOOK AC SERVICE IN [LOCATION] FINAL CTA STRIP */}
      <section className="bg-linear-to-r from-[#0B72E7] to-[#16A9E0] py-12 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Book AC Service in {location.name}?
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Get your Split, Window, or Inverter AC serviced or repaired by certified technicians in {location.name}, Thane. Upfront rates & transparent testing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking(undefined, location.name)}
              className="px-6 py-3 rounded-xl bg-white text-[#0B72E7] hover:bg-slate-100 font-extrabold text-sm shadow-md transition-colors cursor-pointer"
            >
              Book Service in {location.name}
            </button>

            <a
              href="tel:+917021455426"
              className="px-6 py-3 rounded-xl bg-[#172033] hover:bg-slate-900 text-white font-extrabold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#16A9E0]" />
              <span>+91 7021455426</span>
            </a>

            <a
              href={`https://wa.me/917021455426?text=Hi%2C%20I%20need%20AC%20service%20in%20${encodeURIComponent(location.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
