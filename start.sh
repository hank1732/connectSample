nohup node longPolling/app &
nohup node SeverSendEvent/app &
nohup node websocket/app &

nohup python -m SimpleHTTPServer 8070 &