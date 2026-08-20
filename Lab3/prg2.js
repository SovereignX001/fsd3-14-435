import http from "http";

const server = http.createServer((req, res) => {
    res.end("<h1>Welcome to the Server<h1>");
});
server.listen(3000, () => console.log("Server is running"));