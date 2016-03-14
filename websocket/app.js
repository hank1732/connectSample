var server = require('http').createServer()
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server })
  , express = require('express')
  , app = express()
  , port = 8081;

wss.on('connection', function connection(ws) {
  
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('server message ' + message);
  });

  ws.send('WebSocket connected');
});

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });