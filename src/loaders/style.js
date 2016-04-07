import {getTargetDir, getLoaderConfig, getTest, getLoaders} from '../config';
const loaderConfig = getLoaderConfig('style');
const TARGET_DIR = getTargetDir();
const DEFAULT_TEST = 'css';
const DEFAULT_LOADERS = ['style', 'css'];

export default function getStyleLoader() {
  return {
    test: getTest(DEFAULT_TEST, loaderConfig),
    loaders: getLoaders(DEFAULT_LOADERS, loaderConfig),
    include: TARGET_DIR
  }
}
