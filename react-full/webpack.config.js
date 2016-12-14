var webpack = require("webpack");

module.exports = {
  entry: {
    vendor: ['react'],
    app: './index.js'
  },

  output: {
    path: './dist',
    filename: 'app.js',
    publicPath: ''
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "react.js")
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:
        'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
