var fs = require("fs");

var myData = `
    <html>
        <head>
            <title>File</title>
        </head>

        <body>
            <p>This is a Sample File</p>
        </body>
    </html>
`;

fs.open("inputData.html", "w", function(err, openFile) {
    if(err) throw err;

    fs.writeFile("inputData.html", myData, function(err, success) {
        if(err) throw err;
        console.log("data written into file successfully!");
    });
});