import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        rewrite(path) {
          return path.replace(/^\/api/, '');
        },
      },
    },
  },

  // 配置项目别名
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
});
