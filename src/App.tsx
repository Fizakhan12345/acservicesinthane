import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

const SITE_NAME = 'AC Services in Thane';
const DEFAULT_TITLE = 'AC Service in Thane | AC Repair in Thane';
const DEFAULT_DESC = 'Professional AC service, repair, gas filling, and installation in Thane West, Thane East, Ghodbunder Road, and Kalwa. Call +91 7021455426.';

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

  // Scroll to top + GA4 tracking on route change (title/meta now handled by <Helmet> below)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', 'G-3TV2CB1TQ5', {
        page_path: window.location.pathname,
        page_title: document.title,
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

  // Compute title/description per route — single source of truth for <Helmet>
  let pageTitle = DEFAULT_TITLE;
  let pageDesc = DEFAULT_DESC;
  let canonicalPath = '/';

  if (currentRoute.type === 'location' && currentLocation) {
    pageTitle = currentLocation.metaTitle || `AC Services in ${currentLocation.name} | AC Repair in ${currentLocation.name}`;
    pageDesc = currentLocation.metaDescription || `Get reliable AC services in ${currentLocation.name} for AC repair, installation, maintenance and servicing. Book trusted local AC technicians for quick service.`;
    canonicalPath = `/${currentLocation.slug}/`;
  } else if (currentRoute.type === 'service' && currentService) {
    pageTitle = `${currentService.title} in Thane | ${SITE_NAME}`;
    pageDesc = `${currentService.shortDesc} Available across Thane West, East, Ghodbunder Road & Kalwa. Call +91 7021455426.`;
    canonicalPath = `/${currentService.slug}/`;
  } else if (currentRoute.type === 'blog-detail' && currentBlog) {
    pageTitle = `${currentBlog.title} | ${SITE_NAME}`;
    pageDesc = currentBlog.excerpt;
    canonicalPath = `/blog/${currentBlog.slug}/`;
  } else if (currentRoute.type === 'services-list') {
    pageTitle = `${SITE_NAME} — Full Service Catalog | ${SITE_NAME}`;
    pageDesc = 'Explore 14 professional air conditioning services including jet washing, repair, gas filling, and PCB diagnostics across Thane.';
    canonicalPath = '/services/';
  } else if (currentRoute.type === 'locations-list') {
    pageTitle = `AC Service Areas in Thane (59 Localities) | ${SITE_NAME}`;
    pageDesc = 'Find certified AC service and repair across 59 Thane localities in Thane West, Thane East, Ghodbunder Road, and Kalwa.';
    canonicalPath = '/service-areas/';
  } else if (currentRoute.type === 'about') {
    pageTitle = `About Us | ${SITE_NAME}`;
    pageDesc = `Learn about ${SITE_NAME}—delivering transparent, reliable doorstep air conditioner maintenance and repair across Thane.`;
    canonicalPath = '/about/';
  } else if (currentRoute.type === 'contact') {
    pageTitle = `Contact ${SITE_NAME} | +91 7021455426`;
    pageDesc = 'Contact our Thane AC service coordinator at +91 7021455426 or acservicesinthane@gmail.com for doorstep technician scheduling.';
    canonicalPath = '/contact/';
  } else if (currentRoute.type === 'blog-list') {
    pageTitle = `AC Maintenance Guides & Troubleshooting | ${SITE_NAME}`;
    pageDesc = 'Expert air conditioner troubleshooting, filter cleaning, and energy saving tips for Thane homeowners and businesses.';
    canonicalPath = '/blog/';
  } else if (currentRoute.type === 'faq') {
    pageTitle = `AC Service FAQs in Thane | ${SITE_NAME}`;
    pageDesc = 'Answers to common questions about AC repair, servicing, gas filling, and installation across Thane, Ghodbunder Road, and Kalwa.';
    canonicalPath = '/faq/';
  } else if (currentRoute.type === 'privacy') {
    pageTitle = `Privacy Policy | ${SITE_NAME}`;
    pageDesc = `Read the privacy policy for ${SITE_NAME}, covering how we handle customer data for AC service bookings across Thane.`;
    canonicalPath = '/privacy/';
  } else if (currentRoute.type === 'terms') {
    pageTitle = `Terms & Conditions | ${SITE_NAME}`;
    pageDesc = `Terms and conditions governing AC service, repair, and installation bookings with ${SITE_NAME}.`;
    canonicalPath = '/terms/';
  } else if (currentRoute.type === 'disclaimer') {
    pageTitle = `Disclaimer | ${SITE_NAME}`;
    pageDesc = `Disclaimer regarding the services, pricing, and information provided by ${SITE_NAME}.`;
    canonicalPath = '/disclaimer/';
  }

  const canonicalUrl = `https://acservicesinthane.com${canonicalPath}`; // TODO: replace with your real domain

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172033] font-sans antialiased selection:bg-[#0B72E7] selection:text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

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
                  answer: 'Yes! You can call us directly at +91 7021455426, message us on WhatsApp, or use our instant online booking form to schedule a convenient morning, afternoon, or evening visit.'
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