const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead(200,{'Content-type': 'text/plain'});
        res.end("hello guling");
    }
    else{
        res.writeHead(404,{'Content-type': 'text/plain'});
        res.end("salah bosss");
    }
});

const PORT = 3000;
const IP = '127.0.0.1';
server.listen(PORT,IP, ()=>{
    console.log("server jalan bosss di localhost 3000")
});