var os = require('os');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<h3>Hello world from NodeJS!!!!!!</h3><br><b>Server listening port ' + port + ' on container ' + os.hostname() + '</b>');
});

app.listen(port, '0.0.0.0', function () {
  console.log('Express.js server started from ' + os.hostname() + ' on port ' + port + '\n');
});
