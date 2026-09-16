import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';

import { SERVICES_DATA } from './src/data/services';
import { LOCATIONS_DATA } from './src/data/locations';
import { BLOG_ARTICLES } from './src/data/blogs';

const STATIC_ROUTES = [
  '/',
  '/services/',
  '/service-areas/',
  '/about/',
  '/contact/',
  '/blog/',
  '/faq/',
  '/privacy/',
  '/terms/',
  '/disclaimer/',
];

const SERVICE_ROUTES = SERVICES_DATA.map((s) => `/${s.slug}/`);
const LOCATION_ROUTES = LOCATIONS_DATA.map((l) => `/${l.slug}/`);
const BLOG_ROUTES = BLOG_ARTICLES.map((b) => `/blog/${b.slug}/`);

const ALL_ROUTES = [...STATIC_ROUTES, ...SERVICE_ROUTES, ...LOCATION_ROUTES, ...BLOG_ROUTES];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

async function run() {
  console.log(`Starting preview server and prerendering ${ALL_ROUTES.length} routes...`);

  const previewServer = await preview({ preview: { port: PORT, strictPort: true } });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let successCount = 0;
  let failCount = 0;

  for (const route of ALL_ROUTES) {
    const url = BASE_URL + route;
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Give react-helmet-async a moment to commit title/meta updates
      await new Promise((resolve) => setTimeout(resolve, 300));

      const html = await page.content();

      // route "/" -> dist/index.html
      // route "/ac-service-in-ghodbunder-road/" -> dist/ac-service-in-ghodbunder-road/index.html
      const outDir = path.join('dist', route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);

      const title = await page.title();
      console.log(`✓ ${route}  ->  "${title}"`);
      successCount++;
    } catch (err) {
      console.error(`✗ FAILED: ${route}`, err);
      failCount++;
    }
  }

  await browser.close();
  await new Promise<void>((resolve) => previewServer.httpServer.close(() => resolve()));

  console.log(`\nDone. ${successCount} succeeded, ${failCount} failed.`);
  if (failCount > 0) process.exit(1);
}

run();