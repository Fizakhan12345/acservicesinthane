import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { getLocationBySlug } from './data/locations';
import { getServiceBySlug } from './data/services';
import { getBlogBySlug } from './data/blogs';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { SchemaMarkup } from './components/SchemaMarkup';

import { HomePage } from './pages/HomePage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServicesListPage } from './pages/ServicesListPage';
import { LocationsListPage } from './pages/LocationsListPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { LegalPages } from './pages/LegalPages';
import { FAQAccordion } from './components/FAQAccordion';
import { BrandSlider } from './components/BrandSlider';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>({ type: 'home' });
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>();
  const [selectedLocationForBooking, setSelectedLocationForBooking] = useState<string | undefined>();

  // Route matching from URL path
  useEffect(() => {
    const parseUrl = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      
      if (!path || path === '') {
        setCurrentRoute({ type: 'home' });
        return;
      }

      if (path === 'services' || path === 'ac-services') {
        setCurrentRoute({ type: 'services-list' });
        return;
      }

      if (path === 'service-areas' || path === 'locations') {
        setCurrentRoute({ type: 'locations-list' });
        return;
      }

      if (path === 'about' || path === 'about-us') {
        setCurrentRoute({ type: 'about' });
        return;
      }

      if (path === 'contact' || path === 'contact-us') {
        setCurrentRoute({ type: 'contact' });
        return;
      }

      if (path === 'blog' || path === 'blogs' || path === 'guides') {
        setCurrentRoute({ type: 'blog-list' });
        return;
      }

      if (path.startsWith('blog/')) {
        const blogSlug = path.replace(/^blog\//, '');
        setCurrentRoute({ type: 'blog-detail', slug: blogSlug });
        return;
      }

      if (path === 'faq' || path === 'faqs') {
        setCurrentRoute({ type: 'faq' });
        return;
      }

      if (path === 'privacy' || path === 'privacy-policy') {
        setCurrentRoute({ type: 'privacy' });
        return;
      }

      if (path === 'terms' || path === 'terms-and-conditions') {
        setCurrentRoute({ type: 'terms' });
        return;
      }

      if (path === 'disclaimer') {
        setCurrentRoute({ type: 'disclaimer' });
        return;
      }

      if (path === 'sitemap') {
        setCurrentRoute({ type: 'sitemap' });
        return;
      }

      // Check if matches a service slug
      const service = getServiceBySlug(path);
      if (service) {
        setCurrentRoute({ type: 'service', slug: service.slug });
        return;
      }

      // Check if matches a location slug
      const location = getLocationBySlug(path);
      if (location) {
        setCurrentRoute({ type: 'location', slug: location.slug });
        return;
      }

      // Default fallback
      setCurrentRoute({ type: 'home' });
    };

    parseUrl();

    const handlePopState = () => parseUrl();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Page Title and Meta description on route change
  useEffect(() => {
    let title = 'AC Service in Thane | AC Repair in Thane';
    let metaDesc = 'Professional AC service, repair, gas filling, and installation in Thane West, Thane East, Ghodbunder Road, and Kalwa. Call +91 8795496688.';

    if (currentRoute.type === 'location' && currentRoute.slug) {
      const loc = getLocationBySlug(currentRoute.slug);
      if (loc) {
        title = loc.metaTitle || `AC Services in ${loc.name} | AC Repair in ${loc.name}`;
        metaDesc = loc.metaDescription || `Get reliable AC services in ${loc.name} for AC repair, installation, maintenance and servicing. Book trusted local AC technicians for quick service.`;
      }
    } else if (currentRoute.type === 'service' && currentRoute.slug) {
      const srv = getServiceBySlug(currentRoute.slug);
      if (srv) {
        title = `${srv.title} in Thane | AC Services in Thane`;
        metaDesc = `${srv.shortDesc} Available across Thane West, East, Ghodbunder Road & Kalwa. Call +91 8795496688.`;
      }
    } else if (currentRoute.type === 'blog-detail' && currentRoute.slug) {
      const blog = getBlogBySlug(currentRoute.slug);
      if (blog) {
        title = `${blog.title} | AC Services in Thane`;
        metaDesc = blog.excerpt;
      }
    } else if (currentRoute.type === 'services-list') {
      title = 'AC Services in Thane — Full Service Catalog | AC Services in Thane';
      metaDesc = 'Explore 14 professional air conditioning services including jet washing, repair, gas filling, and PCB diagnostics across Thane.';
    } else if (currentRoute.type === 'locations-list') {
      title = 'AC Service Areas in Thane (59 Localities) | AC Services in Thane';
      metaDesc = 'Find certified AC service and repair across 59 Thane localities in Thane West, Thane East, Ghodbunder Road, and Kalwa.';
    } else if (currentRoute.type === 'about') {
      title = 'About Us | AC Services in Thane';
      metaDesc = 'Learn about AC Services in Thane—delivering transparent, reliable doorstep air conditioner maintenance and repair across Thane.';
    } else if (currentRoute.type === 'contact') {
      title = 'Contact AC Services in Thane | +91 8795496688';
      metaDesc = 'Contact our Thane AC service coordinator at +91 8795496688 or acservicesinthane@gmail.com for doorstep technician scheduling.';
    } else if (currentRoute.type === 'blog-list') {
      title = 'AC Maintenance Guides & Troubleshooting | AC Services in Thane';
      metaDesc = 'Expert air conditioner troubleshooting, filter cleaning, and energy saving tips for Thane homeowners and businesses.';
    }

    document.title = title;

    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', metaDesc);

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', title);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', metaDesc);
    }

    // Google Analytics 4 route tracking for client-side navigation
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', 'G-3TV2CB1TQ5', {
        page_path: window.location.pathname,
        page_title: title,
      });
    }
  }, [currentRoute]);

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);

    let path = '/';
    if (route.type === 'service' && route.slug) path = `/${route.slug}/`;
    else if (route.type === 'location' && route.slug) path = `/${route.slug}/`;
    else if (route.type === 'services-list') path = '/services/';
    else if (route.type === 'locations-list') path = '/service-areas/';
    else if (route.type === 'about') path = '/about/';
    else if (route.type === 'contact') path = '/contact/';
    else if (route.type === 'blog-list') path = '/blog/';
    else if (route.type === 'blog-detail' && route.slug) path = `/blog/${route.slug}/`;
    else if (route.type === 'faq') path = '/faq/';
    else if (route.type === 'privacy') path = '/privacy/';
    else if (route.type === 'terms') path = '/terms/';
    else if (route.type === 'disclaimer') path = '/disclaimer/';
    else if (route.type === 'sitemap') path = '/sitemap/';

    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string, locationName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setSelectedLocationForBooking(locationName);
    setBookingModalOpen(true);
  };

  // Find active location, service or blog
  const currentLocation = currentRoute.type === 'location' && currentRoute.slug
    ? getLocationBySlug(currentRoute.slug)
    : undefined;

  const currentService = currentRoute.type === 'service' && currentRoute.slug
    ? getServiceBySlug(currentRoute.slug)
    : undefined;

  const currentBlog = currentRoute.type === 'blog-detail' && currentRoute.slug
    ? getBlogBySlug(currentRoute.slug)
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172033] font-sans antialiased selection:bg-[#0B72E7] selection:text-white">
      {/* Schema Markup for SEO/AEO/GEO */}
      <SchemaMarkup
        currentRoute={currentRoute}
        location={currentLocation}
        service={currentService}
        blog={currentBlog}
      />

      {/* Navigation Header */}
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="grow">
        {currentRoute.type === 'home' && (
          <HomePage navigate={navigate} onOpenBooking={handleOpenBooking} />
        )}

        {currentRoute.type === 'location' && currentLocation && (
          <LocationDetailPage
            location={currentLocation}
            navigate={navigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute.type === 'service' && currentService && (
          <ServiceDetailPage
            service={currentService}
            navigate={navigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute.type === 'services-list' && (
          <ServicesListPage navigate={navigate} onOpenBooking={handleOpenBooking} />
        )}

        {currentRoute.type === 'locations-list' && (
          <LocationsListPage navigate={navigate} />
        )}

        {currentRoute.type === 'about' && (
          <AboutPage navigate={navigate} onOpenBooking={handleOpenBooking} />
        )}

        {currentRoute.type === 'contact' && (
          <ContactPage navigate={navigate} />
        )}

        {currentRoute.type === 'blog-list' && (
          <BlogListPage navigate={navigate} onOpenBooking={handleOpenBooking} />
        )}

        {currentRoute.type === 'blog-detail' && currentBlog && (
          <BlogDetailPage
            article={currentBlog}
            navigate={navigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute.type === 'faq' && (
          <div className="py-12">
            <FAQAccordion
              items={[
                {
                  question: 'What AC services do you provide in Thane?',
                  answer: 'We provide high-pressure jet cleaning, general diagnostics & repair, gas leak testing and refilling (R32, R410A, R22), water leakage repair, installation/uninstallation, compressor and PCB circuit repair, and annual maintenance contracts (AMC).'
                },
                {
                  question: 'Which areas of Thane do you cover for doorstep service?',
                  answer: 'We cover all 59 approved localities across Thane West, Thane East, Ghodbunder Road, and Kalwa—including Naupada, Panch Pakhadi, Majiwada, Kapurbawdi, Manpada, Vartak Nagar, Wagle Estate, Kolshet, Brahmand, Hiranandani Estate, Kasarvadavali, and major residential townships like Lodha Amara, Rustomjee Urbania, and Runwal Garden.'
                },
                {
                  question: 'Do you repair Split ACs and Window ACs in Thane?',
                  answer: 'Yes, we service and repair all types of Split ACs, Window ACs, Inverter ACs, Multi-Split units, and Commercial Cassette air conditioners across all major brands.'
                },
                {
                  question: 'Can I book an AC technician by phone or WhatsApp?',
                  answer: 'Yes! You can call us directly at +91 8795496688, message us on WhatsApp, or use our instant online booking form to schedule a convenient morning, afternoon, or evening visit.'
                },
                {
                  question: 'Do you provide AC gas filling and leakage testing in Thane?',
                  answer: 'Yes, our technicians conduct nitrogen pressure leak testing to find and weld copper leaks before refilling authentic R32, R410A, or R22 refrigerant with manifold gauge verification.'
                },
                {
                  question: 'What are your AC service charges in Thane?',
                  answer: 'Our standard jet pump deep cleaning starts from ₹549 per unit with transparent pricing, honest part quotes, and zero advance payment required.'
                }
              ]}
              title="Thane AC Service & Repair FAQs"
              subtitle="Common questions about doorstep visits, service turnaround, pricing, and spare parts in Thane."
            />
            <BrandSlider />
          </div>
        )}

        {(currentRoute.type === 'privacy' ||
          currentRoute.type === 'terms' ||
          currentRoute.type === 'disclaimer' ||
          currentRoute.type === 'sitemap') && (
          <LegalPages type={currentRoute.type} navigate={navigate} />
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA onOpenBooking={handleOpenBooking} />

      {/* Booking & Quote Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedServiceForBooking}
        initialLocation={selectedLocationForBooking}
      />
    </div>
  );
}
