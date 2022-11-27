const fs = require('fs');

fs.readdir(process.argv[2], (err, data) => {
  if (err) {
    return console.log(err);
  }
  data.forEach((filePath) => {
    if (filePath.includes(`.${process.argv[3]}`)) {
      console.log(filePath);
    }
  });
});
