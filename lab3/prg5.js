import http from "http";

const server = http.createServer((req,res) => {

    res.writeHead(200,{contentType: "text/json"});
    const product = {
        name: "Mobile Phone",
        price: 25000,
        discount: "10%",
        Company: "Samsung",
    }
    res.end(JSON.stringify(product));

});

server.listen(4444, () => console.log("Server is running..."));