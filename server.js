var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var routes = require('server/routes');

app.use(bodyParser.json());

routes(app);

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res) {
    res.send('\
			<!DOCTYPE html>\
			<html>\
				<head>\
					<title>Mean Todo App</title>\
					<base href="/">\
				</head>\
				<body>\
					<div ui-view></div>\
					<script src="bundle.js"></script>\
				</body>\
			</html>\
		');
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
