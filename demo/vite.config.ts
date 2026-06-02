import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-circle-flags/',
  plugins: [vue()],
  root: __dirname,
  build: {
    outDir: path.resolve(rootDir, 'dist-demo'),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
      'vue-circle-flags/dist/vue-circle-flags.css': path.resolve(
        __dirname,
        'src/vue-circle-flags.css'
      ),
      'vue-circle-flags': path.resolve(rootDir, 'src/components/main.ts')
    }
  }
});
