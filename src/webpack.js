import path from 'path';
import {getTargetDir, getSagatDir, getTargetConfig} from './config';
import loaders from './loaders';
import plugins from './plugins';

const TARGET_DIR = getTargetDir();
const SAGAT_DIR = getSagatDir();
const TARGET_CONFIG = getTargetConfig();

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
    root: [path.join(SAGAT_DIR, 'node_modules')]
  };
}

function getModules() {
  return {
    loaders: loaders
  };
}

function getPlugins() {
  return plugins;
}

export default function getWebpackConfig() {
  return {
    entry: getEntry(),
    output: getOutput(),
    resolveLoader: getResolveLoader(),
    module: getModules(),
    plugins: getPlugins()
  };
}
