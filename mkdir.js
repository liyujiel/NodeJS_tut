var fs = require('fs');

fs.mkdir('./newdir',function(err){
	if (err) {
		throw err;
	}

	console.log('make dir success.');
});