const getJavascriptLoaders = require('./javascript');
const getStyleLoaders = require('./style');

module.exports = [
  getJavascriptLoaders(),
  getStyleLoaders()
];
