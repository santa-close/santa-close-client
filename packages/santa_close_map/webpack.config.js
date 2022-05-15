const path = require('path')
const {ModuleFederationPlugin} = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const {dependencies} = require('./package.json')
const federationConfig = require('./federation.config.json')

module.exports = {
  entry: './src/index',
  cache: false,

  output: {
    publicPath: 'http://localhost:3001/',
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
    hot: true,
    liveReload: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
            '@babel/preset-typescript',
          ],
          plugins: [require.resolve('react-refresh/babel')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
      ...federationConfig,
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),

    new ExternalTemplateRemotesPlugin(),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),

    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/],
    }),
  ],
}
