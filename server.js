var express = require('express');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;
var fs = require('fs');
var randomstring = require('randomstring');

const PORT = 80;

var app = express();

app.use(bodyParser.json());

app.post('/', function (req, res) {
    var format = req.body.format;
    var content = req.body.content;

    var filename = '/tmp/'+randomstring.generate()+'.'+format;

    fs.writeFile(filename, content, function (err, data) {
        exec('github-markup '+filename, function (err, out, code) {
            res.send(out);
        }.bind(this));
    }.bind(this));

});

app.listen(PORT);
