var fs = require("fs");

var readerStream = fs.createReadStream('inputData.txt');
var writerStream = fs.createWriteStream('newData.txt');

readerStream.pipe(writerStream);
console.log('we are done with input -> output stream');