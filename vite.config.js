import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Equity2Bitcoin-Business-Plan/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
  css: {
    devSourcemap: true,
  },
})
