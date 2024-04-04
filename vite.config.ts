import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      name: 'index',
      fileName: 'index',
    },
  },
  plugins: [
    Vue(),
    Dts(),
    UnoCSS(),
  ],
})
