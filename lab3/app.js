import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Welcome to Node JS");
    res.end("Hello World");
    console.log(req.url);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running...`);
});