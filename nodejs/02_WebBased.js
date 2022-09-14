var http = require("http");
var PORT = 8081;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("hello world");
}).listen(PORT);

console.log(`server started its execution at http://localhost:${PORT}`);