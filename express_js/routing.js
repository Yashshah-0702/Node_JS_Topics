const express = require('express')
const app = express()
const bodyparsher = require('body-parser')
const admin = require('./router/admin')
const home = require('./router/home')

app.use(bodyparsher.urlencoded({extended:false}))

app.use(admin)

app.use(home)

app.listen(4500)