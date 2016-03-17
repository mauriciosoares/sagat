#!/usr/bin/env node

require('./lib/tiger-uppercut')();
const webpack = require('webpack');
const getWebpackConfig = require('./lib/webpack');
const util = require('util');
var compiler = webpack(getWebpackConfig());

compiler.watch({
  aggregateTimeout: 300,
  poll: true,
  errorDetails: true
}, function(err, stats) {
  if(err) {
    throw new Error(err);
  }

  if(stats.hasErrors()) {
    util.log(stats.toString({colors: true}));
  }
});
