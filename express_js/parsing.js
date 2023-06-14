const express = require('express')
const bodyparsher = require('body-parser')

const app = express()

app.use(bodyparsher.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Send</button></form>")
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send("Welcome To Home Page")
})

app.listen(6800)