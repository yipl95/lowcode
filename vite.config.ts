import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: './',
  server: {
    host: '127.0.0.1',
  },
  plugins: [react()],
  // 配置项目别名
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
})
