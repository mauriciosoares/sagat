const path = require('path');

const ROOT_SRC = process.cwd();
const ROOT_MAIN = path.dirname(require.main.filename);
const config = require(path.join(ROOT_SRC, 'package.json'));

function getEntry() {
  return [
    path.join(ROOT_SRC, config.arrange.entry)
  ];
}

function getOutput() {
  return {
    path: path.join(ROOT_SRC, config.arrange.output.path),
    filename: config.arrange.output.filename
  };
}

function getResolveLoader() {
  return {
    root: [path.join(ROOT_MAIN, 'node_modules')]
  };
}

function getModules() {
  return {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(ROOT_SRC),
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react')
          ]
        }
      }
    ]
  };
}

module.exports = function getWebpackConfig() {
  return {
    entry: getEntry(),
    output: getOutput(),
    resolveLoader: getResolveLoader(),
    module: getModules()
  };

}
