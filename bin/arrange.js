#!/usr/bin/env node

const webpack = require('webpack');
const getWebpackConfig = require('../lib/webpack');

var compiler = webpack(getWebpackConfig());

compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, function(err, stats) {
  if(err) {
    console.log('error!');
    return;
  }

  console.log(stats);
  console.log(stats.hasErrors());
  console.log(':D');
});
