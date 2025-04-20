import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/easter-egg-hunt/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}) 