#!/usr/bin/env node

import program from 'commander';
import webpack from 'webpack';
import getWebpackConfig from './webpack';
import util from 'util';
import {getSagatPackage} from './config';
const compiler = webpack(getWebpackConfig());
const pkg = getSagatPackage();

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
  if(err) throw new Error(err);
  if(stats.hasErrors()) util.log(stats.toString({colors: true}));
}
