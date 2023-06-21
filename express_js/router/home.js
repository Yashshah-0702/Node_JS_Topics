const express = require('express')
const router12 = express.Router()
const path = require('path')
const admin = require('./admin')

router12.get('/',(req,res)=>{
    console.log('shopProducts',admin.products)
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.render('shop')
})

// router12.get((req,res)=>{
//     res.sendFile(path.join(__dirname,'views','error.html'))
// })

module.exports=router12