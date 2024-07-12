import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@google/generative-ai': path.resolve(__dirname, 'node_modules/@google/generative-ai/dist/index.js')
    }
  },
  optimizeDeps: {
    include: ['@google/generative-ai'],
  },
  build: {
    rollupOptions: {
      external: ['@google/generative-ai'],
    },
  },
})
