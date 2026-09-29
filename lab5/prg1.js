import express from "express"
import path from 'path'
import {fileURLToPath} from "node:url";

const PORT = 3333;
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(dirname,"public","index.html"));
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(dirname,"public","about.html"));
});

app.get("/enquiry",(req,res)=>{
    res.sendFile(path.join(dirname,"public","enquiry.html"));
});

app.listen(PORT,() => console.log("prg1 is running at ", PORT));