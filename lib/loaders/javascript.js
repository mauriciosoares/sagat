const config = require('../config');
const TARGET_DIR = config.getTargetDir();
const loaderConfig = config.getLoaderConfig('javascript');
const DEFAULT_TEST = 'js';
const DEFAULT_LOADERS = ['babel'];

function getJavascriptLoader() {
  return {
    test: config.getTest(DEFAULT_TEST, loaderConfig),
    loaders: config.getLoaders(DEFAULT_LOADERS, loaderConfig),
    include: TARGET_DIR
  }
}

module.exports = getJavascriptLoader;
