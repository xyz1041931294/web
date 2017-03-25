const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  entry:{
    app:'./src/app.js'
  },
  output:{
    path:path.resolve(__dirname,'build/src'),
    filename:"[name].js"
  },
  module:{
    rules:[
      {
          test: /\.js$/,
          use: [
          {
            loader:'babel-loader',
            options:{
              presets:["latest","react"]
            }
          }],
          exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  },
  plugins:[
    new html({
      filename: '../index.html',
      template: 'index.html'
    })
  ]
}