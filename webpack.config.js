const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = process.cwd();

module.exports =  {
  entry: [
    path.join(ROOT_PATH, 'index.js')
  ],

  context: __dirname,

  output: {
    path: ROOT_PATH,
    filename: 'bundle.js'
  },

  resolveLoader: {
    root: [path.join(__dirname, 'node_modules')]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(ROOT_PATH)
      }
    ]
  }
};
