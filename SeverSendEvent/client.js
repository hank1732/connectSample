var es = new EventSource("http://" + host + ":8020/data");
var p = document.getElementsByTagName('p')[0];

es.onmessage = function (event) {
  console.log(event.data);
  p.innerHTML += 'server respones message ' + event.data + '<br>';
};


es.addEventListener('ping', function (event) {
  console.log(event.data);
  p.innerHTML += 'server respones ping ' + event.data + '<br>';
});