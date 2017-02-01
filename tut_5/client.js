var net = require('net');

var client = net.connect({port:8080},function() {
	// body...
	console.log('connect to server');

	client.write('World\r\n');
})


client.on('data',function(data){
	console.log('client got data from server: ', data.toString());
	client.end();
});

client.on('end', function(){
	console.log('discounnected from server');
});