var net = require("net");

var server = net.createServer(function(socket) {
    socket.write('each server \n \r');
    socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');