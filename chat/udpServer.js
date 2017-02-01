var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on("error",function(err) {
	// body...
	console.log('server error:\n' + err.stack);
	server.close();
});

server.on('message',function(msg,rinfo){
	console.log('server got: ' + msg.toString() + " from " + rinfo.address + ": " + rinfo.port);
});

server.on('listen',function(){
	var address = server.address();
	console.log("server listening on" + address.address + ": " + address.port);
});


server.bind(41234);