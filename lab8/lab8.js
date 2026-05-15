const http = require('http');
const fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('rk.txt', function(err, data) {
    if (err) {
        res.writeHead (404, {'content-type':'text/plain'});
        res.write('File Not Found');
        return res.end(); }
        res.writeHead (200, {'content-type': 'text/plain'});
        res.write(data);
        res.end();});
}).listen(3200);
console.log("Server running at http://localhost:3200");