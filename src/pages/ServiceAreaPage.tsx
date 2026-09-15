// pages/ServiceAreaPage.tsx
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug } from '../data/locationsData';
import NotFound from './NotFound';

export default function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug ?? '');

  if (!location) return <NotFound />;

  const canonicalUrl = `https://acservicesinthane.com/${location.slug}/`;

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={location.metaTitle} />
        <meta name="twitter:description" content={location.metaDescription} />
      </Helmet>

      <h1>AC Service in {location.name}</h1>
      <p>{location.description}</p>
      {/* rest of your page: localContext, commonIssues, faqs, etc. */}
    </>
  );
}