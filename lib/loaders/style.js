const config = require('../config');
const TARGET_DIR = config.getTargetDir();
const loaderConfig = config.getLoaderConfig('style');
const DEFAULT_TEST = 'css';
const DEFAULT_LOADERS = ['style', 'css'];

function getStyleLoader() {
  return {
    test: config.getTest(DEFAULT_TEST, loaderConfig),
    loaders: config.getLoaders(DEFAULT_LOADERS, loaderConfig),
    include: TARGET_DIR
  }
}

module.exports = getStyleLoader;
