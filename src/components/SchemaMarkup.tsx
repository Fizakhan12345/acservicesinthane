import React, { useEffect } from 'react';
import { PageRoute, LocationData, ServiceData, BlogArticle } from '../types';

interface SchemaMarkupProps {
  currentRoute: PageRoute;
  location?: LocationData;
  service?: ServiceData;
  blog?: BlogArticle;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  currentRoute,
  location,
  service,
  blog,
}) => {
  useEffect(() => {
    // Clean up old dynamic schemas
    const existingScript = document.getElementById('dynamic-jsonld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schemas: any[] = [];

    // 1. Organization & HVACBusiness / LocalBusiness Schema (Always NAP Consistent)
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HVACBusiness',
      '@id': 'https://acservicesinthane.com/#business',
      name: 'AC Services in Thane',
      url: 'https://acservicesinthane.com/',
      telephone: '+91 7021455426',
      email: 'acservicesinthane@gmail.com',
      image: 'https://acservicesinthane.com/logo.png',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Thane West',
        addressLocality: 'Thane',
        addressRegion: 'Maharashtra',
        postalCode: '400606',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.2183,
        longitude: 72.9781
      },
      areaServed: [
        'Thane West',
        'Thane East',
        'Ghodbunder Road',
        'Kalwa',
        'Naupada',
        'Panch Pakhadi',
        'Majiwada',
        'Kapurbawdi',
        'Kolshet',
        'Hiranandani Estate'
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '08:00',
        closes: '21:00'
      }
    });

    // 2. WebSite Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AC Services in Thane',
      url: 'https://acservicesinthane.com/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://acservicesinthane.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });

    // 3. Page-Specific Schema
    if (currentRoute.type === 'location' && location) {
      // Breadcrumbs
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://acservicesinthane.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: 'https://acservicesinthane.com/service-areas/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `AC Service in ${location.name}`,
            item: `https://acservicesinthane.com/${location.slug}/`
          }
        ]
      });

      // Service Schema for location
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `AC Service in ${location.name}`,
        serviceType: 'Air Conditioning Repair & Maintenance',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AC Services in Thane',
          telephone: '+91 7021455426',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Thane',
            addressRegion: 'Maharashtra',
            postalCode: '400606',
            addressCountry: 'IN'
          }
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: `${location.name}, Thane`
        },
        description: `Doorstep AC service, repair, gas charging, and installation in ${location.name}, Thane.`
      });

      // FAQPage schema for location FAQs
      if (location.faqs && location.faqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: location.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        });
      }
    } else if (currentRoute.type === 'service' && service) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        serviceType: service.category,
        description: service.fullDesc,
        provider: {
          '@type': 'LocalBusiness',
          name: 'AC Services in Thane',
          telephone: '+91 7021455426',
          email: 'acservicesinthane@gmail.com'
        },
        offers: {
          '@type': 'Offer',
          price: service.priceStarting,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock'
        }
      });

      if (service.faqs && service.faqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        });
      }
    } else if (currentRoute.type === 'blog-detail' && blog) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.excerpt,
        author: {
          '@type': 'Person',
          name: blog.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'AC Services in Thane',
          url: 'https://acservicesinthane.com/'
        },
        datePublished: '2026-08-01',
        mainEntityOfPage: `https://acservicesinthane.com/blog/${blog.slug}/`
      });
    }

    // Insert into DOM
    const script = document.createElement('script');
    script.id = 'dynamic-jsonld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('dynamic-jsonld-schema');
      if (el) el.remove();
    };
  }, [currentRoute, location, service, blog]);

  return null;
};
