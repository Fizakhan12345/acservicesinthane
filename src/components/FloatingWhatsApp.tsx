import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      id="floating-whatsapp-widget"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on Hover */}
      <div 
        className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-white text-[#172033] text-xs font-extrabold shadow-lg border border-[#E3EAF2] transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/918795496688?text=Hi%2C%20I%20need%20AC%20service%20in%20Thane"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with AC Technician"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 animate-whatsapp-pulse cursor-pointer border-2 border-white"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
      </a>
    </div>
  );
};
