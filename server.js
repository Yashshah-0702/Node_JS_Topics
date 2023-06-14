const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.write("<html>")
    res.write("<head><title>My First Web Page</title></head>")
    res.write("<body><h1>My First Node_JS Server</h1></body>")
    res.write("</html>")
    res.end()
})

server.listen(5000);