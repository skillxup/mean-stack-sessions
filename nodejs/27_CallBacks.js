var fs = require("fs");

// var data = fs.readFileSync("createNew.html");
// console.log(data.toString());
// console.log("executed with sync");

fs.readFile("inputData.html", function(err, buffer) {
    if(err) throw err;
    console.log(buffer.toString());
});