import React from 'react';
import { 
  Phone, 
  Calendar, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ArrowRight,
  MapPin,
  Clock,
  Zap,
  Gauge
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ServiceData, PageRoute } from '../types';
import { FAQAccordion } from '../components/FAQAccordion';
import { BrandSlider } from '../components/BrandSlider';
import { SERVICES_DATA } from '../data/services';

interface ServiceDetailPageProps {
  service: ServiceData;
  navigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  navigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white pt-10 pb-14 lg:pt-14 lg:pb-18 border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#5B6472] mb-6">
            <button onClick={() => navigate({ type: 'home' })} className="hover:text-[#0B72E7]">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate({ type: 'services-list' })} className="hover:text-[#0B72E7]">
              AC Services
            </button>
            <span>/</span>
            <span className="text-[#0B72E7]">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] border border-[#0B72E7]/20 text-[#0B72E7] text-xs font-extrabold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.category} in Thane</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight leading-tight">
                {service.title} in <span className="text-[#0B72E7]">Thane</span>
              </h1>

              <p className="text-base sm:text-lg text-[#172033]/85 font-medium">
                {service.shortDesc}
              </p>

              <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed max-w-3xl">
                {service.fullDesc}
              </p>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#172033] bg-white border border-[#E3EAF2] p-2.5 rounded-lg shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span>Book Service Now</span>
                </button>

                <a
                  href="tel:+917021455426"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] font-bold text-base shadow-xs hover:border-[#0B72E7]/40 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-5 h-5 text-[#0B72E7] shrink-0" />
                  <span>Call +91 7021455426</span>
                </a>

                <a
                  href={`https://wa.me/917021455426?text=Hi%2C%20I%20need%20${encodeURIComponent(service.title)}%20in%20Thane`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-xs transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Price Box */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-[#E3EAF2] shadow-lg p-6 space-y-4">
                {service.image && (
                  <div className="rounded-xl overflow-hidden aspect-16/10 relative border border-[#E3EAF2] shadow-2xs">
                    <img
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="border-b border-[#E3EAF2] pb-3 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5B6472]">
                    Starting Tariff
                  </span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-lg font-bold text-[#5B6472]">₹</span>
                    <span className="text-4xl font-extrabold text-[#0B72E7]">{service.priceStarting.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-[#5B6472]">/ unit</span>
                  </div>
                  <p className="text-xs text-[#16A34A] font-bold mt-1">
                    ✓ Transparent Quote with Post-Service Testing
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#5B6472]">
                  <div className="flex justify-between py-1 border-b border-[#E3EAF2]/60">
                    <span>Service Time:</span>
                    <strong className="text-[#172033]">45 - 90 minutes</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E3EAF2]/60">
                    <span>Location:</span>
                    <strong className="text-[#172033]">Doorstep across Thane</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Payment:</span>
                    <strong className="text-[#172033]">Pay Post Service Testing</strong>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-3.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                >
                  Schedule Technician Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Resolved Section */}
      <section className="py-14 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
              Common Issues Resolved by {service.title}
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472]">
              Our certified technicians diagnose and resolve these frequent technical faults:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.commonProblems.map((prob, idx) => (
              <div key={idx} className="bg-[#F7FAFC] p-4 rounded-xl border border-[#E3EAF2] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[#172033]">{prob}</h3>
                <p className="text-xs text-[#5B6472]">
                  Diagnosed with specialized testing tools and resolved with authentic replacement components.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-[#F7FAFC] border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-xl font-bold text-[#172033]">Other AC Services in Thane</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES_DATA.filter(s => s.slug !== service.slug).slice(0, 4).map(other => (
              <div
                key={other.slug}
                onClick={() => {
                  navigate({ type: 'service', slug: other.slug });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white p-4 rounded-xl border border-[#E3EAF2] hover:border-[#0B72E7] hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#172033]">{other.title}</h4>
                  <p className="text-xs text-[#5B6472] line-clamp-2 mt-1">{other.shortDesc}</p>
                </div>
                <div className="pt-3 mt-2 border-t border-[#E3EAF2] flex items-center justify-between text-xs font-bold text-[#0B72E7]">
                  <span>Starting From ₹{other.priceStarting.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <BrandSlider />

      {/* FAQs */}
      <FAQAccordion
        items={service.faqs}
        title={`Frequently Asked Questions — ${service.title}`}
        subtitle="Clear answers about procedure, duration, and pricing."
      />
    </div>
  );
};
