const express = require('express')
const router12 = express.Router()

router12.get('/',(req,res)=>{
    res.send("<h1>Welcome to Home page</h1>")
})

module.exports=router12