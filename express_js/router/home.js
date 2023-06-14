const express = require('express')
const router12 = express.Router()

router12.get('/',(req,res)=>{
    res.send("Welcome to Home page")
})

module.exports=router12