import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    'alias': [
      { find: '@', replacement: resolve(__dirname, 'src') }
    ],
  },
  // config proxy
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        // /api/todo -> http://localhost:4000/todo
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
