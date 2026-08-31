import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Zap, Wind, ShieldCheck, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface BeforeAfterComparisonProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after-cleaning-section" className="py-16 lg:py-20 bg-[#F7FAFC] border-b border-[#E3EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Pressure Jet Wash Results</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
            See the Difference Professional AC Cleaning Makes
          </h2>
          <p className="text-sm sm:text-base text-[#5B6472] mt-2">
            Drag the interactive slider to compare a dust-choked AC cooling coil against a restored, sanitized jet-cleaned evaporator.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl border-2 border-white select-none cursor-ew-resize touch-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER Image (Full Width Background) */}
            <div className="absolute inset-0 w-full h-full bg-slate-900">
              <img
                src="/images/ac-clean-coil.jpg"
                alt="After professional AC jet cleaning in Thane"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#172033]/60 via-transparent to-transparent" />
              
              {/* After Label */}
              <div className="absolute top-4 right-4 bg-[#16A34A] text-white text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 z-10">
                <Sparkles className="w-4 h-4" />
                <span>AFTER: Cleaned & Sanitized</span>
              </div>

              {/* After Key Metrics Card */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/40 shadow-lg text-right max-w-[200px] hidden sm:block">
                <span className="text-[11px] font-bold text-[#16A34A] block">✓ 100% Free Airflow</span>
                <span className="text-[11px] font-bold text-[#0B72E7] block">✓ Max Delta Cooling</span>
                <span className="text-[10px] text-[#5B6472] block mt-0.5">Bacteria & odor eliminated</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped with Slider Width) */}
            <div
              className="absolute inset-0 h-full overflow-hidden border-r-2 border-white"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/ac-dirty-coil.jpg"
                alt="Before AC service dusty clogged unit in Thane"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center filter saturate-75 contrast-125"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#172033]/70 via-transparent to-transparent" />
              
              {/* Before Label */}
              <div className="absolute top-4 left-4 bg-[#DC2626] text-white text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-lg shadow-md z-10">
                <span>BEFORE: Clogged & Dusty</span>
              </div>

              {/* Before Problem Indicators */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/40 shadow-lg text-left max-w-[200px] hidden sm:block">
                <span className="text-[11px] font-bold text-[#DC2626] block">⚠ Choked Aluminum Fins</span>
                <span className="text-[11px] font-bold text-[#DC2626] block">⚠ Restricted Cooling</span>
                <span className="text-[10px] text-[#5B6472] block mt-0.5">High electricity bills</span>
              </div>
            </div>

            {/* Slider Divider Bar & Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B72E7] text-white border-2 border-white shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
                <div className="flex items-center justify-center -space-x-1">
                  <ChevronLeft className="w-4 h-4" />
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparison Presets / Tap Buttons */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setSliderPosition(15)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                sliderPosition < 30 ? 'bg-[#172033] text-white' : 'bg-white text-[#5B6472] hover:bg-slate-100 border border-[#E3EAF2]'
              }`}
            >
              View After Cleaning
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                sliderPosition >= 30 && sliderPosition <= 70 ? 'bg-[#0B72E7] text-white' : 'bg-white text-[#5B6472] hover:bg-slate-100 border border-[#E3EAF2]'
              }`}
            >
              Split View (50/50)
            </button>
            <button
              onClick={() => setSliderPosition(85)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                sliderPosition > 70 ? 'bg-[#172033] text-white' : 'bg-white text-[#5B6472] hover:bg-slate-100 border border-[#E3EAF2]'
              }`}
            >
              View Before Cleaning
            </button>
          </div>

          {/* 3 Outcome Benefit Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-xl border border-[#E3EAF2] text-center space-y-1 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center mx-auto mb-2">
                <Wind className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-black text-[#172033]">30% Faster Cooling</h4>
              <p className="text-xs text-[#5B6472]">Unchoked coils transfer heat rapidly into the refrigerant</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E3EAF2] text-center space-y-1 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-black text-[#172033]">20% Lower Power Bill</h4>
              <p className="text-xs text-[#5B6472]">Compressor reaches setpoint fast without continuous overload</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E3EAF2] text-center space-y-1 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-black text-[#172033]">Odor & Mold Free Air</h4>
              <p className="text-xs text-[#5B6472]">Foam jet wash cleans deep between aluminum micro-fins</p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-8 p-5 bg-white rounded-2xl border border-[#E3EAF2] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div>
              <h4 className="text-base font-extrabold text-[#172033]">Ready for a Deep Jet Foam Wash?</h4>
              <p className="text-xs text-[#5B6472]">Starting From just ₹549 with complete mess-free jacket protection in Thane.</p>
            </div>
            <button
              onClick={() => onOpenBooking('AC Jet Cleaning Service')}
              className="px-6 py-3 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white text-xs sm:text-sm font-extrabold shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Book Jet Cleaning
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
