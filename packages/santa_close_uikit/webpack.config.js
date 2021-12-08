const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {config, withPreviews} = require('../webpack/webpack.mfe.config')

module.exports = withPreviews((usePreviews) => ({
  ...config,

  entry: '.src/Box.tsx',

  // test
  output: {
    publicPath: 'http://localhost:3001/',
    clean: true,
  },

  plugins: [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: 'app_uikit',
      library: {type: 'var', name: 'app_uikit'},
      filename: 'uikitRemoteEntry.js',
      exposes: {
        './Box': './src/Box.tsx',
      },
      // make dependencies eager for preview to work
      shared: [
        {
          react: {eager: usePreviews, singleton: true},
          'react-dom': {eager: usePreviews, singleton: true},
        },
      ],
      // shared: ["react", "react-dom", "react-router-dom"],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}))
