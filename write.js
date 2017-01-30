var fs = require('fs');

fs.open('./testwrite.txt','w',function(err,fd){
	if (err) {
		throw err;
	}
	console.log('open file success.');
	var buffer = new Buffer('test');

	fs.write(fd,buffer,0,6,0,function(err,written,buffer){
		if (err) {
			throw err;
		}

		console.log('write success');

		var byteLength = buffer.byteLength;

		console.log(byteLength, buffer.silce(0,byteLength).toString);
	})
});