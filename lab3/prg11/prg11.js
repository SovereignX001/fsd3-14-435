import http from 'http'
const serv=http.createSrever((req,res)=>{
    console.log(req.method);
    
   if(req.url ==='/' && req.method ==='GET'){
    res.end("<h1>Product details </h1>")
   }else if(req.url ==='/products' && req.method ==='GET'){
   res.writeHead(200,{"content-type":"application/json"})
   
       const stream =createReadStream("./data/products.json",{encoding :"utf-8",});
       stream.pipe(res);
   }
    else{
        res.statusCode =404;
        res.end("not found ");
    }
});
serv.listen(1000,()=>{
console.log("bye 11");

})