const webpack = require('webpack');
const path = require('path');

module.exports = {

  lintOnSave: false,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
  },
  pluginOptions: {

  },
  /*css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }*/
};
