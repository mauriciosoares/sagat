#!/usr/bin/env node

// var program = require('commander');

// program
//   .version('0.0.1')
//   .option('-w --watch', 'watch for changes')
//   .parse(process.argv);

// console.log(process.cwd());
// console.log(__dirname);

// if(program.watch) console.log('watching');
const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

var compiler = webpack(config);

compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, function(err, stats) {
  console.log(':D');
});

// new WebpackDevServer(webpack(config)).listen(8080, 'localhost');
