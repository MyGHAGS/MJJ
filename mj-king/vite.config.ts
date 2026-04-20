import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/MJJ/',
  build: {
    outDir: path.resolve(__dirname, '../docs'),
    emptyOutDir: true,
  },
})