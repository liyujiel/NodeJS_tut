var spawn = require('child_process').spawn,
	ls = spawn('ls',['-lh']);


ls.stdout.on('data',function(data) {
	// body...
	console.log('stdout: ' + data);
});

ls.stderr.on('data',function(data){
	console.log('stderr' + data);
});

ls.on('close',function(code){
	console.log('child_process exited with code '+ code);
});
