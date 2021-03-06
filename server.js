var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middlewear = require('./middlewear.js');
app.use(middlewear.logger);	 

// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

app.get('/about', middlewear.requireAuthentication, function(req, res)	{
	res.send('About Us!');  
});
	//console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT +' !');
});
	 