/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@ant-design",
    "antd",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-input",
    "rc-tree", // 关键添加
    "rc-table", // 关键添加
    "rc-select", // 关键添加
    "@babel/runtime" // 关键添加
  ],
  // 添加 Webpack 别名配置
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // 强制使用 CommonJS 版本的库
      'rc-tree/es': 'rc-tree/lib',
      'rc-table/es': 'rc-table/lib',
      'rc-select/es': 'rc-select/lib'
    };
    return config;
  },
  // 添加实验性配置
  experimental: {
    esmExternals: 'loose', // 更宽松的 ESM 处理
    serverComponentsExternalPackages: ['rc-tree', 'rc-table'] // 指定外部包
  }
};

module.exports = nextConfig;