// 2nd method

const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method
    if(url==="/"){
        res.setHeader('content-type','text/html')
    res.write("<html>")
    res.write("<head><title>Form Page</title></head>")
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Send</button></form></body>')
    res.write("</html>")
    return res.end()
    }

    if(url==="/message" && method==="POST"){
        const body = []
        req.on('data',(chunk)=>{
            body.push(chunk)
        })

        return req.on('end',()=>{
            const bufferedarray = Buffer.concat(body).toString();
            const mess = bufferedarray.split("=")[1]
            fs.writeFile("Message1.txt",mess,err=>{
                res.statusCode=302
                res.setHeader("Location","/")
                return res.end()
            })
        })
    }
    res.setHeader('content-type','text/html')
    res.write("<html>")
    res.write("<head><title>Home Page</title></head>")
    res.write("<body><h1>Home Page</h1></body>")
    res.write("</html>")
    res.end()
})
server.listen(7600)