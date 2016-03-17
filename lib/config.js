const path = require('path');

function getTargetDir() {
  return process.cwd();
}

function getKaneDir() {
  return path.dirname(require.main.filename);
}

function getTargetConfig() {
  return require(path.join(getTargetDir(), 'package.json')).kane;
}

module.exports = {
  getTargetDir: getTargetDir,
  getKaneDir: getKaneDir,
  getTargetConfig: getTargetConfig
}
