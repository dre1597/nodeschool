const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);

const data = buffer.toString();

console.log(data.split('\n').length - 1);