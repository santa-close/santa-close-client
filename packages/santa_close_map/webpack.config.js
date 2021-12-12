const path = require('path')
const {ModuleFederationPlugin} = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',

  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },

  output: {
    publicPath: 'http://localhost:3001/',
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
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
  ],
}
