const http = require('http')
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==="/"){
        res.setHeader('Content-Type','text/html')
        res.write("<html>")
        res.write("<head><title>Form Page</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text'> <button type='submit'>Send</button></form></body>")
        res.write("</html>")
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write("<html>")
    res.write("<head><title>My First Page</title></head>")
    res.write("<body><h1>Welcome To Home Page</h1></body>")
    res.write("</html>")
    res.end()
})
server.listen(7000);