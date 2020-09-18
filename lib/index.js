var path = require('path'),
	fs = require('fs'),
	colors = require('colors'),
    del = require('del');

var cleanup = function(dir) {
    if (dir.includes('node_modules')) {
        console.log('Deleting: ' + dir.yellow);
        del(dir);
        console.log('--------------- Finishing removal ---------------'.green)
    } else {
        console.log('Invalid directory, please make sure to delete a node modules folder')
    }
}

exports.cleanup = cleanup;