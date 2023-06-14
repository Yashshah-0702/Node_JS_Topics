const fs = require('fs')


const handler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    const body = []

    if(url==="/"){
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Form Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if(url === "/message" && method==="POST"){
        req.on('data',(value)=>{
            body.push(value)
        })

        req.on('end',()=>{
            const bufferedarray = Buffer.concat(body).toString();
            const mes = bufferedarray.split('=')[1]
            fs.writeFileSync('Message.txt',mes)
        })
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    }

    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Home Page</title></head>')
    res.write('<body><h1>Home Page</h1></body>')
    res.write('</html>')
    res.end()
}

// 1st way
module.exports={
    txt:handler,
    text:"Hello World"
}

// 2nd way
// module.exports=handler

// 3rd way
// exports.handler=handler
// exports.text="some random text"

// 4th way
// module.exports.handler=handler
// module.exports.text="Some random text"