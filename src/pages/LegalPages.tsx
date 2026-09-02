import React from 'react';
import { PageRoute } from '../types';
import { LOCATIONS_DATA } from '../data/locations';
import { SERVICES_DATA } from '../data/services';
import { BLOG_ARTICLES } from '../data/blogs';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'disclaimer' | 'sitemap';
  navigate: (route: PageRoute) => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({ type, navigate }) => {
  if (type === 'privacy') {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-[#5B6472] leading-relaxed">
          <h1 className="text-3xl font-extrabold text-[#172033]">Privacy Policy</h1>
          <p>Last updated: August 2026</p>
          <p>
            At <strong>AC Services in Thane</strong> (acservicesinthane.com), we respect the privacy of our customers across Thane West, Thane East, Ghodbunder Road, and Kalwa. This Privacy Policy outlines the types of personal data we collect and how we utilize and protect your information.
          </p>
          <h2 className="text-xl font-bold text-[#172033]">1. Information We Collect</h2>
          <p>
            When you request an AC technician visit via our website forms, phone call (+91 7021455426), or WhatsApp, we collect basic contact information including your full name, mobile number, service address/society in Thane, and details regarding your air conditioner model and service requirements.
          </p>
          <h2 className="text-xl font-bold text-[#172033]">2. Use of Information</h2>
          <p>
            We use your personal information solely to dispatch local AC service technicians to your address, provide upfront repair estimates, schedule service appointments, and follow up regarding service quality. We do not sell, rent, or trade your personal data to third-party marketing companies.
          </p>
          <h2 className="text-xl font-bold text-[#172033]">3. Contact Information</h2>
          <p>
            For any questions regarding our privacy practices, please contact us at acservicesinthane@gmail.com or by post at Thane West, Mumbai, Maharashtra 400606.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-[#5B6472] leading-relaxed">
          <h1 className="text-3xl font-extrabold text-[#172033]">Terms & Conditions</h1>
          <p>Last updated: August 2026</p>
          <p>
            Welcome to AC Services in Thane (acservicesinthane.com). By booking a service or using this website, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="text-xl font-bold text-[#172033]">1. Service Scope & Inspection</h2>
          <p>
            Our technicians provide doorstep diagnostic inspections, high-pressure jet washing, component repairs, gas charging, and installation services across Thane. A standard inspection fee may apply if you choose not to proceed with repair after diagnosis, which will be communicated prior to work.
          </p>
          <h2 className="text-xl font-bold text-[#172033]">2. Pricing & Payments</h2>
          <p>
            All prices and quotes provided on the website or during pre-inspection are estimates based on standard residential installations. Final quotations are provided after physical inspection of unit access, piping condition, and component integrity. Payment is due upon completion of testing.
          </p>
          <h2 className="text-xl font-bold text-[#172033]">3. Genuine Replacement Parts</h2>
          <p>
            Replaced components (capacitors, fan motors, PCB boards, relays) carry manufacturer specifications. The technician will test the unit in front of the customer prior to closing the job.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'disclaimer') {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-[#5B6472] leading-relaxed">
          <h1 className="text-3xl font-extrabold text-[#172033]">Disclaimer & Brand Notice</h1>
          <p>Last updated: August 2026</p>
          <p>
            <strong>AC Services in Thane</strong> is an independent local air conditioning service, repair, and maintenance provider operating in Thane, Maharashtra.
          </p>
          <p>
            All brand names, trademarks, and logos displayed on this website (including but not limited to Voltas, Daikin, LG, Bluestar, Samsung, Hitachi, Carrier, Panasonic, Godrej, Mitsubishi, Lloyd, O General, Haier, and Toshiba) are the property of their respective trademark holders.
          </p>
          <p>
            The use of brand names on this website is solely for descriptive purposes to indicate our technical compatibility and capability to service and repair these equipment brands. We are an independent service provider and do not claim to be the exclusive authorized manufacturer warranty center unless explicitly specified.
          </p>
        </div>
      </div>
    );
  }

  // Sitemap
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <h1 className="text-3xl font-extrabold text-[#172033]">Website HTML Sitemap</h1>
          <p className="text-sm text-[#5B6472] mt-1">
            Complete index of all main pages, services, 59 Thane service areas, and guides.
          </p>
        </div>

        {/* Main pages */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#172033] border-b border-[#E3EAF2] pb-2">
            Main Pages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-[#0B72E7]">
            <button onClick={() => navigate({ type: 'home' })} className="text-left hover:underline">Home</button>
            <button onClick={() => navigate({ type: 'services-list' })} className="text-left hover:underline">All Services</button>
            <button onClick={() => navigate({ type: 'locations-list' })} className="text-left hover:underline">59 Service Areas</button>
            <button onClick={() => navigate({ type: 'about' })} className="text-left hover:underline">About Us</button>
            <button onClick={() => navigate({ type: 'contact' })} className="text-left hover:underline">Contact Us</button>
            <button onClick={() => navigate({ type: 'blog-list' })} className="text-left hover:underline">AC Maintenance Blog</button>
            <button onClick={() => navigate({ type: 'privacy' })} className="text-left hover:underline">Privacy Policy</button>
            <button onClick={() => navigate({ type: 'terms' })} className="text-left hover:underline">Terms & Conditions</button>
            <button onClick={() => navigate({ type: 'disclaimer' })} className="text-left hover:underline">Disclaimer</button>
          </div>
        </div>

        {/* 14 Services */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#172033] border-b border-[#E3EAF2] pb-2">
            AC Services in Thane ({SERVICES_DATA.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-[#0B72E7]">
            {SERVICES_DATA.map(s => (
              <button
                key={s.slug}
                onClick={() => navigate({ type: 'service', slug: s.slug })}
                className="text-left hover:underline truncate"
              >
                • {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* 59 Locations */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#172033] border-b border-[#E3EAF2] pb-2">
            Thane Service Localities ({LOCATIONS_DATA.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs text-[#0B72E7]">
            {LOCATIONS_DATA.map(loc => (
              <button
                key={loc.slug}
                onClick={() => navigate({ type: 'location', slug: loc.slug })}
                className="text-left hover:underline truncate"
              >
                📍 AC Service in {loc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Guides */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#172033] border-b border-[#E3EAF2] pb-2">
            AC Maintenance & Troubleshooting Guides ({BLOG_ARTICLES.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0B72E7]">
            {BLOG_ARTICLES.map(b => (
              <button
                key={b.slug}
                onClick={() => navigate({ type: 'blog-detail', slug: b.slug })}
                className="text-left hover:underline truncate"
              >
                📖 {b.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
