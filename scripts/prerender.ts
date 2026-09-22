import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllSeoRoutes, injectSeoMetadata, generateSitemapXml, generateRobotsTxt } from '../src/data/seoRoutes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

export function runPrerender() {
  console.log('🚀 Starting SEO Build-Time SSG Prerender for all indexable pages...');

  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Error: dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  const allRoutes = getAllSeoRoutes();
  console.log(`📄 Found ${allRoutes.length} canonical routes to prerender.`);

  let prerenderCount = 0;

  for (const route of allRoutes) {
    const customizedHtml = injectSeoMetadata(baseHtml, route);

    if (route.path === '/') {
      fs.writeFileSync(templatePath, customizedHtml, 'utf-8');
      prerenderCount++;
      continue;
    }

    const relPath = route.path.replace(/^\/|\/$/g, '');
    const pageDir = path.join(distDir, relPath);
    fs.mkdirSync(pageDir, { recursive: true });

    // 1. Write dist/[path]/index.html (Standard directory index)
    const pageIndexPath = path.join(pageDir, 'index.html');
    fs.writeFileSync(pageIndexPath, customizedHtml, 'utf-8');

    // 2. Also write dist/[path].html (Direct file fallback for static hosts)
    const pageHtmlPath = path.join(distDir, `${relPath}.html`);
    const parentDir = path.dirname(pageHtmlPath);
    fs.mkdirSync(parentDir, { recursive: true });
    fs.writeFileSync(pageHtmlPath, customizedHtml, 'utf-8');

    prerenderCount++;
  }

  // Generate XML Sitemap
  const sitemapXml = generateSitemapXml();
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`🗺️ Generated sitemap.xml with ${allRoutes.length} canonical URLs.`);

  // Generate robots.txt
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('🤖 Generated robots.txt pointing to sitemap.xml.');

  console.log(`✅ Successfully prerendered ${prerenderCount} pages with unique titles, meta descriptions, self-canonicals, and OpenGraph tags in dist/!`);
}

runPrerender();
