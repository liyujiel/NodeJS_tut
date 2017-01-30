var http = require('http');
var server = http.createServer();

server.once('request',function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.write('Hello');
	console.log('Hello');
	res.end()
});

server.listen(1337, '127.0.0.1');
console.log('Server run at http://127.0.0.1:1337/');