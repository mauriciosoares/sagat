const path = require('path');
const config = require('../config');

const TARGET_DIR = config.getTargetDir();

function getJavascriptLoader() {
  return {
    test: /\.jsx?$/,
    loader: 'babel',
    include: path.join(TARGET_DIR),
    query: {
      presets: [
        require.resolve('babel-preset-es2015'),
        require.resolve('babel-preset-react')
      ]
    }
  }
}

module.exports = getJavascriptLoader;
