import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/


function pathResolve(dir) {
  return resolve(__dirname, '.', dir)
}

const depOptimizationOption = {
  include: [
    'lodash',
    // 'element-plus/package.json',
    'element-plus/lib/locale/lang/en',
    'element-plus/lib/locale/lang/zh-cn',
  ]
}

const serverOption = {
  hostname: 'localhost',
  port: 8888,
}

const buildOption = {
  outDir: 'dist',
  // base: process.env.NODE_ENV === 'development' ? '/' : '/index/',
  sourcemap: false,
  // assetsDir: '_assets',
}


export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src'),
    }
  },
  plugins: [vue()],
  server: serverOption,
  optimizeDeps: depOptimizationOption,
  build: buildOption,
})
