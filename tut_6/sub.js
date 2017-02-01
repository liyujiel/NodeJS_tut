process.on('message',function(m){
	console.log('CHILED got message: ', m);
});

process.send({foo:'bar'});