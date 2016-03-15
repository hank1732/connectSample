var connection = new WebSocket("ws://" + host + ":8030");
var p = document.getElementsByTagName('p')[0];

// When the connection is open, send some data to the server
connection.onopen = function () {
    setInterval(function () {
        connection.send(new Date().getSeconds() + '');
    },1000); 
    // Send the message to the server
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
  p.innerHTML += e.data + '<br>';
};
