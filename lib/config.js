const path = require('path');

function getTargetDir() {
  return process.cwd();
}

function getArrangeDir() {
  return path.dirname(require.main.filename);
}

function getTargetConfig() {
  return require(path.join(getTargetDir(), 'package.json')).arrange;
}

module.exports = {
  getTargetDir: getTargetDir,
  getArrangeDir: getArrangeDir,
  getTargetConfig: getTargetConfig
}
