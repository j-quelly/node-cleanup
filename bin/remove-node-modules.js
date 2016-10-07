#!/usr/bin/env node

var path = require('path'),
	fs = require('fs'),
	lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib'),
	derp = require(lib + '/index.js'),
	dir = (process.argv[2] ? process.argv[2] : process.cwd() + path.sep + 'node_modules');

// console.log(process.argv[2]);
// console.log(dir);
// console.log(process.cwd());

derp.cleanup('node_modules');