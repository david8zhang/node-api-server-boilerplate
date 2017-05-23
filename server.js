var app = require('./server/app');

var HOST = '0.0.0.0';
var PORT = process.env.PORT || '8080';

app.listen(PORT, HOST, function() {
	console.log('Listening at host http://' + HOST + ':' + PORT);
});