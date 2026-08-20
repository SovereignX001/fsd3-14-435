import http from "http"

const server = http.createServer((req,res) => {
    
    if(http.url=='/'){
        req.end("<h1>Home Page<h1>");
    } else if(http.url=='/about'){
        req.end("<h1>About Us Page<h1>");
    } else if(http.url=='/product'){
        req.end(`<h1>Mobile Phone</h1>
                 <h2>Price: 2000)</h2>
                 <p>Discount: 5%</p>
                 <a href='#'>Buy Now</a>
                 `);
    } else {
        res.StatusCode=404;
        res.end(`
            <h1>404, Not Found</h1>
            <p>Page not found</p>
            <a href='/'>Go to Home Page</a>
        `);
    }
});

server.listen(4444, () => console.log("Server is running..."));