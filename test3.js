var http = require('http');
var server = http.createServer();

function callback(req,res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello');
	console.log('world');
	res.end();
}

server.on('request',callback);

// server.removeListener('request', callback);


// server.on('request',function(req,res){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.write('Alex');
// 	console.log('Li');
// 	res.end();
// })

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')