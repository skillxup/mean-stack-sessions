var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("inputData.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("inputDataCompress.zip"));