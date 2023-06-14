const http = require('http')
http.createServer((request,response)=>{
    response.write("My name is yash shah")
    response.write("\nHello World")
    response.end()
}).listen(7000)