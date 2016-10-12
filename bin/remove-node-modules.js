#!/usr/bin/env node

var path = require('path'),
	fs = require('fs'),
	lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib'),
	bin = require(lib + '/index.js'),
	dir = (process.argv[2] ? process.argv[2] : process.cwd() + path.sep + 'node_modules');

bin.cleanup(dir);