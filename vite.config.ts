import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    "import.meta.env": {}, // Ensures VITE environment variables are read correctly
  },
  plugins: [react(),],
  build: {
    outDir: "dist",
    target: "esnext", // Ensures correct module support
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
