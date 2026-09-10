import http from 'http'


const serv=http.createServer((req,res)=>{
    if(req.url ==='/' && req.method ==='GET')
        res.end('home page')
    else if (req.url ==='/product' && req.method ==='GET'){
        const products=[
            {
                id:1,
                price:2000,
            },
            {
                   id:1,
                   name:getComputedStyle,
                price:2000,
            }
        ];
        res.end(JSON.stringify(products));
    }
       
    else if (req.url ==='/product' && req.method ==='POST'){
            //retrieve dta. from client 
            let body ="";
            req.on("data",(chunk)=>{
                body +=chunk
            })
            req.on("end",()=>{
                const product =JSON.parse(body)
            })
            // add data to sdat abase 
            res.writeHead(201,{
                "content-type":"application/json"
            });
            //send bacj th e status 
            res.end(
                JSON.stringify(
                   { msg:"product added",
                    product,}
                )
            )

        res.end('add product ')}
    else if (req.url ==='/product' && req.method ==='PUT')
        res.end('request product ')
    else if (req.url ==='/product' && req.method ==='DELETE')
        
        res.end('REMOVE product ')
    else{
        res.statusCode=404;
        res.end("not found")
    }


    });
serv.listen(3000,()=>{console.log("prg12 is running ");
})