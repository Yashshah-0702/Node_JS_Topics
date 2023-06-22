const products = require('../model/models')

exports.form = (req,res)=>{
    res.render('form')
}


exports.process = (req,res)=>{
    res.redirect('/users')
    const Pro = new products(req.body.title)
    Pro.save()
}

exports.output = (req,res)=>{
    const product = products.fetchAll()
    res.render('user',{product})
    console.log(product)
}