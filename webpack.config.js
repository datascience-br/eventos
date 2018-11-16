'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')
const port = process.env.PORT || 8080
module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://0.0.0.0:${port}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'js', 'index')
  ],

  output: {
    path: path.join(__dirname, 'build', 'js'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })

  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src\/js/,
      loader: 'standard'
    }],

    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src\/js/,
        loader: 'babel'
      }
    ]
  }
})
