const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = process.cwd();

module.exports =  {
  entry: [
    path.join(ROOT_PATH, 'index.js')
  ],

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
        loader: 'babel',
        include: path.join(ROOT_PATH),
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react')
          ]
        }
      }
    ]
  }
};
