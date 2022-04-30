const path = require('path')
const {ModuleFederationPlugin} = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',

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
      name: 'map_app',
      filename: 'remoteEntry.js',
      exposes: {
        './MapApp': './src/App',
      },
      // shared: [
      //   {
      //     react: {singleton: true},
      //     'react-dom': {singleton: true},
      //   },
      // ],
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
