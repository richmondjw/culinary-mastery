import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works at a domain root (cook.optiflows.com.au)
  // and under a repo subpath (username.github.io/repo/) alike.
  base: './',
  plugins: [react()],
  server: {
    port: 5174,
  },
})
