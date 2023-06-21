const express = require('express')
const app = express()
const body = require('body-parser')
const rout = require('./routes/routes')
const error = require('./controllers/error')

app.set('view engine','pug')
app.set('views','views')

app.use(body.urlencoded({extended:false}))
app.use(rout)
app.use(error.Page404)
app.listen(5000)