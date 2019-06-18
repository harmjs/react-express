const path = require('path');

module.exports = {
  common: {
    entry: path.resolve(__dirname, 'src', 'server', 'app.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    target: 'node',
    node: {
      __dirname:  false,
      __filename: false
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  },
  development: {
    mode: 'development',
  }
}