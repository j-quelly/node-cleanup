var fs = require('fs'),
    dir = (process.argv[2] ? process.argv[2] : 'node_modules'),
    colors = require('colors'),
    del = require('del');


(function cleanup(dir) {
    fs.readdir(dir, function doneReading(err, files) {
        if (err) {
            return err;
        }

        for (var i = 0; i <= files.length; i++) {
            if (typeof files[i] === 'string' || files[i] instanceof String) {
                if (files[i] !== 'del') {

                    dir = dir + '/' + files[i];

                    if (!fileType(dir)) {
                        return cleanup(dir);
                    }
                }
            }
        }
    });
})(dir);


function fileType(fileName) {
    console.log('Deleting: ' + fileName.yellow);
    if (fileName) {
        fs.stat(fileName, function(err, stat) {
            if (stat && stat.isFile()) {
                if (del(dir)) {
                    var success = '| ---------------------------- FINISHING UP... ---------------------------- |';
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
