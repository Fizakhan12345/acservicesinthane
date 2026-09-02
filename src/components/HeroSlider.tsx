import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Phone, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  Snowflake,
  Clock,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
interface HeroSliderProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface SlideData {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  desc: string;
  ctaText: string;
  ctaAction: string;
  image: string;
  alt: string;
  floatingBadge1: { text: string; icon: string; position: string };
  floatingBadge2: { text: string; icon: string; position: string };
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides: SlideData[] = [
    {
      id: 1,
      badge: 'Doorstep AC Service in Thane',
      title: 'AC Service in',
      highlight: 'Thane',
      subtitle: 'Professional AC Service & Repair at Your Doorstep',
      desc: 'Expert high-pressure jet pump foam washing, indoor & outdoor unit sanitization, and deep chemical cleaning across all 59 Thane localities.',
      ctaText: 'Book AC Service',
      ctaAction: 'AC Jet Cleaning Service',
      image: '/images/ac-cleaning.jpg',
      alt: 'Professional Indian AC technician servicing split AC indoor unit in Thane',
      floatingBadge1: { text: 'AC Deep Jet Wash', icon: 'Sparkles', position: 'top-8 -left-4 sm:-left-6' },
      floatingBadge2: { text: 'Mess-Free Jacket', icon: 'ShieldCheck', position: 'bottom-10 -right-4 sm:-right-6' }
    },
    {
      id: 2,
      badge: 'Fast Response & Certified Technicians',
      title: 'Reliable AC',
      highlight: 'Repair in Thane',
      subtitle: 'Get Your AC Checked by a Professional Technician',
      desc: 'Fast diagnosis for not cooling, water leakage, strange rattling noises, electrical trip, and precision PCB & compressor repairs with genuine parts.',
      ctaText: 'Book AC Repair',
      ctaAction: 'AC Repair & Diagnostics',
      image: '/images/ac-repair.jpg',
      alt: 'Skilled Indian technician repairing air conditioner with diagnostic tools in Thane',
      floatingBadge1: { text: 'AC Repair & Fix', icon: 'Wrench', position: 'top-10 -left-4 sm:-left-6' },
      floatingBadge2: { text: 'Gas Leak Test & Refill', icon: 'Snowflake', position: 'bottom-12 -right-4 sm:-right-6' }
    },
    {
      id: 3,
      badge: 'Precision AC Setup & Yearly Care',
      title: 'AC Installation &',
      highlight: 'Maintenance',
      subtitle: 'Keep Your AC Efficient, Clean & Ready for Every Season',
      desc: 'Vibration-free split & window AC installation, precision copper flaring, nitrogen pressure testing, uninstallation, and customized AMC packages.',
      ctaText: 'Book Service',
      ctaAction: 'AC Installation & Setup',
      image: '/images/ac-installation.jpg',
      alt: 'Professional Indian technician installing split AC in a modern Thane apartment',
      floatingBadge1: { text: 'AC Installation', icon: 'Layers', position: 'top-8 -left-4 sm:-left-6' },
      floatingBadge2: { text: 'Commercial & Home AMC', icon: 'Cpu', position: 'bottom-8 -right-4 sm:-right-6' }
    },
    {
      id: 4,
      badge: 'Preventive Seasonal Maintenance',
      title: 'Complete AC',
      highlight: 'Maintenance',
      subtitle: 'Cleaning, Inspection & AC Maintenance Services',
      desc: 'Comprehensive 12-point health audit, coil de-scaling, electrical terminal tightening, amperage checks, and cooling delta verification.',
      ctaText: 'Schedule Service',
      ctaAction: 'AC Routine Maintenance',
      image: '/images/ac-maintenance.jpg',
      alt: 'Indian technician inspecting AC filter and cooling coils in Thane home',
      floatingBadge1: { text: 'AC Maintenance', icon: 'Clock', position: 'top-12 -left-4 sm:-left-6' },
      floatingBadge2: { text: '100% Cooling Restored', icon: 'CheckCircle2', position: 'bottom-10 -right-4 sm:-right-6' }
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Wrench': return Wrench;
      case 'ShieldCheck': return ShieldCheck;
      case 'Layers': return Layers;
      case 'Snowflake': return Snowflake;
      case 'Clock': return Clock;
      case 'CheckCircle2': return CheckCircle2;
      case 'Cpu': return Cpu;
      default: return Sparkles;
    }
  };

  const current = slides[currentSlide];
  const FloatingIcon1 = getBadgeIcon(current.floatingBadge1.icon);
  const FloatingIcon2 = getBadgeIcon(current.floatingBadge2.icon);

  return (
    <section 
      id="hero-slider-section"
      className="relative bg-linear-to-b from-[#EAF6FF]/70 via-white to-white overflow-hidden border-b border-[#E3EAF2]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="AC Service in Thane Hero Presentation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[500px] lg:min-h-[540px]">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left z-10">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#0B72E7]/25 text-[#0B72E7] text-xs sm:text-sm font-bold shadow-xs animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#0B72E7] shrink-0" />
              <span>{current.badge}</span>
            </div>

            {/* H1 Heading */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#172033] tracking-tight leading-[1.12] transition-all duration-300">
                {current.title}{' '}
                <span className="text-[#0B72E7]">{current.highlight}</span>
              </h1>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#172033]/85 pt-1">
                {current.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed max-w-2xl mx-auto lg:mx-0 min-h-[48px]">
              {current.desc}
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-left">
              {[
                'Certified Local Technicians',
                'Home & Office AC Care',
                'Fast Local Service',
                'Transparent Quotations',
                '59 Thane Localities',
                'All Brands Repaired'
              ].map((point, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#172033] bg-white/90 border border-[#E3EAF2] px-2.5 py-2 rounded-lg shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span className="truncate">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenBooking(current.ctaAction)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{current.ctaText}</span>
              </button>

              <a
                id="hero-call-cta"
                href="tel:+917021455426"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] hover:border-[#0B72E7]/40 font-bold text-sm sm:text-base shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B72E7]" />
                <span>+91 7021455426</span>
              </a>

              <a
                id="hero-whatsapp-cta"
                href="https://wa.me/917021455426?text=Hi%2C%20I%20need%20AC%20service%20in%20Thane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Right Visual Slider Card with Floating Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-slate-100 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
              {/* Image Container with Smooth Crossfade */}
              {slides.map((s, index) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle Light-Blue Gradient Overlay for Contrast */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#172033]/60 via-transparent to-transparent lg:from-[#172033]/40" />
                  
                  {/* Slide Captions on Visual */}
                  <div className="absolute bottom-3 left-3 right-3 text-white z-20 pointer-events-none">
                    <div className="inline-block bg-[#172033]/70 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-semibold text-white/90">
                      {s.highlight} • Thane Doorstep Visit
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Controls Arrows */}
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#172033] hover:text-[#0B72E7] shadow-md flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#172033] hover:text-[#0B72E7] shadow-md flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Floating Service Badge 1 (Top Left) */}
            <div 
              className={`hidden sm:flex items-center gap-2 absolute ${current.floatingBadge1.position} z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E3EAF2] shadow-lg animate-float`}
            >
              <div className="w-7 h-7 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shrink-0">
                <FloatingIcon1 className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#172033] whitespace-nowrap">
                {current.floatingBadge1.text}
              </span>
            </div>

            {/* Floating Service Badge 2 (Bottom Right) */}
            <div 
              className={`hidden sm:flex items-center gap-2 absolute ${current.floatingBadge2.position} z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E3EAF2] shadow-lg animate-float-delayed`}
            >
              <div className="w-7 h-7 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shrink-0">
                <FloatingIcon2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#172033] whitespace-nowrap">
                {current.floatingBadge2.text}
              </span>
            </div>

            {/* Slide Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-[#0B72E7]' : 'w-2 bg-[#CAD5E2] hover:bg-[#94A3B8]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
