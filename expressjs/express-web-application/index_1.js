var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/", function(req, res) {
    res.send(`
        <html>
            <head>
                <title>ExpressJS Web Application</title>
            </head>

            <body>
                <h1>Express Web Application</h1>

                <p>Its a NodeJS Framework</p>
            </body>
        </html>
    `);
});

app.get("/aboutus", function(req, res) {
    res.send(`
        <html>
            <head>
                <title>About Us - ExpressJS Web Application</title>
            </head>

            <body>
                <h1>About Us - Express Web Application</h1>

                <p>About Us - Its a NodeJS Framework</p>
            </body>
        </html>
    `);
});

var server = app.listen(5000, function() {
    console.log("node server is running");
});