const path = require('path');
const fs = require('fs');

function getTargetDir() {
  return process.cwd();
}

function getKaneDir() {
  return path.dirname(require.main.filename);
}

function getTargetConfig() {
  return require(path.join(getTargetDir(), 'package.json')).kane;
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
  getKaneDir: getKaneDir,
  getTargetConfig: getTargetConfig,
  getBabelPresets: getBabelPresets
}
