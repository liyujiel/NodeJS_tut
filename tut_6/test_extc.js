var exec = require('child_process').exec,
	child;

child = exec('cat *.js ',
	function(error, stdout, stderr) {
		// body...
		console.log('stdout: ', stdout);
		console.log('stderr',stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});