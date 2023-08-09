const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req,res)=> {
    const data = fs.readFileSync('./api.json', 'utf-8')
        const objData = JSON.parse(data)

    if(req.url === '/'){
        res.writeHead(200,{"content-type": "text/plain"});
        res.end('Home Page');
    }else if(req.url === '/about'){
        res.writeHead(200,{"content-type": "text/plain"});
        res.end("About Page")
    }else if(req.url === "/contact"){
        res.writeHead(200,{"content-type": "text/html"});
        res.end("<h1>Contact Us</h1>")
    }else if(req.url === "/api"){
        res.writeHead(200,{"content-type":"application/json"})
        // res.end(data)
        console.log(objData[0].name)
        res.end(objData[2].name)
    }
    else{
        res.writeHead(404)
        res.end("Page not found")
    }
})

server.listen(3000,()=> {
    console.log("Server is running on port 3000")
})