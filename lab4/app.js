import http from "http";
import * as teams from "./team.js";
import { getAllTeams,addTeam } from "./team.js";
import { parse as parseUrl } from "url";
/**for common js you need to write 
 const http=require(http)
 */
/*const server=http.createServer();
server.on('requeest',(req,res)=>{
    res.write("<h1>welcome to server side<h1> ");
    res.end();
}) */
const PORT = 5002;
const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(data === "undefined" ? "" : JSON.stringify(data));
};


const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
};
const server = http.createServer(async (req, res) => {
  /*if (req.url==='/'&& req.method=='GET'){
        const teams =getAllTeams();
       res.write(JSON.stringify(teams));
    }else{
        res.statusCode=404;
        res.end();
    }

    res.end("<h2>welcome to server</h2>")
})*/

  const { pathname, query } = parseUrl(req.url, true);
  const method = req.method
  console.log("paythname", pathname);
  console.log("query", query);
//   console.log("Method", method);

  if (pathname === "/api/v1/teams" && method === "GET") {
    let teams = getAllTeams();
    return sendJson(res, 200, teams, "count", teams.length);

    // const {total}=query;
    //let teams=getAllTeams();
    // return sendJson(res,200,teams);
  } else if (pathname === "/api/v1/teams" && method === "POST") {
    console.log('post is hitted');
    
    const { tname, tl, members } = await parseJSONBody(req);
    if ((!tname || !tl || !members))
      return sendJson(res, 400, {
        error: "tEAM NAME,TEAM LEADER,OR MEMBER NOT DEFINED ",
      });

    const team = addTeam({ tname, tl, members });
    return sendJson(res, 201, team, "message", "team registered successfully ");
  } else {
    res.statusCode = 404;
  }
  res.end();
});
server.listen(PORT, () => {
  console.log("sih server is running");
});
