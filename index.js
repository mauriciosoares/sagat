#!/usr/bin/env node

const webpack = require('webpack');
const getWebpackConfig = require('./lib/webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');


var compiler = webpack(getWebpackConfig());

compiler.watch({
  aggregateTimeout: 300,
  poll: true,
  errorDetails: true
}, function(err, stats) {
  if(err) {
    console.log('error!');
    return;
  }

  console.log(stats.hasErrors());
  console.log(':D');
});
