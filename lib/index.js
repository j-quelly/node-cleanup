var path = require('path'),
	fs = require('fs'),
	colors = require('colors'),
    del = require('del');

var cleanup = function(dir) {
    console.log('Deleting: ' + dir.yellow);
    del(dir);
    console.log('--------------- Finishing removal ---------------'.green)
}

exports.cleanup = cleanup;