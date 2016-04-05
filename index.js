#!/usr/bin/env node

const program = require('commander');
const webpack = require('webpack');
const getWebpackConfig = require('./lib/webpack');
const util = require('util');
const compiler = webpack(getWebpackConfig());
const config = require('./lib/config');
const pkg = config.getSagatPackage();

program.version(pkg.version)
  .option('-w --watch', 'Watch for file changes')
  .option('-b --build', 'Build your files')
  .parse(process.argv);

if(program.watch) watch();
if(program.build) build();

function build() {
  compiler.run(parseCompiler);
}

function watch() {
  compiler.watch({
    aggregateTimeout: 300,
    poll: true,
    errorDetails: true
  }, parseCompiler);
}

function parseCompiler(err, stats) {
  if(err) {
    throw new Error(err);
  }

  if(stats.hasErrors()) {
    util.log(stats.toString({colors: true}));
  }
}
