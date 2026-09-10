import http from 'http'
import {createReadStream} from "fs";

const serv =http.createServer(async(req,res)=>{
   if(req.url =="/"){
    res.setHeader("content-type","text/html");
    res.statusCode=200;
    const stream=createReadStream("./airtag.html",{
        encoding :
    'utf-8',
    });
    stream.pipe(res)
   }else if(req.url =='/mobile'){
    res.writeHead(200,{"content-type":"application/json"})

    const stream =createReadStream("./data/products.json",{encoding :"utf-8",});
    stream.pipe(res);
   }
   else if(req.url =='/manual'){
    res.writeHead(200,{"content-type":"text/plain"})
    const stream =createReadStream("./data/chatgpt.txt",{encoding:'utf-8'});
    stream.pipe(res);
   }
   
   else
   {res.statusCode=404;
   res.end("Not found");}
});

serv.listen(4100,()=>{console.log('prg10 running');
})