const path = require('path');
const config = require('../config');
const TARGET_DIR = config.getTargetDir();

function getStyleLoader() {
  return {
    test: /\.css$/,
    loaders: ['style', 'css'],
    include: path.join(TARGET_DIR, 'src')
  }
}

module.exports = getStyleLoader;
