const http = require('http');

const server = http.createServer((request, response)=>{
   if(request.url === "/"){
    response.end("Welcome to home page.");
   }
   else if(request.url === "/about"){
    response.end("Welcome to short info about us.")
   }
   else if(request.url === "/login"){
    response.end("This is login page.");
   }else{
    response.end(`
    <h1>Get out we didn't add this page yet!</h1>
    <p>go back to home page: </p>
    <a href="/">Home Page</a>
    `);
   }
});

server.listen(5000);