var fs = require("fs");
fs.stat("inputData.html", function(err, stats) {
    if(err) throw err;
    // console.log(stats);

    var myData = `
        <p>
            isDirectory: ${stats.isDirectory()}, 
            File: ${stats.isFile()}, 
            Size: ${stats.size}, 
            Time: ${stats.atime}
        </p>
    `;

    fs.open("fileStats.html", "w", function(err, openFile) {
        if(err) throw err;

        fs.writeFile("fileStats.html", myData, function(err, success) {
            if(err) throw err;
            console.log("data written successfully!");
        });
    });
});