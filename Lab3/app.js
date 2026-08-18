import http from 'http';

const server = http.createServer();
server.on('request', (req, res)=>{
    res.write("Welcome to the server side programming");
    res.write("<h1>Nodemon is tracking the files</h1>");
    res.end();
})
server.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});