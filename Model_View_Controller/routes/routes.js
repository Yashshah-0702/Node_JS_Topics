const express = require('express')
const router = express.Router()
const process = require('../controllers/process')

router.get('/',process.form)

router.post('/use',process.process)

router.get('/users',process.output)

module.exports=router