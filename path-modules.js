const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subcont','test.txt');
console.log('this is file path: ',filePath);

const base = path.basename(filePath)

console.log('this is file name: ',base);

const absolute = path.resolve(__dirname,'content','subcont','test.txt');

console.log(absolute);
