var http = require('http');
var events = require('events');
var server = http.createServer();

server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('Hello');
	console.log('World');
	res.end();
});

server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type':'text/palin'});
	res.write('Alex');
	console.log('Li');
	res.end();
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')
;
var num = events.EventEmitter.listenerCount(server,'request');
console.log(num);