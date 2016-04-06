const path = require('path');
const config = require('../config');
const TARGET_DIR = config.getTargetDir();

function getJavascriptLoader() {
  return {
    test: /\.js/,
    loader: 'babel',
    include: path.join(TARGET_DIR),
    query: {
      presets: config.getBabelPresets()
    }
  }
}

module.exports = getJavascriptLoader;
