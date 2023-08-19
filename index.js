const http = require('node:http')
const { Worker } = require('node:worker_threads');


http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.write("Home Page")
        res.end()
    }else if(req.url == "/users"){
        const worker = new Worker('./workerfile.js')
        worker.on('message',(j)=>{
            console.log("done No iteraiton is",j)
        })
        worker.on('error', (error)=>{
            console.log(error)
        });
    }
}).listen(8004,()=>{console.log("Server start on port 8004")})
