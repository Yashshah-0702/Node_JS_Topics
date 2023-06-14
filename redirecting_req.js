const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method
    if(url==="/"){
        res.setHeader("Content-Type","text/html")
        res.write("<html>")
        res.write("<head><title>Form Page</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text'><button type='Submit'>Send</button></form></body>")
        res.write("</html>")
        return res.end()
    }

    if(url==="/message" && method==="POST"){
      fs.writeFileSync("Message.txt","Hello World , Thank You For Creating Me.")
      res.statusCode=302
      res.setHeader("Location","/")
      return res.end()
    }
    res.setHeader("Content-Type","text/html")
    res.write("<html>")
    res.write("<head><title>Home Page</title></head>")
    res.write("<body>Home Page</body>")
    res.write("</html>")
    res.end()
})
server.listen(8000)