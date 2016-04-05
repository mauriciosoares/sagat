const path = require('path');
const fs = require('fs');

function getTargetDir() {
  return process.cwd();
}

function getSagatDir() {
  return path.dirname(require.main.filename);
}

function getSagatPackage() {
  return require(path.join(path.dirname(require.main.filename), 'package.json'));
}

function getTargetConfig() {
  return require(path.join(getTargetDir(), 'package.json')).sagat;
}

function getBabelPresets() {
  try {
    const babelrc = JSON.parse(fs.readFileSync(path.join(getTargetDir(), '.babelrc'), 'utf8'));
    if(!babelrc.presets || (babelrc.presets && !babelrc.presets.length)) {
      return [];
    }

    return babelrc.presets.map(function(preset) {
      return require.resolve(path.join(TARGET_DIR, 'node_modules', 'babel-preset-' + preset));
    });
  } catch(e) {
    return [];
  }
}

module.exports = {
  getTargetDir: getTargetDir,
  getSagatDir: getSagatDir,
  getTargetConfig: getTargetConfig,
  getBabelPresets: getBabelPresets,
  getSagatPackage: getSagatPackage
}
