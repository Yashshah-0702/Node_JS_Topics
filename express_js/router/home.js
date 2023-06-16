const express = require('express')
const router12 = express.Router()
const path = require('path')

router12.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

router12.get((req,res)=>{
    res.sendFile(path.join(__dirname,'views','error.html'))
})

module.exports=router12