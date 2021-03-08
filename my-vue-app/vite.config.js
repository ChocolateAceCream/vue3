import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
import dotenv from 'dotenv'

console.log(process.env.NODE_ENV)

const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${process.env.NODE_ENV}`
]

for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

console.log('process.env.VITE_HOST',process.env.VITE_HOST)
console.log('process.env.VITE_PORT',process.env.VITE_PORT)

const serverOption = {
  hostname: process.env.VITE_HOST,
  port: process.env.VITE_PORT,

  // 反向代理
  proxy: {
    // string shorthand
    '/foo': 'http://localhost:3000',
    // with options
    '/api': {
      target: 'http://www.qiutianaimeili.com/html/',
      changeOrigin: true,
      rewrite: (path) => {
        let t = path.replace(/^\/api/, 'page/2019/05/ly9elo7w9bn.html')
        return t
      }
    },
    // with RegEx
    '^/fallback/.*': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/fallback/, '')
    }
  }
}
export default {
  plugins: [vue()],
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  // optimizeDeps: {
  //   include: ['echarts']
  // },
  server: serverOption,
  // 引用全局 scss
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src/assets/style/index.scss";'
    }
  },
  // 压缩
  minify: 'esbuild',
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * Base public path when served in production.
   * @default '/'
   */
  base: process.env.VITE_BASE_URL,
  /**
   * Directory relative from `root` where build output will be placed. If the
   * directory exists, it will be removed before the build.
   * @default 'dist'
   */
  outDir: process.env.VITE_OUTPUT_DIR,

  // vscode chrome debugger
  configureWebpack: {
    devtool: 'source-map'
  }
  
}

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
// export default {
//   plugins: [vue()],
//   port: process.env.VITE_PORT
// }
