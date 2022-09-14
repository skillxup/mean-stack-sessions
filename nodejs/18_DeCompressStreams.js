var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("inputDataCompress.zip")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("inputDataDeCompress.txt"));