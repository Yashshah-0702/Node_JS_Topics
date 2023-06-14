const http = require('http')
const express = require('express')

const app = express()
app.use((req,res,next)=>{
    res.send("<h1>Welcome to MiddleWare</h1>")
    console.log("Welcome to middleware")
    next()
})

app.use((req,res,next)=>{
    console.log("Welcome to Another middleware")
})

const server = http.createServer(app)
server.listen(8400)