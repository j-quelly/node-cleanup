var fs = require('fs');
var dir = (process.argv[2] ? process.argv[2] : 'node_modules');
var colors = require('colors');
var del = require('del');


function cleanup(dir) {
    fs.readdir(dir, function doneReading(err, files) {
        if (err) {
            return console.log(err);
        } else if (!files) {
            return console.log('reached the end?');
        }

        // loop thru files array
        for (var i = 0; i <= files.length; i++) {
            if (typeof files[i] === 'string' || files[i] instanceof String) {
                if (files[i] !== 'del') {

                    // friendly log message
                    console.log('Directory: ' + files[i].yellow);

                    // build path to this file
                    if (dir === '') {
                        dir = dir + '/' + files[i];
                    } else {
                        dir = dir + '/' + files[i];
                    }

                    console.log(dir.yellow);

                    /* 
                     * check if file is a directory
                     */
                    if (!fileType(dir)) {
                        // traverse with new path                        
                        console.log('--------------------------------------');
                        cleanup(dir);
                    }
                }
            }
        }
    });
}

cleanup(dir);

function fileType(fileName) {
    console.log('File: ' + fileName.red);
    if (fileName) {
        fs.stat(fileName, function(err, stat) {
            if (stat && stat.isFile()) {
                if (del(dir)) {
                    var success = 'Successfully deleted a file: ';
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