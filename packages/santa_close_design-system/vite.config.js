const react = require('@vitejs/plugin-react')
const path = require('path')
const {defineConfig} = require('vite')

module.exports = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'design-system',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    minify: 'esbuild',
    rollupOptions: {
      output: {},
    },
  },
})
