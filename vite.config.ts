import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/<kokoaboard-test-DAWM>/',
  plugins: [react()],
})
