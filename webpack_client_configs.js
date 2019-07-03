const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  common: {
    entry: path.resolve(__dirname, 'src', 'client', 'index.js'),
    output: {
      path: path.join(__dirname, 'dist', 'static'),
      filename: 'bundle.js'
    },
    target: 'web',
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'client', 'index.html'),
        favicon: path.join(__dirname, 'src', 'client', 'favicon.ico')
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      })
    ]
  },
  development: {
    mode: 'development',
    devtool: 'inline-source-map',
  },
  production: {
    mode: 'production',
  }
}