import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer() as PluginOption],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-router-dom')) {
            return 'react-router-dom';
          }
        }
      }
    }
  }
})
