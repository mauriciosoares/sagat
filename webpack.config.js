const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = process.cwd();
const config = require(path.join(ROOT_PATH, 'package.json'));

// console.log(ROOT_PATH);
// console.log(config.arrange.entry);

module.exports =  {
  entry: [
    path.join(ROOT_PATH, config.arrange.entry)
  ],

  output: {
    path: path.join(ROOT_PATH, config.arrange.output.path),
    filename: config.arrange.output.filename
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
