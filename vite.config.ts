import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('/react/') || id.includes('/react-dom/')) return 'react'
          if (id.includes('/react-router-dom/')) return 'router'
          if (id.includes('/@base-ui/')) return 'baseui'
          if (id.includes('/i18next/') || id.includes('/react-i18next/')) return 'i18n'
        },
      },
    },
  },
})