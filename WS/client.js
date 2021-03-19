let ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (message) => {
  console.log(`We got a message ${message.data}`);
};
ws.send('sssssssssss');
