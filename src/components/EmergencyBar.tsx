import React from 'react';
import { Phone, Calendar, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface EmergencyBarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const EmergencyBar: React.FC<EmergencyBarProps> = ({ onOpenBooking }) => {
  return (
    <div id="emergency-cta-bar" className="bg-[#EAF6FF] border-b border-[#E3EAF2] py-2.5 px-4 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-[#172033] text-sm md:text-base font-semibold text-center md:text-left">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0">
            <AlertCircle className="w-4 h-4" />
          </span>
          <span>
            <span className="text-red-600 font-bold">Emergency?</span> AC Not Cooling? AC Leaking Water? Need Urgent AC Repair in Thane?
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap justify-center">
          <a
            id="emergency-call-btn"
            href="tel:+918795496688"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#0B72E7] hover:bg-[#0856B2] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          <a
            id="emergency-whatsapp-btn"
            href="https://wa.me/918795496688?text=Hi%2C%20I%20need%20urgent%20AC%20repair%20in%20Thane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>WhatsApp Now</span>
          </a>

          <button
            id="emergency-book-btn"
            onClick={() => onOpenBooking('Urgent AC Repair')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0B72E7]" />
            <span>Book Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
