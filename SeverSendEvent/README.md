# Sever Send Event

### Lisent to Server Send Event
------
Server side file app.js using nodejs with expressjs

> * npm install express --save
> * node app

client file client.js with client.html using Sever Send Event

--------
### Note:
If use res.end() to send response by server
then the connection will be terminated and client will try to reconnect
In this way, there will be many eventsource connection
