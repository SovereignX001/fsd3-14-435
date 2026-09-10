import http from 'http'

import {createReadStream} from "fs"

const server=http.createServer(async(req,res)=>{
        if(req.url ==="/stream"){
    
        
        const stream=createReadStream("big-txt",{encoding:"utf-8"})
        stream.pipe(res);
        res.end();
    }
        else if(req.url ==="/normal"){
            const text =await readFile("big-txt");
            res.end(text)
        }
        else if(req.url ==='/product'){
            // set.writeHeader() status+content type
            res.setHeader("content-type","text/html")
            const data=createReadStream("product.html");
            data.pipe(res);
        }
});
server.listen(3005,()=>{("running")})