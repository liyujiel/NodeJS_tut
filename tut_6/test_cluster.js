var cluster = require('cluster');

var http = require('http');

var numCPUs = require('os').cpus().length;


if (cluster.isMaster) {
	for (var i = 0; i<numCPUs; i++){
		cluster.fork();
	}

	Object.keys(cluster.workers).forEach(function(id){
		console.log('I am runing with ID : ' , cluster.workers[id].process.pid);
	});

	cluster.on('exit',function(wokrer,code,signal){
		console.log('wokrer ', wokrer.process.pid + ' died');
	});
}else{
	http.createServer(function(req,res){
		res.writeHead(200);
		res.end("hello world")

	}).listen(8000)
}