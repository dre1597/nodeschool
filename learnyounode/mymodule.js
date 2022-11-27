const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err, null);
    }

    files = files.filter((file) => {
      return path.extname(file) === ('.' + extension);
    });

    return callback(null, files);
  });

};

