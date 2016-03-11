const path = require('path');
const config = require('./config');
const loaders = require('./loaders');
const plugins = require('./plugins');

const TARGET_DIR = config.getTargetDir();
const ARRANGE_DIR = config.getArrangeDir();
const TARGET_CONFIG = config.getTargetConfig();

function getEntry() {
  return [
    path.join(TARGET_DIR, TARGET_CONFIG.entry)
  ];
}

function getOutput() {
  return {
    path: path.join(TARGET_DIR, TARGET_CONFIG.output.path),
    filename: TARGET_CONFIG.output.filename
  };
}

function getResolveLoader() {
  return {
    root: [path.join(ARRANGE_DIR, 'node_modules')]
  };
}

function getModules() {
  return {
    loaders: getLoaders()
  };
}

function getLoaders() {
  return loaders;
}

function getPlugins() {
  return plugins;
}

module.exports = function getWebpackConfig() {
  return {
    entry: getEntry(),
    output: getOutput(),
    resolveLoader: getResolveLoader(),
    module: getModules(),
    plugins: getPlugins()
  };
}
