/** @type {import('next').NextConfig} */
const path = require('path')
const env = process.env.NEXT_PUBLIC_ENV || 'dev'
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);
console.log('----env', env)
const config = {
  dev: {
    baseDomain: 'http://127.0.0.1:7001'
  },
  test: {
    baseDomain: 'http://127.0.0.1:7001'
  },
  production: {
    baseDomain: 'https://api.insbookapp.com'
  }
}[env]
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import '@/styles/variables.module.scss';` // 引入全局scss变量
  }
}
module.exports = withTM({
  // 你项目中其他的 Next.js 配置
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import '@/styles/variables.module.scss';` // 引入全局scss变量
  },
  env: {
    BASE_DOMAIN: config.baseDomain,
  }
});
// module.exports = nextConfig
