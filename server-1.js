var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080;
	
var app = express();
	
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var timeStamp = require('./timestamp');

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/:id', function(req, res) {
	console.log('Timestamp '+ req.params.id);
	var result = timeStamp(req.params.id);
	res.send(result);
});

app.listen(port, function(){
  console.log('app running');
});



