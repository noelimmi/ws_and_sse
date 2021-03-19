const http = require('http');

const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World' }));
  } else if (req.url === '/stream') {
    //sets as key value pair in header
    res.setHeader('Content-Type', 'text/event-stream');

    //two new lines are added because its part of protocol
    res.write(`data: Random data - ${Math.random()}\n\n`);

    setInterval(() => {
      res.write(`data: Random data - ${Math.random() * 100}\n\n`);
    }, 2000);
  } else {
    //Sets all head at once
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

httpServer.listen(8081, () => {
  console.log('listening on 8081');
});
