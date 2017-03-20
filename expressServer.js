var express = require('express');
var app = express();

var router = express.Router();
var request = require('request');

app.get('/contacts', function(req, res, next) {
  request({
    uri: 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json',
  }).pipe(res);
});

app.use('/', express.static(__dirname + '/app'));
app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendfile(__dirname + '/app/index.html');
});

app.listen(8080);
console.log('Localhost:8080...');