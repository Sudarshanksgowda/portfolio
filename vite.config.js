import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // './' keeps asset paths relative, so the built site works from a subfolder
  // such as https://<user>.github.io/<repo>/ without any extra configuration.
  base: './',
  server: { port: 5174, open: true },
  build: { outDir: 'dist' },
});
