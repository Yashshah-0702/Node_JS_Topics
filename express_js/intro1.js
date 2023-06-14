const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send("Welcome To The Home Page.")
})

app.get('/about',(req,res)=>{
    res.send("Welcome To The About Page.")
})

app.get('/help',(req,res)=>{
    res.send("Hello, Welcome To Help Page.")
})
app.listen(4200)