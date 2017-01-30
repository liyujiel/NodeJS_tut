var fs = require('fs');

fs.open('./testread.txt','r',function(err,fd){
	if (err) {
		throw err;
	}
	console.log('open file success.');
	var buffer = new Buffer(255);

	fs.read(fd,buffer,0,10,0,function(err, bytesRead, buffer){
		if (err) {
			throw err;
		}
		console.log(bytesRead, buffer.slice(0,bytesRead).toString());

		fs.close(fd);
	});
});