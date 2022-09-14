var fs = require("fs");

var data = "<p>checking with new content</p>";

fs.writeFile("createNew.html", data, function(err, success) {
    if(err) throw err;
    console.log("data written successfully!");
});