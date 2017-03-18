var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(
  '/Users/timsiwula/Dropbox/code/front_end/react/react-mvc-template/frontend/react/build')
var APP_DIR = path.resolve(
  '/Users/timsiwula/Dropbox/code/front_end/react/react-mvc-template/frontend/react/app')

var config = {
  entry: APP_DIR + '/index.jsx'
, output: {
    path: BUILD_DIR
    , filename: 'bundle.js'
    , publicPath: '/'
  }
, devtool: 'source-map'
, devServer: {
    inline: true
    , contentBase: BUILD_DIR
    , port: 3333
    }
, module: {
    loaders: [
      {
        test: /\.jsx?/
      , include: APP_DIR
      , loader: 'babel'
      , query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config
