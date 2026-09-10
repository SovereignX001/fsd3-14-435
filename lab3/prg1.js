import http from "http";

//method: get, post, put, patch, delete

const server = http.createServer((req, res) => {
  console.log("Welcome to Node JS");
  console.log(req.url);
  console.log("RequestMethod: ");

  console.log(req.method);

  console.log("Requst Header");
  console.log(req.headers);
  console.log("Socket Info");
  // console.log(req.socket);
  console.log(req.headers.host);

  res.end("hello");

});

const PORT = 4444;

server.listen(PORT, () => console.log("Server is running..."));