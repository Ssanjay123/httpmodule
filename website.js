// const http = require('http')
// const port = process.env.PORT || 3000;
// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html')
//     if(req.url=='/'){
//      res.statusCode=200;
//      res.end('<h1> This is Devloper Balaji </h1> <p> Hey this is the way to rock the world</p>')
//     }
//     else if(req.url=='/nodeabout'){
//         res.statusCode=200;
//     res.end('<h1>This is different condition</h1> <p> Hey this is another way to rock the world</p>')
//     }
//     else{
//         res.statusCode=404;
//         res.end('<h1>Not found</h1> <p> This page is not found</p>')
//     }
// })

// server.listen(port,()=>{
//     console.log(`Server is listning to port ${port}`)
// });