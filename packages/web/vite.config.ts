import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@welldone-software/why-did-you-render' // <-----
    }),
    tsconfigPaths()
  ],
  build: {
    sourcemap: true
  },
  server: {
    port: 3000
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './src/test/setupTests.ts',
    clearMocks: true
  }
});
