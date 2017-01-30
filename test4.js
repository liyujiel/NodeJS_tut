var http = require('http');
var server = http.createServer();

server.on('myevent', function(arg){
	console.log(arg);
});


server.emit('myevent','alex');

server.listen(1337,'127.0.0.1')
console.log('Server running at http://127.0.0.1:1337/');
