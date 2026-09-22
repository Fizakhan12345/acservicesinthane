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
import { getSeoForPath } from './data/seoRoutes';

export function parsePathToRoute(rawPath: string): PageRoute {
  const path = rawPath.replace(/^\/|\/$/g, '');
  
  if (!path || path === '') return { type: 'home' };
  if (path === 'services' || path === 'ac-services') return { type: 'services-list' };
  if (path === 'service-areas' || path === 'locations') return { type: 'locations-list' };
  if (path === 'about' || path === 'about-us') return { type: 'about' };
  if (path === 'contact' || path === 'contact-us') return { type: 'contact' };
  if (path === 'blog' || path === 'blogs' || path === 'guides') return { type: 'blog-list' };
  if (path.startsWith('blog/')) {
    return { type: 'blog-detail', slug: path.replace(/^blog\//, '') };
  }
  if (path === 'faq' || path === 'faqs') return { type: 'faq' };
  if (path === 'privacy' || path === 'privacy-policy') return { type: 'privacy' };
  if (path === 'terms' || path === 'terms-and-conditions') return { type: 'terms' };
  if (path === 'disclaimer') return { type: 'disclaimer' };
  if (path === 'sitemap') return { type: 'sitemap' };

  // Check if matches a service slug
  const service = getServiceBySlug(path);
  if (service) return { type: 'service', slug: service.slug };

  // Check if matches a location slug
  const location = getLocationBySlug(path);
  if (location) return { type: 'location', slug: location.slug };

  return { type: 'home' };
}

export function routeToPath(route: PageRoute): string {
  if (route.type === 'service' && route.slug) return `/${route.slug}/`;
  if (route.type === 'location' && route.slug) return `/${route.slug}/`;
  if (route.type === 'services-list') return '/services/';
  if (route.type === 'locations-list') return '/service-areas/';
  if (route.type === 'about') return '/about/';
  if (route.type === 'contact') return '/contact/';
  if (route.type === 'blog-list') return '/blog/';
  if (route.type === 'blog-detail' && route.slug) return `/blog/${route.slug}/`;
  if (route.type === 'faq') return '/faq/';
  if (route.type === 'privacy') return '/privacy/';
  if (route.type === 'terms') return '/terms/';
  if (route.type === 'disclaimer') return '/disclaimer/';
  if (route.type === 'sitemap') return '/sitemap/';
  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      return parsePathToRoute(window.location.pathname);
    }
    return { type: 'home' };
  });
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>();
  const [selectedLocationForBooking, setSelectedLocationForBooking] = useState<string | undefined>();

  // Route matching from URL path on back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parsePathToRoute(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize Page Title, Canonical, Meta Description, Open Graph & Twitter tags
  useEffect(() => {
    const routePath = routeToPath(currentRoute);
    const seo = getSeoForPath(routePath);

    document.title = seo.title;

    // Helper to get or create a tag
    const getOrCreateMeta = (selector: string, attrName: string, attrVal: string): HTMLMetaElement => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      return el;
    };

    // Description
    const metaDesc = getOrCreateMeta('meta[name="description"]', 'name', 'description');
    metaDesc.setAttribute('content', seo.description);

    // Canonical
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', seo.canonical);

    // OpenGraph
    getOrCreateMeta('meta[property="og:title"]', 'property', 'og:title').setAttribute('content', seo.ogTitle);
    getOrCreateMeta('meta[property="og:description"]', 'property', 'og:description').setAttribute('content', seo.ogDescription);
    getOrCreateMeta('meta[property="og:url"]', 'property', 'og:url').setAttribute('content', seo.ogUrl);
    getOrCreateMeta('meta[property="og:type"]', 'property', 'og:type').setAttribute('content', seo.ogType);
    getOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name').setAttribute('content', 'AC Services in Thane');

    // Twitter
    getOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card').setAttribute('content', 'summary_large_image');
    getOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title').setAttribute('content', seo.twitterTitle);
    getOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description').setAttribute('content', seo.twitterDescription);

    // Google Analytics 4 route tracking for client-side navigation
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', 'G-3TV2CB1TQ5', {
        page_path: routePath,
        page_title: seo.title,
      });
    }
  }, [currentRoute]);

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    const path = routeToPath(route);
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
