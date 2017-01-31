var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handle = {};
handle['/'] = requestHandler.home;
handle['/about'] = requestHandler.about;

server.start(router.route, handle);