import {getTargetDir, getLoaderConfig, getTest, getLoaders} from '../config';
const TARGET_DIR = getTargetDir();
const loaderConfig = getLoaderConfig('javascript');
const DEFAULT_TEST = 'js';
const DEFAULT_LOADERS = ['babel'];

export default function getJavascriptLoader() {
  return {
    test: getTest(DEFAULT_TEST, loaderConfig),
    loaders: getLoaders(DEFAULT_LOADERS, loaderConfig),
    include: TARGET_DIR
  }
}
