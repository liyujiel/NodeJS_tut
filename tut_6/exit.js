process.on('exit',function(code) {
	// body...
	setTimeout(function(){
		console.log('This will not run');
	}, 0);

	console.log('exit code: ',code);
});