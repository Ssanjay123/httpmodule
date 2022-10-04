const http = require("http");
const server = http.createServer((req,res)=>{ 
    console.log(req);
           res.end('<h1>Hello My Name Is Balaji</h1>')
})
server.listen(4000,()=>{
    console.log('code is running')
}); 