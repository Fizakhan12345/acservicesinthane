import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  return (
    <div 
      id="mobile-sticky-cta"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E3EAF2] p-2.5 shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          id="mobile-sticky-call"
          href="tel:+918795496688"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#0B72E7] text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          id="mobile-sticky-whatsapp"
          href="https://wa.me/918795496688?text=Hi%2C%20I%20need%20AC%20service%20in%20Thane"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 mb-0.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Book Service */}
        <button
          id="mobile-sticky-book"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#172033] text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-[#16A9E0]" />
          <span>Book Service</span>
        </button>
      </div>
    </div>
  );
};
