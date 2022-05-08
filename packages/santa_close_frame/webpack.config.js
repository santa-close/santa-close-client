const path = require('path')
const {ModuleFederationPlugin} = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const {dependencies} = require('./package.json')

module.exports = {
  entry: './src/index',
  cache: false,

  output: {
    publicPath: 'http://localhost:3000/',
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devServer: {
    hot: false,
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
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
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),

    new ModuleFederationPlugin({
      name: 'frame_app',
      filename: 'remoteEntry.js',
      remotes: {
        'map-app': 'map_app@http://localhost:3001/remoteEntry.js',
      },
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

    new LiveReloadPlugin({
      port: 35729,
    }),
  ],
}
