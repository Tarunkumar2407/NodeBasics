const http = require("node:http")

const server = http.createServer((req, res) => {
    
    res.end("Hello I am your 1st server")
});

server.listen(3000, ()=> {
    console.log("Server is running on port 3000")
});