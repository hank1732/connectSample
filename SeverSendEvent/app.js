var express = require('express')
  , app = express()
  , port = 8020;

var count = 0,
    time = 0;

app.use(function(req, res, next) {
  res.header('Content-Type', 'text/event-stream');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.all('/data', function(req, res) {
    console.log('Request comes!');
    count++;
    time = new Date().getMilliseconds();
    res.write('id: ' + count + '\n');
    res.write("data: " + time + '\n\n');
    if(time%2 === 0){
        res.write('event: ' + 'ping' + '\n');
    }
    res.end();
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});