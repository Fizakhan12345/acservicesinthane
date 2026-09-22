import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { getSeoForPath, injectSeoMetadata } from './src/data/seoRoutes';

function seoMetadataPlugin(): Plugin {
  return {
    name: 'vite-seo-metadata-plugin',
    transformIndexHtml(html, ctx) {
      const requestPath = (ctx.originalUrl && ctx.originalUrl !== '/index.html') ? ctx.originalUrl : (ctx.path || '/');
      const seo = getSeoForPath(requestPath);
      return injectSeoMetadata(html, seo);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), seoMetadataPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
