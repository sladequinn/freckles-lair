import { defineConfig } from 'vite';

export default defineConfig({
  base: '/freakoff/',
  server: {
    host: '0.0.0.0',
    port: 47321,
    strictPort: false,
    allowedHosts: ['.loca.lt', '.trycloudflare.com'],
  },
  preview: {
    host: '0.0.0.0',
    port: 47322,
    allowedHosts: ['.loca.lt', '.trycloudflare.com'],
  },
  build: {
    target: 'es2020',
    outDir: '../public/freakoff',
    emptyOutDir: true,
    sourcemap: false,
  },
});
