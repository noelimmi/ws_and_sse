const http = require('http');

const httpServer = http.createServer((req, res) => {
  console.log('we have received a request');
});

/**
 * It needs http sever as before ws handsake is done its
 * normal http GET req
 */
const websocket = new WebSocketServer({
  httpServer: httpServer,
});

//Trick is maintaining array of connection
websocket.on('request', (req) => {
  //param 1 accepts protocol
  //param 1 accepts origin
  //return connection
  connection = req.accept(null, req.origin);
  connection.on('open', () => console.log('Opened'));
  connection.on('close', () => console.log('closed'));
  connection.on('message', (message) => {
    console.log(message.utf8Data);
  });
  setInterval(() => {
    connection.send(`Message ${Math.random()}`);
  }, 5000);
});

httpServer.listen(8080, () => {
  console.log('listening on 8080');
});
