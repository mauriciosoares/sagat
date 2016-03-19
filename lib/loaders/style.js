'use strict';

const path = require('path');
const config = require('../config');
const TARGET_DIR = config.getTargetDir();
const TARGET_CONFIG = config.getTargetConfig();
const DEFAULT_TEST = 'css';

function getStyleLoaders(targetConfig) {
  let defaultLoaders = ['style', 'css'];

  if(targetConfig.loaders && targetConfig.loaders.style) {
    targetConfig.loaders.style.forEach(function(loader) {
      defaultLoaders.push(loader)
    });
  }

  return defaultLoaders;
}

function getStyleTest(targetConfig) {
  const test = (targetConfig.tests && targetConfig.tests.style) || DEFAULT_TEST;

  return new RegExp(`\.${test}`);
}

function getStyleLoader() {
  return {
    test: getStyleTest(TARGET_CONFIG),
    loaders: getStyleLoaders(TARGET_CONFIG),
    include: path.join(TARGET_DIR)
  }
}

module.exports = getStyleLoader;
