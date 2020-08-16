const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CracoLessPlugin = require('craco-less');
const themes = require('./theme');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      pages: path.resolve(__dirname, 'src/pages'),
      routes: path.resolve(__dirname, 'src/routes'),
      styles: path.resolve(__dirname, 'src/styles'),
      typings: path.resolve(__dirname, 'src/typings'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    plugins: [
      ...(process.env.ANALYZER === '1' ? [new BundleAnalyzerPlugin({ openAnalyzer: true })] : []),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themes,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
