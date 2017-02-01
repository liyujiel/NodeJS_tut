var net = require('net');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var client = net.connect({port:8080},function(){
	console.log('Connected to server');

	console.log('input: ');
	process.stdin.on('data',function(data){
		console.log('input :');
		client.write(data);

		if (data === 'close\n') {
			client.end();
		}
	});
});

client.on('data',function(data){
	if (data == 'close\n') {
		console.log('Ohter user is quit.')
	}
	else{
		console.log('Other user\'s input: ', data.toString());
		console.log('input: ');
	}
});

client.on('end',function(){
	console.log('Disconnected from server');

	process.exit();
});