import {join, dirname} from 'path';
import fs from 'fs';

export function getTargetDir() {
  return process.cwd();
}

export function getSagatDir() {
  return join(dirname(require.main.filename), '..');
}

export function getSagatPackage() {
  return require(join(getSagatDir(), 'package.json'));
}

export function getTargetConfig() {
  return require(join(getTargetDir(), 'package.json')).sagat;
}

export function getLoaderConfig(loader) {
  const targetConfig = getTargetConfig();

  if(!targetConfig.loaders) return;

  const l = targetConfig.loaders[loader];
  if(!l) return;

  const {test, loaders} = l;

  return {
    test: test || null,
    loaders: loaders || []
  }
}

export function getLoaders(defaultLoaders, loaderConfig = {loaders: []}) {
  loaderConfig.loaders.forEach(loader => defaultLoaders.push(loader));

  return defaultLoaders;
}

export function getTest(defaultTest, loaderConfig = {test: null}) {
  return new RegExp(`\.${loaderConfig.test || defaultTest}`);
}
