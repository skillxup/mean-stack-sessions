var fs = require("fs");
fs.readFile("inputData.html", function(err, data) {
    if(err) throw err;
    console.log(data.toString());
});