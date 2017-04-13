const http = require('http');

const ip = '127.0.0.1';

const port = 1993;

const server = http.createServer(
    function( request , response ){
        response.statusCode = 200;
        response.setHeader = ('Content-Type','text/plain');
        response.end('poney\n');

    }
);

server.listen( port , ip, function() {
    console.log('la serveuse tourne aussi bien que le psg');
});
