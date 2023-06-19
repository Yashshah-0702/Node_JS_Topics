const express = require('express')
const router = express.Router()
const path = require('path')
const products = []

router.get('/create-product',(req,res)=>{
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

router.post('/product',(req,res)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})

// module.exports=router
exports.routes = router
exports.products = products