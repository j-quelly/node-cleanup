var fs = require('fs');
var dir = (process.argv[2] ? process.argv[2] : 'node_modules');
var colors = require('colors');
var del = require('del');


function cleanup(dir) {
    fs.readdir(dir, function doneReading(err, files) {
        if (err) {
            return err;
        }

        // loop thru files array
        for (var i = 0; i <= files.length; i++) {
            if (typeof files[i] === 'string' || files[i] instanceof String) {
                if (files[i] !== 'del') {

                    // build path to this file
                    if (dir === '') {
                        dir = dir + '/' + files[i];
                    } else {
                        dir = dir + '/' + files[i];
                    }

                    if (!fileType(dir)) {
                        console.log('----------------------------------------------------------------------------');
                        cleanup(dir);
                    }
                }
            }
        }
    });
}

cleanup(dir);

function fileType(fileName) {
    console.log('Deleting: ' + fileName.red);
    if (fileName) {
        fs.stat(fileName, function(err, stat) {
            if (stat && stat.isFile()) {
                if (del(dir)) {
                    var success = '| ---------------------------- CLEANUP COMPLETE ---------------------------- |';
                    console.log(success.green);
                    console.log(success.green);
                    console.log(success.green);
                }
            } else if (stat && stat.isDirectory()) {
                return false;
            } else {
                return err;
            }
        });
    }
}