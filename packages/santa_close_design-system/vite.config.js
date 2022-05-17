import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import path from 'path'
import {defineConfig} from 'vite'

module.exports = defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'design-system',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    minify: 'esbuild',
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})
