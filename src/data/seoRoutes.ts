import { LOCATIONS_DATA } from './locations';
import { AREA_SEO_METADATA } from './areaSeoMetadata';
import { SERVICES_DATA } from './services';
import { BLOG_ARTICLES } from './blogs';

export const SITE_URL = 'https://www.acservicesinthane.com';

export interface RouteSeo {
  path: string; // e.g. '/', '/services/', '/ac-service-in-pokhran-road-no-2/', '/blog/why-is-my-ac-not-cooling-thane/'
  canonical: string; // e.g. 'https://www.acservicesinthane.com/ac-service-in-pokhran-road-no-2/'
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogType: 'website' | 'article';
  twitterTitle: string;
  twitterDescription: string;
  jsonLd?: object[];
}

export const STATIC_PAGES_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'AC Services in Thane | AC Repair in Thane',
    description: 'Get reliable AC services in Thane for AC repair, installation, maintenance and servicing. Book trusted local AC technicians for quick service.',
  },
  '/services/': {
    title: 'AC Services in Thane — Full Service Catalog | AC Services in Thane',
    description: 'Explore 14 professional air conditioning services including jet washing, repair, gas filling, and PCB diagnostics across Thane.',
  },
  '/service-areas/': {
    title: 'AC Service Areas in Thane (59 Localities) | AC Services in Thane',
    description: 'Find certified AC service and repair across 59 Thane localities in Thane West, Thane East, Ghodbunder Road, and Kalwa.',
  },
  '/about/': {
    title: 'About Us | AC Services in Thane',
    description: 'Learn about AC Services in Thane—delivering transparent, reliable doorstep air conditioner maintenance and repair across Thane.',
  },
  '/contact/': {
    title: 'Contact AC Services in Thane | +91 7021455426',
    description: 'Contact our Thane AC service coordinator at +91 7021455426 or acservicesinthane@gmail.com for doorstep technician scheduling.',
  },
  '/faq/': {
    title: 'Thane AC Service & Repair FAQs | AC Services in Thane',
    description: 'Frequently asked questions about doorstep AC service turnaround, charges, spare parts, and technician scheduling in Thane.',
  },
  '/blog/': {
    title: 'AC Maintenance Guides & Troubleshooting | AC Services in Thane',
    description: 'Expert air conditioner troubleshooting, filter cleaning, and energy saving tips for Thane homeowners and businesses.',
  },
  '/privacy/': {
    title: 'Privacy Policy | AC Services in Thane',
    description: 'Privacy Policy for AC Services in Thane outlining our data collection, customer contact protection, and privacy practices.',
  },
  '/terms/': {
    title: 'Terms and Conditions | AC Services in Thane',
    description: 'Terms of service and booking conditions for doorstep AC repairs, installations, and warranty guidelines across Thane.',
  },
  '/disclaimer/': {
    title: 'Disclaimer | AC Services in Thane',
    description: 'Independent service provider disclaimer regarding brand trademarks, diagnostic charges, and warranty terms for AC Services in Thane.',
  },
  '/sitemap/': {
    title: 'Sitemap — AC Services in Thane',
    description: 'Complete HTML sitemap directory of all service pages, 59 Thane locality repair guides, and air conditioning maintenance articles.',
  },
};

/**
 * Builds all 89 indexable canonical routes with their complete SEO metadata.
 */
export function getAllSeoRoutes(): RouteSeo[] {
  const routes: RouteSeo[] = [];

  // 1. Static Pages
  for (const [path, meta] of Object.entries(STATIC_PAGES_SEO)) {
    const canonical = `${SITE_URL}${path}`;
    routes.push({
      path,
      canonical,
      title: meta.title,
      description: meta.description,
      ogTitle: meta.title,
      ogDescription: meta.description,
      ogUrl: canonical,
      ogType: 'website',
      twitterTitle: meta.title,
      twitterDescription: meta.description,
      jsonLd: buildJsonLdForStatic(path, meta.title, meta.description, canonical),
    });
  }

  // 2. 14 Services
  for (const service of SERVICES_DATA) {
    const path = `/${service.slug}/`;
    const canonical = `${SITE_URL}${path}`;
    const title = `${service.title} in Thane | AC Services in Thane`;
    const description = `${service.shortDesc} Available across Thane West, East, Ghodbunder Road & Kalwa. Call +91 7021455426.`;
    routes.push({
      path,
      canonical,
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonical,
      ogType: 'website',
      twitterTitle: title,
      twitterDescription: description,
      jsonLd: buildJsonLdForService(service, canonical),
    });
  }

  // 3. 59 Locations
  for (const loc of LOCATIONS_DATA) {
    const path = `/${loc.slug}/`;
    const canonical = `${SITE_URL}${path}`;
    const seo = AREA_SEO_METADATA[loc.name];
    
    // Distinguish city-level location page from homepage to ensure 100% unique titles/descriptions
    let title: string;
    let description: string;
    if (loc.slug === 'ac-service-in-thane') {
      title = 'Doorstep AC Service in Thane City | AC Repair & Maintenance';
      description = 'Book verified doorstep AC technicians across Thane city. Comprehensive Split & Window AC repair, jet wash cleaning, and gas charging with guaranteed cooling.';
    } else {
      title = seo?.metaTitle || loc.metaTitle || `AC Services in ${loc.name} | AC Repair in ${loc.name}`;
      description = seo?.metaDescription || loc.metaDescription || `Get reliable AC services in ${loc.name} for AC repair, installation and maintenance. Book trusted local AC technicians for quick service.`;
    }

    routes.push({
      path,
      canonical,
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonical,
      ogType: 'website',
      twitterTitle: title,
      twitterDescription: description,
      jsonLd: buildJsonLdForLocation(loc, canonical, title, description),
    });
  }

  // 4. 6 Blog Articles
  for (const article of BLOG_ARTICLES) {
    const path = `/blog/${article.slug}/`;
    const canonical = `${SITE_URL}${path}`;
    const title = `${article.title} | AC Services in Thane`;
    const description = article.excerpt;

    routes.push({
      path,
      canonical,
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonical,
      ogType: 'article',
      twitterTitle: title,
      twitterDescription: description,
      jsonLd: buildJsonLdForBlog(article, canonical),
    });
  }

  return routes;
}

/**
 * Normalizes any request pathname (e.g. '/ac-service-in-pokhran-road-no-2', '/ac-service-in-pokhran-road-no-2/', 'services')
 * and returns the exact matching RouteSeo.
 */
export function getSeoForPath(rawPath: string): RouteSeo {
  let clean = rawPath.split('?')[0].split('#')[0].trim();
  if (!clean.startsWith('/')) clean = '/' + clean;
  if (!clean.endsWith('/')) clean = clean + '/';
  if (clean === '//') clean = '/';

  // Direct exact match
  const allRoutes = getAllSeoRoutes();
  const found = allRoutes.find(r => r.path === clean);
  if (found) return found;

  // Alternate slug formats (e.g. without trailing slash, or aliases)
  const stripped = clean.replace(/^\/|\/$/g, '');
  if (stripped === 'services' || stripped === 'ac-services') {
    const r = allRoutes.find(r => r.path === '/services/');
    if (r) return r;
  }
  if (stripped === 'service-areas' || stripped === 'locations') {
    const r = allRoutes.find(r => r.path === '/service-areas/');
    if (r) return r;
  }
  if (stripped === 'about' || stripped === 'about-us') {
    const r = allRoutes.find(r => r.path === '/about/');
    if (r) return r;
  }
  if (stripped === 'contact' || stripped === 'contact-us') {
    const r = allRoutes.find(r => r.path === '/contact/');
    if (r) return r;
  }
  if (stripped === 'blog' || stripped === 'blogs' || stripped === 'guides') {
    const r = allRoutes.find(r => r.path === '/blog/');
    if (r) return r;
  }
  if (stripped === 'faq' || stripped === 'faqs') {
    const r = allRoutes.find(r => r.path === '/faq/');
    if (r) return r;
  }

  // Location slug matching with or without prefix
  const locMatch = allRoutes.find(r => 
    r.path === `/${stripped}/` || 
    r.path === `/ac-service-in-${stripped}/` ||
    r.path.replace(/^\/ac-service-in-|\/$/g, '') === stripped
  );
  if (locMatch) return locMatch;

  // Default fallback: Homepage
  return allRoutes[0];
}

/**
 * Replaces the SEO tags and scripts in an HTML string with route-specific metadata.
 */
export function injectSeoMetadata(html: string, seo: RouteSeo): string {
  let result = html;

  // Replace <title>
  const titleTag = `<title>${escapeHtml(seo.title)}</title>`;
  if (result.includes('<title>')) {
    result = result.replace(/<title>[\s\S]*?<\/title>/i, titleTag);
  } else {
    result = result.replace('</head>', `  ${titleTag}\n</head>`);
  }

  // Replace or inject <meta name="description">
  const metaDescTag = `<meta name="description" content="${escapeAttr(seo.description)}" />`;
  if (/<meta\s+name=["']description["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+name=["']description["'][^>]*>/i, metaDescTag);
  } else {
    result = result.replace('</head>', `  ${metaDescTag}\n</head>`);
  }

  // Replace or inject <link rel="canonical">
  const canonicalTag = `<link rel="canonical" href="${escapeAttr(seo.canonical)}" />`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(result)) {
    result = result.replace(/<link\s+rel=["']canonical["'][^>]*>/i, canonicalTag);
  } else {
    result = result.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // Replace or inject Open Graph tags
  const ogTitleTag = `<meta property="og:title" content="${escapeAttr(seo.ogTitle)}" />`;
  if (/<meta\s+property=["']og:title["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+property=["']og:title["'][^>]*>/i, ogTitleTag);
  } else {
    result = result.replace('</head>', `  ${ogTitleTag}\n</head>`);
  }

  const ogDescTag = `<meta property="og:description" content="${escapeAttr(seo.ogDescription)}" />`;
  if (/<meta\s+property=["']og:description["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+property=["']og:description["'][^>]*>/i, ogDescTag);
  } else {
    result = result.replace('</head>', `  ${ogDescTag}\n</head>`);
  }

  const ogUrlTag = `<meta property="og:url" content="${escapeAttr(seo.ogUrl)}" />`;
  if (/<meta\s+property=["']og:url["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+property=["']og:url["'][^>]*>/i, ogUrlTag);
  } else {
    result = result.replace('</head>', `  ${ogUrlTag}\n</head>`);
  }

  const ogTypeTag = `<meta property="og:type" content="${seo.ogType}" />`;
  if (/<meta\s+property=["']og:type["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+property=["']og:type["'][^>]*>/i, ogTypeTag);
  } else {
    result = result.replace('</head>', `  ${ogTypeTag}\n</head>`);
  }

  // Twitter tags
  const twitterCardTag = `<meta name="twitter:card" content="summary_large_image" />`;
  if (/<meta\s+name=["']twitter:card["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+name=["']twitter:card["'][^>]*>/i, twitterCardTag);
  } else {
    result = result.replace('</head>', `  ${twitterCardTag}\n</head>`);
  }

  const twitterTitleTag = `<meta name="twitter:title" content="${escapeAttr(seo.twitterTitle)}" />`;
  if (/<meta\s+name=["']twitter:title["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+name=["']twitter:title["'][^>]*>/i, twitterTitleTag);
  } else {
    result = result.replace('</head>', `  ${twitterTitleTag}\n</head>`);
  }

  const twitterDescTag = `<meta name="twitter:description" content="${escapeAttr(seo.twitterDescription)}" />`;
  if (/<meta\s+name=["']twitter:description["'][^>]*>/i.test(result)) {
    result = result.replace(/<meta\s+name=["']twitter:description["'][^>]*>/i, twitterDescTag);
  } else {
    result = result.replace('</head>', `  ${twitterDescTag}\n</head>`);
  }

  // Structured Data JSON-LD
  if (seo.jsonLd && seo.jsonLd.length > 0) {
    const jsonLdScript = `<script type="application/ld+json" id="initial-jsonld-schema">\n${JSON.stringify(
      seo.jsonLd.length === 1 ? seo.jsonLd[0] : { '@context': 'https://schema.org', '@graph': seo.jsonLd },
      null,
      2
    )}\n    </script>`;

    if (result.includes('id="initial-jsonld-schema"')) {
      result = result.replace(/<script[^>]*id=["']initial-jsonld-schema["'][^>]*>[\s\S]*?<\/script>/i, jsonLdScript);
    } else {
      result = result.replace('</head>', `  ${jsonLdScript}\n</head>`);
    }
  }

  return result;
}

/**
 * Escapes characters for HTML content.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Escapes characters for HTML attribute values.
 */
function escapeAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Generates XML sitemap containing all 89 valid canonical URLs.
 */
export function generateSitemapXml(): string {
  const allRoutes = getAllSeoRoutes();
  const today = '2026-09-21';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of allRoutes) {
    let priority = '0.8';
    let changefreq = 'weekly';

    if (route.path === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (route.path === '/services/' || route.path === '/service-areas/') {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (route.path.startsWith('/blog/')) {
      priority = route.path === '/blog/' ? '0.8' : '0.7';
      changefreq = 'monthly';
    } else if (route.path === '/privacy/' || route.path === '/terms/' || route.path === '/disclaimer/' || route.path === '/sitemap/') {
      priority = '0.5';
      changefreq = 'monthly';
    } else {
      priority = '0.8';
      changefreq = 'weekly';
    }

    xml += `  <url>\n`;
    xml += `    <loc>${route.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

/**
 * Generates robots.txt referencing the sitemap.
 */
export function generateRobotsTxt(): string {
  return `# robots.txt for AC Services in Thane
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

// Helper JSON-LD schema builders
function buildJsonLdForStatic(path: string, title: string, description: string, canonical: string): object[] {
  const schemas: object[] = [
    {
      '@type': 'HVACBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'AC Services in Thane',
      url: `${SITE_URL}/`,
      telephone: '+91 7021455426',
      email: 'acservicesinthane@gmail.com',
      image: `${SITE_URL}/logo.png`,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Thane West',
        addressLocality: 'Thane',
        addressRegion: 'Maharashtra',
        postalCode: '400606',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.2183,
        longitude: 72.9781,
      },
      areaServed: 'Thane, Maharashtra',
    },
  ];

  if (path === '/') {
    schemas.push({
      '@type': 'WebSite',
      name: 'AC Services in Thane',
      url: `${SITE_URL}/`,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });
  } else {
    schemas.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title.split('|')[0].trim(),
          item: canonical,
        },
      ],
    });
  }

  return schemas;
}

function buildJsonLdForService(service: any, canonical: string): object[] {
  return [
    {
      '@type': 'Service',
      name: `${service.title} in Thane`,
      description: service.shortDesc,
      serviceType: service.category,
      provider: {
        '@type': 'HVACBusiness',
        name: 'AC Services in Thane',
        url: `${SITE_URL}/`,
        telephone: '+91 7021455426',
      },
      areaServed: {
        '@type': 'City',
        name: 'Thane',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: service.priceStarting,
        url: canonical,
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AC Services',
          item: `${SITE_URL}/services/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: canonical,
        },
      ],
    },
  ];
}

function buildJsonLdForLocation(loc: any, canonical: string, title: string, description: string): object[] {
  const schemas: object[] = [
    {
      '@type': 'HVACBusiness',
      name: `AC Services in ${loc.name}`,
      description: description,
      url: canonical,
      telephone: '+91 7021455426',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        addressLocality: loc.name,
        addressRegion: 'Maharashtra',
        postalCode: loc.pincode ? loc.pincode.split('/')[0].trim() : '400601',
        addressCountry: 'IN',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: loc.name,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Service Areas',
          item: `${SITE_URL}/service-areas/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: loc.name,
          item: canonical,
        },
      ],
    },
  ];

  if (loc.faqs && loc.faqs.length > 0) {
    schemas.push({
      '@type': 'FAQPage',
      mainEntity: loc.faqs.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return schemas;
}

function buildJsonLdForBlog(article: any, canonical: string): object[] {
  return [
    {
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      url: canonical,
      datePublished: article.date,
      author: {
        '@type': 'Person',
        name: article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'AC Services in Thane',
        url: `${SITE_URL}/`,
      },
      mainEntityOfPage: canonical,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${SITE_URL}/blog/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: canonical,
        },
      ],
    },
  ];
}
