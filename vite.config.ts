import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': '{}',
    global: 'globalThis'
  },
  build: {
    lib: {
      entry: 'src/web-component.tsx',
      name: 'MyApp',
      fileName: 'my-app',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          process: '{}'
        }
      }
    },
    cssCodeSplit: false
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.ts'
  }
})
