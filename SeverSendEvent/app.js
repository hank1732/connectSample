var express = require('express')
  , app = express()
  , port = 8020;

var count = 0,
    time = 0;

app.use(function(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  });
  next();
});

app.all('/data', function(req, res) {
    console.log('Request comes!');
    count++;
    setInterval(function (){
      time = new Date().getMilliseconds();
      res.write('id: ' + count + '\n');
      res.write("data: " + time + '\n\n');
      if(time%2 === 0){
          res.write('event: ' + 'ping' + '\n');
      }
    },1000);
    
    // res.end();
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

// var http = require('http');

// http.createServer(function(req, res) {
//     sendSSE(req, res);
//     console.log('requer come!')
// }).listen(8020);

// function sendSSE(req, res) {
//   res.writeHead(200, {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
//     'Content-Type': 'text/event-stream',
//     'Cache-Control': 'no-cache',
//     'Connection': 'keep-alive'
//   });

//   var id = (new Date()).toLocaleTimeString();

//   // Sends a SSE every 5 seconds on a single connection.
//   setInterval(function() {
//     constructSSE(res, id, (new Date()).toLocaleTimeString());
//   }, 5000);

//   constructSSE(res, id, (new Date()).toLocaleTimeString());
// }

// function constructSSE(res, id, data) {
//   res.write('id: ' + id + '\n');
//   res.write("data: " + data + '\n\n');
// }