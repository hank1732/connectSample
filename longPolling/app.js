var express = require('express')
  , app = express()
  , port = 8010;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.all('/', function(req, res) {
    console.log('Request comes!');
    setTimeout(function () {
        res.send(new Date().getMilliseconds() + '');
    },1000);
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});