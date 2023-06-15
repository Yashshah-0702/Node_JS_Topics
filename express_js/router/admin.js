const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/create-product',(req,res)=>{
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

router.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router