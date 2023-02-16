import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vaishnavsh/',
    build: {
      chunkSizeWarningLimit:2000,
    },
    server: {
        host: true
    }
})
