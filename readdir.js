var fs = require('fs');

fs.readdir('./newdir',function(err,files){
	if (err) {
		throw err;
	}
	console.log(files);
});