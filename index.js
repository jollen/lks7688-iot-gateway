var Server = require('wotcity.io').Server;

var ondata = function(payload) {
	var obj = JSON.parse(payload.data);
	var paths = payload.pathname.split('/');
	var deviceId = paths[2];

	console.log('[', deviceId, ']', payload.data);
};

var onstart = function(payload) {
}

Server.WebsocketBroker.start({
	onstart: onstart,
	ondata: ondata
});
