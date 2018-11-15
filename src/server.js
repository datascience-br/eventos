'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.config')
const port = process.env.PORT || 3000
console.log(port)

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './build',
  disableHostCheck: true,
  hot: true,
  host: '0.0.0.0',
  historyApiFallback: true,
  stats: { colors: true }
}).listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.info('==> 🌎  Listening on port %s', port)
})
