const http = require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>");
    res.end();
});

server.listen("8080");