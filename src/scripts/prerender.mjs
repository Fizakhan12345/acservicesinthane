import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';

import { LOCATIONS_DATA } from '../data/locations.ts';
import { SERVICES_DATA } from '../data/services.ts';

const staticRoutes = [
  '/', '/services/', '/service-areas/', '/about/', '/contact/',
  '/blog/', '/faq/', '/privacy/', '/terms/', '/disclaimer/', '/sitemap/',
];

const routes = [
  ...staticRoutes,
  ...LOCATIONS_DATA.map(l => `/${l.slug}/`),
  ...SERVICES_DATA.map(s => `/${s.slug}/`),
];

const server = await preview({ preview: { port: 4173 } });
const base = `http://localhost:4173`;

const browser = await puppeteer.launch();
const page = await browser.newPage();

for (const route of routes) {
  await page.goto(base + route, { waitUntil: 'networkidle0' });
  const html = await page.content(); // full DOM after Helmet + React run
  const outDir = path.join('dist', route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('Prerendered:', route);
}

await browser.close();
server.httpServer.close();