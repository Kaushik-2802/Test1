const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    const url=req.url

    res.setHeader("content-type","text/html")

    if(url==="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end('<h1>Welcome to this page</h1>')
    }
    else if(url==="/json"){
        const jsonResponse={
            message:"this is the backend response",
            status:"success"
        }
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify(jsonResponse))
    }
    else if(url==="/text"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("this is a text response")
    }
    else{
        res.writeHead(200,{"content-type":"text/html"})
        res.end("404 not found")
    }
    server.listen(3000,()=>{
        console.log("server running on port 3000")
    })
})