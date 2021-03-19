let sse = new EventSource('http://localhost:8081/stream');
sse.onmessage = (message) => {
  console.log(message);
};
