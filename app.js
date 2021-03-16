var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use( express.static(__dirname + '/dist/amit-demo' ) );

var listener = server.listen(process.env.PORT || 4200, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 4200
});

